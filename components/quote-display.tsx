"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "motion/react"

// Define a set of colors for our "circuit" animations
// const circuitColors = [
//   "#4ade80", // green
//   "#F5DF77", // yellow
//   "#ec4899", // pink
//   "#a78bfa", // purple
//   "#44E8F6", // cyan
// ]

const circuitColors = [
  "#E33680", // pink
  "#3AC7F2", // cyan
  "#4ade80", // green
  "#F9EE80", // yellow
  "#ec4899", // pink
  "#F497CF", // salmon
  "#44E6F5", // purple
  "#E33680", // pink
  "#44E8F6", // cyan
  "#584CDA", // purple
]

// Number of columns to divide the text into
const NUM_COLUMNS = 12

// Function to get a random color from our palette
const getRandomColor = () => {
  return circuitColors[Math.floor(Math.random() * circuitColors.length)]
}

export interface QuoteDisplayProps {
  text: string
  waveSpeed: number
  cycleDelay: number
  isAnimating: boolean
  textColor?: string
  fontSize?: string
  fontWeight?: string | number
  animationDuration?: number
  resetDuration?: number
  randomMode?: boolean
  randomCharCount?: number
}

export default function QuoteDisplay({
  text,
  waveSpeed,
  cycleDelay,
  isAnimating,
  textColor = "#333333",
  fontSize = "text-4xl sm:text-5xl md:text-6xl",
  fontWeight = "font-bold",
  animationDuration = 0.4, // Default animation duration in seconds
  resetDuration = 0.3, // Default reset duration in seconds
  randomMode = false, // Default to sequential wave mode
  randomCharCount = 10, // Default number of random characters to animate
}: QuoteDisplayProps) {
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)
  const [columnGroups, setColumnGroups] = useState<number[][]>(
    Array(NUM_COLUMNS).fill([])
  )
  const [currentColumn, setCurrentColumn] = useState(0)
  const [validCharIndices, setValidCharIndices] = useState<number[]>([])

  // Calculate column groups and valid character indices after the component mounts and text is rendered
  useEffect(() => {
    if (!containerRef.current) return

    // Function to calculate which column each character belongs to and identify valid characters
    const calculateGroups = () => {
      const container = containerRef.current
      if (!container) return

      // Get all character spans
      const charSpans = container.querySelectorAll(".char-span")
      const containerRect = container.getBoundingClientRect()
      const containerWidth = containerRect.width
      const columnWidth = containerWidth / NUM_COLUMNS

      // Initialize column groups
      const groups: number[][] = Array(NUM_COLUMNS)
        .fill(null)
        .map(() => [])

      // Track valid character indices (non-spaces)
      const validIndices: number[] = []

      // Assign each character to a column based on its position
      charSpans.forEach((span, index) => {
        if (text[index] === " ") return // Skip spaces

        // Add to valid indices
        validIndices.push(index)

        // For column-based animation
        const rect = span.getBoundingClientRect()
        const charCenterX = rect.left + rect.width / 2 - containerRect.left
        const columnIndex = Math.min(
          Math.floor(charCenterX / columnWidth),
          NUM_COLUMNS - 1
        )

        groups[columnIndex].push(index)
      })

      setColumnGroups(groups)
      setValidCharIndices(validIndices)
    }

    // Calculate initial groups
    setTimeout(calculateGroups, 500) // Delay to ensure text is rendered

    // Recalculate on window resize
    window.addEventListener("resize", calculateGroups)
    return () => window.removeEventListener("resize", calculateGroups)
  }, [text, fontSize, fontWeight])

  // Reset animation state when switching between random and sequential modes
  useEffect(() => {
    setCurrentColumn(0)
  }, [randomMode])

  // Animation effect
  useEffect(() => {
    if (
      columnGroups.every((group) => group.length === 0) ||
      validCharIndices.length === 0 ||
      !isAnimating
    )
      return // Wait until groups are calculated

    let animationTimeout: NodeJS.Timeout

    const animateRandomCharacters = () => {
      // Determine how many characters to animate (use randomCharCount or 10% of valid chars, whichever is smaller)
      const maxChars = Math.min(
        randomCharCount,
        Math.floor(validCharIndices.length * 0.3)
      )

      // Select random characters with algorithmic distance
      let selectedIndices: number[] = []

      if (validCharIndices.length <= maxChars) {
        // If we have fewer valid characters than requested, use all of them
        selectedIndices = [...validCharIndices]
      } else {
        // Try to select characters that are well-distributed
        // First, shuffle the array of valid indices
        const shuffled = [...validCharIndices].sort(() => 0.5 - Math.random())

        // Then select characters with some spacing between them
        // This is a simple approach - we could use more sophisticated algorithms
        const step = Math.floor(validCharIndices.length / maxChars)

        for (let i = 0; i < maxChars; i++) {
          const index = (i * step) % shuffled.length
          selectedIndices.push(shuffled[index])
        }
      }

      selectedIndices.forEach((index) => {
        const color = getRandomColor()
        controls.start(`${index}-${color}`).then(() => {
          controls.start(`${index}-reset`)
        })
      })

      // Schedule next cycle after a random delay
      const randomDelay = cycleDelay * (0.5 + Math.random())
      animationTimeout = setTimeout(animateRandomCharacters, randomDelay)
    }

    const animateNextColumn = () => {
      // Animate characters in the current column
      const column = columnGroups[currentColumn]

      if (column && column.length > 0) {
        // Select characters to animate in this column (up to 50% of characters)
        const numToAnimate = Math.max(1, Math.floor(column.length * 0.5))
        const shuffled = [...column].sort(() => 0.5 - Math.random())
        const selectedIndices = shuffled.slice(0, numToAnimate)

        selectedIndices.forEach((index) => {
          const color = getRandomColor()
          controls.start(`${index}-${color}`).then(() => {
            controls.start(`${index}-reset`)
          })
        })
      }

      // Move to next column
      const nextColumn = (currentColumn + 1) % NUM_COLUMNS

      // If we've completed a full cycle, add a random delay before starting the next one
      if (nextColumn === 0) {
        // Random delay between 0.5x and 1.5x the base cycle delay
        const randomDelay = cycleDelay * (0.5 + Math.random())
        animationTimeout = setTimeout(() => {
          setCurrentColumn(nextColumn)
        }, randomDelay)
      } else {
        setCurrentColumn(nextColumn)
        // Schedule next column animation using the current wave speed
        animationTimeout = setTimeout(animateNextColumn, waveSpeed)
      }
    }

    // Start the appropriate animation based on mode
    if (randomMode) {
      animationTimeout = setTimeout(animateRandomCharacters, waveSpeed)
    } else {
      animationTimeout = setTimeout(animateNextColumn, waveSpeed)
    }

    return () => {
      clearTimeout(animationTimeout)
    }
  }, [
    currentColumn,
    columnGroups,
    controls,
    waveSpeed,
    cycleDelay,
    isAnimating,
    randomMode,
    validCharIndices,
    randomCharCount,
  ])

  return (
    <div className="w-full py-8 px-4 ">
      <p
        ref={containerRef}
        className={`${fontSize} ${fontWeight} tracking-tight relative`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            animate={controls}
            initial={{ color: textColor }}
            variants={Object.fromEntries([
              ...circuitColors.map((color) => [
                `${index}-${color}`,
                {
                  color: [null, color, color],
                  textShadow: [null, `0 0 8px ${color}`, `0 0 8px ${color}`],
                  scale: [1, 1.2, 1.1],
                  transition: { duration: animationDuration },
                },
              ]),
              [
                `${index}-reset`,
                {
                  color: textColor,
                  textShadow: "none",
                  scale: 1,
                  transition: { duration: resetDuration },
                },
              ],
            ])}
            className={`char-span ${char === " " ? "mr-[0.2em]" : ""}`}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  )
}
