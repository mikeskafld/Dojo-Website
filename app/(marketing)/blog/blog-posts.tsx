import Link from "next/link"

import { getBlogPosts } from "@/lib/blog"
import { formatBlogDate } from "@/lib/utils"

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="space-y-4 md:space-y-8 ">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block p-6 rounded-lg border border-border shadow-xl bg-card hover:border-border/80 transition-colors"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <time className="text-sm text-muted-foreground">
                  {formatBlogDate(post.metadata.publishedAt, false)}
                </time>
                {post.metadata.category && (
                  <span className="text-sm text-muted-foreground">
                    • {post.metadata.category}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                {post.metadata.title}
              </h2>
              {post.metadata.description && (
                <p className="text-muted-foreground">
                  {post.metadata.description}
                </p>
              )}
            </div>
          </Link>
        ))}
    </div>
  )
}
