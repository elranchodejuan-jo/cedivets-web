// Catálogo de precios CEDIVETS 2026. sourcePage incluye la portada.
export const areas = [
	{ id: 'hematologia', name: 'Hematología y química sanguínea', summary: 'Estudios de sangre y perfil bioquímico.', accent: 'teal' },
	{ id: 'parasitologia', name: 'Parasitología', summary: 'Evaluación de hemoparásitos y estudios de heces.', accent: 'purple' },
	{ id: 'citologia', name: 'Citología', summary: 'Raspado cutáneo, citologías y telecitología.', accent: 'blue' },
	{ id: 'histopatologia', name: 'Histopatología', summary: 'Estudio de lesiones y cadenas mamarias.', accent: 'purple' },
	{ id: 'microbiologia', name: 'Microbiología en bovinos, equinos y porcinos', summary: 'Cultivos y antibiogramas del catálogo de producción.', accent: 'blue' },
	{ id: 'aviar', name: 'Microbiología y control sanitario en aves', summary: 'Necropsias, cultivos y controles sanitarios aviares.', accent: 'teal' },
] as const;

export type AreaId = (typeof areas)[number]['id'];
export type Service = {
	slug: string;
	name: string;
	areaId: AreaId;
	area: string;
	species: string;
	speciesTags: readonly string[];
	specifications: string;
	sampleType: string | null;
	deliveryTime: string;
	price: string | null;
	condition?: string;
	sourcePage: 4 | 5 | 6 | 7;
	accent: 'purple' | 'blue' | 'teal';
};

type SpeciesKey = 'section' | 'mammals' | 'birdsReptiles' | 'birds' | 'bep' | 'unspecified' | 'bitch' | 'chicks' | 'avianArea';
const species: Record<SpeciesKey, { label: string; tags: readonly string[] }> = {
	section: { label: 'Bovinos, equinos, porcinos y aves (encabezado de sección)', tags: ['Bovinos', 'Equinos', 'Porcinos', 'Aves'] },
	mammals: { label: 'Mamíferos (según la fila)', tags: ['Mamíferos'] },
	birdsReptiles: { label: 'Aves y reptiles (según la fila)', tags: ['Aves', 'Reptiles'] },
	birds: { label: 'Aves', tags: ['Aves'] },
	bep: { label: 'Bovinos, equinos y porcinos (encabezado de sección)', tags: ['Bovinos', 'Equinos', 'Porcinos'] },
	unspecified: { label: 'No especificada para este estudio en el PDF', tags: [] },
	bitch: { label: 'Perra (según la fila)', tags: ['Perra'] },
	chicks: { label: 'Pollitos BB', tags: ['Aves'] },
	avianArea: { label: 'Área aviar; muestra ambiental o biológico', tags: [] },
};

// Columnas: ruta, estudio, especie, especificaciones, muestra, entrega, precio, condición.
type StudyRow = [string, string, SpeciesKey, string, string | null, string, string | null, string?];
type SourceGroup = { areaId: AreaId; sourcePage: 4 | 5 | 6 | 7; rows: StudyRow[] };
const stool = 'Heces frescas o refrigeradas de 3 °C a 6 °C.';
const stoolJar = 'Heces en frasco estéril.';
const histology = 'Colocar inmediatamente el tejido en formol al 10 %, con un volumen 10 veces mayor que el del tejido. Frasco de boca ancha. Solicitar información para masas mayores a 10 cm.';
const suart = 'Medio de transporte estéril, refrigerado y no congelado. La tabla indica «Suart» y la nota final «Stuart»; confirmar la denominación con CEDIVETS.';

