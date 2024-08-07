import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import Demo from "./Demo"

describe("Demo", () => {
  test("should render the video", () => {
    render(<Demo />)

    expect(screen.getByTestId("video")).toBeInTheDocument()
  })

  test("should render the description", () => {
    render(<Demo />)

    expect(
      screen.getByText(
        "An UGC platform that helps you create winning ads with AI Actors."
      )
    ).toBeInTheDocument()
  })
})
