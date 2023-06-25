import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				default: ["var(--font-default)"],
				heading: ["var(--font-heading)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
