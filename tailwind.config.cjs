/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream-10": "#FAF7F2",   // Very very very light cream
        "cream-20": "#F0EBE3",   // Very very light cream
        "cream-50": "#FAF3E0",   // Very very light cream
        "cream-100": "#F5E6C8",  // Light cream
        "cream-200": "#ECD8AE",  // Warm cream
        "brown-300": "#C4A484",  // Light brown
        "brown-400": "#A97C50",  // Medium brown
        "brown-500": "#8B5A2B",  // Rich brown
        "brown-600": "#6D3D14",  // Dark brown
        "brown-700": "#4E2A0E",  // Very dark brown
      },
      backgroundImage: (theme) => ({
        "gradient-browncream":
          "linear-gradient(90deg, #F5E6C8 0%, #8B5A2B 100%)",
      }),
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
