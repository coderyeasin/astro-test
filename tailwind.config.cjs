/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./public/**/*.html",
	  "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
	],
	important: true,
	theme: {

	  extend: {
		borderRadius: {
		  xl: ".75rem",
		},
		colors: {
		  black: "#12151E",
		  "hot-pink": "#fd2d78",
		},
		fontFamily: {
		  display: ["Poppins", "sans-serif"],
		  body: ["Poppins", "sans-serif"],
		},
		fontSize: {
		  "7xl": "5rem",
		  "8xl": "6rem",
		  "9xl": "7rem",
		},
	  },
	},
	plugins: [],
  };
  
