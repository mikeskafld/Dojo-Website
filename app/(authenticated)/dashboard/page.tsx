import { TwoToneHeading } from "@/components/ui/two-tone-heading"

export default async function PaidOnlyPage() {
  return (
    <div className="min-h-[calc(100vh-7.8rem)]  md:min-h-min flex items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <TwoToneHeading
          primaryText="Paid Only Access"
          secondaryText="User is authenticated and subscription is active"
          primaryWeight="bold"
          secondaryWeight="base"
        />
      </div>
    </div>
  )
}
