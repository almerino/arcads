"use server"

import { AuthError } from "next-auth"
import { signIn } from "@/auth"

export async function authenticate(formData: FormData) {
  try {
    const email = formData.get("email") as string

    await signIn("nodemailer", {
      email,
      redirect: true,
      redirectTo: "/",
    })
  } catch (error: any) {
    // Signin can fail for a number of reasons, such as the user
    // not existing, or the user not having the correct role.
    // In some cases, you may want to redirect to a custom error
    if (error instanceof AuthError) {
      // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
    }

    // Otherwise if a redirects happens NextJS can handle it
    // so you can just re-thrown the error and let NextJS handle it.
    // Docs:
    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
    throw error
  }
}
