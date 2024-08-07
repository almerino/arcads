import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import Login from "./page"

describe("Login page", () => {
  test("should render the login form", () => {
    render(<Login />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Ready to use Arcads?",
      })
    ).toBeInTheDocument()
  })

  test("should render the video demo", () => {
    render(<Login />)

    expect(
      screen.getByText(
        "An UGC platform that helps you create winning ads with AI Actors."
      )
    ).toBeInTheDocument()
  })
})
