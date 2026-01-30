import { Polar } from "@polar-sh/sdk"

export const polarApi = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  // Use 'sandbox' for development/testing, 'production' for live
  // Ensure this environment variable is set correctly.
  server:
    process.env.NEXT_PUBLIC_POLAR_ENV === "production"
      ? "production"
      : "sandbox",
})
