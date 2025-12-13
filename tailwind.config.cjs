/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },

    extend: {
      colors: {
        "bg-white": "#ffffff",
        "bg-light": "#f8fafc",
        "bg-light-2": "#f1f5f9",

        "text-dark": "#1e293b",
        "text-medium": "#475569",
        "text-light": "#94a3b8",

        "purple-main": "#6d28d9",
        "purple-light": "#8b5cf6",
        "purple-soft": "#ede9fe",

        "glass-white": "rgba(255,255,255,0.7)",
        "glass-dark": "rgba(0,0,0,0.1)",
      },

      backgroundImage: {
        "gradient-purple":
          "linear-gradient(135deg, #ede9fe 0%, #c4b5fd 50%, #a78bfa 100%)",
      },

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      perspective: {
        1000: "1000px",
      },
    },
  },

  plugins: [],
};
