"use server"

import { redirect } from "next/navigation"

export async function authenticate(formData: FormData) {
  let redirectPath = ""

  try {
    const email = formData.get("email") as string

    if (email.includes("@arcads.ai")) {
      redirectPath = `/login/signin?email=${email}`
    } else {
      redirectPath = `/login/signup?email=${email}`
    }
  } catch (error: any) {
    throw error
  }

  redirect(redirectPath)
}
