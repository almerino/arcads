import Link from "next/link"
import { Menu } from "./components/Menu"

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center">
      <Menu />
    </main>
  )
}
