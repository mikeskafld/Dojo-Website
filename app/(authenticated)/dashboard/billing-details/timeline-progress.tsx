"use client"

import type React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { AlertCircle, CreditCard } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface KeyDate {
  date: Date
  label: string
  type: "start" | "renewal" | "end" | "payment"
  icon?: React.ReactNode
}

interface TimelineProgressProps {
  progress: number
  startDate: Date
  endDate: Date
  isEnding: boolean
  currentPeriodStart: Date
  currentPeriodEnd: Date
}

export function TimelineProgress({
  progress,
  currentPeriodStart,
  currentPeriodEnd,
  isEnding,
  startDate,
  endDate,
}: TimelineProgressProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [focusedDate, setFocusedDate] = useState<number | null>(null)

  // Calculate position for each key date
  const getPositionPercentage = (date: Date) => {
    const totalDuration = endDate.getTime() - startDate.getTime()
    const elapsed = date.getTime() - startDate.getTime()
    return Math.max(0, Math.min(100, (elapsed / totalDuration) * 100))
  }

  // Key dates for the timeline
  const keyDates: KeyDate[] = [
    {
      date: currentPeriodStart,
      label: "Period Start",
      type: "start" as const,
      icon: <CreditCard className="h-3 w-3" />,
    },
    {
      date: currentPeriodEnd,
      label: isEnding ? "Subscription Ends" : "Next Billing Date",
      type: isEnding ? ("end" as const) : ("renewal" as const),
      icon: isEnding ? (
        <AlertCircle className="h-3 w-3" />
      ) : (
        <CreditCard className="h-3 w-3" />
      ),
    },
  ]

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Billing Period Progress</span>
        <motion.span
          key={Math.round(progress)}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-medium"
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      <div
        className="relative h-8 w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background track with subtle gradient */}
        <div className="absolute inset-0 h-2 top-3 bg-gradient-to-r from-muted/80 via-muted to-muted/80 rounded-full overflow-hidden shadow-inner">
          {/* Progress bar with subtle gradient */}
          <motion.div
            className="h-full bg-gradient-to-r from-primary/60 via-primary/80 to-primary/60"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Key dates markers */}
        {keyDates.map((keyDate, index) => {
          const position = getPositionPercentage(keyDate.date)
          const isFocused = focusedDate === index

          return (
            <TooltipProvider key={index}>
              <Tooltip open={isFocused || undefined}>
                <TooltipTrigger asChild>
                  <motion.div
                    className={cn(
                      "absolute top-1 -ml-2 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer",
                      "border-2 border-background transition-all duration-200",
                      keyDate.type === "start" &&
                        "bg-primary shadow-sm shadow-primary/20",
                      keyDate.type === "renewal" &&
                        "bg-primary shadow-sm shadow-primary/20",
                      keyDate.type === "end" &&
                        "bg-warning shadow-sm shadow-warning/20",
                      keyDate.type === "payment" &&
                        "bg-success shadow-sm shadow-success/20",
                      isFocused && "ring-2 ring-background/50"
                    )}
                    style={{ left: `${position}%` }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: isHovering || isFocused ? 1.1 : 1,
                      opacity: 1,
                      y: isHovering || isFocused ? -2 : 0,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                    onMouseEnter={() => setFocusedDate(index)}
                    onMouseLeave={() => setFocusedDate(null)}
                    onFocus={() => setFocusedDate(index)}
                    onBlur={() => setFocusedDate(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${keyDate.label}: ${format(
                      keyDate.date,
                      "MMMM d, yyyy"
                    )}`}
                  >
                    {keyDate.icon}

                    {/* Subtle pulse animation for markers */}
                    <AnimatePresence>
                      {(isHovering || isFocused) && (
                        <motion.div
                          className={cn(
                            "absolute inset-0 rounded-full",
                            keyDate.type === "start" && "bg-primary",
                            keyDate.type === "renewal" && "bg-primary",
                            keyDate.type === "end" && "bg-warning",
                            keyDate.type === "payment" && "bg-success"
                          )}
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.8 }}
                          exit={{ opacity: 0, scale: 1 }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={5} className="shadow-md">
                  <div className="text-xs">
                    <p className="font-medium">{keyDate.label}</p>
                    <p>{format(keyDate.date, "MMMM d, yyyy")}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}

        {/* Today marker */}
        {progress > 0 && progress < 100 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="absolute top-1 -ml-1 w-2 h-6 bg-primary/80 rounded-full shadow-sm"
                  style={{ left: `${progress}%` }}
                  initial={{ height: 2 }}
                  animate={{
                    height: isHovering ? 6 : 4,
                    opacity: isHovering ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={5} className="shadow-md">
                <p className="text-xs font-medium">Today</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  )
}
