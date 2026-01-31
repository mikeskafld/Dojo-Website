"use client"

import { motion } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"

export function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-4 flex flex-col md:flex-row items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <GradientHeading
          size="xxxl"
          weight="base"
          className="leading-[4.5rem] md:leading-[6.5rem]"
        >
          Blog
        </GradientHeading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-lg text-neutral-600 dark:text-neutral-400"
      >
        Insights on learning, creating, and building skills that matter.
      </motion.p>
    </motion.div>
  )
}
