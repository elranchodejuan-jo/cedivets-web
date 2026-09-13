# CEDIVETS Web

Base profesional para la web oficial de **CEDIVETS — Centro de Diagnóstico Veterinario del Sur**. Construida con Astro y TypeScript estricto como sitio estático, rápido, accesible y preparado para GitHub Pages.

> Estado: integración local del catálogo oficial CEDIVETS 2026. El sitio mantiene `noindex` y no incluye backend. Los datos ausentes o ambiguos se identifican sin inventarlos; consulte [pendientes editoriales](docs/pendientes-editoriales.md).

## Stack

- Astro 7 + TypeScript estricto
- HTML semántico y CSS con tokens de marca
- JavaScript mínimo para búsqueda y filtros del catálogo
- Generación estática, sin backend ni credenciales
- GitHub Actions + GitHub Pages

## Desarrollo local

Requisitos: Node.js 24 o una versión compatible con `engines` y npm.

```bash
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Astro mostrará la URL local, normalmente `http://localhost:4321/cedivets-web/`.

## Build

```bash
npm run build
npm run preview
```

El resultado estático se genera en `dist/`. Para reproducir explícitamente la configuración de GitHub Pages:

```bash
npm run build:github
```

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml`:

1. se ejecuta al hacer push a `main` o manualmente;
2. instala dependencias desde `package-lock.json`;
3. construye el sitio con la acción oficial de Astro;
4. publica el artefacto mediante GitHub Pages.

La configuración actual usa:

- `site`: `https://elranchodejuan-jo.github.io`
- `base`: `/cedivets-web`
- URL esperada: `https://elranchodejuan-jo.github.io/cedivets-web/`

## Preparación para `cedivets.com`

No se ha comprado ni configurado el dominio. Cuando CEDIVETS autorice el cambio:

1. configurar DNS en el proveedor del dominio;
2. crear `public/CNAME` con `cedivets.com`;
3. usar `SITE_URL=https://cedivets.com` y `BASE_PATH=/`;
4. actualizar la URL del sitemap en `robots.txt`;
5. retirar `noindex` únicamente después de revisar contenido, privacidad y contacto.

## Catálogo

`src/data/services.ts` transcribe 43 estudios principales del PDF oficial, con página de origen, área, especie o ámbito, especificaciones, tipo de muestra, tiempo de entrega y precio cuando está indicado. La lesión adicional permanece como condición de histopatología de una lesión. `ServiceCatalog.astro` ofrece búsqueda con o sin tildes y filtros del lado del cliente. Cada estudio genera una ficha estática individual; las cinco rutas anteriores por área siguen disponibles.

## Estructura

```text
src/
├── components/       # Header, Footer, catálogo, hero y llamadas a la acción
├── data/             # navegación, rutas y servicios estructurados
├── layouts/          # metadata y layout global
├── lib/              # utilidades de URL compatibles con base path
├── pages/            # rutas estáticas y detalles de servicio
└── styles/           # tokens de marca y estilos responsive
```

## Seguridad y fase demo

- No hay secretos, formularios activos, analítica, cookies ni almacenamiento de datos.
- No se afirma autorización de Agrocalidad.
- Los servicios orientados a Agrocalidad se presentan por separado como en desarrollo o coordinados con laboratorios autorizados, según el PDF.
- No se publican profesionales, acreditaciones, certificaciones o infraestructura sin verificación.
- El identificador gráfico se recortó del PDF oficial; el favicon existente sigue pendiente de un activo de marca original.

## Contenido pendiente

Antes de un lanzamiento definitivo deben confirmarse el archivo original del logo, la historia y la infraestructura, el equipo, el horario de atención, los vacíos y erratas anotados en [pendientes editoriales](docs/pendientes-editoriales.md), la política de privacidad y el responsable del canal de contacto.
