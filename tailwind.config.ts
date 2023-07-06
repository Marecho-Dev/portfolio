import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        "2000": "2000ms",
      },
      screens: {

        '3xl': "1600px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
} satisfies Config;
