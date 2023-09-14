/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      0: "0",
      x: "4px",
      1: "10px",
      2: "18px",
      3: "22px",
      4: "28px",
      5: "35px",
      6: "44px",
      7: "55px",
      8: "69px",
      9: "86px",
      10: "107px",
      11: "134px",
      12: "168px",
    },
    screens: {
      small: "320px",
      phone: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1200px",
      large: "1201px",
    },

    extend: {
      borderRadius: {
        small: "4px",
        medium: "8px",
        big: "16px",
        large: "32px",
        extraLarge: "64px",
      },
      borderWidth: {
        0: "0",
        1: "1px",
        2: "2px",
      },
    },
  },
  plugins: [],
};
