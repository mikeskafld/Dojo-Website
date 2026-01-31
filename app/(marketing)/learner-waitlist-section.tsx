"use client"

import { useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, useInView, AnimatePresence } from "motion/react"
import { CheckCircle, AlertCircle, Loader2, Sparkles, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  submitLearnerWaitlist,
  type LearnerWaitlistFormData,
  type LearnerWaitlistResult,
} from "@/lib/db/actions"

const interests = [
  { value: "fitness", label: "Fitness & Health" },
  { value: "music", label: "Music & Audio" },
  { value: "makeup", label: "Beauty & Makeup" },
  { value: "other", label: "Other" },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function LearnerWaitlistSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<LearnerWaitlistFormData>({
    email: "",
    name: "",
    interests: [],
  })
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string
    interests?: string
  }>({})

  const validateField = (name: string, value: string | string[]): string => {
    if (name === "email") {
      if (!value || (typeof value === "string" && !value.trim())) {
        return "Email is required"
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (typeof value === "string" && !emailRegex.test(value)) {
        return "Please enter a valid email address"
      }
    }

    if (name === "interests") {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        return "Please select at least one interest"
      }
    }

    return ""
  }

  const handleSwitchToCreator = () => {
    // Update URL to creator mode
    const params = new URLSearchParams(searchParams.toString())
    params.set("mode", "creator")
    router.push(`/?${params.toString()}#apply`, { scroll: false })

    // Scroll to apply section after a brief delay for URL update
    setTimeout(() => {
      const applySection = document.getElementById("apply")
      if (applySection) {
        applySection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error on change
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setFieldErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests: newInterests }
    })

    // Clear interests error when user selects one
    if (fieldErrors.interests) {
      setFieldErrors((prev) => ({ ...prev, interests: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all required fields
    const errors: { email?: string; interests?: string } = {}
    let hasErrors = false

    const emailError = validateField("email", formData.email)
    if (emailError) {
      errors.email = emailError
      hasErrors = true
    }

    const interestsError = validateField("interests", formData.interests)
    if (interestsError) {
      errors.interests = interestsError
      hasErrors = true
    }

    if (hasErrors) {
      setFieldErrors(errors)
      return
    }

    setFormState("submitting")
    setErrorMessage("")

    const result: LearnerWaitlistResult = await submitLearnerWaitlist(formData)

    if (result.success) {
      setFormState("success")
      setFormData({
        email: "",
        name: "",
        interests: [],
      })
    } else {
      setFormState("error")
      setErrorMessage(result.message)
    }
  }

  return (
    <section
      id="waitlist"
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
            <span className="dojo-text-gradient">Get Early Access</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--dojo-text-muted)]">
            Be the first to know when Dojo launches. Join our waitlist and
            unlock exclusive early access to master new skills.
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
                    You&apos;re on the List!
                  </h3>
                  <p className="text-[var(--dojo-text-muted)]">
                    Thanks for joining! We&apos;ll notify you as soon as Dojo
                    is ready. Get ready to master new skills.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6 text-[var(--dojo-cyan)] hover:text-[var(--dojo-cyan-light)]"
                    onClick={() => setFormState("idle")}
                  >
                    Sign Up Another Email
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

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[var(--dojo-text)]">
                      Email Address <span className="text-destructive">*</span>
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
                      <p className="text-xs text-destructive">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Name (optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[var(--dojo-text)]">
                      Name{" "}
                      <span className="text-[var(--dojo-text-subtle)]">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === "submitting"}
                    />
                  </div>

                  {/* Interests (multi-select) */}
                  <div className="space-y-3">
                    <Label className="text-[var(--dojo-text)]">
                      What are you interested in learning?{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => {
                        const isSelected = formData.interests.includes(
                          interest.value
                        )
                        return (
                          <button
                            key={interest.value}
                            type="button"
                            disabled={formState === "submitting"}
                            onClick={() => handleInterestToggle(interest.value)}
                            className={`min-h-[44px] px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-[var(--dojo-cyan)] text-[var(--dojo-bg)] border-[var(--dojo-cyan)]"
                                : "bg-transparent text-[var(--dojo-text-muted)] border-[var(--dojo-border)] hover:border-[var(--dojo-cyan)] hover:text-[var(--dojo-text)]"
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            {interest.label}
                          </button>
                        )
                      })}
                    </div>
                    {fieldErrors.interests && (
                      <p className="text-xs text-destructive">
                        {fieldErrors.interests}
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
                        Joining...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Join Waitlist
                      </>
                    )}
                  </Button>

                  {/* Privacy note */}
                  <p className="text-xs text-center text-[var(--dojo-text-subtle)]">
                    By joining, you agree to receive updates about Dojo.
                    We&apos;ll never spam you or share your info.
                  </p>

                  {/* Cross-promotion CTA */}
                  <div className="pt-4 border-t border-[var(--dojo-border)]">
                    <p className="text-sm text-center text-[var(--dojo-text-muted)] mb-3">
                      Want to teach instead?
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-[var(--dojo-border)] hover:border-[var(--dojo-cyan)] hover:bg-[var(--dojo-cyan-muted)] transition-colors"
                      onClick={handleSwitchToCreator}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Creator? Apply Now!
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
