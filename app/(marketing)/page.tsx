import { Metadata } from "next"

import { getURL } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"
import FeaturesSection from "@/app/(marketing)/marketing-features"
import { LandingHeroSection } from "@/app/(marketing)/marketing-hero"

import { MarketingCTA } from "./marketing-cta"
import MarketingFAQ from "./marketing-faq"
import { MarketingPartners } from "./marketing-partners"
import { MarketingPricing } from "./marketing-pricing"
import { MarketingQuote } from "./marketing-quote"
import { MarketingTestimonial } from "./marketing-testimonial"

const ogImage = `${getURL()}og?title=${encodeURIComponent(
  "Cult Pro Polar Starter"
)}`

export const metadata: Metadata = {
  title: "Cult Pro Polar Starter - Modern Web Development Template",
  description:
    "Build scalable web applications faster with Cult Pro Polar Starter. Features Next.js, Supabase, Tailwind CSS, and modern authentication out of the box.",
  keywords: [
    "Next.js",
    "Supabase",
    "Web Development",
    "Starter Template",
    "React",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Cult Pro Polar Starter - Modern Web Development Template",
    description:
      "Build scalable web applications faster with Cult Pro Polar Starter. Features Next.js, Supabase, Tailwind CSS, and modern authentication out of the box.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cult Pro Polar Starter Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cult Pro Polar Starter - Modern Web Development Template",
    description:
      "Build scalable web applications faster with Cult Pro Polar Starter. Features Next.js, Supabase, Tailwind CSS, and modern authentication out of the box.",
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
      <LandingHeroSection />
      <FadeIn>
        <MarketingPartners />
      </FadeIn>
      <FadeIn>
        <FeaturesSection />
      </FadeIn>
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
