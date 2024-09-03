/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1c1c22",
        "accent-dark": "#13E28D",
        accent: { DEFAULT: "#00ff99", hover: "#00187" },
      },
      fontFamily: {
        jetbrainsmono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
