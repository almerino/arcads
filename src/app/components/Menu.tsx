import Image from "next/image"
import Link from "next/link"

import { auth, signOut } from "@/auth"

export async function Menu() {
  const session = await auth()
  const email = session?.user?.email

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
        <div className="absolute inset-y-0 right-[30px] hidden text-300-regular md:flex md:items-center">
          <div className="group relative flex h-7 items-center">
            <span className="text-primary">{email}</span>
            <Image
              src="/login/carret.svg"
              width={14}
              height={14}
              alt=""
              className="ml-2 text-secondary"
            />
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
              className="absolute top-7 hidden w-full rounded-lg bg-white p-2 shadow-md group-hover:block"
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        </div>
      )}

      {!email && (
        <Link
          href="/login"
          className="flex max-h-10 items-center rounded-lg bg-action p-4 text-300-regular text-white hover:bg-action-light"
        >
          Log in or Sign up
        </Link>
      )}
    </div>
  )
}
