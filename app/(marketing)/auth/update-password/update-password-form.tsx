"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { createClient } from "@/lib/db/client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlowEffect } from "@/components/bg-glow"
import { Magnetic } from "@/components/magnetic"
import { SectionCard } from "@/components/section-card"

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })
      if (error) throw error
      router.push("/auth/login")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <SectionCard>
        <div className="space-y-8 p-4 md:p-8">
          <form onSubmit={handleUpdatePassword} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-card/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {isLoading ? "Updating..." : "Update Password"}
                    {!isLoading && <ArrowRight className="size-5" />}
                  </span>
                </Button>
              </Magnetic>
            </div>
          </form>
        </div>
      </SectionCard>
    </div>
  )
}
