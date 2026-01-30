"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BadgeCheck,
  ChevronsUpDown,
  CreditCard,
  ExternalLink,
  Home,
  LogOut,
  Sparkles,
} from "lucide-react"

import { SubscriptionType } from "@/lib/db/actions"
import { createClient } from "@/lib/db/client"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/ui/mode-toggle"

export function NavUser({
  subscription,
  className,
}: {
  subscription: SubscriptionType
  className?: string
}) {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const isSubscriptionActive = subscription?.status === "active"

  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/auth/login")
  }
  const handleSignOut = async (e: Event) => {
    e.preventDefault()

    startTransition(async () => {
      await logout()
    })
  }

  return (
    <div className={cn("relative", className)}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
              "hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              open && "bg-accent/50"
            )}
          >
            <Avatar className="h-8 w-8 border border-border shadow-sm">
              <AvatarImage
                src={
                  subscription?.user?.avatar ||
                  "/placeholder.svg?height=32&width=32&query=user"
                }
                alt={subscription?.user?.name || "User"}
              />
              <AvatarFallback className="bg-gradient-to-r from-[#C8AFF7] to-[#99C9FD] text-white">
                {subscription?.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-sm leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="truncate font-medium">
                  {subscription?.user?.name ?? "User"}
                </span>
                {isSubscriptionActive && (
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                )}
              </div>
              <span className="truncate text-xs text-muted-foreground">
                {subscription?.user?.email}
              </span>
            </div>
            <ChevronsUpDown className="ml-auto size-4 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={8}
          className="w-[calc(100%-2rem)] min-w-[240px] max-w-[320px] p-1.5 sm:w-auto"
        >
          <div className="px-1.5 py-1">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-border shadow-sm">
                <AvatarImage
                  src={
                    subscription?.user?.avatar ||
                    "/placeholder.svg?height=40&width=40&query=user"
                  }
                  alt={subscription?.user?.name || "User"}
                />
                <AvatarFallback className="bg-gradient-to-r from-[#C8AFF7] to-[#99C9FD] text-white">
                  {subscription?.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium">
                    {subscription?.user?.name ?? "User"}
                  </span>
                  {isSubscriptionActive && (
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {subscription?.user?.email}
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <Badge
                variant={isSubscriptionActive ? "default" : "outline"}
                className={cn(
                  "text-xs",
                  isSubscriptionActive &&
                    "bg-primary/10 text-primary hover:bg-primary/15"
                )}
              >
                {isSubscriptionActive ? "Pro Subscription" : "Free Plan"}
              </Badge>
              <ModeToggle />
            </div>
          </div>

          <DropdownMenuSeparator className="my-1.5" />

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link
                href={`/portal?customer_id=${subscription?.polar_customer_id}`}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm"
              >
                {isSubscriptionActive ? (
                  <>
                    <CreditCard className="h-4 w-4" />
                    <span>Manage Subscription</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">
                      Upgrade to Pro
                    </span>
                  </>
                )}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/"
                target="_blank"
                className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-50" />
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              disabled={isPending}
              onSelect={handleSignOut}
              className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-destructive hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              <span>{isPending ? "Signing out..." : "Sign out"}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
