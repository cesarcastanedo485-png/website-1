import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nwi-pink": "#F3E8EE",
        "nwi-orange": "#D94811",
        "nwi-orange-dark": "#C43E0E",
        "nwi-navy": "#1A1B2E",
      },
      fontFamily: {
        display: ["var(--font-impact)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
