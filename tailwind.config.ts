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
        primary: "#31ffc2",
        secondary: "#31fff5",
        accent: "#ffde01",
        base: "#8a8a8a",
      },
    },
  },
  plugins: [],
};
export default config;
