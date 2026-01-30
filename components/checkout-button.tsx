"use client"

import { useMemo } from "react"
import type { Product } from "@polar-sh/sdk/models/components/product"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Price = {
  id: string
  amountType: "fixed" | "recurring"
  priceAmount?: number
}

type PolarCheckoutButtonProps = {
  className?: string
  variant?: "lifetime" | "yearly"
  product: Product
  firstPrice: Price
}

export function PolarCheckoutButton({
  className,
  variant = "lifetime",
  product,
  firstPrice,
}: PolarCheckoutButtonProps) {
  const checkoutUrl = useMemo(() => {
    const params = new URLSearchParams()
    params.append("product_id", product.id)
    params.append("price_id", firstPrice.id)

    if (
      firstPrice.amountType === "fixed" &&
      firstPrice.priceAmount !== undefined
    ) {
      params.append("amount", firstPrice.priceAmount.toString())
    }

    params.append("type", firstPrice.amountType)
    return `/checkout?${params.toString()}` // Prod -> `https://pro.cult-ui.com/registry/blocks/polar-payment-subscription/app/checkout?${params.toString()}`;
  }, [product.id, firstPrice])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Small delay to ensure tracking completes before navigation
    setTimeout(() => {
      window.location.href = checkoutUrl
    }, 100)
  }

  return (
    <a
      className="w-full flex justify-center"
      href={checkoutUrl}
      onClick={handleClick}
    >
      <Button
        className={cn(
          "w-full relative mt-6 lg:mt-10 text-white bg-gradient-to-b from-neutral-800 via-neutral-800 to-black px-6 py-2 rounded-full group transition-[width] duration-100  text-lg flex items-center mx-auto md:w-auto shadow-[0_1px_5px_rgba(0,0,0,0.2)]",
          variant === "lifetime"
            ? "bg-gradient-to-t from-[#d619d6] via-[#fb21ff] to-[#ff8bff] text-white"
            : "bg-gradient-to-b from-neutral-800 via-neutral-800 to-black",
          className
        )}
      >
        Get {variant === "lifetime" ? "lifetime" : "yearly"} access
        <div className="w-0 opacity-0 group-hover:w-[16px] group-hover:opacity-100 ml-1 overflow-hidden duration-100  transition-[width]">
          →
        </div>
      </Button>
    </a>
  )
}
