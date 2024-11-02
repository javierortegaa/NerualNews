/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#8A2BE2",
        secondaryPurple: "#6A0DC8",
        background: "#121212",
        headfooter: "#1E1E1E",
        textColor: "#EAEAEA",
        accent: "#FF6F61",
      },
    },
  },
  plugins: [],
};
