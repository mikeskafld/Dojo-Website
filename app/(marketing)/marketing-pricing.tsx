import { getPolarProducts, getUser } from "@/lib/db/actions"
import { GradientHeading } from "@/components/gradient-heading"
import { PricingCard } from "@/components/pricing-card"
import { SectionCard } from "@/components/section-card"

export async function MarketingPricing() {
  const [products, user] = await Promise.all([getPolarProducts(), getUser()])

  const basePlan = products.find((product) => product.name === "Base")
  const plusPlan = products.find((product) => product.name === "Plus")

  return (
    <section>
      <div className="w-full">
        <SectionCard
          className="md:container mx-auto max-w-7xl"
          innerClassName="pt-6 pb-2 "
        >
          <div className="text-left md:text-center mb-4 md:mb-16">
            <GradientHeading
              size="xxl"
              weight="base"
              className="leading-[1.5rem] md:leading-[1.5rem] lg:leading-[1.5rem] mb-4"
            >
              Pricing
            </GradientHeading>
            <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {basePlan && (
              <PricingCard
                userId={user?.id ?? ""}
                userEmail={user?.email ?? ""}
                name={basePlan.name || "Base"}
                price={
                  basePlan.prices?.[0]?.amountType === "fixed" &&
                  "priceAmount" in basePlan.prices[0]
                    ? basePlan.prices[0].priceAmount
                    : 800
                }
                interval={basePlan.recurringInterval || "month"}
                trialDays={14}
                features={[
                  "Unlimited Usage",
                  "Unlimited Workspace Members",
                  "Email Support",
                  "Basic Analytics",
                  "Community Access",
                ]}
                product={basePlan}
                isPopular={false}
              />
            )}
            {plusPlan && (
              <PricingCard
                userId={user?.id ?? ""}
                userEmail={user?.email ?? ""}
                name={plusPlan.name || "Plus"}
                price={
                  plusPlan.prices?.[0]?.amountType === "fixed" &&
                  "priceAmount" in plusPlan.prices[0]
                    ? plusPlan.prices[0].priceAmount
                    : 1200
                }
                interval={plusPlan.recurringInterval || "month"}
                trialDays={14}
                features={[
                  "Everything in Base, and:",
                  "Early Access to New Features",
                  "24/7 Support + Slack Access",
                  "Advanced Analytics",
                  "Priority Feature Requests",
                  "Custom Integrations",
                ]}
                product={plusPlan}
                isPopular={true}
              />
            )}
          </div>
        </SectionCard>
      </div>
    </section>
  )
}
