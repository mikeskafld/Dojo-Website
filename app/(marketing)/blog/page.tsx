import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { BlogPosts } from "@/app/(marketing)/blog/blog-posts"

export const metadata = {
  title: "Blog | Dojo",
  description:
    "Insights on micro-learning, the creator economy, and building skills that matter.",
}

export default function BlogPage() {
  return (
    <div className="space-y-2 md:space-y-4">
      <FadeIn key="blog">
        <SectionCard>
          <GradientHeading size="xxl" weight="base" className="">
            Blog
          </GradientHeading>
        </SectionCard>
      </FadeIn>

      <FadeIn key="blog-posts">
        <SectionCard innerClassName="pt-2 pb-2">
          <div className="md:max-w-3xl md:mx-auto">
            <BlogPosts />
          </div>
        </SectionCard>
      </FadeIn>
    </div>
  )
}
