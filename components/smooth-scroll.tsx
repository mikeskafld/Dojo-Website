"use client"

import { useEffect } from "react"
import { useReducedMotion } from "motion/react"

/**
 * SmoothScroll component enables smooth scrolling for anchor links
 * throughout the application. Respects prefers-reduced-motion.
 *
 * Add this component once at the root layout level.
 */
export function SmoothScroll() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        // Add offset for sticky header (adjust as needed)
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        })

        // Update URL without causing a scroll
        history.pushState(null, "", href)
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [shouldReduceMotion])

  return null
}
