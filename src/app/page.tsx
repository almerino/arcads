import { Suspense } from "react"
import { Menu } from "./components/Menu"
import { MenuFallback } from "./components/MenuFallback"

export default function Home() {
  return (
    <main className="flex size-full flex-col">
      <Suspense fallback={<MenuFallback />}>
        <Menu />
      </Suspense>

      <div className="p-4">
        <h1 className="text-center text-700-bold">
          Welcome to arcads technical test
        </h1>

        <h2 className="mt-6 text-600-semibold">Sign in</h2>
        <ul className="mt-2">
          <li>
            <span>To test the sign in path click on the </span>
            <span className="text-sky-500">Log in or Sign up</span> button
          </li>
          <li>
            <span>Use any email ending with </span>
            <span className="text-sky-500">@arcads.ai</span>
          </li>
          <li>You will be redirect to the sign in page</li>
        </ul>

        <h2 className="mt-6 text-600-semibold">Sign up</h2>
        <ul className="mt-2">
          <li>
            <span>To test the sign up path click on the </span>
            <span className="text-sky-500">Log in or Sign up</span> button
          </li>
          <li>
            <span>Use any email not ending with </span>
            <span className="text-sky-500">@arcads.ai</span>
          </li>
          <li>You will be redirect to the sign up page</li>
        </ul>
      </div>
    </main>
  )
}
