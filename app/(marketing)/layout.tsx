import type { Metadata } from "next"

import { MarketingFooter } from "@/app/(marketing)/marketing-footer"
import { SiteHeader } from "@/app/(marketing)/marketing-header"

export const metadata: Metadata = {
  title: "Dojo - Master Any Skill",
  description: "The first marketplace powered by cognitive scaffolding. Turn your expertise into income or master any skill in minutes a day.",
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="dojo min-h-screen bg-background">
      <SiteHeader />
      <div className="container mx-auto max-w-7xl pt-1 md:pt-1 px-1">
        {children}
        <MarketingFooter />
      </div>
    </main>
  )
}
