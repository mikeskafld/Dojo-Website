import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { GlowEffect } from "@/components/bg-glow"
import { GradientHeading } from "@/components/gradient-heading"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"

export function MarketingCTA() {
  return (
    <SectionCard
      className="md:container mx-auto max-w-7xl"
      innerClassName="pt-6 pb-4 "
    >
      <div className="flex flex-col md:items-center justify-center gap-8 text-left md:text-center py-8 md:py-12">
        <GradientHeading
          size="xxl"
          weight="base"
          className="max-w-2xl "
          innerClassName="lg:leading-[4.5rem] text-left md:text-center"
        >
          Elevate your digital presence
        </GradientHeading>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty">
          Craft stunning experiences that captivate your audience. Join the
          movement of creators building the future of web design.
        </p>
        <div>
          <div className="relative mt-4">
            <GlowEffect
              scale={0.8}
              blur="strongest"
              className="absolute inset-0 px-6 py-3.5 md:py-4.5 md:px-9"
            />
            <Magnetic>
              <Link
                href="/auth/sign-up"
                className="w-full relative z-10 sm:w-auto inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/60 dark:hover:bg-background/40"
              >
                <span className="flex items-center gap-2">
                  Get Started <ArrowRight className="size-5 md:size-6" />
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}
