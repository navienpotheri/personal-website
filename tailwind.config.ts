import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Scans your root layout/pages
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Scans pages directory if you have one
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans global component directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;