export default function SignUp({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const email = searchParams["email"]

  return (
    <div className="mt-[19px] flex flex-col items-center md:mt-[78px]">
      <h1 className="text-600-semibold md:text-700-bold">Check your Email</h1>
      <div className="mt-8 text-center text-400-regular text-secondary">
        {"Log in using the magic link sent to "}
        <span className="text-action">{email}</span>
      </div>
    </div>
  )
}
