import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import SignIn from "./page"

describe.skip("SignIn page", () => {
  test("should render the title", () => {
    render(<SignIn />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Verify your Email",
      })
    ).toBeInTheDocument()
  })

  test("should render the resend email button", () => {
    render(<SignIn />)

    expect(
      screen.getByRole("button", { name: "resend mail in 20 seconds" })
    ).toBeInTheDocument()
  })

  test("should render the email", () => {
    render(<SignIn searchParams={{ email: "test-email@arcads.ai" }} />)

    expect(screen.getByText("test-email@arcads.ai")).toBeInTheDocument()
  })
})
