/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5b8cff",
        slate: "#0b1220",
        cyan: "#7be7ff",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      boxShadow: {
        glow: "0 0 30px rgba(123, 231, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
