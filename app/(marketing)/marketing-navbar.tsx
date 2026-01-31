"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { Menu } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HeaderAccountDropdown } from "@/components/account-dropdown"

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
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-creators", label: "For Creators" },
    { href: "/for-learners", label: "For Learners" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ]

  return (
    <header
      className="sticky top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
      role="banner"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Dojo Home"
            >
              <span className="text-xl font-bold text-foreground tracking-tight">
                dojo
              </span>
            </Link>

            {/* Primary navigation - desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-primary"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section */}
          <nav className="flex items-center space-x-4">
            {session ? (
              <HeaderAccountDropdown user={session} />
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Login
                </Link>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5"
                >
                  <Link href="/#waitlist">
                    Get Early Access
                  </Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-0 h-10 w-10"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-6 bg-background border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-base py-2 transition-colors",
                          isActive(item.href)
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {!session && (
                    <div className="pt-6 space-y-4 border-t border-border">
                      <Link
                        href="/auth/login"
                        className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        Login
                      </Link>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        <Link href="/#waitlist">
                          Get Early Access
                        </Link>
                      </Button>
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
