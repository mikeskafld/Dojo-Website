import type { Metadata } from "next"

import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"

export const metadata: Metadata = {
  title: "Cult Pro Polar Starter",
  description: "Cult Pro Polar Starter",
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="bg-black md:bg-background ">
      <SiteHeader />
      <div className="container mx-auto max-w-7xl pt-1 md:pt-1 px-1">
        {children}
        <MarketingFooter />
      </div>
    </main>
  )
}
