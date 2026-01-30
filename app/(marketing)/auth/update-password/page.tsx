import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { UpdatePasswordForm } from "@/app/(marketing)/auth/update-password/update-password-form"

export default function Page() {
  return (
    <div className="w-full space-y-2 md:space-y-4">
      <SectionCard>
        <GradientHeading
          size="xxxl"
          weight="base"
          className="leading-[3.5rem] md:leading-[1.5rem]"
        >
          Update Password
        </GradientHeading>
      </SectionCard>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <SectionCard
          className="col-span-1 h-full"
          innerClassName="h-full flex flex-col justify-center items-center"
        >
          <div className="space-y-2">
            <GradientHeading size="xl" weight="base">
              Reset Your Password
            </GradientHeading>
            <p className="text-lg text-muted-foreground">
              Create a new password for your account
            </p>
          </div>
        </SectionCard>
        <div className="col-span-1">
          <UpdatePasswordForm />
        </div>
      </div>
    </div>
  )
}
