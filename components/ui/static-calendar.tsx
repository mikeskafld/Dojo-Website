"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SubscriptionCalendarProps {
  startDate: Date | string
  endDate: Date | string
  className?: string
}

export function SubscriptionCalendar({
  startDate,
  endDate,
  className,
}: SubscriptionCalendarProps) {
  // Convert string dates to Date objects if needed
  const start = typeof startDate === "string" ? new Date(startDate) : startDate
  const end = typeof endDate === "string" ? new Date(endDate) : endDate
  const today = new Date()

  // Initialize with the month of the start date
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(start.getFullYear(), start.getMonth(), 1)
  )

  // Check if we need to show multiple months
  const startMonth = start.getMonth()
  const startYear = start.getFullYear()
  const endMonth = end.getMonth()
  const endYear = end.getFullYear()
  const spanMultipleMonths = startMonth !== endMonth || startYear !== endYear

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // Format month name
  const formatMonth = (date: Date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" })
  }

  // Check if a date is within the subscription period
  const isInPeriod = (date: Date) => {
    return (
      date >= new Date(start.setHours(0, 0, 0, 0)) &&
      date <= new Date(end.setHours(23, 59, 59, 999))
    )
  }

  // Check if a date is today
  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    )
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    )
  }

  // Reset to start month when props change
  useEffect(() => {
    setCurrentMonth(new Date(start.getFullYear(), start.getMonth(), 1))
  }, [startDate, endDate])

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-7 w-7" />)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const inPeriod = isInPeriod(date)
      const isStartDate =
        day === start.getDate() &&
        month === start.getMonth() &&
        year === start.getFullYear()
      const isEndDate =
        day === end.getDate() &&
        month === end.getMonth() &&
        year === end.getFullYear()

      days.push(
        <div
          key={`day-${day}`}
          className={cn(
            "h-7 w-7 flex items-center justify-center text-xs rounded-full relative",
            inPeriod && "bg-primary/10",
            isStartDate && "rounded-l-full",
            isEndDate && "rounded-r-full",
            isToday(date) && "font-bold"
          )}
        >
          {day}
          {isToday(date) && (
            <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full"></div>
          )}
        </div>
      )
    }

    return days
  }

  return (
    <div
      className={cn(
        "border border-border rounded-lg p-3 bg-background",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={prevMonth}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </Button>
        <h3 className="text-sm font-medium">{formatMonth(currentMonth)}</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={nextMonth}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div
            key={day}
            className="h-6 flex items-center justify-center text-xs text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>

      {spanMultipleMonths && (
        <div className="mt-2 text-xs text-muted-foreground text-center">
          {formatMonth(start)} — {formatMonth(end)}
        </div>
      )}

      <div className="mt-3 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-primary/10 mr-1"></div>
          <span className="text-muted-foreground">Subscription period</span>
        </div>
        <div className="flex items-center">
          <div className="w-1 h-1 rounded-full bg-primary mr-1"></div>
          <span className="text-muted-foreground">Today</span>
        </div>
      </div>
    </div>
  )
}
