import { GradientHeading } from "@/components/gradient-heading"
import { LogoCarousel } from "@/components/logo-carousel"
import { SectionCard } from "@/components/section-card"

export function MarketingPartners() {
  return (
    <section className="md:space-y-4  md:grid  md:grid-cols-3 md:gap-4">
      <div className="relative col-span-1 md:hidden">
        <SectionCard
          className="relative text-left md:text-left w-full  h-full flex items-center justify-center"
          innerClassName="md:px-6 space-y-8 p-1.5 w-full"
        >
          <div className="pl-2 text-left w-full pt-6">
            <GradientHeading size="xxl" weight="base">
              Join the best.
            </GradientHeading>

            <GradientHeading size="xl" weight="base" variant="helper">
              Meet our partners.
            </GradientHeading>
          </div>

          <SectionCard
            className="relative text-left md:text-left w-full  h-full flex items-center justify-center"
            innerClassName="mx-auto flex flex-col justify-center items-center space-y-8   shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-0 py-0 md:px-8  p-0  bg-card/50 w-full h-full"
          >
            <div className="py-6 w-full h-full px-1">
              <LogoCarousel columnCount={3} />
            </div>
          </SectionCard>
        </SectionCard>
      </div>

      <div className="col-span-1 hidden md:block  md:col-span-2 h-full w-full">
        <SectionCard
          className="relative text-left md:text-left w-full  h-full flex items-center justify-center"
          innerClassName="mx-auto flex flex-col justify-center items-center space-y-8  shadow-elevation-light dark:shadow-elevation-dark px-4 py-12 md:px-4  p-1.5 bg-card/50 w-full h-full"
        >
          <LogoCarousel columnCount={3} />
        </SectionCard>
      </div>

      <div className="relative col-span-1 hidden md:block">
        <SectionCard
          className="relative text-left md:text-left w-full  h-full flex items-center justify-center"
          innerClassName="md:px-6  p-1.5 w-full"
        >
          <div className="text-center md:text-left w-full">
            <GradientHeading size="xl" weight="base">
              Join the best.
            </GradientHeading>

            <GradientHeading size="xl" weight="base">
              Meet our partners.
            </GradientHeading>
          </div>
        </SectionCard>
      </div>
    </section>
  )
}
