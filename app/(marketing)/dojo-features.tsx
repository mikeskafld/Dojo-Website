"use client"

import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import { motion, useInView, AnimatePresence } from "motion/react"
import {
  Layers,
  Compass,
  Sparkles,
  Users,
  DollarSign,
  Zap,
  Upload,
  TrendingUp,
  Clock,
  BookOpen,
  Target,
  Award,
} from "lucide-react"

import type { AudienceType } from "./marketing-hero"

const features = {
  creator: [
    {
      icon: DollarSign,
      title: "70% Revenue Share",
      description:
        "Keep most of what you earn. No hidden fees or complicated splits. Get paid monthly when learners engage with your content.",
    },
    {
      icon: Sparkles,
      title: "AI Lesson Structuring",
      description:
        "Upload your content once and let AI transform it into optimized micro-lessons with quizzes, summaries, and practice exercises.",
    },
    {
      icon: Users,
      title: "Reach Hungry Learners",
      description:
        "Connect with learners actively seeking expertise in your niche. No more fighting algorithms for visibility.",
    },
    {
      icon: Upload,
      title: "Simple Content Upload",
      description:
        "Share your knowledge in any format — videos, documents, or existing content. Our AI handles the rest.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description:
        "Track your earnings, learner engagement, and content performance in real-time. Know exactly what resonates.",
    },
    {
      icon: Award,
      title: "Keep Your IP",
      description:
        "You retain full ownership of your original content. We license it for distribution, but the IP is always yours.",
    },
  ],
  learner: [
    {
      icon: Clock,
      title: "5-Minute Micro-Lessons",
      description:
        "Learn in bite-sized chunks designed for busy lives. Perfect for commutes, breaks, or whenever you have a spare moment.",
    },
    {
      icon: Users,
      title: "Real Practitioners",
      description:
        "Learn from people who actually do the work, not just talk about it. Get practical insights from experienced creators.",
    },
    {
      icon: Layers,
      title: "Structured Learning Paths",
      description:
        "Our AI breaks down complex skills into clear progression paths. Know exactly what to learn next and why.",
    },
    {
      icon: Compass,
      title: "Swipe-to-Learn Feed",
      description:
        "Start in a discovery feed, find content that hooks you, then dive deeper. Learning should feel as natural as scrolling.",
    },
    {
      icon: Target,
      title: "3x Better Retention",
      description:
        "Cognitive scaffolding and spaced repetition help you actually remember what you learn, not just consume it.",
    },
    {
      icon: BookOpen,
      title: "100+ Topics",
      description:
        "From fitness to photography, coding to cooking — find expert-led lessons in whatever skill you want to master.",
    },
  ],
}

export function DojoFeaturesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const searchParams = useSearchParams()

  // Read mode from URL, default to "learner"
  const modeParam = searchParams.get("mode")
  const audience: AudienceType = modeParam === "creator" ? "creator" : "learner"
  const currentFeatures = features[audience]

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
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {currentFeatures.map((feature) => (
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
        </AnimatePresence>
      </div>
    </section>
  )
}
