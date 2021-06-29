module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('src/assets/header-bg.jpg')",
      }),
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(0%)", opacity: 0 },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
