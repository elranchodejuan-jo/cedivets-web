export type Service = {
	slug: string;
	name: string;
	area: string;
	species: string;
	specifications: string;
	sampleType: string;
	deliveryTime: string;
	price: string;
	accent: 'purple' | 'blue' | 'teal';
	summary: string;
};

const pending = 'Información por confirmar';

export const services: Service[] = [
	{
		slug: 'histopatologia',
		name: 'Estudio histopatológico',
		area: 'Histopatología',
		species: pending,
		specifications: 'Alcance, tinciones y criterios de recepción por confirmar.',
		sampleType: pending,
		deliveryTime: pending,
		price: pending,
		accent: 'purple',
		summary: 'Estructura preparada para documentar el procesamiento y evaluación de tejidos.',
	},
	{
		slug: 'citologia',
		name: 'Estudio citológico',
		area: 'Citología',
		species: pending,
		specifications: 'Técnicas, coloraciones y criterios de recepción por confirmar.',
		sampleType: pending,
		deliveryTime: pending,
		price: pending,
		accent: 'blue',
		summary: 'Base para publicar estudios citológicos y sus requisitos de preparación.',
	},
	{
		slug: 'hematologia',
		name: 'Estudio hematológico',
		area: 'Hematología',
		species: pending,
		specifications: 'Pruebas disponibles, analitos y condiciones preanalíticas por confirmar.',
		sampleType: pending,
		deliveryTime: pending,
		price: pending,
		accent: 'teal',
		summary: 'Ficha preparada para incorporar el catálogo validado de laboratorio clínico.',
	},
	{
		slug: 'parasitologia',
		name: 'Estudio parasitológico',
		area: 'Parasitología',
		species: pending,
		specifications: 'Métodos, conservación y criterios de rechazo por confirmar.',
		sampleType: pending,
		deliveryTime: pending,
		price: pending,
		accent: 'purple',
		summary: 'Estructura para detallar las pruebas parasitológicas que ofrezca el laboratorio.',
	},
	{
		slug: 'microbiologia',
		name: 'Estudio microbiológico',
		area: 'Microbiología',
		species: pending,
		specifications: 'Pruebas, medios de transporte y alcance analítico por confirmar.',
		sampleType: pending,
		deliveryTime: pending,
		price: pending,
		accent: 'blue',
		summary: 'Base para incorporar estudios microbiológicos sin adelantar servicios no validados.',
	},
];

export const serviceAreas = [...new Set(services.map((service) => service.area))];
export const speciesOptions = [...new Set(services.map((service) => service.species))];
