module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          300: "#fdba74",
          500: "#f97316",
          600: "#ea580c",
          700: "#7c2d12",
        },
        darkbg: {
          900: "#060711",
          800: "#0b1220",
          700: "#0f1724",
        },
      },
      fontFamily: {
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-lg": "0 20px 40px rgba(2,6,23,0.6)",
      },
    },
  },
  plugins: [],
}
