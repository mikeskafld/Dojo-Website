"use client"

import React from "react"
import Link from "next/link"
import { User } from "@supabase/supabase-js"
import { ExternalLinkIcon } from "lucide-react"

import { signOut } from "@/lib/db/actions"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ModeToggle } from "./ui/mode-toggle"
import { Separator } from "./ui/separator"

export function HeaderAccountDropdown({ user }: { user: User }) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={user?.user_metadata?.avatar_url ?? undefined}
            alt="user"
          />
          <AvatarFallback className="bg-gradient-to-r from-[#C8AFF7] to-[#99C9FD] text-white">
            {user?.user_metadata?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="w-[calc(100%-2rem)] min-w-[240px] max-w-[320px] p-1.5 sm:w-auto"
      >
        <div className="px-1.5 py-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 p-2">
              <div className="flex flex-col text-left text-xs">
                {user?.user_metadata?.name ? (
                  <h2 className="text-[14px] font-medium">
                    @{user?.user_metadata?.name}
                  </h2>
                ) : null}
                <h1>{user?.email}</h1>
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-1">
            {/* <DropdownMenuItem>
            <Link className="flex w-full items-center justify-between gap-2" href="/activate">
              <span>License</span>
            </Link>
          </DropdownMenuItem> */}
            <DropdownMenuItem>
              <Link
                className="flex w-full items-center justify-between gap-2"
                href="https://www.cult-ui.com/"
                target="_blank"
              >
                <span>Pricing</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex w-full items-center justify-between gap-2"
                href="/dashboard"
              >
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
          </div>
          <Separator />
          <div className="py-1">
            <DropdownMenuItem className="px-2">
              <Link
                className="flex w-full items-center justify-between gap-2"
                href="/"
                target="_blank"
              >
                <span>Home</span>
                <ExternalLinkIcon className="h-4 w-4" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={isPending}
              onSelect={(e) => {
                e.preventDefault()
                startTransition(async () => {
                  await signOut()
                })
              }}
            >
              <span>{isPending ? "Signing out..." : "Sign out"}</span>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
      <ModeToggle />
    </DropdownMenu>
  )
}
