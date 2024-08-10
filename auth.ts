import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
import type { Provider } from "next-auth/providers"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "@neondatabase/serverless"

const providers: Provider[] = [
  Nodemailer({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
  }),
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })

  const adapter = PostgresAdapter(pool)
  return {
    adapter,
    providers,
    pages: {
      signIn: "/login",
    },
  }
})
