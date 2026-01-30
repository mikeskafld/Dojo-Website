"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { createClient } from "@/lib/db/client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      })
      if (error) throw error
      setIsSuccess(true)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <SectionCard>
          <div className="space-y-8 p-4 md:p-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Check your email for a password reset link. If you don&apos;t
                see it, check your spam folder.
              </p>
              <div className="relative">
                <GlowEffect
                  scale={0.8}
                  mode="rotate"
                  blur="strongest"
                  className="absolute inset-0"
                  colors={["#FF00FF", "#FF1493", "#FF69B4", "#FFB6C1"]}
                />
                <Magnetic>
                  <Link href="/auth/login">
                    <Button
                      variant="outline"
                      className="w-full relative z-10 text-lg py-6 bg-secondary dark:bg-background/80 hover:bg-secondary/80"
                    >
                      <span className="flex items-center gap-2">
                        Return to Login
                        <ArrowRight className="size-5" />
                      </span>
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <SectionCard>
        <div className="space-y-8 p-4 md:p-8">
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card/50"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-500/10 p-3 rounded-md">
                {error}
              </p>
            )}

            <div className="relative">
              <GlowEffect
                scale={0.8}
                mode="rotate"
                blur="strongest"
                className="absolute inset-0"
                colors={["#FF00FF", "#FF1493", "#FF69B4", "#FFB6C1"]}
              />
              <Magnetic>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full relative z-10 text-lg py-6 bg-secondary dark:bg-background/80 hover:bg-secondary/80"
                  disabled={isLoading}
                >
                  <span className="flex items-center gap-2">
                    {isLoading ? "Sending..." : "Send Reset Link"}
                    {!isLoading && <ArrowRight className="size-5" />}
                  </span>
                </Button>
              </Magnetic>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </SectionCard>
    </div>
  )
}
