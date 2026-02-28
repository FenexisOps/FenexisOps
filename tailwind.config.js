/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        dark: "var(--color-dark)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        drama: ["var(--font-drama)", "serif"],
        data: ["var(--font-data)", "monospace"],
        sans: ["var(--font-heading)", "sans-serif"],
      },
      borderRadius: {
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
      },
      boxShadow: {
        surface: "0 4px 20px -2px rgba(0,0,0,0.05), 0 0 3px rgba(0,0,0,0.05)",
        "surface-dark": "0 8px 32px -4px rgba(0,0,0,0.5), 0 0 2px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
}
