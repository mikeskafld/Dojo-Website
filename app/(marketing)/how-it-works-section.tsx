"use client"

import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import { motion, useInView, AnimatePresence } from "motion/react"
import {
  Video,
  FileVideo,
  Podcast,
  ArrowRight,
  Layers,
  Tag,
  Sparkles,
  DollarSign,
  TrendingUp,
  Compass,
  BookOpen,
  Target,
  Award,
  Zap,
} from "lucide-react"

import type { AudienceType } from "./marketing-hero"

// Creator flow: Content upload → AI processing → Monetization
const creatorFlow = {
  input: {
    title: "Your Content",
    items: [
      { icon: Video, label: "YouTube Videos" },
      { icon: FileVideo, label: "Course Material" },
      { icon: Podcast, label: "Podcast Episodes" },
    ],
  },
  process: {
    title: "Dojo Engine",
    steps: [
      {
        icon: Layers,
        title: "Smart Segmentation",
        description: "AI breaks your content into bite-sized lessons",
      },
      {
        icon: Tag,
        title: "Auto-Structure",
        description: "Learning objectives and quizzes generated automatically",
      },
      {
        icon: Sparkles,
        title: "Engagement Boost",
        description: "Content optimized for retention and completion",
      },
    ],
  },
  output: {
    title: "Passive Income",
    card: {
      icon: DollarSign,
      headline: "Monthly Revenue",
      stats: [
        { label: "Subscribers", value: "1,247" },
        { label: "This Month", value: "$2,840" },
      ],
      trend: "+23% from last month",
    },
  },
}

// Learner flow: Discovery → Micro-lessons → Mastery
const learnerFlow = {
  input: {
    title: "What You Want to Learn",
    items: [
      { icon: Compass, label: "Browse Topics" },
      { icon: Target, label: "Set Goals" },
      { icon: BookOpen, label: "Choose Path" },
    ],
  },
  process: {
    title: "Personalized Learning",
    steps: [
      {
        icon: Zap,
        title: "Smart Matching",
        description: "AI finds lessons that match your skill level",
      },
      {
        icon: Layers,
        title: "Bite-Sized Delivery",
        description: "Complex topics broken into 5-minute micro-lessons",
      },
      {
        icon: Sparkles,
        title: "Adaptive Pacing",
        description: "Content adjusts to your learning speed and style",
      },
    ],
  },
  output: {
    title: "Skill Mastery",
    card: {
      icon: Award,
      headline: "Photography Basics",
      stats: [
        { label: "Progress", value: "78%" },
        { label: "Streak", value: "12 days" },
      ],
      trend: "3 lessons to completion",
    },
  },
}

const flowContent = {
  creator: creatorFlow,
  learner: learnerFlow,
}

