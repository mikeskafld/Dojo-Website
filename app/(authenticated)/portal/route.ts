// portal/route.ts

import { NextRequest } from "next/server"
import { CustomerPortal } from "@polar-sh/nextjs"

export const GET = CustomerPortal({
  accessToken: process.env.POLAR_ACCESS_TOKEN ?? "",
  getCustomerId: async (req: NextRequest) => {
    const customerId = req.nextUrl.searchParams.get("customer_id")
    console.log("🔍 getCustomerId", customerId)
    return customerId ?? ""
  },
  server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
})
