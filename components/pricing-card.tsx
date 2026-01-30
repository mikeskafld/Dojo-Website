"use client"

import { Product } from "@polar-sh/sdk/models/components/product.js"
import { ProductPrice } from "@polar-sh/sdk/models/components/productprice.js"
import { Check, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { PolarCheckoutButton } from "@/app/(marketing)/pricing/submit-button"

export function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  product,
  userId,
  userEmail,
  isPopular,
  className,
}: {
  name: string
  price: number
  interval: string
  trialDays: number
  features: string[]
  product: Product
  userId: string
  userEmail: string
  isPopular: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative bg-background/20 dark:bg-background/50  shadow-elevation-light dark:shadow-elevation-dark-three p-8 transition-all flex flex-col max-w-md",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-muted text-muted-foreground-foreground px-4 py-1  text-sm font-medium flex items-center gap-1 shadow-elevation-light dark:shadow-elevation-dark">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-foreground mb-2">{name}</h2>
        <p className="text-sm text-foreground/80">{trialDays}-day free trial</p>
      </div>

      <div className="text-center mb-8">
        <p className="text-5xl font-medium text-foreground mb-2">
          ${price / 100}
        </p>
        <p className="text-foreground/80"> / {interval}</p>
      </div>

      <ul className="space-y-4 mb-8 mx-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto  pt-8">
        <div className=" flex flex-col justify-center items-center  ">
          <div className="rounded-full  py-1 px-1   ">
            <PolarCheckoutButton
              product={product}
              firstPrice={product.prices?.[0] as ProductPrice}
              userId={userId}
              userEmail={userEmail}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