export function HowItWorksSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const searchParams = useSearchParams()

  // Read mode from URL, default to "learner"
  const modeParam = searchParams.get("mode")
  const audience: AudienceType = modeParam === "creator" ? "creator" : "learner"
  const currentFlow = flowContent[audience]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dojo-gradient-radial opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--dojo-cyan) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-[var(--dojo-text)]">How the </span>
            <span className="dojo-text-gradient">Dojo Engine</span>
            <span className="text-[var(--dojo-text)]"> Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
            {audience === "creator"
              ? "From your expertise to passive income in three intelligent steps."
              : "From curiosity to mastery in bite-sized daily lessons."}
          </p>
        </motion.div>

        {/* Visual Flow - Desktop: Horizontal, Mobile: Vertical */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-6xl mx-auto"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-stretch gap-6">
              {/* Input Column */}
              <motion.div
                variants={itemVariants}
                className="flex-1 p-6 rounded-xl dojo-card"
              >
                <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-4 text-center">
                  {currentFlow.input.title}
                </h3>
                <div className="space-y-3">
                  {currentFlow.input.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                      </div>
                      <span className="text-sm text-[var(--dojo-text-muted)]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            {/* Arrow */}
            <motion.div
              variants={arrowVariants}
              className="flex items-center justify-center"
            >
              <motion.div
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-8 h-8 text-[var(--dojo-cyan)]" />
              </motion.div>
            </motion.div>

            {/* Process Column */}
            <motion.div
              variants={itemVariants}
              className="flex-[2] p-6 rounded-xl dojo-card relative overflow-hidden"
            >
              {/* Glow effect behind engine */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, var(--dojo-cyan) 0%, transparent 70%)",
                }}
              />

              <h3 className="text-lg font-semibold text-center mb-6 relative z-10">
                <span className="dojo-text-gradient">{currentFlow.process.title}</span>
              </h3>

              <div className="space-y-4 relative z-10">
                {currentFlow.process.steps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--dojo-surface)]/50 border border-[var(--dojo-border)] backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--dojo-text)] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[var(--dojo-text-muted)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {/* Connecting line */}
                    {index < currentFlow.process.steps.length - 1 && (
                      <div className="absolute left-[1.25rem] top-full w-[2px] h-4 bg-gradient-to-b from-[var(--dojo-cyan)] to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              variants={arrowVariants}
              className="flex items-center justify-center"
            >
              <motion.div
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75,
                }}
              >
                <ArrowRight className="w-8 h-8 text-[var(--dojo-cyan)]" />
              </motion.div>
            </motion.div>

            {/* Output Column */}
            <motion.div
              variants={itemVariants}
              className="flex-1 p-6 rounded-xl dojo-card"
            >
              <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-4 text-center">
                {currentFlow.output.title}
              </h3>

              {/* Dynamic Output Card */}
              <div className="rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)] overflow-hidden">
                {/* Header with Icon */}
                <div className="relative aspect-video bg-gradient-to-br from-[var(--dojo-cyan-muted)] to-[var(--dojo-surface)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--dojo-cyan)]/20 border border-[var(--dojo-cyan)] flex items-center justify-center backdrop-blur-sm">
                    <currentFlow.output.card.icon className="w-8 h-8 text-[var(--dojo-cyan)]" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[var(--dojo-text)] mb-3">
                    {currentFlow.output.card.headline}
                  </h4>
                  <div className="space-y-2">
                    {currentFlow.output.card.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-xs text-[var(--dojo-text-muted)]">
                          {stat.label}
                        </span>
                        <span className="text-sm font-semibold text-[var(--dojo-cyan)]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
                    <TrendingUp className="w-3 h-3" />
                    <span>{currentFlow.output.card.trend}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden space-y-6">
            {/* Input Section */}
            <motion.div variants={itemVariants} className="p-6 rounded-xl dojo-card">
              <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-4 text-center">
                {currentFlow.input.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {currentFlow.input.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)]"
                  >
                    <item.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                    <span className="text-sm text-[var(--dojo-text-muted)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rotate-90"
              >
                <ArrowRight className="w-8 h-8 text-[var(--dojo-cyan)]" />
              </motion.div>
            </motion.div>

            {/* Process Section */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl dojo-card relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, var(--dojo-cyan) 0%, transparent 70%)",
                }}
              />

              <h3 className="text-lg font-semibold text-center mb-6 relative z-10">
                <span className="dojo-text-gradient">{currentFlow.process.title}</span>
              </h3>

              <div className="space-y-4 relative z-10">
                {currentFlow.process.steps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--dojo-surface)]/50 border border-[var(--dojo-border)] backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--dojo-text)] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[var(--dojo-text-muted)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < currentFlow.process.steps.length - 1 && (
                      <div className="absolute left-[1.25rem] top-full w-[2px] h-4 bg-gradient-to-b from-[var(--dojo-cyan)] to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Downward Arrow */}
            <motion.div
              variants={arrowVariants}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75,
                }}
                className="rotate-90"
              >
                <ArrowRight className="w-8 h-8 text-[var(--dojo-cyan)]" />
              </motion.div>
            </motion.div>

            {/* Output Section */}
            <motion.div variants={itemVariants} className="p-6 rounded-xl dojo-card">
              <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-4 text-center">
                {currentFlow.output.title}
              </h3>

              <div className="max-w-xs mx-auto rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)] overflow-hidden">
                {/* Header with Icon */}
                <div className="relative aspect-video bg-gradient-to-br from-[var(--dojo-cyan-muted)] to-[var(--dojo-surface)] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--dojo-cyan)]/20 border border-[var(--dojo-cyan)] flex items-center justify-center backdrop-blur-sm">
                    <currentFlow.output.card.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h4 className="text-sm font-medium text-[var(--dojo-text)] mb-3">
                    {currentFlow.output.card.headline}
                  </h4>
                  <div className="space-y-2">
                    {currentFlow.output.card.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-xs text-[var(--dojo-text-muted)]">
                          {stat.label}
                        </span>
                        <span className="text-sm font-semibold text-[var(--dojo-cyan)]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
                    <TrendingUp className="w-3 h-3" />
                    <span>{currentFlow.output.card.trend}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
