import { FadeIn } from "@/components/fade-in"

import { MarketingPricing } from "../marketing-pricing"

// Prices are fresh for one hour max
export const revalidate = 3600

export default async function PricingPage() {
  return (
    <div className="space-y-4">
      <FadeIn key="pricing">
        <MarketingPricing />
      </FadeIn>
    </div>
  )
}
