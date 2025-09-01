import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {},
  },
} satisfies Config;
