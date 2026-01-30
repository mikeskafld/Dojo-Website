import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { ForgotPasswordForm } from "@/app/(marketing)/auth/forgot-password/forgot-password-form"

export default function Page() {
  return (
    <div className="w-full space-y-2 md:space-y-4">
      <SectionCard>
        <GradientHeading
          size="xxxl"
          weight="base"
          className="leading-[3.5rem] md:leading-[1.5rem]"
        >
          Forgot Password
        </GradientHeading>
      </SectionCard>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <SectionCard
          className=" col-span-1 h-full"
          innerClassName="h-full flex flex-col justify-center items-center"
        >
          <div className="space-y-2">
            <GradientHeading size="xl" weight="base">
              Reset Your Password
            </GradientHeading>
            <p className="text-lg text-muted-foreground">
              Enter your email to receive a password reset link
            </p>
          </div>
        </SectionCard>
        <div className="col-span-1">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  )
}
