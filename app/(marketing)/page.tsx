import { Metadata } from "next"
import { Suspense } from "react"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import { DojoFeaturesSection } from "@/app/(marketing)/dojo-features"
import { HowItWorksSection } from "@/app/(marketing)/how-it-works-section"
import { WhyDojoSection } from "@/app/(marketing)/why-dojo-section"
import { CreatorApplicationSection } from "@/app/(marketing)/creator-application-section"
import { LearnerWaitlistSection } from "@/app/(marketing)/learner-waitlist-section"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"

import { MarketingCTA } from "./marketing-cta"
import MarketingFAQ from "./marketing-faq"
import { MarketingPartners } from "./marketing-partners"
import { MarketingPricing } from "./marketing-pricing"
import { MarketingQuote } from "./marketing-quote"
import { MarketingTestimonial } from "./marketing-testimonial"

const ogImage = `${getURL()}og?title=${encodeURIComponent(
  "Dojo - Master Any Skill"
)}`

export const metadata: Metadata = {
  title: "Dojo - The First Marketplace Powered By Cognitive Scaffolding",
  description:
    "Turn your expertise into income or master any skill in minutes a day. Dojo transforms long-form content into bite-sized micro-lessons using AI-powered cognitive scaffolding.",
  keywords: [
    "micro-learning",
    "online courses",
    "skill development",
    "creator economy",
    "AI learning",
    "cognitive scaffolding",
  ],
  openGraph: {
    title: "Dojo - The First Marketplace Powered By Cognitive Scaffolding",
    description:
      "Turn your expertise into income or master any skill in minutes a day. Dojo transforms long-form content into bite-sized micro-lessons.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Dojo - Master Any Skill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dojo - The First Marketplace Powered By Cognitive Scaffolding",
    description:
      "Turn your expertise into income or master any skill in minutes a day.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function LandingPage() {
  return (
    <div className="space-y-1 md:space-y-4 ">
      <Suspense>
        <LandingHeroSection />
      </Suspense>
      <FadeIn>
        <MarketingPartners />
      </FadeIn>
      <Suspense>
        <FadeIn>
          <DojoFeaturesSection />
        </FadeIn>
      </Suspense>
      <Suspense>
        <FadeIn>
          <HowItWorksSection />
        </FadeIn>
      </Suspense>
      <Suspense>
        <FadeIn>
          <WhyDojoSection />
        </FadeIn>
      </Suspense>
      <Suspense>
        <FadeIn>
          <CreatorApplicationSection />
        </FadeIn>
      </Suspense>
      <Suspense>
        <FadeIn>
          <LearnerWaitlistSection />
        </FadeIn>
      </Suspense>
      <FadeIn>
        <MarketingQuote />
      </FadeIn>
      <FadeIn>
        <MarketingPricing />
      </FadeIn>
      <FadeIn>
        <MarketingFAQ />
      </FadeIn>
      <FadeIn>
        <MarketingTestimonial />
      </FadeIn>
      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
