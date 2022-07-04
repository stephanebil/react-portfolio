/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  presets: [require("./tailwind-preset")],
  theme: {
    extend: {
      colors: {
        "bluegeneraleinformation": "#100f3a",
        
		
		"violethomecard-educal": "#8007e6",
        "bluehomecard-educal": "#2b4eff",
        "bluehomecard-educal2": "#2d69f0",
        "bluehomeletter-educal": "#0fa0dd",
        "bluehomelight-educal": "#edeef3",
        "bluenav1-educal": "#b8dde3",
        "grayhomeletter-educal": "#6d6e75",
        "graynav1-educal": "#6d6e75",
        "orangehomeletter-educal": "#fa7919",
        "greenhomecard-educal": "#30a820",
        "yellow-educal": "#fc1",
        "red-educal": "#f00",
        "green-educal": "#0f0",
      },
    },
  },
  plugins: [],
};
