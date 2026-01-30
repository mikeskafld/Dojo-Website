/*─────────────────────────────────────────────────────────────*
  SIMPLE POLAR SUBSCRIPTION SCHEMA
  -----------------------------------------------------------
  – Single user subscriptions
  – Built for Supabase auth (mirrors auth.users)
 *─────────────────────────────────────────────────────────────*/

/* 0 ─ EXTENSIONS ────────────────────────────────────────────*/
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

/* 1 ─ ENUM TYPES ────────────────────────────────────────────*/
CREATE TYPE subscription_status AS ENUM (
  'incomplete',
  'incomplete_expired',
  'trialing',
  'active',
  'past_due',
  'canceled',
  'unpaid'
);

CREATE TYPE subscription_interval AS ENUM (
  'month',
  'year'
);

CREATE TYPE cancellation_reason AS ENUM (
  'customer_service',
  'low_quality',
  'missing_features',
  'switched_service',
  'too_complex',
  'too_expensive',
  'unused',
  'other'
);

/* 2 ─ USERS (mirror of auth.users) -------------------------*/
CREATE TABLE users (
  id           uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url   text,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

/* 3 ─ SUBSCRIPTIONS ----------------------------------------*/
CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  polar_subscription_id text UNIQUE,
  polar_customer_id text NOT NULL,
  polar_product_id text NOT NULL,
  status subscription_status NOT NULL DEFAULT 'incomplete',
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'usd',
  recurring_interval subscription_interval NOT NULL DEFAULT 'month',
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz,
  cancel_at_period_end boolean NOT NULL DEFAULT false,
  canceled_at timestamptz,
  started_at timestamptz,
  ends_at timestamptz,
  ended_at timestamptz,
  polar_discount_id text,
  polar_checkout_id text,
  customer_cancellation_reason cancellation_reason,
  customer_cancellation_comment text,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create index for active subscriptions
CREATE INDEX subscriptions_active_idx
  ON subscriptions(user_id)
  WHERE status IN ('trialing', 'active', 'past_due');

/* 4 ─ ROW-LEVEL SECURITY ───────────────────────────────────*/

-- USERS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY users_self_rw
  ON users
  FOR ALL
  USING  (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- SUBSCRIPTIONS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY subscriptions_own
  ON subscriptions
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

/* 5 ─ SIGN-UP TRIGGER ──────────────────────────────────────*/
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, pg_temp AS $$
BEGIN
  -- Mirror user row
  INSERT INTO users(id, display_name, avatar_url)
  VALUES (NEW.id,
          NEW.raw_user_meta_data->>'name',
          NEW.raw_user_meta_data->>'avatar_url');

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

/*─────────────────────────────────────────────────────────────*
  END OF SCHEMA
 *─────────────────────────────────────────────────────────────*/

-- Example of how to seed the initial 'free' plan:
-- INSERT INTO plans (code, seat_limit, stripe_price_id, polar_product_id)
-- VALUES ('free', 1, NULL, NULL); -- Free plan allows 1 seat.

-- INSERT INTO plans (code, seat_limit, stripe_price_id, polar_product_id)
-- VALUES ('pro', 10, 'stripe_pro_price_id_example', 'polar_pro_product_id_example'); -- Pro plan, 10 seats 
