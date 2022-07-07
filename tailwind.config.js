/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  presets: [require("./tailwind-preset")],
  theme: {
    extend: {
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
