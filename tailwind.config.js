/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        publicsans: ["PublicSans", "sans-serif"],
        "public-sans-bold": ["PublicSans-Bold", "sans-serif"],
        "public-sans-extrabold": ["PublicSans-ExtraBold", "sans-serif"],
        "public-sans-medium": ["PublicSans-Medium", "sans-serif"],
        "public-sans-semibold": ["PublicSans-SemiBold-SemiBold", "sans-serif"],
        "public-sans-light": ["PublicSans-Light", "sans-serif"],
      },
      // colors: {
      //   primary: {
      //     100: "#0061FF0A",
      //     200: "#0061FF1A",
      //     300: "#0061FF",
      //   },
      //   accent: {
      //     100: "#FBFBFD",
      //   },
      //   black: {
      //     DEFAULT: "#000000",
      //     100: "#8C8E98",
      //     200: "#666876",
      //     300: "#191D31",
      //   },
      //   danger: "#F75555",
      // },
    },
  },
  plugins: [],
};
