"use client"

import { useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  submitCreatorApplication,
  type CreatorApplicationFormData,
  type CreatorApplicationResult,
} from "@/lib/db/actions"

const niches = [
  { value: "", label: "Select your content niche" },
  { value: "fitness", label: "Fitness & Health" },
  { value: "music", label: "Music & Audio" },
  { value: "makeup", label: "Beauty & Makeup" },
  { value: "cooking", label: "Cooking & Food" },
  { value: "photography", label: "Photography & Video" },
  { value: "art", label: "Art & Design" },
  { value: "coding", label: "Programming & Tech" },
  { value: "business", label: "Business & Finance" },
  { value: "language", label: "Language Learning" },
  { value: "other", label: "Other" },
]

const audienceSizes = [
  { value: "", label: "Select your audience size" },
  { value: "0-1k", label: "0 - 1,000" },
  { value: "1k-10k", label: "1,000 - 10,000" },
  { value: "10k-100k", label: "10,000 - 100,000" },
  { value: "100k-1m", label: "100,000 - 1,000,000" },
  { value: "1m+", label: "1,000,000+" },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function CreatorApplicationSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<CreatorApplicationFormData>({
    name: "",
    email: "",
    niche: "",
    socialLink: "",
    audienceSize: "",
  })
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof CreatorApplicationFormData, string>>
  >({})

  const validateField = (
    name: keyof CreatorApplicationFormData,
    value: string
  ): string => {
    if (!value.trim()) {
      return "This field is required"
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address"
      }
    }

    if (name === "socialLink") {
      try {
        new URL(value)
      } catch {
        return "Please enter a valid URL"
      }
    }

    return ""
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error on change
    if (fieldErrors[name as keyof CreatorApplicationFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const error = validateField(name as keyof CreatorApplicationFormData, value)
    setFieldErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const errors: Partial<Record<keyof CreatorApplicationFormData, string>> = {}
    let hasErrors = false

    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key as keyof CreatorApplicationFormData, value)
      if (error) {
        errors[key as keyof CreatorApplicationFormData] = error
        hasErrors = true
      }
    }

    if (hasErrors) {
      setFieldErrors(errors)
      return
    }

    setFormState("submitting")
    setErrorMessage("")

    const result: CreatorApplicationResult =
      await submitCreatorApplication(formData)

    if (result.success) {
      setFormState("success")
      setFormData({
        name: "",
        email: "",
        niche: "",
        socialLink: "",
        audienceSize: "",
      })
    } else {
      setFormState("error")
      setErrorMessage(result.message)
    }
  }

  const selectStyles =
    "flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:bg-input/30"

  const handleSwitchToLearner = () => {
    // Update URL to learner mode
    const params = new URLSearchParams(searchParams.toString())
    params.set("mode", "learner")
    router.push(`/?${params.toString()}#waitlist`, { scroll: false })

    // Scroll to waitlist section after a brief delay for URL update
    setTimeout(() => {
      const waitlistSection = document.getElementById("waitlist")
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <section
      id="apply"
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 dojo-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="dojo-text-gradient">Apply as a Creator</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
            Join our community of creators and start monetizing your expertise.
            We&apos;ll handle the course structure while you focus on what you do
            best.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative p-6 md:p-8 rounded-xl dojo-card">
            {/* Card glow effect */}
            <div className="absolute inset-0 rounded-xl border border-[var(--dojo-border)]" />
            <div
              className="absolute inset-0 rounded-xl opacity-50"
              style={{
                boxShadow: "var(--dojo-glow-subtle)",
              }}
            />

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--dojo-cyan-muted)] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[var(--dojo-cyan)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dojo-text)] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-[var(--dojo-text-muted)]">
                    Thanks for your interest! We&apos;ll review your application
                    and get back to you soon.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6 text-[var(--dojo-cyan)] hover:text-[var(--dojo-cyan-light)]"
                    onClick={() => setFormState("idle")}
                  >
                    Submit Another Application
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative space-y-5"
                >
                  {/* Error Banner */}
                  {formState === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                    >
                      <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                      <p className="text-sm text-destructive">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[var(--dojo-text)]">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formState === "submitting"}
                      aria-invalid={!!fieldErrors.name}
                      className={fieldErrors.name ? "border-destructive" : ""}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-destructive">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[var(--dojo-text)]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formState === "submitting"}
                      aria-invalid={!!fieldErrors.email}
                      className={fieldErrors.email ? "border-destructive" : ""}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-destructive">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* Content Niche */}
                  <div className="space-y-2">
                    <Label htmlFor="niche" className="text-[var(--dojo-text)]">
                      Content Niche
                    </Label>
                    <select
                      id="niche"
                      name="niche"
                      value={formData.niche}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formState === "submitting"}
                      aria-invalid={!!fieldErrors.niche}
                      className={`${selectStyles} ${
                        fieldErrors.niche ? "border-destructive" : ""
                      } ${!formData.niche ? "text-muted-foreground" : ""}`}
                    >
                      {niches.map((niche) => (
                        <option key={niche.value} value={niche.value}>
                          {niche.label}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.niche && (
                      <p className="text-xs text-destructive">{fieldErrors.niche}</p>
                    )}
                  </div>

                  {/* Social Profile Link */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="socialLink"
                      className="text-[var(--dojo-text)]"
                    >
                      Social Profile Link
                    </Label>
                    <Input
                      id="socialLink"
                      name="socialLink"
                      type="url"
                      placeholder="https://youtube.com/@yourchannel"
                      value={formData.socialLink}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formState === "submitting"}
                      aria-invalid={!!fieldErrors.socialLink}
                      className={
                        fieldErrors.socialLink ? "border-destructive" : ""
                      }
                    />
                    {fieldErrors.socialLink && (
                      <p className="text-xs text-destructive">
                        {fieldErrors.socialLink}
                      </p>
                    )}
                  </div>

                  {/* Monthly Audience Size */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="audienceSize"
                      className="text-[var(--dojo-text)]"
                    >
                      Monthly Audience Size
                    </Label>
                    <select
                      id="audienceSize"
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={formState === "submitting"}
                      aria-invalid={!!fieldErrors.audienceSize}
                      className={`${selectStyles} ${
                        fieldErrors.audienceSize ? "border-destructive" : ""
                      } ${!formData.audienceSize ? "text-muted-foreground" : ""}`}
                    >
                      {audienceSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.audienceSize && (
                      <p className="text-xs text-destructive">
                        {fieldErrors.audienceSize}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full dojo-btn-primary"
                    size="lg"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </Button>

                  {/* Privacy note */}
                  <p className="text-xs text-center text-[var(--dojo-text-subtle)]">
                    By submitting, you agree to our privacy policy. We&apos;ll
                    only use your info to contact you about your application.
                  </p>

                  {/* Cross-promotion CTA */}
                  <div className="pt-4 border-t border-[var(--dojo-border)]">
                    <p className="text-sm text-center text-[var(--dojo-text-muted)] mb-3">
                      Want to learn instead?
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-[var(--dojo-border)] hover:border-[var(--dojo-cyan)] hover:bg-[var(--dojo-cyan-muted)] transition-colors"
                      onClick={handleSwitchToLearner}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Learner? Join Waitlist!
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
