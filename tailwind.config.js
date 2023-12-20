/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "100", transform: "translateY(0px)" },
        },
      },
      animation: {
        'sliding-in': 'slidein 1s linear',
      },
    },
  },
  plugins: [],
};
