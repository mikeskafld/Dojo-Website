import { notFound } from "next/navigation"

import { getBlogPosts } from "@/lib/blog"
import { FadeIn } from "@/components/fade-in"
import { SectionCard } from "@/components/section-card"
import { CustomMDX } from "@/app/(marketing)/blog/blog-mdx"
import { BlogPostContent } from "@/app/(marketing)/blog/blog-post-content"
import { BlogPostHero } from "@/app/(marketing)/blog/blog-post-hero"
import { baseUrl } from "@/app/sitemap"

import { MarketingCTA } from "../../marketing-cta"

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const p = await params
  const post = getBlogPosts().find((post) => post.slug === p.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const p = await params
  const post = getBlogPosts().find((post) => post.slug === p.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-1 md:space-y-4">
      <section className="container mx-auto ">
        <div className="max-w-7xl mx-auto">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${baseUrl}${post.metadata.image}`
                  : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${baseUrl}/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: "My Portfolio",
                },
              }),
            }}
          />
          <FadeIn>
            <BlogPostHero post={post} />
          </FadeIn>
        </div>
      </section>

      <SectionCard className="">
        <div className="max-w-3xl mx-auto">
          <BlogPostContent>
            <CustomMDX source={post.content} />
          </BlogPostContent>
        </div>
      </SectionCard>

      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
