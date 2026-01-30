import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { LoginForm } from "@/app/(marketing)/auth/login/login-form"

export default function Page() {
  return (
    <div className=" w-full  space-y-2 md:space-y-4">
      <FadeIn key="login">
        <SectionCard>
          <GradientHeading size="xxxl" weight="base">
            Login
          </GradientHeading>
        </SectionCard>
      </FadeIn>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        <FadeIn key="login-info">
          <SectionCard
            className="hidden md:block col-span-1 h-full"
            innerClassName="h-full flex flex-col justify-center items-center"
          >
            <div className="space-y-2">
              <GradientHeading size="xl" weight="base">
                Welcome Back
              </GradientHeading>
              <p className="text-lg text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
          </SectionCard>
        </FadeIn>
        <FadeIn key="login-form">
          <div className="col-span-1 h-full">
            <LoginForm />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
