"use client"

import { useEffect, useRef, useState } from "react"
import {
  addMonths,
  format,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfDay,
  subMonths,
} from "date-fns"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SubscriptionCalendarProps {
  startDate: Date
  endDate: Date
}

export function SubscriptionCalendar({
  startDate,
  endDate,
}: SubscriptionCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    // Default to the month containing the start date
    return new Date(startDate)
  })

  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("left")
  const calendarRef = useRef<HTMLDivElement>(null)

  // Track if we're in the current billing period month
  const isCurrentBillingMonth =
    isSameMonth(currentMonth, startDate) ||
    isSameMonth(currentMonth, endDate) ||
    (isAfter(currentMonth, startDate) && isBefore(currentMonth, endDate))

  const today = startOfDay(new Date())

  const goToPreviousMonth = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setCurrentMonth((prev) => subMonths(prev, 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToNextMonth = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setCurrentMonth((prev) => addMonths(prev, 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPreviousMonth()
      } else if (e.key === "ArrowRight") {
        goToNextMonth()
      }
    }

    const currentCalendarRef = calendarRef.current
    if (currentCalendarRef) {
      currentCalendarRef.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      currentCalendarRef?.removeEventListener("keydown", handleKeyDown)
    }
  }, [goToPreviousMonth, goToNextMonth])

  const goToToday = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(isBefore(today, currentMonth) ? "left" : "right")
    setCurrentMonth(today)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToBillingPeriod = () => {
    if (isAnimating || isCurrentBillingMonth) return
    setIsAnimating(true)
    setDirection(isBefore(startDate, currentMonth) ? "left" : "right")
    setCurrentMonth(startDate)
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Generate days for the current month view
  const getDaysInMonth = () => {
    const year = getYear(currentMonth)
    const month = getMonth(currentMonth)

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay()

    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const days = getDaysInMonth()
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -20 : 20,
      opacity: 0,
    }),
  }

  return (
    <div className="select-none" ref={calendarRef} tabIndex={0}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 transition-all duration-200 hover:bg-muted focus-visible:ring-1 focus-visible:ring-primary"
            onClick={goToPreviousMonth}
            disabled={isAnimating}
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 transition-all duration-200 hover:bg-muted focus-visible:ring-1 focus-visible:ring-primary"
            onClick={goToNextMonth}
            disabled={isAnimating}
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <motion.div
          key={currentMonth.toString()}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium"
        >
          {format(currentMonth, "MMMM yyyy")}
        </motion.div>

        <div className="flex items-center gap-1">
          {!isCurrentBillingMonth && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs transition-all duration-200 hover:bg-primary/10"
              onClick={goToBillingPeriod}
              disabled={isAnimating}
            >
              Billing Period
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs transition-all duration-200 hover:bg-primary/10"
            onClick={goToToday}
            disabled={isAnimating || isSameMonth(currentMonth, today)}
          >
            Today
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {weekdays.map((day) => (
          <div
            key={day}
            className="text-xs text-muted-foreground py-1 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentMonth.toString()}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="grid grid-cols-7 gap-1 text-center"
        >
          {days.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="h-8" />
            }

            const isToday = isSameDay(day, today)
            const isInBillingPeriod = isWithinInterval(day, {
              start: startDate,
              end: endDate,
            })
            const isStartDate = isSameDay(day, startDate)
            const isEndDate = isSameDay(day, endDate)
            const isPastDate = isBefore(day, today)
            const isHovered = hoveredDate && isSameDay(day, hoveredDate)

            return (
              <TooltipProvider key={day.toISOString()}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      className={cn(
                        "relative flex items-center justify-center h-8 text-xs rounded-md transition-all duration-200",
                        isToday && "font-semibold",
                        isPastDate &&
                          !isInBillingPeriod &&
                          "text-muted-foreground/70",
                        isInBillingPeriod &&
                          "bg-primary/10 hover:bg-primary/15",
                        isStartDate &&
                          "bg-primary/20 rounded-l-md hover:bg-primary/25",
                        isEndDate &&
                          "bg-yellow-500/20 rounded-r-md hover:bg-yellow-500/25",
                        (isStartDate || isEndDate) && "font-medium",
                        isHovered && "ring-1 ring-primary/50 scale-105",
                        "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setHoveredDate(day)}
                      onMouseLeave={() => setHoveredDate(null)}
                      tabIndex={0}
                      role="button"
                      aria-label={format(day, "EEEE, MMMM d, yyyy")}
                    >
                      {format(day, "d")}

                      {/* Today indicator */}
                      {isToday && (
                        <motion.div
                          className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.2 }}
                        />
                      )}

                      {/* Special date indicators */}
                      {isStartDate && (
                        <motion.div
                          className="absolute -top-1 right-0.5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                        >
                          <Info className="h-2 w-2 text-primary" />
                        </motion.div>
                      )}
                      {isEndDate && (
                        <motion.div
                          className="absolute -top-1 right-0.5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                        >
                          <Info className="h-2 w-2 text-yellow-500" />
                        </motion.div>
                      )}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs p-2 shadow-md">
                    <p className="font-medium">
                      {format(day, "EEEE, MMMM d, yyyy")}
                    </p>
                    {isToday && <p className="text-primary">Today</p>}
                    {isStartDate && (
                      <p className="text-primary">Billing period start</p>
                    )}
                    {isEndDate && (
                      <p className="text-yellow-500">Billing period end</p>
                    )}
                    {isInBillingPeriod && !isStartDate && !isEndDate && (
                      <p>Current billing period</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
