import Image from "next/image"

export default async function SignIn() {
  return (
    <div className="mt-[19px] flex flex-col items-center md:mt-[78px]">
      <h1 className="text-600-semibold md:text-700-bold">Verify your Email</h1>
      <Image
        src="/login/email-verify.svg"
        width={370}
        height={370}
        alt=""
        className="mt-8 aspect-square size-[270px] md:size-[370px]"
      />
      <div className="mt-8 text-center text-400-regular text-secondary">
        <div>{"We've sent you a magic link"}</div>
        <div>Follow the link in your inbox to get started.</div>
      </div>

      <button className="mt-8 text-center text-400-regular font-semibold uppercase text-secondary">
        resend mail in 20 seconds
      </button>
    </div>
  )
}
