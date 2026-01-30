import { redirect } from "next/navigation"

import { getSubscription } from "@/lib/db/actions"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { AppSidebar } from "./app-sidebar"
import { BreadcrumbNav } from "./breadcrumb-nav"

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getSubscription()

  if (!data?.user.id) {
    redirect("/auth/login")
  }

  if (
    data?.user?.id &&
    data?.status !== "active" &&
    data?.status !== "trialing"
  ) {
    redirect("/pricing")
  }

  return (
    <SidebarProvider>
      <AppSidebar subscription={data} />
      <SidebarInset className="p-[2px]">
        <div className="   flex w-full flex-1 flex-col p-1  md:min-h-min bg-background shadow-elevation-light dark:shadow-elevation-dark   ">
          <div className="   flex w-full flex-1 flex-col p-1  md:min-h-min bg-card shadow-elevation-light dark:shadow-elevation-dark   ">
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadcrumbNav />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}

              {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
