// app/checkout/route.ts

import { NextRequest } from "next/server"

import { createClient } from "@/lib/db/server"
import { polarApi } from "@/lib/polar"
import { getURL } from "@/lib/utils"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const productId =
      searchParams.get("productId") || searchParams.get("product_id")
    const referralId = searchParams.get("affonso_referral")

    // Get authenticated user
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("❌ User not authenticated:", authError)
      return new Response("User not authenticated", { status: 401 })
    }

    if (!productId) {
      console.error("❌ Missing product ID")
      return new Response("Missing product ID", { status: 400 })
    }

    // Check if user already has a subscription
    const { data: existingSubscription } = await supabase
      .from("subscriptions")
      .select("polar_customer_id")
      .eq("user_id", user.id)
      .single()

    // Create a checkout session
    const checkout = await polarApi.checkouts.create({
      products: [productId],
      customerId: existingSubscription?.polar_customer_id,
      customerExternalId: user.id,
      customerEmail: user.email,
      successUrl: `${getURL()}/dashboard/billing-details`,
      metadata: {
        ...(referralId && { affonso_referral: referralId }),
        product_id: productId,
        // Store product details as stringified JSON to comply with metadata type requirements
        product_details: await polarApi.products
          .get({ id: productId })
          .then((product) =>
            JSON.stringify({
              name: product.name,
              recurring_interval: product.recurringInterval,
            })
          )
          .catch(() => ""),
      },
    })

    // Redirect to the checkout URL
    return Response.redirect(checkout.url)
  } catch (error) {
    console.error("❌ Error creating checkout:", {
      error:
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : error,
      timestamp: new Date().toISOString(),
    })

    return new Response("Error creating checkout", {
      status: 500,
      statusText:
        error instanceof Error
          ? error.message.replace(/\n/g, " ")
          : "Unknown error",
    })
  }
}
