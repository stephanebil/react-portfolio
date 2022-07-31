/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  presets: [require("./tailwind-preset")],
  theme: {
    extend: {

       screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

      colors: {
        "bluegeneraleinformation": "#100f3a",
        "bluering": "#007bff",
        "graytitleh2": "#9f9fb0",
        "graylighttitlecard": "#f5f0f0",
        "whiteportfolio": "#ffffff",
        "violetnav": "#8583e1",
      },
    },
  },
  plugins: [],
};
