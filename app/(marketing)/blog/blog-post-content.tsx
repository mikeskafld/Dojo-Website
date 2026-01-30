"use client"

import { motion } from "motion/react"

interface BlogPostContentProps {
  children?: React.ReactNode
}

export function BlogPostContent({ children }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="relative w-full overflow-hidden md:bg-gradient-to-br from-card via-card/95 to-muted/90  p-1"
    >
      <div className="relative w-full overflow-hidden bg-card/20 md:p-1.5 ">
        <article className="prose dark:prose-invert md:p-6">{children}</article>
      </div>
    </motion.div>
  )
}
