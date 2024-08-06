import type { Metadata } from "next"

import { Menu } from "../../components/Menu"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}
