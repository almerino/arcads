import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { Menu } from "./Menu"

const { useSearchParams } = vi.hoisted(() => {
  return {
    useSearchParams: vi.fn().mockImplementation(() => ({
      get: vi.fn(),
    })),
  }
})

vi.mock("next/navigation", () => ({
  useSearchParams,
}))

describe("Menu", () => {
  test("should render home link", () => {
    render(<Menu />)

    expect(screen.getByRole("link", { name: "" })).toHaveAttribute("href", "/")
  })

  test("should render the login link when there are no email", () => {
    render(<Menu />)

    expect(
      screen.getByRole("link", { name: "Log in or Sign up" })
    ).toHaveAttribute("href", "/login")
  })

  test("should render the email button when there are an email", () => {
    useSearchParams.mockImplementationOnce(() => ({
      get: () => "test-email@arcads.ai",
    }))
    render(<Menu />)

    expect(
      screen.getByRole("button", { name: "test-email@arcads.ai" })
    ).toBeInTheDocument()
  })
})
