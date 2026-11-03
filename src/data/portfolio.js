// Fuente: CV provisto y actualización confirmada por Lara en noviembre de 2026.
// No inferir continuidad laboral ni titulaciones finalizadas a partir de ese documento.
export const portfolio = {
  name: 'Lara Diaz',
  profession: 'Arquitecta',
  initials: 'LD',
  university: 'Universidad Nacional de La Plata',
  graduationYear: '2019',
  seo: {
    title: 'Lara Diaz | Arquitecta',
    description: 'Lara Diaz, arquitecta UNLP. Proyecto y dirección de obra, construcción sustentable en madera, hábitat y desarrollo territorial.',
    noindex: true, // Boceto privado: revisar pendientes antes de habilitar indexación/publicación.
  },
  navigation: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'formacion', label: 'Formación' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ],
  hero: {
    eyebrow: 'Arquitectura · UNLP',
    headline: 'Servicios profesionales que acompañan las necesidades reales y el desarrollo del usuario, el territorio y la comunidad',
    primaryLabel: 'Ver proyectos',
    secondaryLabel: 'Contacto',
    scrollLabel: 'Conocé mi recorrido',
    image: null, // { src: '/images/lara.webp', alt: '...', position: '50% 50%' }
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Una práctica,',
    accent: 'muchas conexiones.',
    paragraphs: [
      'Soy arquitecta egresada de la Universidad Nacional de La Plata.',
      'Mi recorrido profesional está vinculado con una variedad de temáticas, para lograr una arquitectura integral que resuelva las problemáticas de cada usuario en particular, respetando los valores comunitarios y al ambiente en el cual se inserta la obra. Esto implica no sólo pensar proyectos personalizados ajustados a las necesidades particulares, sino también el impacto de la obra desde su construcción y en toda su vida útil, promoviendo materiales y sistemas constructivos locales que respeten el ambiente y el desarrollo territorial.',
      'Mi experiencia incluye el proyecto y la dirección de obras públicas y privadas, desde el trabajo profesional individual y cooperativo, la formación en sistemas constructivos sustentables como las estructuras de madera, la permacultura y la bioconstrucción en general, y la docencia en escuela técnica como parte de la promoción de los valores cooperativos y socioambientales para la comunidad.',
    ],
    figureCaption: 'Materiales, espacios y personas.',
    image: { src: '/images/optimized/lara.webp', alt: 'Lara Diaz con casco y chaleco de seguridad en una planta de producción de estructuras de madera', width: 1280, height: 720 },
  },
  education: {
    eyebrow: 'Formación', title: 'Aprender, conectar,', accent: 'construir.',
    description: 'Una formación que cruza arquitectura, materiales y desarrollo territorial.',
    groups: [
      { id: 'academica', title: 'Formación académica', items: [
        { year: '2019', title: 'Arquitecta', institution: 'Universidad Nacional de La Plata' },
        { year: '2025', title: 'Magíster en Construcción en Madera', institution: 'Universidad del Bío-Bío, Chile', status: 'En curso' },
      ] },
      { id: 'especializaciones', title: 'Especializaciones', items: [
        { year: '2020', title: 'Diploma Superior en Desarrollo Local, Territorial y Economía Social', institution: 'FLACSO' },
        { year: '2024', title: 'Diploma en Bioarquitectura', institution: 'UTN · Facultad Regional San Francisco', status: 'En curso', needsConfirmation: true },
      ] },
      { id: 'publicaciones', title: 'Publicaciones', items: [
        { year: '2023', title: 'Ponencia y publicación ARQUISUR', institution: '“Los espacios de la enseñanza de la arquitectura”' },
      ] },
    ],
  },
  experience: {
    eyebrow: 'Experiencias laborales', title: 'Del proyecto', accent: 'al territorio.',
    description: 'Obra, trabajo colectivo y enseñanza: distintas escalas de una misma práctica profesional.',
    items: [
      // 2019 es el inicio documentado; no implica vigencia actual ni fecha de finalización.
      { id: 'arqep', date: 'Inicio: 2019', organization: 'Cooperativa AEP', role: 'Arquitecta y socia', location: '', needsConfirmation: true, description: 'Proyecto y dirección de obras públicas y privadas. Trabajo cooperativo en iniciativas de hábitat e integración sociourbana junto a organizaciones sociales y municipios.' },
      { id: 'rio-tigre', date: '2024', organization: 'Río Tigre', role: 'Arquitecta', location: 'Cholila, Chubut', needsConfirmation: true, description: 'Dirección y gestión de obras de viviendas en madera, interpretación de proyectos y aportes técnicos a sistemas constructivos sustentables.' },
      { id: 'opisu', date: '2020–2021', organization: 'OPISU', role: 'Arquitecta responsable urbana', location: 'Provincia de Buenos Aires', description: 'Proyecto y seguimiento de obras públicas en barrios populares, relevamientos técnicos e iniciativas de integración sociourbana.' },
      { id: 'uep', date: '2016–2017', organization: 'Unidad Ejecutora Provincial (UEP)', role: 'Arquitecta proyectista', location: 'Dirección General de Cultura y Educación, Provincia de Buenos Aires', description: 'Desarrollo de proyectos arquitectónicos para establecimientos educativos rurales en la Provincia de Buenos Aires.' },
      { id: 'docencia', date: 'Actualidad', organization: 'Experiencia docente', role: 'Docencia universitaria, terciaria y secundaria técnica', description: 'Experiencia en enseñanza de proyectos arquitectónicos, y otras materias técnicas en la formación de Arquitectura y Maestro Mayor de Obras, además de políticas públicas en diversas Tecnicaturas' },
    ],
  },
  projects: {
    eyebrow: 'Proyectos', title: 'Espacios para', accent: 'compartir.',
    description: 'Anteproyectos y viviendas en El Maitén, Epuyén y Lago Puelo: distintas escalas del habitar.',
    provisionalLabel: 'Contenido provisional',
    openLabel: 'Abrir',
    pendingMessage: 'Las imágenes y la información de este proyecto están pendientes de selección y validación con Lara.',
    labels: { category: 'Categoría', year: 'Año', location: 'Ubicación', role: 'Rol', status: 'Estado', narrative: 'Memoria del proyecto', gallery: 'Galería', technical: 'Información técnica', previous: 'Imagen anterior', next: 'Imagen siguiente', image: 'Imagen', of: 'de' },
  },
  services: {
    eyebrow: 'Servicios', title: 'Distintas escalas.', accent: 'Una mirada integral.',
    description: 'Áreas de trabajo que se desprenden de mi experiencia profesional.',
    confirmed: true,
    items: [
      { title: 'Proyecto arquitectónico', description: 'Diseño de espacios habitables desde cero, ampliaciones, remodelaciones, adaptados a las distintas necesidades y recursos' },
      { title: 'Dirección, gestión de obra, representación técnica', description: 'Acompañamiento profesional en la planificación, gestión y construcción de obras' },
      { title: 'Proyecto urbano', description: 'Diseño intradisciplinario y participativo, planificación territorial para el desarrollo' },
      { title: 'Asesorías técnicas específicas', description: 'Construcción en madera, Políticas públicas, Desarrollo Territorial' },
    ],
  },
  contact: {
    eyebrow: 'Contacto', title: '¿Hablamos de', accent: 'tu proyecto?',
    description: 'Si tenés una idea, una consulta o un proyecto en mente, podemos conversar.',
    email: 'diazlara.arq@gmail.com',
    emailConfirmed: false, // Validar con Lara antes de publicar. Mailto autorizado para este boceto.
    linkLabel: 'Escribime por mail',
  },
  ui: { skip: 'Saltar al contenido', menu: 'Menú', closeMenu: 'Cerrar menú', closeProject: 'Cerrar proyecto', backTop: 'Volver al inicio', mainNavigation: 'Navegación principal', footerNavigation: 'Navegación del pie' },
  pending: [
    'Confirmar correo antes de publicar.',
    'Actualizar fechas y continuidad en Río Tigre y Cooperativa AEP.',
    'Confirmar estado del Diploma en Bioarquitectura.',
    'Confirmar roles específicos en los anteproyectos de El Maitén y Epuyén y en la vivienda de 80 m² de Lago Puelo si se desea publicarlos.',
    'Aportar memorias o información técnica adicional de proyectos solo si se desea ampliar las fichas.',
  ],
};
