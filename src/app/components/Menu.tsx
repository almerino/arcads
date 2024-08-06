"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export function Menu() {
  const searchParams = useSearchParams()

  const email = searchParams.get("email")

  return (
    <div
      className={`relative flex h-12 w-full items-center border-b border-divider p-4 md:h-[86px] ${
        email ? "justify-center" : "justify-between"
      }`}
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          width={142}
          height={48}
          alt=""
          className="mx-auto h-[35px] w-auto md:h-[48px]"
        />
      </Link>
      {email && (
        <button className="absolute inset-y-0 right-[30px] hidden text-300-regular md:flex md:items-center">
          <span className="text-primary">{email}</span>
          <Image
            src="/login/carret.svg"
            width={14}
            height={14}
            alt=""
            className="ml-2 text-secondary"
          />
        </button>
      )}

      {!email && (
        <Link
          href="/login"
          className="rounded-lg bg-action p-4 text-white hover:bg-action-light"
        >
          Log in or Sign up
        </Link>
      )}
    </div>
  )
}
