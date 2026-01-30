import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/bg-glow"
import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"

export default function Page() {
  return (
    <div className="w-full space-y-2 md:space-y-4">
      <FadeIn key="sign-up-success">
        <SectionCard>
          <GradientHeading size="xxxl" weight="base">
            Welcome
          </GradientHeading>
        </SectionCard>
      </FadeIn>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <FadeIn key="sign-up-success-info">
          <SectionCard
            className=" col-span-1 h-full"
            innerClassName="h-full flex flex-col justify-center items-center"
          >
            <div className="space-y-2">
              <GradientHeading size="xl" weight="base">
                Check Your Email
              </GradientHeading>
              <p className="text-lg text-muted-foreground">
                We&apos;ve sent you a verification link to complete your
                registration
              </p>
            </div>
          </SectionCard>
        </FadeIn>

        <FadeIn key="sign-up-success-form">
          <SectionCard className="col-span-1">
            <div className="space-y-8 p-4 md:p-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  You&apos;ve successfully signed up! Please check your email to
                  confirm your account before signing in. If you don&apos;t see
                  the email, check your spam folder.
                </p>
                <div className="relative">
                  <GlowEffect
                    scale={0.8}
                    mode="rotate"
                    blur="strongest"
                    className="absolute inset-0"
                    colors={["#FF00FF", "#FF1493", "#FF69B4", "#FFB6C1"]}
                  />
                  <Magnetic>
                    <Link href="/auth/login">
                      <Button
                        variant="outline"
                        className="w-full relative z-10 text-lg py-6 bg-secondary dark:bg-background/80 hover:bg-secondary/80"
                      >
                        <span className="flex items-center gap-2">
                          Return to Login
                          <ArrowRight className="size-5" />
                        </span>
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </SectionCard>
        </FadeIn>
      </div>
    </div>
  )
}
