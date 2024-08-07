import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import LoginForm from "./LoginForm"

describe("LoginForm", () => {
  test("should render the title", () => {
    render(<LoginForm />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Ready to use Arcads?",
      })
    ).toBeInTheDocument()
  })

  test("should render the terms and condition links", () => {
    render(<LoginForm />)

    expect(
      screen.getByRole("link", { name: "Terms of Use" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Privacy Policy" })
    ).toBeInTheDocument()
  })
})
