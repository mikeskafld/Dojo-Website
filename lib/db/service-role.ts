import { SubscriptionStatus } from "@polar-sh/sdk/models/components/subscriptionstatus.js"
import { createClient as createSupabaseClient } from "@supabase/supabase-js"

import { Database, Json } from "@/types/db"

async function createServiceRoleClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}

export async function handleSubscriptionChange(subscription: {
  id: string
  customerId: string
  productId: string
  status: string
  amount: number
  currency: string
  recurringInterval: "month" | "year"
  currentPeriodStart: string
  currentPeriodEnd?: string | null
  cancelAtPeriodEnd?: boolean
  canceledAt?: string | null
  startedAt?: string | null
  endsAt?: string | null
  endedAt?: string | null
  discountId?: string | null
  checkoutId?: string | null
  customerCancellationReason?: string | null
  customerCancellationComment?: string | null
  metadata?: Json | null

  customer?: {
    external_id: string | null
  }
}) {
  console.log("🔄 Starting subscription change handler:", {
    subscriptionId: subscription.id,
    polarCustomerId: subscription.customerId,
    polarProductId: subscription.productId,
    status: subscription.status,
    customerExternalId: subscription.customer?.external_id,
  })

  const supabase = await createServiceRoleClient()

  // Handle missing customer ID for cancellations/revocations
  if (!subscription.customer?.external_id) {
    if (
      subscription.status.toLowerCase() === "canceled" ||
      subscription.status.toLowerCase() === "revoked"
    ) {
      console.warn(
        `⚠️ Subscription (${subscription.id}) is ${subscription.status}, but no external_id was provided. Cannot determine user to update subscription status. Acknowledging webhook.`
      )
      return
    }
    console.error(
      "❌ No external_id in subscription.customer data. Cannot determine user."
    )
    throw new Error("Cannot associate Polar customer: external_id missing.")
  }

  const userId = subscription.customer.external_id

  // Clean and validate the data before upserting
  const cleanedData = {
    user_id: userId,
    polar_subscription_id: subscription.id,
    polar_customer_id: subscription.customerId,
    polar_product_id: subscription.productId,
    status: subscription.status.toLowerCase() as SubscriptionStatus,
    amount: subscription.amount,
    currency: subscription.currency.toLowerCase(),
    recurring_interval: subscription.recurringInterval,
    current_period_start: subscription.currentPeriodStart,
    current_period_end: subscription.currentPeriodEnd || null,
    cancel_at_period_end: subscription.cancelAtPeriodEnd ?? false,
    canceled_at: subscription.canceledAt || null,
    started_at: subscription.startedAt || null,
    ends_at: subscription.endsAt || null,
    ended_at: subscription.endedAt || null,
    polar_discount_id: subscription.discountId || null,
    polar_checkout_id: subscription.checkoutId || null,
    customer_cancellation_reason: subscription.customerCancellationReason as
      | "customer_service"
      | "low_quality"
      | "missing_features"
      | "switched_service"
      | "too_complex"
      | "too_expensive"
      | "unused"
      | "other"
      | null,
    customer_cancellation_comment:
      subscription.customerCancellationComment || null,
    metadata: subscription.metadata || null,
    updated_at: new Date().toISOString(),
  }

  // Validate required fields
  if (
    !cleanedData.polar_subscription_id ||
    !cleanedData.polar_customer_id ||
    !cleanedData.polar_product_id
  ) {
    console.error("❌ Missing required subscription fields:", {
      subscriptionId: cleanedData.polar_subscription_id,
      customerId: cleanedData.polar_customer_id,
      productId: cleanedData.polar_product_id,
    })
    throw new Error("Missing required subscription fields")
  }

  // Update subscription details
  const { error: upsertError } = await supabase
    .from("subscriptions")
    .upsert(cleanedData, {
      onConflict: "polar_subscription_id",
    })

  if (upsertError) {
    console.error("❌ Error upserting subscription:", {
      error: upsertError,
      subscriptionId: subscription.id,
      userId,
    })
    throw upsertError
  }

  console.log(
    "✅ Successfully updated subscription for user:",
    userId,
    "subscription_id:",
    subscription.id
  )
}
