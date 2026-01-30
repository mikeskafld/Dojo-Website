"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { LogIn, Menu } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HeaderAccountDropdown } from "@/components/account-dropdown"
import { VibeLogo } from "@/components/logo"

type MainNavProps = {
  session: User | null
}

export function MainNav({ session }: MainNavProps) {
  const pathname = usePathname()

  // Check if current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <header
      className="w-full z-40 shadow-elevation-light dark:shadow-elevation-dark bg-card max-w-sm mx-auto md:max-w-7xl p-1"
      role="banner"
    >
      <div className="container  shadow-elevation-light dark:shadow-elevation-dark bg-card p-1">
        <div className="flex h-14 items-center justify-between pl-4">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-3"
              aria-label="Cult Pro Home"
            >
              <VibeLogo />

              <p className="font-medium text-sm text-foreground">Vibe </p>
            </Link>

            {/* Primary navigation - desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-foreground"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section */}
          <nav className="flex items-center space-x-3">
            {session ? (
              <HeaderAccountDropdown user={session} />
            ) : (
              <div className=" hidden md:flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link
                    href="/auth/login"
                    className={cn(
                      "hidden md:flex items-center space-x-1.5 text-xs",
                      "h-8 px-3 rounded-md",
                      "border border-border",
                      "text-foreground",
                      "hover:bg-accent transition-colors"
                    )}
                  >
                    <span>Login</span>
                    <LogIn className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden p-0 h-8 w-8"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6">
                <div className="flex flex-col space-y-6 mt-6">
                  <nav className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-sm py-1.5 transition-colors",
                          isActive(item.href)
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {!session && (
                    <div className="pt-4">
                      <Link
                        href="/auth/login"
                        className={cn(
                          "flex items-center justify-center",
                          "h-9 w-full rounded-md",
                          "bg-primary",
                          "text-primary-foreground text-sm font-medium"
                        )}
                      >
                        Login
                      </Link>
                      <div className="flex justify-end mt-4">
                        <ModeToggle />
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
