import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      violet: "#5964E0",
      "light-violet": "#939BF4",
      "very-dark-blue": "#19202D",
      midnight: "#121721",
      "light-grey": "#F4F6F8",
      gray: "#9DAEC2",
      "dark-grey": "#6E8098",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
