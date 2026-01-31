"use client"

import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

/**
 * PageTransition component wraps page content and provides
 * smooth fade-in transitions when the route changes.
 * Respects prefers-reduced-motion user preference.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : -8,
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.3,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
