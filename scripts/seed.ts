// scripts/seed.ts
import { Polar } from "@polar-sh/sdk"
import { config, config as configLocal } from "dotenv"

// Load both .env and .env.local files
config()
configLocal({ path: ".env.local" })

/* ───────────────────────────────────────────────────────────
   0.  clients
   ────────────────────────────────────────────────────────── */

const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN ?? "",
  server: "sandbox",
})

/* ───────────────────────────────────────────────────────────
   1.  create or update Polar products → plans
   ────────────────────────────────────────────────────────── */
async function syncPolarPlans() {
  console.log("⏳  Creating / syncing Polar products…")

  const plans = [
    { code: "base", name: "Base", price: 800, seatLimit: 5 },
    { code: "plus", name: "Plus", price: 1200, seatLimit: 10 },
  ] as const

  for (const p of plans) {
    // create the product in Polar
    const product = await polar.products.create({
      organizationId: process.env.POLAR_ORG_ID!,
      name: p.name,
      recurringInterval: "month",
      prices: [
        {
          amountType: "fixed",
          priceAmount: p.price,
          priceCurrency: "usd",
        },
      ],
    })

    console.log(`  • plan '${p.code}' ↔ Polar product ${product.id}`)
  }
}

/* ───────────────────────────────────────────────────────────
   3.  run everything
   ────────────────────────────────────────────────────────── */
;(async () => {
  try {
    await syncPolarPlans()

    console.log("\n🎉  Seed completed without errors.\n")
  } catch (err) {
    console.error("\n💥  Seed failed:", err)
    process.exitCode = 1
  } finally {
    process.exit()
  }
})()
