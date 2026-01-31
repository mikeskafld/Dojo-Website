"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowRight, Users, Sparkles, TrendingUp, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import Link from "next/link"

export type AudienceType = "creator" | "learner"

const heroContent = {
  creator: {
    headline: "Turn Your Expertise Into Income",
    subheadline: "Transform your knowledge into bite-sized lessons. Let AI handle the course structure while you focus on what you do best — creating.",
    cta: "Apply as Creator",
    ctaLink: "/for-creators#apply",
  },
  learner: {
    headline: "Master Any Skill in Minutes a Day",
    subheadline: "Learn from real practitioners through micro-lessons designed for how your brain actually works. Swipe your way to mastery.",
    cta: "Join Waitlist",
    ctaLink: "#waitlist",
  },
}

const socialProofStats = [
  { value: "70%", label: "Creator Revenue Share", icon: TrendingUp },
  { value: "3min", label: "Average Lesson Time", icon: BookOpen },
  { value: "10K+", label: "Creators Interested", icon: Users },
  { value: "AI", label: "Powered Scaffolding", icon: Sparkles },
]

export function LandingHeroSection() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Read mode from URL, default to "learner"
  const modeParam = searchParams.get("mode")
  const initialMode: AudienceType = modeParam === "creator" ? "creator" : "learner"

  const [audience, setAudience] = useState<AudienceType>(initialMode)
  const content = heroContent[audience]

  // Sync state with URL params on mount and when URL changes
  useEffect(() => {
    const modeFromUrl = searchParams.get("mode")
    if (modeFromUrl === "creator" || modeFromUrl === "learner") {
      setAudience(modeFromUrl)
    }
  }, [searchParams])

  // Update URL when audience changes
  const handleAudienceChange = (newAudience: AudienceType) => {
    setAudience(newAudience)

    // Update URL with shallow routing (no full page reload)
    const params = new URLSearchParams(searchParams.toString())
    params.set("mode", newAudience)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 dojo-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] dojo-gradient-radial opacity-50" />

      {/* Subtle animated glow orbs - hidden on mobile to prevent overflow */}
      <motion.div
        className="absolute top-20 right-[15%] w-64 h-64 rounded-full opacity-20 hidden md:block"
        style={{ background: "radial-gradient(circle, var(--dojo-cyan) 0%, transparent 70%)" }}
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
        style={{ background: "radial-gradient(circle, var(--dojo-cyan) 0%, transparent 70%)" }}
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Audience Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center p-1 rounded-full bg-[var(--dojo-bg-card)] border border-[var(--dojo-border)]">
              <button
                onClick={() => handleAudienceChange("creator")}
                className={`relative px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${
                  audience === "creator"
                    ? "text-[var(--dojo-bg)]"
                    : "text-[var(--dojo-text-muted)] hover:text-[var(--dojo-text)]"
                }`}
              >
                {audience === "creator" && (
                  <motion.div
                    layoutId="audience-toggle"
                    className="absolute inset-0 rounded-full dojo-btn-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">I&apos;m a Creator</span>
              </button>
              <button
                onClick={() => handleAudienceChange("learner")}
                className={`relative px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${
                  audience === "learner"
                    ? "text-[var(--dojo-bg)]"
                    : "text-[var(--dojo-text-muted)] hover:text-[var(--dojo-text)]"
                }`}
              >
                {audience === "learner" && (
                  <motion.div
                    layoutId="audience-toggle"
                    className="absolute inset-0 rounded-full dojo-btn-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">I&apos;m a Learner</span>
              </button>
            </div>
          </motion.div>

          {/* Dynamic Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 md:space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="dojo-text-gradient">{content.headline}</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--dojo-text-muted)] leading-relaxed">
                {content.subheadline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12"
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
                  href={content.ctaLink}
                  className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg dojo-btn-primary"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={content.cta}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {content.cta}
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </AnimatePresence>
                </Link>
              </Magnetic>
            </div>

            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg dojo-btn-secondary"
            >
              Learn How It Works
            </Link>
          </motion.div>
        </div>

        {/* Floating Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {socialProofStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-4 md:p-6 rounded-xl dojo-card"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dojo-glow-subtle" />

                <div className="relative flex flex-col items-center text-center space-y-2">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--dojo-cyan)] mb-1" />
                  <span className="text-2xl md:text-3xl font-bold text-[var(--dojo-cyan)]">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-[var(--dojo-text-muted)]">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
