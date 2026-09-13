// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://elranchodejuan-jo.github.io';
const base = process.env.BASE_PATH ?? '/cedivets-web';

export default defineConfig({
	site,
	base,
	output: 'static',
	build: {
		format: 'directory',
	},
});
