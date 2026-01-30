"use client"

import { Calendar, Tag } from "lucide-react"
import { motion } from "motion/react"

import { formatBlogDate } from "@/lib/utils"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: string
  description?: string
}

type MDXFile = {
  metadata: Metadata
  slug: string
  content: string
}

interface BlogPostHeroProps {
  post: MDXFile
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-1 md:space-y-6"
    >
      <div className="space-y-1 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-1 md:gap-4">
          <div className="col-span-1 md:col-span-2 w-full h-full">
            <SectionCard
              className="h-full"
              innerClassName="h-full flex flex-col justify-center items-center p-4 md:p-6"
            >
              <GradientHeading
                size="xl"
                weight="base"
                className="md:text-center"
              >
                {post.metadata.title}
              </GradientHeading>
            </SectionCard>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col gap-1 md:gap-4">
              <SectionCard>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time>{formatBlogDate(post.metadata.publishedAt)}</time>
                  </div>

                  {post.metadata.category && (
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {post.metadata.category}
                      </span>
                    </div>
                  )}
                </div>
              </SectionCard>

              <SectionCard>
                {post.metadata.description && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/50 to-transparent blur-xl" />
                    <p className="relative text-base md:text-lg leading-relaxed text-muted-foreground">
                      {post.metadata.description}
                    </p>
                  </motion.div>
                )}
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
