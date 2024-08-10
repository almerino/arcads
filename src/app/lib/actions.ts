"use server"

import { AuthError } from "next-auth"
import { signIn } from "@/auth"
import { redirect } from "next/navigation"
import { neon } from "@neondatabase/serverless"

export async function authenticate(formData: FormData) {
  try {
    const email = formData.get("email") as string

    await signIn("nodemailer", {
      email,
      redirect: false,
      redirectTo: "/",
      callbackUrl: "/",
    })

    const sql = neon(`${process.env.DATABASE_URL}`)

    const user = await sql(`SELECT * FROM USERS where email = '${email}'`)

    if (user.length) {
      redirect(`/login/signin?email=${email}`)
    } else {
      redirect(`/login/signup?email=${email}`)
    }
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
