"use client"

import { useRef, Suspense } from "react"
import { motion, useInView } from "motion/react"
import {
  ArrowRight,
  DollarSign,
  Sparkles,
  Users,
  BarChart3,
  AlertTriangle,
  Clock,
  TrendingDown,
  Frown,
} from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/fade-in"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { CreatorApplicationSection } from "@/app/(marketing)/creator-application-section"

const valueProps = [
  {
    icon: DollarSign,
    value: "70%",
    title: "Revenue Share",
    description:
      "Keep the majority of what you earn. No hidden fees, no complicated splits. Your expertise, your earnings.",
  },
  {
    icon: Sparkles,
    value: "AI",
    title: "Handles Course Structure",
    description:
      "Our AI transforms your long-form content into pedagogically optimized micro-lessons. You create, we structure.",
  },
  {
    icon: Users,
    value: "10K+",
    title: "Learners Through Feed",
    description:
      "Reach learners who discover content through our algorithmically curated feed. No marketing required.",
  },
  {
    icon: BarChart3,
    value: "Real-Time",
    title: "Analytics Dashboard",
    description:
      "Track engagement, completion rates, and earnings in real-time. Understand what resonates with your audience.",
  },
]

const creatorStruggles = [
  {
    icon: Clock,
    title: "Hours of Editing",
    description: "Spending more time editing than creating",
  },
  {
    icon: TrendingDown,
    title: "Algorithm Anxiety",
    description: "Fighting for visibility on saturated platforms",
  },
  {
    icon: DollarSign,
    title: "Revenue Uncertainty",
    description: "Inconsistent income from ad revenue alone",
  },
  {
    icon: Frown,
    title: "Burnout Cycle",
    description: "Constant pressure to post more content",
  },
]

export default function ForCreatorsPage() {
  const valuePropsRef = useRef(null)
  const struggleRef = useRef(null)
  const isValuePropsInView = useInView(valuePropsRef, { once: true, amount: 0.2 })
  const isStruggleInView = useInView(struggleRef, { once: true, amount: 0.2 })

  return (
    <div className="space-y-1 md:space-y-4">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
        <motion.div
          className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full opacity-15 hidden md:block"
          style={{
            background:
              "radial-gradient(circle, var(--dojo-cyan) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
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
                <Sparkles className="w-4 h-4" />
                For Creators
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="dojo-text-gradient">
                Turn Your Expertise Into Scalable Income
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--dojo-text-muted)] leading-relaxed mb-10"
            >
              Stop trading time for views. Let Dojo transform your content into
              a library of micro-lessons that earn while you sleep.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
                    href="#apply"
                    className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg dojo-btn-primary"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Magnetic>
              </div>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg dojo-btn-secondary"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <FadeIn>
        <section ref={valuePropsRef} className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 dojo-gradient-radial opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuePropsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="dojo-text-gradient">Why Creators Choose Dojo</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                We built Dojo to solve the problems that hold creators back from
                building sustainable businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isValuePropsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl dojo-card"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ boxShadow: "var(--dojo-glow-subtle)" }}
                  />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center mb-4">
                      <prop.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dojo-cyan)] mb-1">
                      {prop.value}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-[var(--dojo-text-muted)] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* The Creator Struggle Section */}
      <FadeIn>
        <section
          ref={struggleRef}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStruggleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  The Problem
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="text-[var(--dojo-text)]">
                    The Creator Struggle Is Real
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                  You didn&apos;t become a creator to spend all your time fighting
                  algorithms and chasing views. You have expertise worth sharing.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {creatorStruggles.map((struggle, index) => (
                  <motion.div
                    key={struggle.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isStruggleInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative p-6 rounded-xl bg-[var(--dojo-bg-card)] border border-destructive/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                      <struggle.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--dojo-text)] mb-1">
                      {struggle.title}
                    </h3>
                    <p className="text-sm text-[var(--dojo-text-muted)]">
                      {struggle.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* The Solution Teaser */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStruggleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  The Dojo Solution
                </div>
                <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text)]">
                  Upload your content once. Our AI transforms it into a library of
                  bite-sized lessons that learners discover through our feed.{" "}
                  <span className="text-[var(--dojo-cyan)] font-medium">
                    You create. We handle the rest.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Embedded Creator Application Form */}
      <Suspense>
        <FadeIn>
          <CreatorApplicationSection />
        </FadeIn>
      </Suspense>
    </div>
  )
}
