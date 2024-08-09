"use client"

import { ChangeEvent, useState } from "react"

import { authenticate } from "@/lib/actions"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export function SignIn() {
  const [email, setEmail] = useState("")
  const [valid, setValid] = useState(false)

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value

    setEmail(email)
    setValid(emailRegex.test(email))
  }

  return (
    <form
      action={authenticate}
      className="mt-8 flex w-full flex-col text-primary"
    >
      <label htmlFor="email" className="text-400-regular">
        Email (required)
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        className="mt-2 h-14 rounded-lg border-[0.5px] border-divider p-4 text-400-regular"
        value={email}
        onChange={handleChangeEmail}
      />
      <button
        type="submit"
        className="mt-8 h-14 rounded-md bg-action text-300-semibold uppercase text-white disabled:bg-disabled"
        disabled={!valid}
      >
        Continue
      </button>
    </form>
  )
}
