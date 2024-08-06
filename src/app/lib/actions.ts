"use server"

import { redirect } from "next/navigation"

// import { signIn } from "@/auth"

export async function authenticate(formData: FormData) {
  let redirectPath = ""

  try {
    const email = formData.get("email") as string

    if (email.includes("@arcads.ai")) {
      redirectPath = `/login/signin?email=${email}`
    } else {
      redirectPath = `/login/signup?email=${email}`
    }

    // await signIn("resend", formData)
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials."
        default:
          return "Something went wrong."
      }
    }
    throw error
  }

  redirect(redirectPath)
}
