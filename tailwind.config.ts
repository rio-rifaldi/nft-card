import { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "var(--White)",
        "soft-blue": "var(--Soft-blue)",
        cyan: "var(--Cyan)",
        "dark-blue-one": "var(--Very-dark-blue-main-bg)",
        "dark-blue-two": "var(--Very-dark-blue-card-BG)",
        "dark-blue-three": "var(--Very-dark-blue-line)",
      },
      backgroundColor: {
        "dark-blue-one": "var(--Very-dark-blue-main-bg)",
        "dark-blue-two": "var(--Very-dark-blue-card-BG)",
        "dark-blue-three": "var(--Very-dark-blue-line)",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
} satisfies Config;
