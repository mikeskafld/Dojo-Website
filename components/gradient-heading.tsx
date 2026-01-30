import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "tracking-tight pb-3 bg-clip-text text-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-primary to-primary/90 dark:from-primary dark:to-primary/95",
        // "bg-gradient-to-t from-primary to-primary/90 dark:from-foreground dark:to-muted-foreground/90",
        helper:
          "bg-gradient-to-t from-muted-foreground to-muted-foreground/80 dark:from-muted-foreground dark:to-muted-foreground/70",
        accent:
          "bg-gradient-to-t from-accent to-accent/80 dark:from-accent dark:to-accent/90",
        pink: "bg-gradient-to-t from-[#d619d6] via-[#fb21ff] to-[#ff8bff] dark:from-[#fb21ff] dark:to-[#fd67ff]",

        blue: "bg-gradient-to-t from-[hsl(var(--chart-5))] to-[hsl(var(--chart-5))/80] dark:from-[hsl(var(--chart-5))] dark:to-[hsl(var(--chart-5))/90]",
        light:
          "bg-gradient-to-t from-neutral-200 to-neutral-300 dark:from-neutral-300 dark:to-neutral-400",
        lightTwo:
          "bg-gradient-to-t from-primary-foreground to-neutral-100 dark:from-neutral-300 dark:to-neutral-400",
        secondary:
          "bg-gradient-to-t from-secondary-foreground to-muted-foreground",
        none: "", // No gradient, use text color instead
      },
      size: {
        default: "text-2xl sm:text-3xl lg:text-4xl",
        xxs: "text-base sm:text-lg lg:text-lg",
        xs: "text-lg sm:text-xl lg:text-2xl",
        sm: "text-xl sm:text-2xl lg:text-3xl",
        md: "text-2xl sm:text-3xl lg:text-4xl",
        lg: "text-3xl sm:text-4xl lg:text-5xl",
        xl: "text-4xl sm:text-5xl lg:text-6xl",
        xlx: "text-4xl sm:text-5xl lg:text-[4.5rem]",
        xxl: "text-5xl sm:text-6xl xl:text-[6rem]",
        xxxl: "text-[4.5rem] leading-5 lg:leading-8 xl:leading-10 sm:text-6xl lg:text-6xl xl:text-[8rem]",
      },
      weight: {
        default: "font-bold",
        thin: "font-thin",
        base: "font-semibold md:font-base ",
        semi: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "default",
    },
  }
)

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  asChild?: boolean
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

const GradientHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      asChild,
      variant,
      weight,
      size,
      className,
      children,
      innerClassName,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "h3" // default to 'h3' if not a child
    return (
      <Comp ref={ref} {...props} className={className}>
        <span
          className={cn(
            headingVariants({ variant, size, weight }),
            innerClassName
          )}
        >
          {children}
        </span>
      </Comp>
    )
  }
)

GradientHeading.displayName = "GradientHeading"

// Manually define the variant types
export type Variant = "default" | "pink" | "light" | "secondary" | "helper"
export type Size =
  | "default"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
export type Weight = "default" | "thin" | "base" | "semi" | "bold" | "black"

export { GradientHeading, headingVariants }
