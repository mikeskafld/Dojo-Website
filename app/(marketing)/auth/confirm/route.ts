import { redirect } from "next/navigation"
import { type NextRequest } from "next/server"
import { type EmailOtpType } from "@supabase/supabase-js"

import { createClient } from "@/lib/db/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get("token_hash")
  const type = searchParams.get("type") as EmailOtpType | null
  const returnUrl = searchParams.get("returnUrl")

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // If there's a returnUrl, redirect there, otherwise go to root
      redirect(returnUrl || "/")
    } else {
      // redirect the user to an error page with some instructions
      redirect(`/auth/error?error=${error?.message}`)
    }
  }

  // redirect the user to an error page with some instructions
  redirect(`/auth/error?error=No token hash or type`)
}
