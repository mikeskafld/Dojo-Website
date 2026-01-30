import Link from "next/link"
import { differenceInDays, isAfter } from "date-fns"
import { AlertCircle, ArrowLeft, Clock, ExternalLink } from "lucide-react"

import { getCompleteBillingDetails } from "@/lib/db/actions"
import {
  capitalizeFirstLetter,
  cn,
  formatCurrency,
  formatDate,
  getInitials,
} from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PolarIcon } from "@/components/ui/icons"
import { TwoToneHeading } from "@/components/ui/two-tone-heading"
import { SubscriptionCalendar } from "@/app/(authenticated)/dashboard/billing-details/subscription-calendar"
import { SubscriptionTimeline } from "@/app/(authenticated)/dashboard/billing-details/subscription-timeline"
import { TimelineProgress } from "@/app/(authenticated)/dashboard/billing-details/timeline-progress"

export default async function BillingDetailsPage() {
  const subscription = await getCompleteBillingDetails()
  const customer = subscription?.subscription.customer
  const product = subscription?.product

  if (!subscription || !customer || !product) {
    return <div>No subscription found</div>
  }

  const currentPeriodStart = new Date(
    subscription.user.current_period_start || new Date()
  )
  const currentPeriodEnd = new Date(
    subscription.user.current_period_end || new Date()
  )
  const today = new Date()

  const totalDays = differenceInDays(currentPeriodEnd, currentPeriodStart)
  const daysElapsed = differenceInDays(today, currentPeriodStart)
  const daysLeft = Math.max(0, differenceInDays(currentPeriodEnd, today))

  const progress = Math.max(0, Math.min(100, (daysElapsed / totalDays) * 100))

  const isEnding = subscription.user.cancel_at_period_end
  const isPastDue = isAfter(today, currentPeriodEnd)

  return (
    <section className=" space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <TwoToneHeading
          primaryText="Payment Successful"
          secondaryText="Your subscription is now active"
          primaryWeight="bold"
          secondaryWeight="base"
        />

        {/* Customer Info Card */}
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center space-x-3 bg-muted/30 px-4 py-2 rounded-full">
            <Avatar className="h-8 w-8 border border-border">
              <AvatarImage
                src={customer.avatarUrl || "/placeholder.svg"}
                alt={customer.name || customer.email}
              />
              <AvatarFallback>
                {getInitials(customer.name || customer.email)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">
                {customer.name || "Account"}
              </div>
              <div className="text-xs text-muted-foreground">
                {customer.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Subscription Card */}
        <Card className="">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <PolarIcon className="h-4 w-4 mr-2 text-amber-500" />
                <CardTitle className="text-base font-medium">
                  {product.name} Plan
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className={
                  subscription.user.status === "active"
                    ? "bg-success/10 text-success border-success/20 text-xs font-normal"
                    : "bg-destructive/10 text-destructive border-destructive/20 text-xs font-normal"
                }
              >
                {capitalizeFirstLetter(subscription.user.status)}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
              <div className="space-y-0.5">
                <div className="text-xs text-muted-foreground">
                  Current Plan
                </div>
                <div className="text-base font-medium">
                  {formatCurrency(
                    subscription.user.amount,
                    subscription.user.currency
                  )}
                  <span className="text-xs text-muted-foreground ml-1">
                    /{subscription.user.recurring_interval}
                  </span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {product.isRecurring ? "Recurring" : "One-time"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1.5 p-3 bg-muted/30 rounded-md ">
                <span className="text-xs text-muted-foreground">
                  Period Start
                </span>
                <span className="text-sm font-medium">
                  {formatDate(subscription.user.current_period_start)}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 p-3 bg-muted/30 rounded-md ">
                <span className="text-xs text-muted-foreground">
                  Period End
                </span>
                <span className="text-sm font-medium">
                  {formatDate(subscription.user.current_period_end)}
                </span>
              </div>
            </div>

            <SubscriptionCalendar
              startDate={currentPeriodStart}
              endDate={currentPeriodEnd}
            />

            {isEnding && (
              <div
                className={cn(
                  "flex flex-col p-3 rounded-md",
                  "bg-warning/20 text-muted-foreground border border-border",

                  isPastDue &&
                    "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 " />
                    <span className="text-xs font-medium">
                      {isPastDue ? "Subscription Ended" : "Subscription Ending"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {!isPastDue && (
                      <>
                        <span className="text-xs font-medium">
                          {daysLeft} days left
                        </span>
                        <span className="text-xs">•</span>
                      </>
                    )}
                    <span className="text-xs">
                      {formatDate(subscription.user.ends_at)}
                    </span>
                  </div>
                </div>
                {subscription.subscription.customerCancellationReason && (
                  <p className="mt-1 text-xs ">
                    Reason:{" "}
                    {capitalizeFirstLetter(
                      subscription.subscription.customerCancellationReason
                    )}
                  </p>
                )}
              </div>
            )}
          </CardContent>

          <CardFooter className="p-4 flex flex-col sm:flex-row sm:justify-between gap-2 mt-auto">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full sm:w-auto text-xs h-8"
            >
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-1 h-3 w-3" />
                Back to Dashboard
              </Link>
            </Button>

            {subscription.user.polar_customer_id && (
              <Button
                size="sm"
                asChild
                className="w-full sm:w-auto text-xs h-8"
              >
                <Link
                  href={`/portal?customer_id=${subscription.user.polar_customer_id}`}
                  className="flex items-center"
                >
                  Manage Subscription
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Timeline Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                Subscription Timeline
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <TimelineProgress
              progress={progress}
              currentPeriodStart={currentPeriodStart}
              currentPeriodEnd={currentPeriodEnd}
              isEnding={isEnding}
              startDate={currentPeriodStart}
              endDate={currentPeriodEnd}
            />
          </CardHeader>

          <CardContent>
            <SubscriptionTimeline subscription={subscription} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 text-center text-xs text-muted-foreground">
        Need help?{" "}
        <Link
          href="/support"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Contact support
        </Link>
      </div>
    </section>
  )
}
