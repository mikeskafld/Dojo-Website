import { getBlogPosts } from "@/lib/blog"
import { getURL } from "@/lib/utils"

export const baseUrl = getURL()

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ["", "/blog", "/pricing", "/about", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
