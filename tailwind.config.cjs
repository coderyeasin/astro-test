/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./public/**/*.html",
	  "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}",
	],
	important: true,
	theme: {
	  extend: {
		borderRadius: {
		  xl: ".75rem",
		},
		colors: {
		  bgPrimary: "#156FFF",
		  textPrimary: "#156FFF",
		  bgButton: "#2F2F2F",
		  bgHelp:"#E2F2FF",
		  bgFooter:"#536170"
		},
		fontFamily: {
		  display: ["SofiaPro-Medium", "sans-serif"],
		  body: ["SofiaPro-Medium", "sans-serif"],
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
  
