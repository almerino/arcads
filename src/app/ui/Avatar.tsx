import Image from "next/image"

export function Avatar({
  className = "",
  src,
}: {
  className?: string
  src: string
}) {
  return (
    <Image
      src={src}
      width={40}
      height={40}
      alt="avatar"
      className={`${className} size-[43px] rounded-full border-[3px] border-[#CECBFF]`}
    />
  )
}
