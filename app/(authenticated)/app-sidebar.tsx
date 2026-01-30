"use client"

import * as React from "react"
import { BookOpen, Frame, Map, PieChart, Send, Shapes } from "lucide-react"

import { SubscriptionType } from "@/lib/db/actions"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { VibeLogo } from "@/components/logo"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Shapes,
      isActive: true,
      items: [
        {
          title: "Example Nested Page",
          url: "/dashboard/example-nested-page",
        },
        {
          title: "Billing Details",
          url: "/dashboard/billing-details",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Blog",
      url: "/blog",
      icon: BookOpen,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  subscription,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  subscription: SubscriptionType
}) {
  const metadata = subscription?.metadata as { product_details?: string } | null
  const productDetails = metadata?.product_details
    ? JSON.parse(metadata.product_details)
    : null
  return (
    <Sidebar variant="inset" {...props} className="">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <Command className="size-4" /> */}
                  <VibeLogo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Vibe</span>
                  <span className="truncate text-xs">
                    {productDetails?.name}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser subscription={subscription} />
      </SidebarFooter>
    </Sidebar>
  )
}
