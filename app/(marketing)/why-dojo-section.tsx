"use client"

import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import { motion, useInView, AnimatePresence } from "motion/react"
import {
  GraduationCap,
  Gamepad2,
  MonitorPlay,
  Star,
  ArrowRight,
  Youtube,
  DollarSign,
} from "lucide-react"

import type { AudienceType } from "./marketing-hero"

const competitors = {
  creator: [
    {
      icon: Youtube,
      name: "YouTube",
      theyDoWell: "Massive reach and discovery algorithm",
      dojoAdds: [
        "70% revenue share vs YouTube's ~55%",
        "Subscribers who actually pay for your content",
        "No need to create endless new content for the algorithm",
      ],
    },
    {
      icon: GraduationCap,
      name: "Skillshare",
      theyDoWell: "Course marketplace with built-in audience",
      dojoAdds: [
        "Keep full ownership of your content and IP",
        "AI handles course structure so you focus on teaching",
        "Higher revenue share with transparent earnings",
      ],
    },
    {
      icon: MonitorPlay,
      name: "Patreon",
      theyDoWell: "Direct fan support and subscription model",
      dojoAdds: [
        "AI transforms your content into structured lessons",
        "Built-in learning tools (quizzes, progress tracking)",
        "Reach learners actively seeking your expertise",
      ],
    },
    {
      icon: DollarSign,
      name: "Teachable",
      theyDoWell: "Full control over pricing and branding",
      dojoAdds: [
        "No need to build your own audience from scratch",
        "AI handles production - upload once, earn forever",
        "Built-in discovery through the Dojo marketplace",
      ],
    },
  ],
  learner: [
    {
      icon: GraduationCap,
      name: "Skillshare & Udemy",
      theyDoWell: "Huge course libraries with expert instructors",
      dojoAdds: [
        "AI transforms courses into bite-sized micro-lessons",
        "Learn in 5 minutes instead of 5 hours",
        "No more watching at 2x speed to save time",
      ],
    },
    {
      icon: Gamepad2,
      name: "Duolingo",
      theyDoWell: "Gamification that makes learning addictive",
      dojoAdds: [
        "Real practitioner knowledge, not just textbook content",
        "Learn any skill, not just languages",
        "Peer-reviewed quality from actual experts",
      ],
    },
    {
      icon: MonitorPlay,
      name: "TikTok & YouTube Shorts",
      theyDoWell: "Infinite scroll and viral discovery",
      dojoAdds: [
        "Structured learning paths, not random entertainment",
        "Each swipe builds on the last toward mastery",
        "3x better retention with cognitive scaffolding",
      ],
    },
    {
      icon: Star,
      name: "MasterClass",
      theyDoWell: "Premium production with celebrity instructors",
      dojoAdds: [
        "Learn from practitioners who actually do the work",
        "Interactive quizzes and practice exercises",
        "Affordable subscription vs expensive one-time fees",
      ],
    },
  ],
}

export function WhyDojoSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const searchParams = useSearchParams()

  // Read mode from URL, default to "learner"
  const modeParam = searchParams.get("mode")
  const audience: AudienceType = modeParam === "creator" ? "creator" : "learner"
  const currentCompetitors = competitors[audience]

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

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 dojo-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-[var(--dojo-text)]">Why </span>
            <span className="dojo-text-gradient">Dojo</span>
            <span className="text-[var(--dojo-text)]">?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
            We combine the best of existing platforms with AI-powered learning
            science to create something entirely new.
          </p>
        </motion.div>

        {/* Competitor Comparison Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {currentCompetitors.map((competitor) => (
            <motion.div
              key={competitor.name}
              variants={itemVariants}
              whileHover={{
                y: -6,
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

              {/* Header with icon and competitor name */}
              <div className="relative flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center group-hover:bg-[var(--dojo-cyan-dark)] transition-colors duration-300">
                  <competitor.icon className="w-5 h-5 text-[var(--dojo-cyan)]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[var(--dojo-text)] group-hover:text-[var(--dojo-cyan)] transition-colors duration-300">
                  {competitor.name}
                </h3>
              </div>

              {/* What they do well */}
              <div className="relative mb-4">
                <p className="text-sm text-[var(--dojo-text-muted)] italic">
                  &ldquo;{competitor.theyDoWell}&rdquo;
                </p>
              </div>

              {/* Divider with arrow */}
              <div className="relative flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-[var(--dojo-border)]" />
                <ArrowRight className="w-4 h-4 text-[var(--dojo-cyan)]" />
                <span className="text-xs font-medium text-[var(--dojo-cyan)] uppercase tracking-wider">
                  Dojo adds
                </span>
                <div className="flex-1 h-px bg-[var(--dojo-border)]" />
              </div>

              {/* What Dojo adds */}
              <ul className="relative space-y-2">
                {competitor.dojoAdds.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[var(--dojo-text)]"
                  >
                    <span className="text-[var(--dojo-cyan)] mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
