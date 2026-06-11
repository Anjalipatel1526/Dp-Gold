/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Navy Blue
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        accent: {
          DEFAULT: "#1E3A5F", // Steel Blue
          50: "#f0f5fa",
          100: "#dbe7f4",
          200: "#bcd1e9",
          300: "#8eb1da",
          400: "#5a8bc6",
          500: "#3b6ba8",
          600: "#2c5287",
          700: "#254470",
          800: "#1e3a5f",
          900: "#1e3250",
          950: "#111c30",
        },
        brandBg: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
