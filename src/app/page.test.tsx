import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { Menu } from "./components/Menu"
import Home from "./page"
import { Suspense } from "react"

const { auth } = vi.hoisted(() => {
  return {
    auth: vi.fn(),
  }
})

vi.mock("@/auth", () => ({
  auth,
  signOut: vi.fn(),
}))

// Need to mock the menu as it is an async component and tests doesn't work well with nested async omponents
const mockMenu = vi.fn()
vi.mock("@/components/Menu", () => ({
  Menu: () => {
    mockMenu()
    return <div>Mocked Menu</div>
  },
}))

describe("Home page", () => {
  test("should render the title", async () => {
    render(await Home())

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Welcome to arcads technical test",
      })
    ).toBeInTheDocument()
  })

  test("should render the menu", async () => {
    render(await Home())

    expect(screen.getByText("Mocked Menu")).toBeInTheDocument()
  })
})
