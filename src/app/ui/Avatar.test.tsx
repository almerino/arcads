import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { Avatar } from "./Avatar"

describe("Avatar", () => {
  test("should render the image", () => {
    render(<Avatar src="/image-url" />)

    expect(screen.getByRole("img", { name: "avatar" })).toBeInTheDocument()
  })
})
