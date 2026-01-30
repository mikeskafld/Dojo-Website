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
  const { result } = await polarApi.products.list({
    isArchived: false,
  })

  return result.items
}
