import { Suspense } from "react"

import { getUser } from "@/lib/db/actions"

import { MainNav } from "./marketing-navbar"

export async function SiteHeader() {
  const session = await getUser()

  return (
    <Suspense fallback={<MainNav session={null} />}>
      <div className="container mx-auto max-w-7xl pt-1 px-1 md:py-3">
        <MainNav session={session} />
      </div>
    </Suspense>
  )
}
