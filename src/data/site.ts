import { services } from './services';

export const siteName = 'CEDIVETS';
export const fullSiteName = 'CEDIVETS — Centro de Diagnóstico Veterinario del Sur';
export const defaultDescription =
	'CEDIVETS: diagnóstico veterinario especializado en El Oro, Ecuador. Consulte el catálogo 2026, requisitos de muestras y canales de contacto.';

export const navigation = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Nosotros', href: '/nosotros/' },
	{ label: 'Servicios', href: '/servicios/' },
	{ label: 'Áreas', href: '/areas/' },
	{ label: 'Equipo', href: '/equipo/' },
	{ label: 'Contacto', href: '/contacto/' },
] as const;

export const secondaryNavigation = [
	{ label: 'Patología aviar', href: '/patologia-aviar/' },
	{ label: 'Envío de muestras', href: '/envio-de-muestras/' },
	{ label: 'Investigación', href: '/investigacion/' },
] as const;

export const contact = {
	address: 'Barrio El Paraíso: Calle Junín e/. Manabí y Azuay. Huaquillas - El Oro - Ecuador.',
	phone: '0990774449',
	email: 'cedivetsur@gmail.com',
	facebook: 'Cedivets',
	instagram: '@cedivetsur',
} as const;

export const developmentServices = [
	'Brucelosis bovina (Rosa de Bengala y técnicas confirmatorias)',
	'Tuberculosis bovina (pruebas de tuberculina y apoyo diagnóstico)',
	'Anemia infecciosa equina — Test de Coggins (inmunodifusión en gel de agar)',
	'Serología y vigilancia de enfermedades de control oficial en aves (Newcastle, Influenza, Salmonella, Mycoplasma, etc.)',
	'Apoyo en muestreos y cadena de custodia para certificaciones de predios libres',
] as const;

export const requiredRoutes = [
	'/',
	'/nosotros/',
	'/servicios/',
	'/areas/',
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
	...services.map((service) => '/servicios/' + service.slug + '/'),
];
