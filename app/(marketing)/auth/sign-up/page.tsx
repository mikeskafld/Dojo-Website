import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { SignUpForm } from "@/app/(marketing)/auth/sign-up/sign-up-form"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ returnUrl?: string }>
}) {
  const { returnUrl } = await searchParams

  return (
    <div className="w-full space-y-2 md:space-y-4">
      <FadeIn key="sign-up">
        <SectionCard>
          <GradientHeading size="xxxl" weight="base">
            Sign Up
          </GradientHeading>
        </SectionCard>
      </FadeIn>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        <FadeIn key="sign-up-info">
          <SectionCard
            className="hidden md:block col-span-1 h-full"
            innerClassName="h-full flex flex-col justify-center items-center"
          >
            <div className="space-y-2">
              <GradientHeading size="xl" weight="base">
                Create Account
              </GradientHeading>
              <p className="text-lg text-muted-foreground">
                Join us and start your journey today
              </p>
            </div>
          </SectionCard>
        </FadeIn>
        <div className="col-span-1">
          <FadeIn key="sign-up-form">
            <SignUpForm returnUrl={returnUrl} />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
