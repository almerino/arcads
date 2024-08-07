import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import Home from "./page"

describe("Home page", () => {
  test("should render the title", () => {
    render(<Home />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Welcome to arcads technical test",
      })
    ).toBeInTheDocument()
  })

  test("should render the menu", () => {
    render(<Home />)

    expect(screen.getByRole("link", { name: "" })).toHaveAttribute("href", "/")
  })
})
