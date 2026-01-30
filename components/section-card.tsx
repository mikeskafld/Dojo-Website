import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionCardProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function SectionCard({
  children,
  className = "",
  innerClassName = "",
}: SectionCardProps) {
  return (
    <div className="w-full h-full">
      <div
        className={cn(
          " bg-gradient-to-br from-card via-card/95 to-muted/90 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark p-1",
          className
        )}
      >
        <div
          className={cn(
            "bg-card/20 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-3 sm:px-4 md:px-6 py-12 md:py-16",
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
