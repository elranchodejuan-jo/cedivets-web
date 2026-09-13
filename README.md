# CEDIVETS Web

Base profesional para la web oficial de **CEDIVETS — Centro de Diagnóstico Veterinario del Sur**. Construida con Astro y TypeScript estricto como sitio estático, rápido, accesible y preparado para GitHub Pages.

> Estado: demo editorial. El sitio mantiene `noindex`, no incluye backend y marca como **Información por confirmar** todo dato institucional, técnico o comercial que todavía necesita aprobación.

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
npm run dev
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

`src/data/services.ts` define cada servicio con nombre, área, especie, especificaciones, tipo de muestra, tiempo de entrega y precio. `ServiceCatalog.astro` consume estos datos y ofrece búsqueda y filtros del lado del cliente. Las páginas de detalle se generan desde una ruta dinámica estática.

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
- Las referencias a servicios coordinados con laboratorios autorizados son solo una estructura editorial.
- No se publican profesionales, acreditaciones, certificaciones o infraestructura sin verificación.
- El identificador gráfico y favicon son placeholders explícitos.

## Contenido pendiente

Antes del lanzamiento definitivo deben confirmarse: logo, historia, misión, visión, equipo, infraestructura, catálogo técnico y comercial, protocolos de muestras, dirección, horario, teléfono, correo, política de privacidad y responsable del canal de contacto.
