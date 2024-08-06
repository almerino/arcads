import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import PostgresAdapter from "@auth/pg-adapter"
// import { Pool } from "pg"
import { Pool } from "@neondatabase/serverless"

// const pool = new Pool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
//   // ssl: {
//   //   rejectUnauthorized: false,
//   //   requestCert: true,
//   // },
// })

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PostgresAdapter(pool),
//   providers: [Resend],
// })

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: PostgresAdapter(pool),
    providers: [
      Resend({
        apiKey: process.env.AUTH_RESEND_KEY,
        from: "delivered@resend.dev",
      }),
    ],
  }
})
