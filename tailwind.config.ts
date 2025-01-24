import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				purple: "#9E6AF9",
				blue: "#6DB0FF",
				yellow: "#FCD165",
				gold: "#FBC63E",
			},
			container: {
				padding: "2rem",
			},
			keyframes: {
				starspin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				starspinaround: {
					"0%": { top: "0", zIndex: "-1" },
					"50%": { top: "100%" },
					"100%": { top: "0", zIndex: "1" },
				},
				float: {
					"0%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(-6%)" },
					"100%": { transform: "translateY(0%)" },
				},
				gradientrotate: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				gradientrotatethree: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-360deg)" },
				},
			},
			animation: {
				starspin: "starspin 4s linear infinite",
				starspinaround: "starspinaround 6s ease-in-out infinite",
				float: "float 10s ease-in-out infinite",
                gradientrotate: "gradientrotate 100s linear infinite",
                gradientrotatetwo: "gradientrotate 140s linear infinite",
                gradientrotatethree: "gradientrotatethree 80s linear infinite"
			},
			dropShadow: {
				star: "0 0 16px rgba(251, 198, 62, 1)",
			},
		},
	},
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
