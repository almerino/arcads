import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import SignUp from "./page"

describe("SignUp page", () => {
  test("should render the title", () => {
    render(<SignUp />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Check your Email",
      })
    ).toBeInTheDocument()
  })

  test("should render the email", () => {
    render(<SignUp searchParams={{ email: "test-email@arcads.ai" }} />)

    expect(screen.getByText("test-email@arcads.ai")).toBeInTheDocument()
  })
})
