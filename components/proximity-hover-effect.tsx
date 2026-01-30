"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface ProximityHoverTextProps {
  text: string
  className?: string
  pixelStyle?: "ss01" | "ss02" | "ss03" | "ss04" | "ss05"

  radius?: number
}

export function ProximityHoverText({
  text,
  className,
  pixelStyle = "ss01",
  radius = 2,
}: ProximityHoverTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [charWidths, setCharWidths] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Measure the width of each character in the default style
  useEffect(() => {
    if (!containerRef.current) return

    const characters = text.split("")

    // Create a temporary span to measure character widths
    const tempSpan = document.createElement("span")
    tempSpan.className = "font-alpha-lyrae invisible absolute"
    tempSpan.style.fontSize = window.getComputedStyle(
      containerRef.current
    ).fontSize
    document.body.appendChild(tempSpan)

    // Measure each character
    const widths = characters.map((char) => {
      tempSpan.textContent = char
      return Math.ceil(tempSpan.getBoundingClientRect().width) + 1 // Add 1px buffer
    })

    // Clean up
    document.body.removeChild(tempSpan)
    setCharWidths(widths)
  }, [text]) // Only depend on text

  // Determine which characters should be pixelated based on proximity to hovered character
  const getStyleForIndex = (index: number) => {
    if (hoveredIndex === null) return "ss-default"

    // Calculate distance from hovered character
    const distance = Math.abs(index - hoveredIndex)

    // Apply different stylistic sets based on distance
    if (distance === 0) return pixelStyle
    if (distance <= radius) {
      // For SS03 and SS04 (glitched versions), use them for nearby characters
      if (pixelStyle === "ss03" || pixelStyle === "ss04") {
        return distance === 1 ? pixelStyle : "ss01"
      }
      // For SS05 (motion pixels), use it with decreasing intensity
      if (pixelStyle === "ss05") {
        return distance === 1 ? pixelStyle : "ss02"
      }
      // For SS01 and SS02, use the alternate for nearby characters
      return pixelStyle === "ss01" ? "ss02" : "ss01"
    }

    return "ss-default"
  }

  const characters = text.split("")

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-block  md:py-4 rounded-lg",

        className
      )}
    >
      <div className="flex flex-wrap justify-center whitespace-nowrap">
        {characters.map((char, index) => (
          <span
            key={index}
            className={cn(
              "font-alpha-lyrae pixel-hover-transition cursor-pointer inline-block",
              getStyleForIndex(index)
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              width: charWidths[index] ? `${charWidths[index]}px` : "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Invisible character with default style to maintain width */}
            <span className="invisible absolute top-0 left-0 ss-default">
              {char}
            </span>

            {/* Visible character that changes style */}
            <span className="relative">{char}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
