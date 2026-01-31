import { Polar } from "@polar-sh/sdk"

const accessToken = process.env.POLAR_ACCESS_TOKEN

if (!accessToken) {
  console.warn(
    "[Polar] POLAR_ACCESS_TOKEN is not configured. Pricing features will be unavailable."
  )
}

export const polarApi = new Polar({
  accessToken: accessToken || "",
  server:
    process.env.NEXT_PUBLIC_POLAR_ENV === "production"
      ? "production"
      : "sandbox",
})
