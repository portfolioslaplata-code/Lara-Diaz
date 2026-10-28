# Lara Díaz · Portfolio profesional

Primera propuesta local con React, Vite y Tailwind CSS. Aplicación independiente de la Landing y las demos. Sin backend, formularios, servicios externos ni fuentes remotas. No se realizó publicación ni se inicializó un repositorio Git.

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

Sin commit, push ni deploy. Sin CV descargable, slider, analytics o servicios externos. La publicación y su dominio se definirán por separado después de validar el contenido.

## Validación de esta implementación

- Lint y build completados correctamente.
- Ocho casos de Playwright verificados en Edge: estructura y metadata; las tres fichas con teclado, foco y cierre; ficha larga con galería y campos opcionales; responsive a 320, 390, 768 y 1440 px; movimiento reducido.
- Seis casos pasaron en la primera ejecución. Se corrigió el selector del test móvil para contemplar el cambio de nombre de “Menú” a “Cerrar menú” y pasaron los dos casos restantes al repetirlos.
- Capturas revisadas en escritorio, tablet y móvil. Sin desbordes horizontales detectados.
- No se pudo inspeccionar interactivamente la vista previa en el navegador integrado: su política de acceso bloqueó la vinculación de la pestaña. Esto no impidió las pruebas locales en Edge. Los servidores temporales se detuvieron al finalizar; iniciar con `npm run dev` para revisar el boceto.
