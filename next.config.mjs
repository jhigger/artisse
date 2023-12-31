/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/**
	 * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
	 * out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/exclusive",
				destination: "https://9yzkecerap7.typeform.com/to/NlCsLOld",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/deck",
					destination: "/ArtisseAI_Introduction.pdf",
				},
			],
			afterFiles: [],
			fallback: [],
		};
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			type: "asset/source",
		});
		return config;
	},
};

export default config;
