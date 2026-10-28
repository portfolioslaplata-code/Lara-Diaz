# Lara Díaz · Portfolio profesional

Portfolio profesional con React, Vite y Tailwind CSS. Aplicación independiente de la Landing y las demos. Sin backend, formularios, servicios externos ni fuentes remotas. Repositorio: https://github.com/portfolioslaplata-code/Lara-Diaz.

## Desarrollo

Requiere Node `^20.19.0 || >=22.12.0`.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run test:e2e
```

`npm run preview` permite revisar el build. Las pruebas usan Microsoft Edge instalado; `PLAYWRIGHT_CHANNEL` permite elegir otro canal disponible. El servidor de tests usa el puerto 4175. Las capturas quedan en `test-results/` (ignorado).

## Dónde editar

- `src/data/portfolio.js`: identidad, navegación, Hero, Sobre mí, formación, experiencia, servicios, contacto, textos de interfaz, SEO y lista `pending`.
- `src/data/projects.js`: fichas, portadas, galerías, memoria y datos técnicos. Los ejemplos no contienen información de obras reales.
- `src/styles/theme.css`: paleta, tipografías locales y medidas generales.
- `src/index.css`: composición, responsive y movimiento reducido.
- `src/components/Sections.jsx`: secciones editoriales y espacios adaptables para fotos.
- `src/components/Projects.jsx` y `ProjectModal.jsx`: cards y diálogo reutilizable.
- `src/components/Primitives.jsx`: flechas, encabezados, composición abstracta original y `PortraitSlot`.
- `src/components/Navbar.jsx`: navegación y menú móvil.
- `src/App.jsx`: orden de secciones y filtrado de navegación/CTA según contenido disponible.

La metadata se genera desde los datos al iniciar Vite o construir: reiniciar el servidor si cambia SEO. El documento tiene español argentino y Open Graph básico; no se inventó un dominio, canonical ni imagen social. `seo.noindex` está activado para el boceto; revisar al preparar una futura publicación. El contenido se renderiza en el cliente (SPA), sin prerenderizado completo.

## Agregar fotografías

Guardar imágenes optimizadas y autorizadas en `public/images/`. Asignar `hero.image` o `about.image`:

```js
{ src: '/images/lara.webp', alt: 'Descripción de la fotografía', position: '50% 40%' }
```

Si son `null`, se muestran las geometrías editoriales existentes. No se extrajo ni publicó la foto del CV.

## Completar un proyecto

Cada ficha admite `title`, `category`, `year`, `location`, `role`, `description`, `narrative` (array de párrafos), `cover`, `images` y `technical` (array de `{ label, value }`). Imágenes: `{ src, alt, caption? }`; `cover` admite `position` para el encuadre. Agregar objetos con `id` único para sumar proyectos.

Mientras `provisional: true`, el modal muestra solamente el título y el aviso pendiente, aunque se hayan cargado campos de trabajo. Cambiar a `false` después de la validación para mostrar los campos completos. Los campos vacíos no generan etiquetas ni bloques. La galería usa imágenes estáticas; el array queda preparado para un futuro slider, que no está implementado.

El diálogo nativo bloquea la interacción exterior. React controla apertura y cierre; se conserva el estilo previo del body y se devuelve el foco al disparador. Soporta Escape, botón de cierre, clic sobre el fondo, contención del foco y scroll interno con cierre siempre visible.

## Pendientes con Lara

- Validar `diazlara.arq@gmail.com` antes de publicar. No se incorporaron teléfono, domicilio, edad ni redes.
- Confirmar fechas y continuidad en Río Tigre y Cooperativa ARQEP / AEP. El CV tiene información hasta aproximadamente 2024; no se utiliza “Actualidad”.
- Confirmar el estado del Diploma en Bioarquitectura, que en el CV figura en curso.
- Validar alcance y redacción de las cuatro áreas de servicios: son propuestas derivadas de su trayectoria.
- Elegir los tres proyectos iniciales (o cambiar la cantidad), confirmar autoría/rol, ubicación, año, textos, memoria e información técnica, y aportar imágenes autorizadas.
- Aprobar presentación, formación y experiencia seleccionadas. Fotografías de Hero y Sobre mí son opcionales.

Se consultaron los PDF proporcionados como referencias. El portfolio histórico no se importó al sitio. Los documentos originales y sus datos privados no se incluyen entre los recursos públicos.

## Límites de esta etapa

Los cambios se suben a GitHub cuando se solicita. Esta tarea no incluye una publicación manual. Sin CV descargable, slider, analytics o servicios externos. La publicación y su dominio se definirán por separado después de validar el contenido.

## Refinamiento de contenido (iteración 2)

- Sobre mí prioriza el recorrido en cooperativas de La Plata y la región.
- Formación selecciona cinco entradas en tres categorías: académica, construcción sustentable y actividad académica.
- Experiencia selecciona cuatro entradas con ARQEP / AEP primero. “Inicio: 2019” expresa solamente el inicio documentado y no afirma vigencia actual. Docencia se resume en una sola descripción.
- Las notas de validación pertenecen a esta documentación, a `pending`, a `needsConfirmation` y a `services.confirmed`, y no se renderizan como avisos públicos. “En curso” es el estado académico visible; actualizarlo desde los datos cuando Lara lo confirme.
- Se retiraron el epígrafe del Hero y los términos decorativos de Sobre mí. Se mantienen los espacios para futuras fotografías.
- La navegación utiliza un subrayado de 1 px con transición de 250 ms desde la izquierda, activo al enfocar y al pasar el cursor con un puntero compatible. El movimiento reducido elimina la transición.

## Validación

Ejecutar los scripts anteriores para revisar lint, build y diez casos de Playwright en Edge. Cubren contenido seleccionado, ausencia de notas internas, navegación por teclado, apertura y cierre de modales, fichas con scroll interno, movimiento reducido, hover/foco del menú y dispositivos táctiles. Responsive y ausencia de desbordes se verifican a 320, 390, 768 y 1440 px; las capturas de Formación y Experiencia se generan además por separado en móvil y escritorio.
