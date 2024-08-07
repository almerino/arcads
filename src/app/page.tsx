import { Suspense } from "react"
import { Menu } from "./components/Menu"
import { MenuFallback } from "./components/MenuFallback"

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center">
      <Suspense fallback={<MenuFallback />}>
        <Menu />
      </Suspense>

      <h1 className="text-700-bold">Welcome to arcads technical test</h1>
    </main>
  )
}
