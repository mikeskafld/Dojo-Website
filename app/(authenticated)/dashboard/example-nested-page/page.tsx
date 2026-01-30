import { TwoToneHeading } from "@/components/ui/two-tone-heading"

export default function ExampleNestedPage() {
  return (
    <section className="min-h-[calc(100vh)] md:min-h-min flex-1">
      <TwoToneHeading
        primaryText="Example Nested Page"
        secondaryText="This is an example page."
        primaryWeight="bold"
        secondaryWeight="base"
      />
    </section>
  )
}
