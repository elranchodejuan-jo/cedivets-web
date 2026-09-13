export const siteName = 'CEDIVETS';
export const fullSiteName = 'CEDIVETS — Centro de Diagnóstico Veterinario del Sur';
export const defaultDescription =
	'Diagnóstico veterinario especializado para decisiones clínicas más seguras. Sitio demostrativo de CEDIVETS, El Oro, Ecuador.';

export const navigation = [
	{ label: 'Nosotros', href: '/nosotros/' },
	{ label: 'Servicios', href: '/servicios/' },
	{ label: 'Patología aviar', href: '/patologia-aviar/' },
	{ label: 'Envío de muestras', href: '/envio-de-muestras/' },
	{ label: 'Investigación', href: '/investigacion/' },
	{ label: 'Equipo', href: '/equipo/' },
	{ label: 'Contacto', href: '/contacto/' },
] as const;

export const requiredRoutes = [
	'/',
	'/nosotros/',
	'/servicios/',
	'/servicios/histopatologia/',
	'/servicios/citologia/',
	'/servicios/hematologia/',
	'/servicios/parasitologia/',
	'/servicios/microbiologia/',
	'/patologia-aviar/',
	'/envio-de-muestras/',
	'/investigacion/',
	'/equipo/',
	'/contacto/',
] as const;
