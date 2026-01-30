"use client"

import { useState } from "react"

import QuoteDisplay from "@/components/quote-display"
import { SectionCard } from "@/components/section-card"

export function MarketingQuote() {
  const [isAnimating, setIsAnimating] = useState(false)
  return (
    <SectionCard
      className="md:container mx-auto max-w-7xl"
      innerClassName="pt-6 py-6 md:py-12 lg:py-36  "
    >
      <div
        className="max-w-3xl mx-auto cursor-pointer"
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
      >
        <QuoteDisplay
          text={`"The future of marketing is vibe marketing, where brands connect with audiences through emotional resonance and authentic energy rather than traditional demographics. By cultivating distinct vibes, companies can create deeper connections that transcend conventional market segments and foster genuine community engagement."`}
          waveSpeed={90}
          cycleDelay={isAnimating ? 100 : 1000}
          randomMode={!isAnimating}
          resetDuration={!isAnimating ? 1.9 : 0.7}
          randomCharCount={9}
          animationDuration={!isAnimating ? 0.4 : 0.9}
          isAnimating={true}
          fontSize="text-2xl md:text-3xl xl:text-4xl ss-default"
          fontWeight="font-normal"
        />
      </div>
    </SectionCard>
  )
}
