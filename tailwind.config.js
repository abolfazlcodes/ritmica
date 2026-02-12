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
      colors: {
        primary: {
          lighter: "#CCE7FF",
          light: "#80C3FF",
          main: "#0088FF",
          dark: "#005299",
          darker: "#003666",
        },
        info: {
          lighter: "#CAFDF5",
          light: "#61F3F3",
          main: "#00B8D9",
          dark: "#006C9C",
          darker: "#003768",
        },
        success: {
          lighter: "#D3FCD2",
          light: "#77ED8B",
          main: "#22C55E",
          dark: "#118D57",
          darker: "#065E49",
        },
        warning: {
          lighter: "#FFF5CC",
          light: "#FFD666",
          main: "#FFAB00",
          dark: "#B76E00",
          darker: "#7A4100",
        },
        error: {
          lighter: "#FFE9D5",
          light: "#FFAC82",
          main: "#FF5630",
          dark: "#B71D18",
          darker: "#7A0916",
        },
        gray: {
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
        },
        text: {
          primary: "#212B36",
          secondary: "#637381",
          disabled: "#919EAB",
        },
        divider: "#919EAB33",
        background: {
          default: "#FFFFFF",
          paper: "#FFFFFF",
          neutral: "#F4F6F8",
          blue: "#2fa8ff",
        },
      },
    },
  },
  plugins: [],
};
