import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        fifty: "50px",
        15: "60px", // 높이 60 커스텀
      },
      width: {
        42: "168px",
      },
      padding: {
        90: "90px",
      },
      boxShadow: {
        black: "2px 4px 0px 0px black",
      },
      screens: {
        phone: "360px",
        tablet: "640px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
