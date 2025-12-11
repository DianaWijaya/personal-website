/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // MAIN BACKGROUND PALETTE
        "bg-white": "#ffffff",
        "bg-light": "#f8fafc",   // near-white grey (similar to gray-50)
        "bg-light-2": "#f1f5f9", // light soft grey (similar to gray-100)

        // TEXT COLORS
        "text-dark": "#1e293b",  // slate-800
        "text-medium": "#475569", // slate-600
        "text-light": "#94a3b8",  // slate-400

        // ACCENT — PURPLE
        "purple-main": "#6d28d9", // deep purple (indigo-700)
        "purple-light": "#8b5cf6", // brighter purple (violet-500)
        "purple-soft": "#ede9fe",  // soft background purple

        // GLASS UI COLORS
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

      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
