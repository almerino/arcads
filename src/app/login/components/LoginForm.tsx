import Link from "next/link"

import { SignIn } from "./SignIn"

export default function LoginForm() {
  return (
    <div className="mx-auto flex size-full flex-col items-center justify-between px-4 pb-[55px] pt-[22px] md:w-1/2 md:pb-[76px] md:pt-[158px] lg:max-w-[444px] xl:ml-[84px]">
      <div>
        <div className="text-700-bold">Ready to use Arcads?</div>
        <SignIn />
      </div>
      <div className="mt-[44px] text-center text-300-regular text-secondary">
        {'By clicking "Continue", you agree to our '}
        <Link
          href="https://www.arcads.ai/terms"
          className="underline hover:text-primary"
          target="_blank"
        >
          Terms of Use
        </Link>
        {" & "}
        <Link
          href="https://www.arcads.ai/privacy"
          className="underline hover:text-primary"
          target="_blank"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  )
}
