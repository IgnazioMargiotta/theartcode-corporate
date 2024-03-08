import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "color-main1": "#23AECD",
      "color-main2": "#B55694",
    },
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          xl: "1320px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
