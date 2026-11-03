# Lara Diaz · Portfolio profesional

Portfolio independiente con React, Vite y Tailwind CSS, sin backend ni servicios externos. Repositorio: https://github.com/portfolioslaplata-code/Lara-Diaz.

## Desarrollo y validación

Requiere Node `^20.19.0 || >=22.12.0`.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run test:e2e
```

`npm run preview` permite revisar el build. Playwright utiliza Microsoft Edge instalado; `PLAYWRIGHT_CHANNEL` permite elegir otro canal disponible. El servidor de pruebas usa el puerto 4175. Las capturas se guardan en `test-results/` (ignorado por Git).

## Fuentes y edición

- `src/data/portfolio.js`: identidad, navegación, SEO, textos oficiales, formación, experiencia, servicios, contacto y pendientes internos.
- `src/data/projects.js`: las cuatro fichas reales y sus imágenes, en el orden de presentación.
- `src/components/Sections.jsx`: secciones editoriales; `Primitives.jsx` conserva la ilustración del Hero y el PortraitSlot.
- `src/components/Projects.jsx`, `ProjectModal.jsx` y `ProjectSlider.jsx`: cards, diálogo y galería reutilizables.
- `src/index.css`: composición y responsive; `src/styles/theme.css`: identidad visual y fuentes locales.
- `src/components/Navbar.jsx` y `BrandMark.jsx`: navegación y marca existentes.
- `tests/portfolio.spec.js`: contenido, navegación, accesibilidad funcional, imágenes, sliders y responsive.

La actualización de noviembre de 2026 utiliza el material seleccionado y los textos proporcionados por Lara. Su nombre público es **Lara Diaz**, sin tilde. No se agregaron datos profesionales por inferencia visual.

SEO se genera desde los datos al iniciar Vite o construir: reiniciar el servidor si cambia. Se mantiene `seo.noindex` hasta la revisión de publicación. La SPA no tiene prerenderizado completo. No se inventaron dominio, canonical ni imagen social.

## Fotografías y portadas

Los 11 JPEG originales permanecen intactos en `public/images/`. Las versiones de uso público están en `public/images/optimized/`, con nombres cortos. La fotografía personal deriva de `Fotolarasobremi.jpeg` y se muestra completa, sin recorte.

| Proyecto | Imágenes | Portada y orden |
| --- | --- | --- |
| Vivienda alpina · El Maitén | 1 | Imagen individual del anteproyecto; `alpina-cover.webp`. |
| Vivienda unifamiliar · Epuyén | 1 | Imagen individual del anteproyecto; `epuyen-cover.webp`. |
| Casa Diana y Agustin | 5 | Exterior, archivo original `4.26.18 PM.jpeg`; `diana-exterior-cover.webp`. Continúan estar (`4.26.17 PM.jpeg`), estudio (`4.26.17 PM (2).jpeg`), dormitorio (`4.26.17 PM (1).jpeg`) y detalle (`4.29.25 PM.jpeg`). |
| Vivienda unifamiliar · Lago Puelo | 3 | Fachada, archivo original `4.41.11 PM.jpeg`; `lago-exterior-cover.webp`. Continúan estar (`4.41.10 PM (1).jpeg`) y dormitorio (`4.41.10 PM.jpeg`). |

`python scripts/optimize-images.py` reproduce la conversión con Pillow: WebP calidad 85 para las 11 imágenes, sin ampliar ni reducir su resolución; cuatro portadas con lado máximo de 800 px y calidad 82. Corrige orientación EXIF, conserva proporciones, no altera el contenido ni copia metadata privada. Los originales suman 3.576.788 bytes; las 15 versiones WebP, incluyendo portadas adicionales, suman 2.462.442 bytes. No se necesitan Python ni Pillow para ejecutar/buildar el sitio.

Las imágenes tienen dimensiones explícitas, carga diferida y contenedores estables. Solo se monta la imagen activa de una galería; no se descargan todas al entrar al sitio. No hay imágenes remotas.

## Modelo de proyecto y slider

Cada ficha admite `id`, `title`, `category`, `year`, `location`, `role`, `status`, `description`, `cover`, `images`, `technical` y `narrative`. Los campos vacíos no generan etiquetas. Imágenes: `{ src, alt, width, height, caption? }`; `cover` admite `position` y `fit`. La portada vertical de Lago Puelo usa `contain` para conservar la fachada completa. Se conserva compatibilidad con fichas futuras `provisional: true`, pero las cuatro fichas actuales están confirmadas y no muestran avisos provisorios.

`ProjectSlider` recibe `images` y los textos de interfaz. Una sola imagen es estática y no tiene controles. Varias imágenes habilitan anterior/siguiente, contador anunciado, flechas del teclado dentro de la galería y swipe horizontal. La navegación es circular, sin autoplay ni bibliotecas adicionales. Los gestos verticales conservan el scroll. Las flechas no actúan fuera de la galería ni sobre campos de edición; Tab mantiene el recorrido normal. Cada apertura/proyecto reinicia en la primera imagen, sin mover el foco al navegar.

Las vistas completas usan `object-fit: contain`, fondo neutro y transición de 200 ms; movimiento reducido elimina animaciones. El diálogo nativo conserva Escape, cierre por botón/fondo, foco contenido y restaurado a la card, bloqueo del scroll exterior y cierre visible durante el scroll interno.

## Formación y experiencia

Formación contiene cinco entradas en tres grupos: Formación académica, Especializaciones y Publicaciones. La maestría de la Universidad del Bío-Bío comienza en 2025 y está **En curso**. El Diploma en Bioarquitectura también permanece en curso; FEDEMAD no forma parte de esta selección. No se publican certificados ni datos privados.

Experiencia contiene cinco entradas: Cooperativa AEP (Inicio: 2019), Río Tigre, OPISU, Unidad Ejecutora Provincial (UEP, 2016–2017, proyectos educativos rurales) y docencia universitaria, terciaria y secundaria técnica (Actualidad, confirmado por Lara). No se asume vigencia en otras experiencias. Los cuatro servicios y los tres párrafos de Sobre mí respetan el texto suministrado.

## Pendientes

- Confirmar correo de contacto antes de publicar.
- Confirmar fechas/continuidad de Cooperativa AEP y Río Tigre; no se presenta continuidad implícita.
- Confirmar posteriormente el estado del Diploma en Bioarquitectura.
- Los roles específicos en El Maitén, Epuyén y la vivienda de 80 m² de Lago Puelo no están documentados y se omiten.
- No se suministraron memorias extendidas ni más detalles técnicos de proyectos; se dejan vacíos. Los anteproyectos no se presentan como ejecutados o finalizados.

El nombre Casa Diana y Agustin se conserva como fue entregado. Las notas internas (`pending`, `needsConfirmation`) no se renderizan como avisos públicos. Los servicios están confirmados.

## Alcance de validación

Las pruebas cubren textos y SEO, cuatro modales, imágenes individuales, las cinco y tres imágenes de los sliders, carga diferida, botones, teclado, gestos táctiles nativos de Chromium, reinicio, foco, Escape/cierre/fondo, scroll interno, campos vacíos, errores de consola y respuestas fallidas. Se revisan 320, 390, 768 y 1440 px, sin desbordes horizontales. Se generan capturas de página completa y de Sobre mí, Formación, Experiencia, Proyectos y ambos sliders a 390/1440 px. Se conservan pruebas de hover/foco y movimiento reducido.

Esta iteración se trabaja localmente: no incluye commit, push ni publicación. No incorpora CV descargable, analytics ni nuevas integraciones.
