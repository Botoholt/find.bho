import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        succes: "rgb(var(--color-succes) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",

        "b-app": "rgb(var(--color-app-bg) / <alpha-value>)",
        "b-rv-app": "rgb(var(--rv-color-app-bg) / <alpha-value>)",
        "b-primary": "rgb(var(--color-primary-bg) / <alpha-value>)",
        "b-secondary": "rgb(var(--color-secondary-bg) / <alpha-value>)",

        "br-primary": "rgb(var(--color-primary-border) / <alpha-value>)",
        "br-primary-hover": "rgb(var(--color-primary-hover-border) / <alpha-value>)",

        "t-primary": "rgb(var(--color-primary-text) / <alpha-value>)",
        "t-rv-primary": "rgb(var(--rv-color-primary-text) / <alpha-value>)",
        "t-secondary": "rgb(var(--color-secondary-text) / <alpha-value>)",
        "t-tertiary": "rgb(var(--color-tertiary-text) / <alpha-value>)",
        "t-placeholder": "rgb(var(--color-placeholder-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config
