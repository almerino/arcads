import Image from "next/image"

export default function SignIn({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const email = searchParams["email"]

  return (
    <div className="mt-[19px] flex flex-col items-center md:mt-[78px]">
      <div className="text-600-semibold md:text-700-bold">
        Verify your Email
      </div>
      <Image
        src="/login/email-verify.svg"
        width={370}
        height={370}
        alt=""
        className="mt-8 h-[270px] w-auto md:h-[370px]"
      />
      <div className="mt-8 text-center text-400-regular text-secondary">
        <div>
          {"We've sent your magic link to "}
          <span className="text-action">{email}</span>.
        </div>
        <div>Follow the link in your inbox to get started.</div>
      </div>

      <button className="mt-8 text-center text-400-regular font-semibold uppercase text-secondary">
        resend mail in 20 seconds
      </button>
    </div>
  )
}
