"use client"

import Image from "next/image"

import { useEffect, useRef, useState } from "react"

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(false)

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(!muted)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      setMuted(videoRef.current.muted)
    }
  }, [])

  return (
    <div className="relative mx-[45px] mt-[35px] max-w-[275px] md:mx-0">
      <video
        ref={videoRef}
        className="ml-[5px] aspect-9/16 rounded-lg bg-black"
        preload="auto"
        height="1280"
        width="720"
        autoPlay
        loop
        playsInline
      >
        <source src="/login/login-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        className="absolute bottom-[10px] right-[10px] z-20"
        onClick={handleMute}
      >
        <Image
          src={muted ? "/login/sound-off.svg" : "/login/sound-on.svg"}
          width={30}
          height={30}
          alt={muted ? "mute video" : "unmute video"}
        />
      </button>

      <div className="absolute top-0 ml-[5px] size-full rounded-lg shadow-video" />
    </div>
  )
}
