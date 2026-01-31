"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  Lightbulb,
  Target,
  Heart,
  Rocket,
  Building2,
  GraduationCap,
  TrendingUp,
  Users,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/fade-in"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pioneering cognitive scaffolding technology to transform how knowledge is structured and consumed.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description:
      "Making expert knowledge available to everyone through bite-sized, engaging micro-lessons.",
  },
  {
    icon: Heart,
    title: "Creator Empowerment",
    description:
      "Giving creators the tools to build sustainable businesses from their expertise.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description:
      "Delivering the highest quality learning experiences through AI-powered optimization.",
  },
]

const founderBackground = [
  {
    icon: Building2,
    title: "Ares Capital",
    description: "Investment banking experience structuring complex deals",
  },
  {
    icon: TrendingUp,
    title: "InSite Property Group",
    description: "Built and scaled a real estate investment platform",
  },
  {
    icon: GraduationCap,
    title: "UC Santa Barbara",
    description: "Economics & Business with focus on behavioral finance",
  },
]

const founderMarketFit = [
  {
    icon: Users,
    title: "Creator Network",
    description:
      "Deep relationships with content creators across fitness, music, and lifestyle verticals.",
  },
  {
    icon: Lightbulb,
    title: "Learning Obsession",
    description:
      "Personal frustration with traditional courses led to researching cognitive science and learning theory.",
  },
  {
    icon: TrendingUp,
    title: "Marketplace Experience",
    description:
      "Built two-sided platforms and understands the dynamics of supply and demand creation.",
  },
]

