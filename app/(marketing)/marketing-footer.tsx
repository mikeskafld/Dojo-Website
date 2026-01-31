"use client"

import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { motion } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

const footerConfig = {
  brand: {
    name: "dojo",
    description: "The first marketplace powered by cognitive scaffolding. Master any skill, one swipe at a time.",
  },
  product: {
    title: "Product",
    links: [
      { text: "How It Works", href: "/how-it-works" },
      { text: "For Creators", href: "/for-creators" },
      { text: "For Learners", href: "/for-learners" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { text: "Terms", href: "/terms" },
      { text: "Privacy", href: "/privacy" },
    ],
  },
  social: {
    title: "Connect",
    links: [
      {
        icon: Twitter,
        href: "https://twitter.com/joindojo",
        label: "Twitter / X",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/company/joindojo",
        label: "LinkedIn",
      },
    ],
  },
  copyright: {
    text: "Dojo",
  },
} as const

export function MarketingFooter() {
  return (
    <footer className="py-1 md:pt-4">
      <SectionCard className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 space-y-4">
            <GradientHeading size="lg" weight="base">
              {footerConfig.brand.name}
            </GradientHeading>
            <p className="text-foreground/80 text-sm leading-relaxed max-w-xs">
              {footerConfig.brand.description}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {footerConfig.social.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[var(--dojo-cyan)] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.product.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.product.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-[var(--dojo-cyan)] transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.company.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-[var(--dojo-cyan)] transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {footerConfig.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerConfig.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-[var(--dojo-cyan)] transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing on desktop */}
          <div className="hidden md:block" />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} {footerConfig.copyright.text}. All
              rights reserved.
            </p>
            <Link
              href="/auth/login"
              className="text-sm text-foreground/60 hover:text-[var(--dojo-cyan)] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </SectionCard>
    </footer>
  )
}
