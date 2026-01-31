"use client"

import { useRef, Suspense } from "react"
import { motion, useInView } from "motion/react"
import {
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Shield,
  Gift,
  AlertTriangle,
  Brain,
  Infinity as InfinityIcon,
  ScrollText,
  Zap,
} from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/fade-in"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { LearnerWaitlistSection } from "@/app/(marketing)/learner-waitlist-section"

const valueProps = [
  {
    icon: Clock,
    value: "3 min",
    title: "Bite-Sized Micro-Lessons",
    description:
      "Learn in spare moments. Each lesson is optimized for quick understanding and real retention.",
  },
  {
    icon: Users,
    value: "Real",
    title: "Learn From Practitioners",
    description:
      "No theoretical professors. Learn from creators who actually do what they teach.",
  },
  {
    icon: Shield,
    value: "Peer",
    title: "Reviewed Quality",
    description:
      "Every lesson is vetted by experts. No more sifting through low-quality content.",
  },
  {
    icon: Gift,
    value: "Free",
    title: "Path to Mastery",
    description:
      "Start learning for free. Pay only when you want to go deeper and unlock premium content.",
  },
]

const consumerStruggles = [
  {
    icon: ScrollText,
    title: "Overwhelming Courses",
    description: "30-hour courses you never finish",
  },
  {
    icon: Brain,
    title: "Information Overload",
    description: "Too much content, not enough structure",
  },
  {
    icon: InfinityIcon,
    title: "Endless Scrolling",
    description: "Addictive feeds that waste your time",
  },
  {
    icon: Zap,
    title: "No Real Progress",
    description: "Entertainment disguised as education",
  },
]

export default function ForLearnersPage() {
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
                For Learners
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
                Master Any Skill, One Swipe at a Time
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--dojo-text-muted)] leading-relaxed mb-10"
            >
              Stop wasting hours on courses you&apos;ll never finish. Learn from
              real practitioners in bite-sized lessons designed for your busy life.
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
                    href="#waitlist"
                    className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg dojo-btn-primary"
                  >
                    Join the Waitlist
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
                <span className="dojo-text-gradient">Why Learners Choose Dojo</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                We designed Dojo for people who want to learn, not just consume content.
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

      {/* The Consumer Struggle Section */}
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
                    The Consumer Struggle Is Real
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                  You want to learn new skills, but the content landscape is broken.
                  Most platforms are designed to keep you watching, not learning.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {consumerStruggles.map((struggle, index) => (
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
                  A feed designed for learning, not addiction. Bite-sized lessons
                  from real practitioners, structured for your brain.{" "}
                  <span className="text-[var(--dojo-cyan)] font-medium">
                    Swipe. Learn. Master.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Embedded Learner Waitlist Form */}
      <Suspense>
        <FadeIn>
          <LearnerWaitlistSection />
        </FadeIn>
      </Suspense>
    </div>
  )
}
