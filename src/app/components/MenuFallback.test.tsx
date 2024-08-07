import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { MenuFallback } from "./MenuFallback"

describe("MenuFallback", () => {
  test("should render home link", () => {
    render(<MenuFallback />)

    expect(screen.getByRole("link", { name: "" })).toHaveAttribute("href", "/")
  })
})
