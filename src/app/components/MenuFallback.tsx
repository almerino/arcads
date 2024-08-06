import Image from "next/image"
import Link from "next/link"

export function MenuFallback() {
  return (
    <div className="relative flex h-12 w-full items-center justify-center border-b border-divider p-4 md:h-[86px]">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={142}
          height={48}
          alt=""
          className="mx-auto h-[35px] w-auto md:h-[48px]"
        />
      </Link>
    </div>
  )
}
