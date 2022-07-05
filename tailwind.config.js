/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  presets: [require("./tailwind-preset")],
  theme: {
    extend: {
      colors: {
        "bluegeneraleinformation": "#100f3a",
        "graytitleh2": "#9f9fb0",
		    
        "graylighttitlecard": "#f5f0f0",
        "whiteportfolio": "#ffffff",
        "violetnav": "#8583e1",
        
        "bluehomecard-educal2": "#2d69f0",
        "bluehomeletter-educal": "#0fa0dd",
        "bluehomelight-educal": "#edeef3",
        "bluenav1-educal": "#b8dde3",
        "grayhomeletter-educal": "#6d6e75",
        "graynav1-educal": "#6d6e75",
        "orangehomeletter-educal": "#fa7919",
        "greenhomecard-educal": "#30a820",
        "yellow-educal": "#fc1",
        
        
      },
    },
  },
  plugins: [],
};
