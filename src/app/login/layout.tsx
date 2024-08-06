import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login to arcads.ai",
  description: "Login to arcads.ai to use the app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="h-screen w-screen">{children}</main>
}
