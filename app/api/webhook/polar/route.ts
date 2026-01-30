import { Webhooks } from "@polar-sh/nextjs"

import { handleSubscriptionChange } from "@/lib/db/service-role"

if (!process.env.POLAR_WEBHOOK_SECRET) {
  throw new Error("POLAR_WEBHOOK_SECRET is not set in environment variables.")
}

type SubscriptionEventType =
  | "subscription.created"
  | "subscription.updated"
  | "subscription.active"
  | "subscription.canceled"
  | "subscription.uncanceled"
  | "subscription.revoked"

interface SubscriptionEvent {
  type: SubscriptionEventType
  data: {
    id: string
    customerId: string
    productId: string
    status: string
    amount: number
    currency: string
    recurringInterval: "month" | "year"
    currentPeriodStart: Date
    currentPeriodEnd?: Date | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | null
    startedAt?: Date | null
    endsAt?: Date | null
    endedAt?: Date | null
    discountId?: string | null
    checkoutId?: string | null
    customerCancellationReason?: string | null
    customerCancellationComment?: string | null
    metadata?: Record<string, string | number | boolean | null> | null
    customer?: {
      externalId: string | null
      email?: string | null
      name?: string | null
    } | null
  }
}

const convertDateToISO = (
  date: Date | null | undefined
): string | null | undefined => {
  if (!date) return date
  return date.toISOString()
}

const ensureRequiredDate = (date: Date | null | undefined): string => {
  if (!date) return new Date().toISOString()
  return date.toISOString()
}

const handleSubscriptionEvent = async (event: SubscriptionEvent) => {
  console.log(`📦 Processing ${event.type} webhook:`, {
    subscriptionId: event.data.id,
    customerId: event.data.customerId,
    status: event.data.status,
  })

  try {
    await handleSubscriptionChange({
      id: event.data.id,
      customerId: event.data.customerId,
      productId: event.data.productId,
      status: event.data.status,
      amount: event.data.amount,
      currency: event.data.currency,
      recurringInterval: event.data.recurringInterval,
      currentPeriodStart: ensureRequiredDate(event.data.currentPeriodStart),
      currentPeriodEnd: convertDateToISO(event.data.currentPeriodEnd),
      cancelAtPeriodEnd: event.data.cancelAtPeriodEnd ?? false,
      canceledAt: convertDateToISO(event.data.canceledAt),
      startedAt: convertDateToISO(event.data.startedAt),
      endsAt: convertDateToISO(event.data.endsAt),
      endedAt: convertDateToISO(event.data.endedAt),
      discountId: event.data.discountId,
      checkoutId: event.data.checkoutId,
      customerCancellationReason: event.data.customerCancellationReason,
      customerCancellationComment: event.data.customerCancellationComment,
      metadata: event.data.metadata,
      customer: event.data.customer?.externalId
        ? { external_id: event.data.customer.externalId }
        : undefined,
    })

    console.log(`✅ Successfully processed ${event.type} webhook`)
  } catch (error) {
    console.error(`❌ Error processing ${event.type} webhook:`, {
      error:
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : error,
      subscriptionId: event.data.id,
      timestamp: new Date().toISOString(),
    })
    throw error
  }
}

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET,
  onSubscriptionCreated: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.created",
      data: subscription.data,
    })
  },
  onSubscriptionUpdated: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.updated",
      data: subscription.data,
    })
  },
  onSubscriptionActive: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.active",
      data: subscription.data,
    })
  },
  onSubscriptionCanceled: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.canceled",
      data: subscription.data,
    })
  },
  onSubscriptionUncanceled: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.uncanceled",
      data: subscription.data,
    })
  },
  onSubscriptionRevoked: async (subscription) => {
    await handleSubscriptionEvent({
      type: "subscription.revoked",
      data: subscription.data,
    })
  },
})
