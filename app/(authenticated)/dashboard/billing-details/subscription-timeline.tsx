import type React from "react"
import {
  AlertCircle,
  AlertTriangle,
  Ban,
  CalendarIcon,
  CheckCircle,
  Clock,
  CreditCard,
  ReceiptIcon,
  ShieldCheckIcon,
  Timer,
} from "lucide-react"

import { cn, formatCurrency, formatDate, formatDateTime } from "@/lib/utils"

type SubscriptionStatus =
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"

interface SubscriptionTimelineProps {
  subscription: {
    user: {
      status: SubscriptionStatus
      current_period_start: string | Date | null
      current_period_end: string | Date | null
      cancel_at_period_end: boolean
      canceled_at?: string | Date | null
      ends_at?: string | Date | null
      amount: number
      currency: string
      recurring_interval: string
    }
    subscription: {
      createdAt: string | Date
      customerCancellationReason?: string | null
    }
    product: {
      name: string
    }
  }
}

interface StatusConfig {
  color: string
  bgColor: string
  borderColor: string
  icon: React.ElementType
  label: string
}

const getStatusConfig = (status: SubscriptionStatus): StatusConfig => {
  switch (status) {
    case "incomplete":
      return {
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500",
        icon: Timer,
        label: "Incomplete",
      }
    case "incomplete_expired":
      return {
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive",
        icon: Ban,
        label: "Expired",
      }
    case "trialing":
      return {
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500",
        icon: Timer,
        label: "Trial",
      }
    case "active":
      return {
        color: "text-success",
        bgColor: "bg-success/10",
        borderColor: "border-success",
        icon: CheckCircle,
        label: "Active",
      }
    case "past_due":
      return {
        color: "text-warning",
        bgColor: "bg-warning/10",
        borderColor: "border-warning",
        icon: AlertTriangle,
        label: "Past Due",
      }
    case "canceled":
      return {
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive",
        icon: AlertCircle,
        label: "Canceled",
      }
    case "unpaid":
      return {
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive",
        icon: Ban,
        label: "Unpaid",
      }
    default:
      return {
        color: "text-muted-foreground",
        bgColor: "bg-muted/50",
        borderColor: "border-muted-foreground",
        icon: AlertCircle,
        label: "Unknown",
      }
  }
}

interface TimelineEventProps {
  title: React.ReactNode
  date: string | Date | null
  icon: React.ReactNode
  children?: React.ReactNode
  status?: SubscriptionStatus
  isFirstOrLast?: boolean
}

