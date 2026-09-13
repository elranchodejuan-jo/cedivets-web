import type { APIRoute } from 'astro';
import { requiredRoutes } from '../data/site';

export const GET: APIRoute = ({ site }) => {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const origin = site ?? new URL('https://elranchodejuan-jo.github.io');
	const urls = requiredRoutes
		.map((route) => {
			const path = `${base}${route.slice(1)}`;
			return `  <url><loc>${new URL(path, origin).href}</loc></url>`;
		})
		.join('\n');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
