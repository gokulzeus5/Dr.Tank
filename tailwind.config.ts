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
        brand: {
          50: "#F0FAFE",
          100: "#E0F5FD",
          200: "#BAECFB",
          300: "#7EE0F7",
          400: "#38CFF4",
          500: "#22C4F2", // Primary Blue
          600: "#0FAAD8",
          700: "#0C88B0",
          800: "#0E6E8D",
          900: "#115B74",
        },
        text: {
          main: "#171717",
          secondary: "#555555",
          muted: "#737373",
        },
        bg: {
          light: "#F0FAFE",
          card: "#FFFFFF",
        },
        border: {
          light: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

