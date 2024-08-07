import Image from "next/image"

import { Avatar } from "@/ui/Avatar"
import { Suspense } from "react"
import VideoPlayer from "./VideoPlayer"

export default function LoginForm() {
  return (
    <div className="relative flex items-center justify-center bg-[#c9c8fb] md:w-1/2">
      <div className="flex max-w-[313px] flex-col items-center justify-center md:z-10 lg:ml-auto lg:mr-[151px]">
        <Image
          src="/logo.svg"
          width={142}
          height={48}
          alt=""
          className="mx-auto mt-6"
        />

        <Suspense fallback={<div>Loading...</div>}>
          <VideoPlayer />
        </Suspense>

        <div className="mt-9 text-center text-400-regular text-primary">
          An UGC platform that helps you create winning ads with AI Actors.
        </div>

        <div className="mb-28 mt-7 flex items-center md:mb-0">
          <Avatar src="/login/avatar-1.png" />
          <Avatar src="/login/avatar-2.png" className="-ml-3" />
          <Avatar src="/login/avatar-3.png" className="-ml-3" />

          <div className="ml-3 text-300-regular text-primary">
            Trusted by <span className="font-bold">5000+</span> marketers
          </div>
        </div>
      </div>

      <Image
        src="/login/bg-login.svg"
        width={1008}
        height={756}
        alt=""
        className="absolute bottom-0 left-0 hidden pr-7 lg:block"
      />
    </div>
  )
}
