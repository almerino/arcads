import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { Menu } from "./Menu"

const { auth } = vi.hoisted(() => {
  return {
    auth: vi.fn(),
  }
})

vi.mock("@/auth", () => ({
  auth,
  signOut: vi.fn(),
}))

describe("Menu", () => {
  test("should render home link", async () => {
    render(await Menu())

    expect(screen.getByRole("link", { name: "" })).toHaveAttribute("href", "/")
  })

  test("should render the login link when there are no email", async () => {
    auth.mockImplementationOnce(() => {
      return {}
    })

    render(await Menu())

    expect(
      screen.getByRole("link", { name: "Log in or Sign up" })
    ).toHaveAttribute("href", "/login")
  })

  test("should render the email button when there are an email", async () => {
    auth.mockResolvedValueOnce({ user: { email: "dev-test@arcads.ai" } })

    render(await Menu())

    expect(screen.getByText("dev-test@arcads.ai")).toBeInTheDocument()
  })
})