export default function AboutPage() {
  const missionRef = useRef(null)
  const founderRef = useRef(null)
  const fitRef = useRef(null)
  const valuesRef = useRef(null)

  const isMissionInView = useInView(missionRef, { once: true, amount: 0.2 })
  const isFounderInView = useInView(founderRef, { once: true, amount: 0.2 })
  const isFitInView = useInView(fitRef, { once: true, amount: 0.2 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

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
                <Heart className="w-4 h-4" />
                Our Story
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
                Building the Future of Learning
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--dojo-text-muted)] leading-relaxed"
            >
              We&apos;re on a mission to make expert knowledge accessible to everyone
              through AI-powered micro-learning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <FadeIn>
        <section
          ref={missionRef}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                  <span className="dojo-text-gradient">Our Mission</span>
                </h2>
                <div className="relative p-8 md:p-12 rounded-2xl dojo-card">
                  <div className="absolute inset-0 rounded-2xl border border-[var(--dojo-border-accent)] opacity-50" />
                  <p className="relative text-xl md:text-2xl text-[var(--dojo-text)] leading-relaxed">
                    Dojo exists to unlock the world&apos;s expertise. We believe everyone
                    deserves access to knowledge from real practitioners—delivered in
                    a format that fits modern life. By combining{" "}
                    <span className="text-[var(--dojo-cyan)] font-medium">
                      cognitive science
                    </span>
                    ,{" "}
                    <span className="text-[var(--dojo-cyan)] font-medium">
                      AI technology
                    </span>
                    , and{" "}
                    <span className="text-[var(--dojo-cyan)] font-medium">
                      creator economics
                    </span>
                    , we&apos;re building the first marketplace where learning is as
                    engaging as scrolling—and experts finally get paid what they&apos;re
                    worth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Founder Section */}
      <FadeIn>
        <section
          ref={founderRef}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 dojo-gradient-radial opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFounderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="dojo-text-gradient">Meet the Founder</span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Founder Bio Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isFounderInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative p-8 rounded-2xl dojo-card"
                >
                  <div className="absolute inset-0 rounded-2xl border border-[var(--dojo-border-accent)] opacity-30" />

                  <div className="relative">
                    {/* Avatar placeholder */}
                    <div className="w-24 h-24 rounded-full bg-[var(--dojo-cyan-muted)] flex items-center justify-center mb-6 mx-auto lg:mx-0">
                      <span className="text-3xl font-bold text-[var(--dojo-cyan)]">
                        JM
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--dojo-text)] mb-2 text-center lg:text-left">
                      Jack Modesett
                    </h3>
                    <p className="text-[var(--dojo-cyan)] font-medium mb-6 text-center lg:text-left">
                      Founder & CEO
                    </p>

                    <p className="text-[var(--dojo-text-muted)] leading-relaxed mb-6">
                      Jack is a builder at heart who has spent his career at the
                      intersection of finance, technology, and education. After working
                      in investment banking at{" "}
                      <span className="text-[var(--dojo-text)] font-medium">
                        Ares Capital
                      </span>
                      , he founded{" "}
                      <span className="text-[var(--dojo-text)] font-medium">
                        InSite Property Group
                      </span>
                      , a real estate investment platform that taught him the
                      dynamics of building two-sided marketplaces.
                    </p>

                    <p className="text-[var(--dojo-text-muted)] leading-relaxed">
                      A graduate of{" "}
                      <span className="text-[var(--dojo-text)] font-medium">
                        UC Santa Barbara
                      </span>{" "}
                      with a focus on economics and behavioral finance, Jack became
                      obsessed with the science of learning after struggling through
                      countless online courses that promised mastery but delivered
                      information overload. Dojo is his answer to that broken model.
                    </p>
                  </div>
                </motion.div>

                {/* Background Cards */}
                <div className="space-y-4">
                  {founderBackground.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={
                        isFounderInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 30 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="group relative p-6 rounded-xl dojo-card"
                    >
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />

                      <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--dojo-text)] mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[var(--dojo-text-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Founder-Market Fit Section */}
      <FadeIn>
        <section
          ref={fitRef}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--dojo-cyan-muted)] text-[var(--dojo-cyan)] text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Founder-Market Fit
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="text-[var(--dojo-text)]">
                    Why Jack Built Dojo
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                  The best companies are built by founders who deeply understand
                  both sides of their marketplace.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {founderMarketFit.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isFitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-6 rounded-xl dojo-card text-center"
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ boxShadow: "var(--dojo-glow-subtle)" }}
                    />

                    <div className="relative">
                      <div className="w-14 h-14 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center mb-4 mx-auto">
                        <item.icon className="w-7 h-7 text-[var(--dojo-cyan)]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--dojo-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <blockquote className="relative max-w-3xl mx-auto">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-[var(--dojo-cyan)] opacity-30">
                    &ldquo;
                  </div>
                  <p className="text-xl md:text-2xl text-[var(--dojo-text)] italic leading-relaxed pt-8">
                    I built Dojo because I wasted hundreds of hours on courses that
                    promised mastery but delivered confusion. There has to be a better
                    way—and now there is.
                  </p>
                  <footer className="mt-6 text-[var(--dojo-cyan)] font-medium">
                    — Jack Modesett
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Values Section */}
      <FadeIn>
        <section
          ref={valuesRef}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 dojo-gradient-radial opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="dojo-text-gradient">Our Values</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
                  The principles that guide everything we build.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isValuesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-6 rounded-xl dojo-card"
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--dojo-border-accent)]" />

                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--dojo-cyan-muted)] flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-[var(--dojo-cyan)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--dojo-text)] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-[var(--dojo-text-muted)] leading-relaxed">
                          {value.description}
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

      {/* Contact Section */}
      <FadeIn>
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="dojo-text-gradient">Get in Touch</span>
                </h2>
                <p className="text-lg text-[var(--dojo-text-muted)] mb-8">
                  Have questions? We&apos;d love to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link
                    href="mailto:hello@joindojo.co"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg dojo-btn-primary w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5" />
                    hello@joindojo.co
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <Link
                    href="https://twitter.com/joindojo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[var(--dojo-bg-card)] border border-[var(--dojo-border)] flex items-center justify-center text-[var(--dojo-text-muted)] hover:text-[var(--dojo-cyan)] hover:border-[var(--dojo-border-accent)] transition-colors duration-300"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/joindojo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[var(--dojo-bg-card)] border border-[var(--dojo-border)] flex items-center justify-center text-[var(--dojo-text-muted)] hover:text-[var(--dojo-cyan)] hover:border-[var(--dojo-border-accent)] transition-colors duration-300"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