function TimelineEvent({
  title,
  date,
  icon,
  children,
  status,
  isFirstOrLast = false,
}: TimelineEventProps) {
  const statusConfig = status ? getStatusConfig(status) : null
  const isCreated = title === "Subscription Created"

  return (
    <div className="relative pl-10 group">
      {/* Connecting line - hide for the last item */}
      {!isFirstOrLast && (
        <div className="absolute left-[7.5px] -top-8 bottom-[calc(100%-8px)] w-[1px] bg-border"></div>
      )}

      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div
          className={cn(
            "w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center",
            statusConfig ? statusConfig.borderColor : "border-primary",
            isCreated && "border-success"
          )}
        >
          <div
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              statusConfig
                ? statusConfig.color.replace("text-", "bg-")
                : "bg-primary",
              isCreated && "bg-success"
            )}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-sm font-medium flex items-center">
            {icon}
            {title}
          </div>
          {/* {date && (
            <div className="text-xs text-muted-foreground flex items-center mt-0.5">
              <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
              <span>{formatDateTime(date)}</span>
            </div>
          )} */}
          {children}
        </div>
        <div className="flex flex-col space-y-1 items-start">
          {date && (
            <div className="text-xs text-muted-foreground flex items-center mt-0.5">
              <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
              <span>{formatDateTime(date)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({
  status,
  children,
}: {
  status: SubscriptionStatus
  children: React.ReactNode
}) {
  const statusConfig = getStatusConfig(status)
  const Icon = statusConfig.icon

  return (
    <div
      className={cn(
        "mt-2 text-xs px-3 py-1.5 rounded-md inline-flex items-center self-start",
        statusConfig.bgColor
      )}
    >
      <Icon
        className={cn("h-3 w-3 mr-1.5", statusConfig.color)}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

export function SubscriptionTimeline({
  subscription,
}: SubscriptionTimelineProps) {
  const { user, subscription: sub, product } = subscription
  const isEnded = user.ends_at && new Date(user.ends_at) <= new Date()

  return (
    <div className="relative pt-2 pb-4">
      {/* Timeline track */}
      <div
        className="absolute left-[7.5px] top-2 bottom-0 w-[1px] bg-border"
        aria-hidden="true"
      ></div>

      {/* Timeline events */}
      <div className="space-y-8">
        {/* Created event */}
        <TimelineEvent
          title="Subscription Created"
          date={sub.createdAt}
          isFirstOrLast
          icon={
            <ReceiptIcon
              className="h-3.5 w-3.5 mr-1.5 text-success"
              aria-hidden="true"
            />
          }
        >
          <div className="mt-2 text-xs bg-success/10 px-3 py-1.5 rounded-md inline-flex items-center self-start">
            <span
              className="w-1.5 h-1.5 rounded-full bg-success mr-1.5"
              aria-hidden="true"
            ></span>
            <span className="text-success font-medium">
              Initial payment processed
            </span>
          </div>
        </TimelineEvent>

        {/* Started event */}
        <TimelineEvent
          title="Subscription Activated"
          date={user.current_period_start}
          icon={
            <ShieldCheckIcon
              className="h-3.5 w-3.5 mr-1.5 text-success"
              aria-hidden="true"
            />
          }
          status="active"
        >
          <div className="mt-2 text-xs bg-success/10 px-3 py-1.5 rounded-md inline-flex items-center self-start">
            <CheckCircle
              className="h-3 w-3 mr-1.5 text-success"
              aria-hidden="true"
            />
            <span className="text-success font-medium">
              Access granted to {product.name} plan
            </span>
          </div>
        </TimelineEvent>

        {/* Canceled event - conditional */}
        {user.canceled_at && (
          <TimelineEvent
            title="Subscription Canceled"
            date={user.canceled_at}
            icon={(() => {
              const Icon = getStatusConfig("canceled").icon
              return (
                <Icon
                  className={`h-3.5 w-3.5 mr-1.5 ${
                    getStatusConfig("canceled").color
                  }`}
                  aria-hidden="true"
                />
              )
            })()}
            status="canceled"
          >
            {user.ends_at && (
              <div className="mt-2 text-xs bg-destructive/10 px-3 py-1.5 rounded-md inline-flex items-center self-start border border-destructive/20">
                <AlertCircle
                  className="h-3 w-3 mr-1.5 text-destructive"
                  aria-hidden="true"
                />
                <span className="font-medium text-destructive">
                  Subscription will end on {formatDate(user.ends_at)}
                </span>
              </div>
            )}
            {sub.customerCancellationReason && (
              <div className="mt-2 text-xs bg-destructive/10 px-3 py-1.5 rounded-md inline-flex items-center self-start border border-destructive/20">
                <AlertCircle
                  className="h-3 w-3 mr-1.5 text-destructive"
                  aria-hidden="true"
                />
                <span className="font-medium text-destructive">
                  Reason: {sub.customerCancellationReason}
                </span>
              </div>
            )}
          </TimelineEvent>
        )}

        {/* Current period - always shown */}
        <TimelineEvent
          title={`Current Status: ${getStatusConfig(user.status).label}`}
          date={null}
          icon={(() => {
            const Icon = getStatusConfig(user.status).icon
            return (
              <Icon
                className={`h-3.5 w-3.5 mr-1.5 ${
                  getStatusConfig(user.status).color
                }`}
                aria-hidden="true"
              />
            )
          })()}
          status={user.status}
          isFirstOrLast={true}
        >
          <div className="text-xs text-muted-foreground flex items-center mt-0.5">
            <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
            <span>
              {formatDate(user.current_period_start)} —{" "}
              {formatDate(user.current_period_end)}
            </span>
          </div>

          <StatusBadge status={user.status}>
            <CreditCard
              className={`h-3 w-3 mr-1.5 ${getStatusConfig(user.status).color}`}
              aria-hidden="true"
            />
            <span>
              {formatCurrency(user.amount, user.currency)}/
              {user.recurring_interval}
            </span>
          </StatusBadge>

          {/* Next billing date */}
          {!user.cancel_at_period_end && user.status === "active" && (
            <div className="mt-3 text-xs bg-muted/30 px-3 py-1.5 rounded-md">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1.5" aria-hidden="true" />
                  <span>Next billing date</span>
                </span>
                <span className="font-medium">
                  {formatDate(user.current_period_end)}
                </span>
              </div>
            </div>
          )}

          {/* Status-specific messages */}
          {user.status === "past_due" && (
            <div
              className={`mt-3 text-xs ${getStatusConfig("past_due").bgColor} ${
                getStatusConfig("past_due").color
              } px-3 py-1.5 rounded-md`}
            >
              <div className="flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1.5" aria-hidden="true" />
                <span>
                  Payment is past due. Please update your payment method.
                </span>
              </div>
            </div>
          )}

          {user.status === "incomplete" && (
            <div
              className={`mt-3 text-xs ${
                getStatusConfig("incomplete").bgColor
              } ${getStatusConfig("incomplete").color} px-3 py-1.5 rounded-md`}
            >
              <div className="flex items-center">
                <Timer className="h-3 w-3 mr-1.5" aria-hidden="true" />
                <span>
                  Payment is incomplete. Please complete the payment process.
                </span>
              </div>
            </div>
          )}

          {user.status === "unpaid" && (
            <div
              className={`mt-3 text-xs ${getStatusConfig("unpaid").bgColor} ${
                getStatusConfig("unpaid").color
              } px-3 py-1.5 rounded-md`}
            >
              <div className="flex items-center">
                <Ban className="h-3 w-3 mr-1.5" aria-hidden="true" />
                <span>Payment failed. Please update your payment method.</span>
              </div>
            </div>
          )}
        </TimelineEvent>
        {/* End event - conditional */}
        {user.ends_at && (
          <TimelineEvent
            title={isEnded ? "Subscription Ended" : "Scheduled to End"}
            date={user.ends_at}
            icon={(() => {
              const status = isEnded ? "incomplete_expired" : "trialing"
              const Icon = getStatusConfig(status).icon
              return (
                <Icon
                  className={`h-3.5 w-3.5 mr-1.5 ${
                    getStatusConfig(status).color
                  }`}
                  aria-hidden="true"
                />
              )
            })()}
            status={isEnded ? "incomplete_expired" : "trialing"}
          >
            <StatusBadge status={isEnded ? "incomplete_expired" : "trialing"}>
              {isEnded
                ? "Access expired"
                : `Access until ${formatDate(user.ends_at)}`}
            </StatusBadge>
          </TimelineEvent>
        )}
      </div>
    </div>
  )
}
