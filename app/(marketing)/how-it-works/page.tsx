"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  ArrowRight,
  Video,
  FileVideo,
  Podcast,
  Layers,
  Tag,
  Sparkles,
  Play,
  Clock,
  CheckCircle,
  Upload,
  Cog,
  DollarSign,
  Users,
  BarChart3,
  Compass,
  Brain,
  Trophy,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/fade-in"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"

// Input content types
const inputTypes = [
  { icon: Video, label: "YouTube" },
  { icon: FileVideo, label: "Course Videos" },
  { icon: Podcast, label: "Podcasts" },
]

// Dojo Engine processing steps
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

// Creator flow steps
const creatorFlowSteps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Content",
    description:
      "Connect your YouTube channel or upload videos directly. Any long-form content works.",
  },
  {
    icon: Cog,
    number: "02",
    title: "AI Transforms It",
    description:
      "Our Dojo Engine breaks down your content into pedagogically optimized micro-lessons.",
  },
  {
    icon: Users,
    number: "03",
    title: "Learners Discover You",
    description:
      "Your lessons appear in the feed. Learners find you through our recommendation engine.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Earn Passively",
    description:
      "Keep 70% of subscription revenue. Track earnings in real-time on your dashboard.",
  },
]

// Learner flow steps
const learnerFlowSteps = [
  {
    icon: Compass,
    number: "01",
    title: "Discover Content",
    description:
      "Browse a feed curated to your interests. Find lessons from real practitioners.",
  },
  {
    icon: Play,
    number: "02",
    title: "Learn in Minutes",
    description:
      "Each micro-lesson is 2-5 minutes. Learn during commutes, breaks, or downtime.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Reinforce Knowledge",
    description:
      "Quizzes and spaced repetition ensure you actually remember what you learn.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Track Mastery",
    description:
      "See your progress across topics. Unlock premium content as you advance.",
  },
]

// Marketplace loop elements
const marketplaceLoop = [
  {
    position: "top",
    icon: Video,
    title: "Creators Upload",
    description: "Experts share their knowledge",
  },
  {
    position: "right",
    icon: Sparkles,
    title: "Dojo Transforms",
    description: "AI optimizes for learning",
  },
  {
    position: "bottom",
    icon: Users,
    title: "Learners Discover",
    description: "Feed surfaces quality content",
  },
  {
    position: "left",
    icon: BarChart3,
    title: "Everyone Wins",
    description: "Engagement drives revenue",
  },
]

