import { expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { SignIn } from "./SignIn"

const { useRouter } = vi.hoisted(() => {
  return {
    useRouter: vi.fn().mockImplementation(() => ({
      push: vi.fn(),
    })),
  }
})

vi.mock("next/navigation", () => ({
  useRouter,
}))

describe("SignIn", () => {
  test("should render email input", () => {
    render(<SignIn />)

    expect(screen.getByLabelText("Email (required)")).toBeInTheDocument()
  })

  test("should redirect to signin when user exists", async () => {
    const push = vi.fn()
    useRouter.mockImplementation(() => ({ push }))

    render(<SignIn />)

    fireEvent.change(
      screen.getByRole("textbox", { name: "Email (required)" }),
      { target: { value: "test-email@arcads.ai" } }
    )
    fireEvent.click(screen.getByRole("button", { name: "Continue" }))

    expect(push).toHaveBeenCalledWith(
      "/login/signin?email=test-email@arcads.ai"
    )
  })

  test("should redirect to signup when user does not exist", async () => {
    const push = vi.fn()
    useRouter.mockImplementation(() => ({ push }))

    render(<SignIn />)

    fireEvent.change(
      screen.getByRole("textbox", { name: "Email (required)" }),
      { target: { value: "test-email@gmail.com" } }
    )
    fireEvent.click(screen.getByRole("button", { name: "Continue" }))

    expect(push).toHaveBeenCalledWith(
      "/login/signup?email=test-email@gmail.com"
    )
  })
})
