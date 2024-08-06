import { Suspense } from "react"

import { Menu } from "../../components/Menu"
import { MenuFallback } from "../../components/MenuFallback"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense fallback={<MenuFallback />}>
        <Menu />
      </Suspense>
      {children}
    </>
  )
}
