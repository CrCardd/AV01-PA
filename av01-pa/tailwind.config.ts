import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        pallete01: "#ccb24c",
        pallete02: "#f7d683",
        pallete03: "#fffdc0",
        pallete04: "#fffffd",
        pallete05: "#457d97",
        pallete06: "#090909",
      },
    },
  },
  plugins: [],
};
export default config;
