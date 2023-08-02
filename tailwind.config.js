/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#d73737",
      "orange-planned": "#f49f85",
      "font-color": "#647196",
      secondary: "#3a4374",
      tertiary: "#ad1fea",
      white: "#fff",
      "blue-live": "#62bcfa",
      "gray-light": "#f7f8fd",
      primary: "#4661e6",
      // blue: "#373f68",
      // background: "#f2f4ff",
    },
    container: {
      center: true,
    },
    borderRadius: {
      lg: "10px",
    },
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)", ...fontFamily.sans],
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // header: "url('/assets/images/background-header-desktop.png')",
        header: `radial-gradient(
          128.88% 128.88% at 103.9% -10.39%,
          #e84d70 0%,
          #a337f6 53.09%,
          #28a7ed 100%
        )`,
      },
    },
  },
  safelist: ["orange-planned", "tertiary", "blue-live"],
  plugins: [],
};
