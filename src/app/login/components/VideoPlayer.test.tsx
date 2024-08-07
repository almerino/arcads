import { expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import VideoPlayer from "./VideoPlayer"

describe("VideoPlayer", () => {
  test("should render the video", () => {
    render(<VideoPlayer />)

    expect(screen.getByTestId("video")).toBeInTheDocument()
  })

  test("should render unmute button", () => {
    render(<VideoPlayer />)

    expect(
      screen.getByRole("button", { name: "unmute video" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: "unmute video" })
    ).toBeInTheDocument()
  })

  test("should render mute button", () => {
    render(<VideoPlayer />)

    fireEvent.click(screen.getByRole("button", { name: "unmute video" }))

    expect(
      screen.getByRole("button", { name: "mute video" })
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "mute video" })).toBeInTheDocument()
  })
})
