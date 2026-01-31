"use server"

import { Product } from "@polar-sh/sdk/models/components/product.js"
import { Subscription } from "@polar-sh/sdk/models/components/subscription.js"

import { Database } from "@/types/db"
import { polarApi } from "@/lib/polar"

import { createClient } from "./server"

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  return { message: "Signed out successfully" }
}

export async function getUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    return null
  }

  return user
}

export type SubscriptionType =
  | (Database["public"]["Tables"]["subscriptions"]["Row"] & {
      user: {
        id: string | undefined
        email: string | undefined
        name: string | undefined
        avatar: string | undefined
      }
    })
  | null

export async function getSubscription(): Promise<SubscriptionType> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user?.id)
    .single()

  if (error || !data) {
    return null
  }

  return {
    ...data,
    user: {
      id: user?.id,
      email: user?.email,
      name: user?.user_metadata.name,
      avatar: user?.user_metadata.avatar_url,
    },
  }
}

export interface CompleteBillingDetails {
  user: {
    email: string
    name: string
    avatar: string
  } & Database["public"]["Tables"]["subscriptions"]["Row"]
  product: Product
  subscription: Subscription
}

export async function getCompleteBillingDetails(): Promise<CompleteBillingDetails | null> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user?.id)
    .single()

  if (error || !data) {
    return null
  }

  const [product, subscription] = await Promise.all([
    polarApi.products.get({
      id: data.polar_product_id,
    }),
    polarApi.subscriptions.get({
      id: data.polar_subscription_id,
    }),
  ])

  return {
    user: {
      email: user?.email,
      name: user?.user_metadata.name,
      avatar: user?.user_metadata.avatar_url,
      ...data,
    },
    product: product,
    subscription: subscription,
  }
}

export async function getPolarProducts() {
  if (!process.env.POLAR_ACCESS_TOKEN) {
    console.warn(
      "[getPolarProducts] POLAR_ACCESS_TOKEN not configured - returning empty product list"
    )
    return []
  }

  try {
    const { result } = await polarApi.products.list({
      isArchived: false,
    })
    return result.items
  } catch (error) {
    console.error(
      "[getPolarProducts] Failed to fetch products from Polar API:",
      error instanceof Error ? error.message : error
    )
    return []
  }
}

// Creator Application Form Types and Action
export type CreatorApplicationFormData = {
  name: string
  email: string
  niche: string
  socialLink: string
  audienceSize: string
}

export type CreatorApplicationResult = {
  success: boolean
  message: string
  error?: string
}

export async function submitCreatorApplication(
  data: CreatorApplicationFormData
): Promise<CreatorApplicationResult> {
  const supabase = await createClient()

  // Validate required fields
  if (!data.name || !data.email || !data.niche || !data.socialLink || !data.audienceSize) {
    return {
      success: false,
      message: "All fields are required",
      error: "VALIDATION_ERROR",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
      error: "INVALID_EMAIL",
    }
  }

  try {
    const { error } = await supabase.from("creator_applications").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      niche: data.niche,
      social_link: data.socialLink,
      audience_size: data.audienceSize,
    })

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email has already been submitted",
          error: "DUPLICATE_EMAIL",
        }
      }
      console.error("Error submitting creator application:", error)
      return {
        success: false,
        message: "Something went wrong. Please try again.",
        error: error.message,
      }
    }

    return {
      success: true,
      message: "Application received! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error submitting creator application:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: "UNKNOWN_ERROR",
    }
  }
}

// Learner Waitlist Form Types and Action
export type LearnerWaitlistFormData = {
  email: string
  name?: string
  interests: string[]
}

export type LearnerWaitlistResult = {
  success: boolean
  message: string
  error?: string
}

export async function submitLearnerWaitlist(
  data: LearnerWaitlistFormData
): Promise<LearnerWaitlistResult> {
  const supabase = await createClient()

  // Validate required fields
  if (!data.email) {
    return {
      success: false,
      message: "Email is required",
      error: "VALIDATION_ERROR",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
      error: "INVALID_EMAIL",
    }
  }

  // Validate interests (at least one required)
  if (!data.interests || data.interests.length === 0) {
    return {
      success: false,
      message: "Please select at least one interest",
      error: "VALIDATION_ERROR",
    }
  }

  try {
    const { error } = await supabase.from("learner_waitlist").insert({
      email: data.email.toLowerCase(),
      name: data.name?.trim() || null,
      interests: data.interests,
    })

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already on the waitlist",
          error: "DUPLICATE_EMAIL",
        }
      }
      console.error("Error submitting learner waitlist:", error)
      return {
        success: false,
        message: "Something went wrong. Please try again.",
        error: error.message,
      }
    }

    return {
      success: true,
      message: "You're on the list! We'll notify you when we launch.",
    }
  } catch (error) {
    console.error("Error submitting learner waitlist:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: "UNKNOWN_ERROR",
    }
  }
}
