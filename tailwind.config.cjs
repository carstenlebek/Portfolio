/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#1d4ed8",
					secondary: "#0d91d8",
					accent: "#d34904",
					neutral: "#000000",
					"base-100": "#ffffff",
					info: "#94B9E5",
					success: "#52EBD4",
					warning: "#F8CB25",
					error: "#be123c",
				},
			},
		],
	},
};
