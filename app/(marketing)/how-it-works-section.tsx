"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  Video,
  FileVideo,
  Podcast,
  ArrowRight,
  Layers,
  Tag,
  Sparkles,
  Play,
  Clock,
  CheckCircle,
} from "lucide-react"

const inputTypes = [
  { icon: Video, label: "YouTube" },
  { icon: FileVideo, label: "Course Videos" },
  { icon: Podcast, label: "Podcasts" },
]

const processSteps = [
  {
    icon: Layers,
    title: "Semantic Segmentation",
    description: "AI identifies logical content boundaries and key concepts",
  },
  {
    icon: Tag,
    title: "Pedagogical Labeling",
    description: "Each segment tagged with learning objectives and difficulty",
  },
  {
    icon: Sparkles,
    title: "Synthesis Optimization",
    description: "Content restructured for maximum retention and engagement",
  },
]

export function HowItWorksSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

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
            From long-form content to bite-sized mastery in three intelligent
            steps.
          </p>
        </motion.div>

        {/* Visual Flow - Desktop: Horizontal, Mobile: Vertical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
                Your Content
              </h3>
              <div className="space-y-3">
                {inputTypes.map((input) => (
                  <div
                    key={input.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center">
                      <input.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                    </div>
                    <span className="text-sm text-[var(--dojo-text-muted)]">
                      {input.label}
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

            {/* Dojo Engine Column */}
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
                <span className="dojo-text-gradient">Dojo Engine</span>
              </h3>

              <div className="space-y-4 relative z-10">
                {processSteps.map((step, index) => (
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
                    {index < processSteps.length - 1 && (
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

            {/* Output Column - Micro-Lesson Card */}
            <motion.div
              variants={itemVariants}
              className="flex-1 p-6 rounded-xl dojo-card"
            >
              <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-4 text-center">
                Micro-Lessons
              </h3>

              {/* Sample Lesson Card */}
              <div className="rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)] overflow-hidden">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-[var(--dojo-cyan-muted)] to-[var(--dojo-surface)] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--dojo-cyan)]/20 border border-[var(--dojo-cyan)] flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-[var(--dojo-cyan)] ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-xs text-white">
                    <Clock className="w-3 h-3" />
                    <span>2:45</span>
                  </div>
                </div>

                {/* Lesson Info */}
                <div className="p-3">
                  <h4 className="text-sm font-medium text-[var(--dojo-text)] mb-1 line-clamp-2">
                    Understanding Chord Progressions
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[var(--dojo-text-muted)]">
                    <span className="px-2 py-0.5 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)]">
                      Music
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Quiz included
                    </span>
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
                Your Content
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {inputTypes.map((input) => (
                  <div
                    key={input.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)]"
                  >
                    <input.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                    <span className="text-sm text-[var(--dojo-text-muted)]">
                      {input.label}
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

            {/* Dojo Engine Section */}
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
                <span className="dojo-text-gradient">Dojo Engine</span>
              </h3>

              <div className="space-y-4 relative z-10">
                {processSteps.map((step, index) => (
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
                    {index < processSteps.length - 1 && (
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
                Micro-Lessons
              </h3>

              <div className="max-w-xs mx-auto rounded-lg bg-[var(--dojo-surface)] border border-[var(--dojo-border)] overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-[var(--dojo-cyan-muted)] to-[var(--dojo-surface)] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--dojo-cyan)]/20 border border-[var(--dojo-cyan)] flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-[var(--dojo-cyan)] ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-xs text-white">
                    <Clock className="w-3 h-3" />
                    <span>2:45</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-medium text-[var(--dojo-text)] mb-1 line-clamp-2">
                    Understanding Chord Progressions
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[var(--dojo-text-muted)]">
                    <span className="px-2 py-0.5 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)]">
                      Music
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Quiz included
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
