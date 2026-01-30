import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/bg-glow"
import { GradientHeading } from "@/components/gradient-heading"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="w-full space-y-4">
      <SectionCard>
        <GradientHeading size="xxxl" weight="base">
          Oops!
        </GradientHeading>
      </SectionCard>
      <div className="w-full grid grid-cols-2 gap-4">
        <SectionCard
          className="col-span-1 h-full"
          innerClassName="h-full flex flex-col justify-center items-center"
        >
          <div className="space-y-2">
            <GradientHeading size="xl" weight="base">
              Something Went Wrong
            </GradientHeading>
            <p className="text-lg text-muted-foreground">
              We encountered an error while processing your request
            </p>
          </div>
        </SectionCard>
        <SectionCard className="col-span-1">
          <div className="space-y-8 p-4 md:p-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {params?.error ? (
                  <>Error code: {params.error}</>
                ) : (
                  "An unspecified error occurred. Please try again."
                )}
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
      </div>
    </div>
  )
}
