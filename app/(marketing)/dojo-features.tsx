"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  Layers,
  Compass,
  Sparkles,
  Users,
  DollarSign,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Universal Scaffolding",
    description:
      "Our AI breaks down any content into structured learning paths, adapting to how your brain actually processes new information.",
  },
  {
    icon: Compass,
    title: "Feed-to-Mastery Funnel",
    description:
      "Start in a swipeable feed, get hooked, then dive deeper. Each lesson builds on the last until you've truly mastered the skill.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Repurposing",
    description:
      "Creators upload once, AI transforms content into optimized micro-lessons with quizzes, summaries, and practice exercises.",
  },
  {
    icon: Users,
    title: "Peer-Reviewed Discovery",
    description:
      "Quality rises to the top through community validation. Learn from content that's been vetted by learners who came before you.",
  },
  {
    icon: DollarSign,
    title: "Native Monetization",
    description:
      "70% revenue share for creators. No hidden fees. Get paid when learners subscribe to your content or tip for exceptional lessons.",
  },
  {
    icon: Zap,
    title: "Low-Friction Mastery",
    description:
      "3-minute lessons designed for busy lives. Learn during commutes, breaks, or whenever you have a moment to grow.",
  },
]

export function DojoFeaturesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 dojo-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="dojo-text-gradient">
              The First Marketplace Powered By
            </span>
            <br />
            <span className="text-[var(--dojo-text)]">Cognitive Scaffolding</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
            We combine AI-driven content transformation with proven learning science
            to help creators monetize and learners master.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative p-6 md:p-8 rounded-xl dojo-card cursor-default"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-[var(--dojo-border-accent)]" />
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow: "inset 0 1px 1px rgba(0, 212, 255, 0.1)",
                  }}
                />
              </div>

              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center group-hover:bg-[var(--dojo-cyan-dark)] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--dojo-text)] mb-2 group-hover:text-[var(--dojo-cyan)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--dojo-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
