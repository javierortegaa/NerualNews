/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "paper-bg": "#f5f5dc",
        "text-black": "#333333",
        "border-black": "#1a1a1a",
      },
      fontFamily: {
        serif: ["Times New Roman", "Georgie", "serif"],
      },
      spacing: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
