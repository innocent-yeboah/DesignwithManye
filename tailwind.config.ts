import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6B1F2E",
          dark: "#4E1622",
          light: "#8A3344",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E3C866",
          soft: "#F3E7C3",
        },
        cream: {
          DEFAULT: "#FBF7F0",
          dark: "#F3ECDF",
        },
        ink: "#2B2320",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
