import { Suspense } from "react"
import { Menu } from "./components/Menu"
import { MenuFallback } from "./components/MenuFallback"

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center">
      <Suspense fallback={<MenuFallback />}>
        <Menu />
      </Suspense>
    </main>
  )
}