export default function HowItWorksPage() {
  const engineRef = useRef(null)
  const creatorFlowRef = useRef(null)
  const learnerFlowRef = useRef(null)
  const loopRef = useRef(null)

  const isEngineInView = useInView(engineRef, { once: true, amount: 0.2 })
  const isCreatorFlowInView = useInView(creatorFlowRef, { once: true, amount: 0.2 })
  const isLearnerFlowInView = useInView(learnerFlowRef, { once: true, amount: 0.2 })
  const isLoopInView = useInView(loopRef, { once: true, amount: 0.2 })

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
    <div className="space-y-1 md:space-y-4">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 dojo-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] dojo-gradient-radial opacity-50" />

        {/* Subtle animated glow orbs - hidden on mobile to prevent overflow */}
        <motion.div
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full opacity-20 hidden md:block"
          style={{
            background:
              "radial-gradient(circle, var(--dojo-cyan) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium">
                <Cog className="w-4 h-4" />
                How It Works
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-[var(--dojo-text)]">The </span>
              <span className="dojo-text-gradient">Dojo Platform</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--dojo-text-muted)] leading-relaxed"
            >
              From long-form content to bite-sized mastery. See how Dojo
              transforms expertise into learning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Dojo Engine Section */}
      <FadeIn>
        <section ref={engineRef} className="relative py-16 md:py-24 overflow-hidden">
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
              animate={isEngineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="text-[var(--dojo-text)]">The </span>
                <span className="dojo-text-gradient">Dojo Engine</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                Our AI-powered engine transforms any long-form content into
                pedagogically optimized micro-lessons in three intelligent steps.
              </p>
            </motion.div>

            {/* Visual Flow - Desktop: Horizontal, Mobile: Vertical */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isEngineInView ? "visible" : "hidden"}
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
      </FadeIn>

      {/* For Creators Flow Section */}
      <FadeIn>
        <section ref={creatorFlowRef} className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCreatorFlowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                For Creators
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="dojo-text-gradient">Your Journey as a Creator</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                From uploading content to earning passive income, here&apos;s how Dojo
                works for creators.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {creatorFlowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isCreatorFlowInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Connector line for desktop */}
                    {index < creatorFlowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[var(--dojo-cyan)] to-transparent z-0" />
                    )}

                    <div className="relative p-6 rounded-xl dojo-card h-full">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                          </div>
                          <span className="text-3xl font-bold text-[var(--dojo-cyan)] opacity-30">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--dojo-text-muted)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* For Learners Flow Section */}
      <FadeIn>
        <section ref={learnerFlowRef} className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 dojo-gradient-radial opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLearnerFlowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                For Learners
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="dojo-text-gradient">Your Journey as a Learner</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                From discovery to mastery, here&apos;s how Dojo works for learners.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {learnerFlowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isLearnerFlowInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Connector line for desktop */}
                    {index < learnerFlowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[var(--dojo-cyan)] to-transparent z-0" />
                    )}

                    <div className="relative p-6 rounded-xl dojo-card h-full">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                          </div>
                          <span className="text-3xl font-bold text-[var(--dojo-cyan)] opacity-30">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--dojo-text-muted)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* The Marketplace Loop Section */}
      <FadeIn>
        <section ref={loopRef} className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4" />
                The Flywheel
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="dojo-text-gradient">The Marketplace Loop</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                A virtuous cycle where everyone wins. More creators attract more learners,
                which attracts more creators.
              </p>
            </motion.div>

            {/* Circular Loop Diagram */}
            <div className="max-w-3xl mx-auto">
              {/* Desktop: Circular layout */}
              <div className="hidden md:block relative">
                {/* Center icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isLoopInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[var(--dojo-cyan-muted)] flex items-center justify-center z-10"
                >
                  <div className="text-center">
                    <span className="dojo-text-gradient text-2xl font-bold">dojo</span>
                  </div>
                </motion.div>

                {/* Rotating ring animation */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-dashed border-[var(--dojo-cyan)]/30"
                />

                {/* Loop elements positioned in a circle */}
                <div className="relative h-[450px]">
                  {marketplaceLoop.map((item, index) => {
                    const positions = [
                      { top: "0%", left: "50%", transform: "translateX(-50%)" }, // top
                      { top: "50%", right: "0%", transform: "translateY(-50%)" }, // right
                      { bottom: "0%", left: "50%", transform: "translateX(-50%)" }, // bottom
                      { top: "50%", left: "0%", transform: "translateY(-50%)" }, // left
                    ]
                    const pos = positions[index]

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isLoopInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                        className="absolute w-48"
                        style={pos}
                      >
                        <div className="p-4 rounded-xl dojo-card text-center">
                          <div className="w-12 h-12 mx-auto rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center mb-3">
                            <item.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                          </div>
                          <h3 className="text-base font-semibold text-[var(--dojo-text)] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[var(--dojo-text-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}

                  {/* Curved arrows between elements */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 450 450"
                  >
                    {/* Arrow paths connecting elements in a circle */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3.5, 0 7"
                          fill="var(--dojo-cyan)"
                          fillOpacity="0.5"
                        />
                      </marker>
                    </defs>
                    {/* Top to Right */}
                    <motion.path
                      d="M 270 80 Q 350 120 370 180"
                      fill="none"
                      stroke="var(--dojo-cyan)"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={isLoopInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    {/* Right to Bottom */}
                    <motion.path
                      d="M 370 270 Q 350 330 270 370"
                      fill="none"
                      stroke="var(--dojo-cyan)"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={isLoopInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    {/* Bottom to Left */}
                    <motion.path
                      d="M 180 370 Q 100 330 80 270"
                      fill="none"
                      stroke="var(--dojo-cyan)"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={isLoopInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    />
                    {/* Left to Top */}
                    <motion.path
                      d="M 80 180 Q 100 120 180 80"
                      fill="none"
                      stroke="var(--dojo-cyan)"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={isLoopInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                    />
                  </svg>
                </div>
              </div>

              {/* Mobile: Vertical layout */}
              <div className="md:hidden space-y-4">
                {marketplaceLoop.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isLoopInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl dojo-card">
                      <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[var(--dojo-text)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[var(--dojo-text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* Arrow to next item */}
                    {index < marketplaceLoop.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowRight className="w-5 h-5 text-[var(--dojo-cyan)] rotate-90" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {/* Loop back indicator */}
                <div className="flex justify-center pt-2">
                  <RefreshCw className="w-5 h-5 text-[var(--dojo-cyan)]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 dojo-gradient-radial opacity-30" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              >
                <span className="dojo-text-gradient">Ready to Get Started?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)] mb-10"
              >
                Whether you&apos;re a creator ready to monetize your expertise or a
                learner eager to master new skills, Dojo has a place for you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <div className="relative">
                  <GlowEffect
                    scale={0.9}
                    mode="rotate"
                    blur="strongest"
                    className="absolute inset-0"
                  />
                  <Magnetic>
                    <Link
                      href="/for-creators#apply"
                      className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg dojo-btn-primary"
                    >
                      <Sparkles className="w-5 h-5" />
                      Apply as Creator
                    </Link>
                  </Magnetic>
                </div>

                <div className="relative">
                  <Magnetic>
                    <Link
                      href="/for-learners#waitlist"
                      className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg dojo-btn-secondary"
                    >
                      <Users className="w-5 h-5" />
                      Join as Learner
                    </Link>
                  </Magnetic>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