const groups: SourceGroup[] = [
	{ areaId: 'hematologia', sourcePage: 4, rows: [
		['hemograma-completo-manual', 'Hemograma completo (manual)', 'mammals', 'Frasco de tapa lila en mamíferos.', 'Sangre en EDTA.', 'Mismo día', '11,00'],
		['hemograma-completo-aves-reptiles', 'Hemograma completo (aves, reptiles)', 'birdsReptiles', 'Frasco de tapa verde.', 'Sangre en heparina.', 'Mismo día', '13,00'],
		['hematocrito-proteinas-totales', 'Hematocrito más proteínas totales', 'section', 'Frasco de tapa lila.', 'Sangre en EDTA.', 'Mismo día', '5,00'],
		['compatibilidad-sanguinea', 'Pruebas de compatibilidad sanguínea', 'section', 'Frasco de tapa lila; sangre del donador y del receptor.', 'Sangre en EDTA.', 'Mismo día', '10,00'],
		['perfil-bioquimico', 'Perfil bioquímico', 'section', 'Según el panel solicitado.', 'Sangre sin anticoagulante.', '24–48 horas', 'Consultar'],
	] },
	{ areaId: 'parasitologia', sourcePage: 4, rows: [
		['evaluacion-hemoparasitos', 'Evaluación de hemoparásitos', 'section', 'Sangre en EDTA, frasco de tapa lila.', 'Sangre en EDTA.', 'Mismo día', '15,00'],
		['flotacion-observacion-directa', 'Flotación con observación directa', 'section', stoolJar, stool, 'Mismo día', '4,50'],
		['flotacion-seriada-observacion-directa', 'Flotación seriada con observación directa', 'section', stoolJar, stool, 'Mismo día', '5,00'],
		['faust-observacion-directa', 'Faust con observación directa', 'section', stoolJar, stool, 'Mismo día', '5,00'],
		['mc-master', 'Mc Master', 'section', stoolJar, stool, 'Mismo día', '7,00'],
		['sedimentacion', 'Sedimentación', 'section', stoolJar, stool, 'Mismo día', '7,00', 'El PDF imprime «Sedimientación»; confirmar la denominación.'],
		['parasitologia-aves-pool', 'Parasitología de aves (pool)', 'birds', 'Pool de 3 a 4 muestras.', 'Heces o contenido intestinal.', 'Mismo día', '12,00'],
	] },
	{ areaId: 'citologia', sourcePage: 5, rows: [
		['raspado-cutaneo', 'Raspado cutáneo', 'unspecified', 'Lámina portaobjetos.', 'Raspado cutáneo profundo.', 'Mismo día', '5,00'],
		['citologia-vaginal', 'Citología vaginal', 'bitch', 'Lámina portaobjetos.', '3 muestras de la misma perra en 3 días.', 'Mismo día', '20,00', 'El PDF no aclara desde qué toma se cuenta el plazo «Mismo día».'],
		['citologia-general', 'Citología general', 'unspecified', 'Lámina portaobjetos.', '5 láminas secadas al aire.', 'Hasta 3 días', '15,00'],
		['telecitologia', 'Telecitología', 'unspecified', 'Imágenes.', 'Consultar con CEDIVETS.', 'Mismo día', null],
	] },
	{ areaId: 'histopatologia', sourcePage: 5, rows: [
		['histopatologia-una-lesion', 'Histopatología de 1 lesión', 'unspecified', histology, 'Tejido en formol al 10 %; frasco de boca ancha.', '15 a 21 días', '40,00', 'Lesión adicional: 20,00.'],
		['histopatologia-una-cadena-mamaria', 'Histopatología de 1 cadena mamaria', 'unspecified', histology, 'Tejido en formol al 10 %; frasco de boca ancha.', '15 a 21 días', '80,00', 'Incluye ganglio linfático.'],
		['histopatologia-dos-cadenas-mamarias', 'Histopatología de 2 cadenas mamarias', 'unspecified', histology, 'Tejido en formol al 10 %; frasco de boca ancha.', '15 a 21 días', '120,00', 'Incluye ganglios linfáticos. El PDF imprime «2 cadena mamaria»; confirmar la denominación.'],
	] },
	{ areaId: 'microbiologia', sourcePage: 6, rows: [
		['cultivo-piel-antibiograma', 'Cultivo bacteriano de piel + antibiograma', 'bep', suart, 'Hisopado de lesión o tejido.', 'Consultar', '21,00'],
		['cultivo-oido-unilateral-antibiograma', 'Cultivo bacteriano de oído unilateral + antibiograma', 'bep', suart, 'Hisopado de lesión o tejido.', 'Consultar', '21,00'],
		['cultivo-oido-bilateral-antibiograma', 'Cultivo bacteriano de oído bilateral + antibiograma', 'bep', suart, 'Hisopado de lesión o tejido.', 'Consultar', '38,00'],
		['cultivo-orina-antibiograma', 'Cultivo bacteriano de orina + antibiograma', 'bep', 'Cistocentesis o recipiente estéril de boca ancha. Enviar la orina el mismo día de la toma.', 'Orina.', 'Consultar', '25,00'],
		['cultivo-heridas-antibiograma', 'Cultivo de heridas + antibiograma', 'bep', suart, 'Hisopado de lesión o tejido.', 'Consultar', '25,00'],
		['coprocultivos-antibiograma', 'Coprocultivos + antibiograma', 'bep', 'Recipiente estéril de boca ancha.', stool, 'Consultar', '28,00'],
		['hemocultivos-antibiograma', 'Hemocultivos + antibiograma', 'bep', 'Solicitar el medio al laboratorio.', null, 'Consultar', '70,00'],
		['cultivo-leche-mastitis-antibiograma', 'Cultivo de leche (mastitis) + antibiograma', 'bep', 'Muestra individual o pool.', 'Leche refrigerada / estéril (como figura en el PDF).', 'Consultar', '30.00'],
	] },
	{ areaId: 'aviar', sourcePage: 7, rows: [
		['necropsias-aves', 'Necropsias de aves', 'birds', 'Cadáver u órganos representativos. Enviar máximo 5 aves para necropsia (página 3).', null, 'Consultar', '25,00'],
		['investigacion-enterobacterias-aves', 'Investigación de enterobacterias (solo cultivo general)', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '25,00'],
		['cultivo-antibiograma-general-aves', 'Cultivo y antibiograma general', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '50,00'],
		['cultivo-antibiograma-hisopos-aves', 'Cultivo y antibiograma de hisopos', 'birds', 'Pool de hisopos.', null, 'Consultar', '50,00'],
		['cultivo-antibiograma-articulacion-aves', 'Cultivo y antibiograma de articulación', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '50,00'],
		['control-calidad-pollo-bb', 'Control de calidad pollo BB (Test de Cervantes)', 'chicks', '10 pollitos BB de 1 día.', null, 'Consultar', '110,00'],
		['salmonella-huevos-comerciales', 'Investigación de Salmonella spp. en huevos comerciales', 'birds', 'Pool de 15 a 30 huevos.', null, 'Consultar', '50,00'],
		['salmonella-aves', 'Investigación de Salmonella spp. en aves', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '30,00'],
		['cultivo-micologico-aves', 'Cultivo micológico en aves', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '28,00'],
		['avibacterium-paragallinarum', 'Cultivo y antibiograma Avibacterium paragallinarum', 'birds', 'Coriza infecciosa.', null, 'Consultar', '50,00'],
		['esterilidad-biologicos', 'Control de esterilidad de biológicos', 'avianArea', 'Individual por vacuna.', null, 'Consultar', '28,00'],
		['pasteurella-spp-aves', 'Cultivo y antibiograma Pasteurella spp.', 'birds', 'Pool de 3 a 4 aves.', null, 'Consultar', '50,00'],
		['control-nacedoras-plumon', 'Control microbiológico de nacedoras (plumón)', 'avianArea', 'Individual por muestra.', null, 'Consultar', '28,00'],
		['control-cama-aves', 'Control microbiológico de cama de aves (cascarilla)', 'avianArea', 'Individual por muestra.', null, 'Consultar', '28,00'],
		['control-alimento-aves', 'Control microbiológico de alimento de aves', 'avianArea', 'Individual por muestra.', null, 'Consultar', '28,00'],
		['control-instalaciones-avicolas', 'Control microbiológico de instalaciones avícolas', 'avianArea', 'Hisopos.', null, 'Consultar', '28,00'],
	] },
];

export const services: Service[] = groups.flatMap(({ areaId, sourcePage, rows }) => {
	const area = areas.find((item) => item.id === areaId);
	if (!area) throw new Error('Área desconocida: ' + areaId);
	return rows.map(([slug, name, speciesKey, specifications, sampleType, deliveryTime, price, condition]) => ({
		slug, name, areaId, area: area.name, species: species[speciesKey].label,
		speciesTags: species[speciesKey].tags, specifications, sampleType, deliveryTime,
		price, condition, sourcePage, accent: area.accent,
	}));
});

export const speciesOptions = [...new Set(services.flatMap((service) => service.speciesTags))];
