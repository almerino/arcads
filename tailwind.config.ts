import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9 / 16",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        video: "-10px 10px #5B53FF;",
      },
      colors: {
        title: "#212529",
        primary: "#343A40",
        secondary: "#868E96",
        divider: "#DEE2E6",
        disabled: "#ADB5BD",
        action: "#5B53FF",
        "action-light": "#837de9",
      },
      fontSize: {
        "400-regular": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "300-regular": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "300",
          },
        ],

        "600-semibold": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "600",
          },
        ],

        "700-bold": [
          "2rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
          },
        ],

        "300-semibold": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
