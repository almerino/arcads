"use client"

import { ChangeEvent, useState, useTransition } from "react"

import { authenticate } from "@/lib/actions"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export function SignIn() {
  let [isPending, startTransition] = useTransition()
  const [email, setEmail] = useState("")
  const [valid, setValid] = useState(false)

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value

    setEmail(email)
    setValid(emailRegex.test(email))
  }

  const onSubmit = async (formData: FormData) => {
    startTransition(() => {
      authenticate(formData)
    })
  }

  return (
    <form action={onSubmit} className="mt-8 flex w-full flex-col text-primary">
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
        disabled={!valid || isPending}
      >
        <>
          {isPending && (
            <div
              className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {!isPending && "Continue"}
        </>
      </button>
    </form>
  )
}
