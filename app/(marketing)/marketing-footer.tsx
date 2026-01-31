"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { motion } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

const footerConfig = {
  brand: {
    name: "dojo",
    description: "The first marketplace powered by cognitive scaffolding. Master any skill, one swipe at a time.",
  },
  quickLinks: {
    title: "Product",
    links: [
      { text: "How It Works", href: "/how-it-works" },
      { text: "For Creators", href: "/for-creators" },
      { text: "For Learners", href: "/for-learners" },
    ],
  },
  resources: {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Terms", href: "/terms" },
      { text: "Login", href: "/auth/login" },
    ],
  },
  social: {
    title: "Connect",
    links: [
      {
        icon: Twitter,
        href: "https://twitter.com/joindojo",
        label: "Twitter",
      },
      {
        icon: Github,
        href: "https://github.com",
        label: "GitHub",
      },
    ],
  },
  copyright: {
    text: "Dojo",
  },
} as const

export function MarketingFooter() {
  return (
    <footer className="py-1  md:pt-4">
      <SectionCard className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <GradientHeading size="lg" weight="base">
              {footerConfig.brand.name}
            </GradientHeading>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {footerConfig.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {footerConfig.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {footerConfig.resources.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {footerConfig.social.title}
            </h3>
            <div className="flex space-x-4">
              {footerConfig.social.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-foreground/60 text-sm">
            © {new Date().getFullYear()} {footerConfig.copyright.text}. All
            rights reserved.
          </p>
        </div>
      </SectionCard>
    </footer>
  )
}
