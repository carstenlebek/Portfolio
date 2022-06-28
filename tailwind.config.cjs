/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			xs: "360px"
		}
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			"lofi",
			{
				darkModeee: {
					primary: "#22d3ee",
					secondary: "#343232",
					accent: "#343232",
					"base-100": "#000000",
					"base-200": "#0D0D0D",
					"base-300": "#1A1919",
					neutral: "#272626",
					"neutral-focus": "#343232",
					info: "#0000ff",
					success: "#008000",
					warning: "#ffff00",
					error: "#ff0000",
					"--rounded-box": "0.25rem",
					"--rounded-btn": "0.125rem",
					"--rounded-badge": "0.125rem",
					"--animation-btn": "0",
					"--animation-input": "0",
					"--btn-focus-scale": "1",
					"--tab-radius": "0",
				},
			},
		],
	},
	safelist: [
		{
			pattern: /grid-cols-[0-9]+/i,
			variants: ["base", "sm", "md", "lg"],
		},
	],
};
