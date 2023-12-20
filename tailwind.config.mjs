/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: {
			mytheme: {
				"primary": "#1d4ed8",
				"secondary": "#047857",
				"accent": "#7e22ce",
				"neutral": "#111827",
				"base-100": "#1f2937",
				"info": "#22d3ee",
				"success": "#a3e635",
				"warning": "#fbbf24",
				"error": "#f87171",
			}
		}
	},
	plugins: [
		require("daisyui")
	],
}
