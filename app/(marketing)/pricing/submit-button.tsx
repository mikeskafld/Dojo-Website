"use client"

import { useMemo } from "react"
import { Product } from "@polar-sh/sdk/models/components/product.js"
import { ProductPrice } from "@polar-sh/sdk/models/components/productprice.js"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"

type PolarCheckoutButtonProps = {
  className?: string
  variant?: "lifetime" | "yearly"

  product: Product
  firstPrice: ProductPrice
  userId: string
  userEmail: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function PolarCheckoutButton({
  className,
  product,
  firstPrice,
  userId,
  userEmail,
}: PolarCheckoutButtonProps) {
  const checkoutUrl = useMemo(() => {
    const params = new URLSearchParams()
    params.append("productId", product.id)
    params.append("priceId", firstPrice.id)

    if (userId && userEmail) {
      params.append("userId", userId)
      params.append("userEmail", userEmail)
    }

    if (firstPrice.amountType === "fixed" && "priceAmount" in firstPrice) {
      params.append("amount", firstPrice.priceAmount.toString())
    }

    params.append("type", firstPrice.amountType || "fixed")

    // If no userId or email, redirect to signup with return URL
    if (!userId || !userEmail) {
      const returnUrl = `/checkout?${params.toString()}`
      return `/auth/sign-up?returnUrl=${encodeURIComponent(returnUrl)}`
    }

    return `/checkout?${params.toString()}`
  }, [product.id, firstPrice, userId, userEmail])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Small delay to ensure tracking completes before navigation
    setTimeout(() => {
      window.location.href = checkoutUrl
    }, 100)
  }

  return (
    <div className={cn("flex items-center justify-center  gap-4", className)}>
      <motion.div variants={itemVariants} className="">
        <div className="relative">
          {product.name === "Plus" && (
            <GlowEffect
              scale={0.8}
              mode="rotate"
              blur="strongest"
              className="absolute inset-0 px-6 md:px-12"
            />
          )}
          <Magnetic>
            <button className="w-full relative z-10 sm:w-auto inline-flex items-center justify-center  px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/80 dark:hover:bg-background/60">
              <motion.a
                href={checkoutUrl}
                onClick={handleClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <span className="flex items-center gap-2">
                  Get {product.name === "Plus" ? "Pro" : "Base"} access
                  <ArrowRight className="size-5 md:size-6" />
                </span>
              </motion.a>
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </div>
  )
}
