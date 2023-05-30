/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    colors: {
      red: "red",
      gray: "#647196",
      secondary: "#3a4374",
      tertiary: "#ad1fea",
      white: "#fff",
      "gray-light": "#f7f8fd",
      blue: "#4661e6",
    },
    container: {
      center: true,
    },
    extend: {
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
  plugins: [],
};
