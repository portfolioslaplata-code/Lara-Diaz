// Fuente: CV provisto (información hasta aproximadamente 2024) y brief de la clienta.
// No inferir continuidad laboral ni titulaciones finalizadas a partir de ese documento.
export const portfolio = {
  name: 'Lara Díaz',
  profession: 'Arquitecta',
  initials: 'LD',
  university: 'Universidad Nacional de La Plata',
  graduationYear: '2019',
  seo: {
    title: 'Lara Díaz | Arquitecta',
    description: 'Lara Díaz, arquitecta UNLP. Proyecto y dirección de obra, construcción sustentable en madera, hábitat y desarrollo territorial.',
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
    headline: 'Arquitectura, territorio y',
    accent: 'nuevas formas de construir.',
    description: 'Proyecto y dirección de obra, construcción sustentable y experiencias vinculadas al hábitat y el desarrollo territorial.',
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
      'Soy arquitecta egresada de la Universidad Nacional de La Plata. Gran parte de mi recorrido profesional está vinculado al trabajo en cooperativas de La Plata y la región, participando en proyectos y obras públicas y privadas, así como en iniciativas de hábitat e integración sociourbana junto a organizaciones sociales y municipios.',
      'Mi experiencia también incluye el diseño y la dirección de obra, la construcción con sistemas de madera y la docencia. Estas distintas áreas forman parte de una práctica profesional que aborda la arquitectura desde el proyecto, la construcción y su relación con el contexto social y territorial.',
    ],
    figureCaption: 'Materiales, espacios y personas.',
    image: null, // Misma estructura que hero.image. El gráfico editorial se reemplaza automáticamente.
  },
  education: {
    eyebrow: 'Formación', title: 'Aprender, conectar,', accent: 'construir.',
    description: 'Una formación que cruza arquitectura, materiales y desarrollo territorial.',
    groups: [
      { id: 'academica', title: 'Formación académica', items: [
        { year: '2019', title: 'Arquitecta', institution: 'Universidad Nacional de La Plata' },
        { year: '2020', title: 'Diploma Superior en Desarrollo Local, Territorial y Economía Social', institution: 'FLACSO' },
      ] },
      { id: 'sustentable', title: 'Construcción sustentable', items: [
        { year: '2024', title: 'Diploma en Bioarquitectura', institution: 'UTN · Facultad Regional San Francisco', status: 'En curso', needsConfirmation: true },
        { year: '2024', title: 'Construcción en madera y energías renovables', institution: 'Jornadas FEDEMAD' },
      ] },
      { id: 'participacion', title: 'Actividad académica', items: [
        { year: '2023', title: 'Ponencia y publicación ARQUISUR', institution: '“Los espacios de la enseñanza de la arquitectura”' },
      ] },
    ],
  },
  experience: {
    eyebrow: 'Experiencias laborales', title: 'Del proyecto', accent: 'al territorio.',
    description: 'Obra, trabajo colectivo y enseñanza: distintas escalas de una misma práctica profesional.',
    items: [
      // 2019 es el inicio documentado; no implica vigencia actual ni fecha de finalización.
      { id: 'arqep', date: 'Inicio: 2019', organization: 'Cooperativa ARQEP / AEP', role: 'Arquitecta y socia', location: '', needsConfirmation: true, description: 'Proyecto y dirección de obras públicas y privadas. Trabajo cooperativo en iniciativas de hábitat e integración sociourbana junto a organizaciones sociales y municipios.' },
      { id: 'rio-tigre', date: '2024', organization: 'Río Tigre', role: 'Arquitecta', location: 'Cholila, Chubut', needsConfirmation: true, description: 'Dirección y gestión de obras de viviendas en madera, interpretación de proyectos y aportes técnicos a sistemas constructivos sustentables.' },
      { id: 'opisu', date: '2020–2021', organization: 'OPISU', role: 'Arquitecta responsable urbana', location: 'Provincia de Buenos Aires', description: 'Proyecto y seguimiento de obras públicas en barrios populares, relevamientos técnicos e iniciativas de integración sociourbana.' },
      { id: 'docencia', date: '2022–2024', organization: 'Experiencia docente', role: 'Docencia universitaria y técnica', description: 'Experiencia en enseñanza de proyectos arquitectónicos, políticas públicas, legislación de la construcción y gestión de obra.' },
    ],
  },
  projects: {
    eyebrow: 'Proyectos', title: 'Espacios para', accent: 'compartir.',
    description: 'Una selección de proyectos está en preparación. Pronto, las historias y los procesos detrás de cada obra.',
    provisionalLabel: 'Contenido provisional',
    openLabel: 'Abrir',
    pendingMessage: 'Las imágenes y la información de este proyecto están pendientes de selección y validación con Lara.',
    labels: { category: 'Categoría', year: 'Año', location: 'Ubicación', role: 'Rol', narrative: 'Memoria del proyecto', gallery: 'Galería', technical: 'Información técnica' },
  },
  services: {
    eyebrow: 'Servicios', title: 'Distintas escalas.', accent: 'Una mirada integral.',
    description: 'Áreas de trabajo que se desprenden de mi experiencia profesional.',
    confirmed: false,
    items: [
      { title: 'Proyecto arquitectónico', description: 'Diseño de viviendas, ampliaciones y espacios adaptados a diferentes necesidades.' },
      { title: 'Dirección y gestión de obra', description: 'Planificación, coordinación y seguimiento técnico de proyectos constructivos.' },
      { title: 'Construcción sustentable', description: 'Experiencia en sistemas constructivos en madera y soluciones que consideran materiales y entorno.' },
      { title: 'Hábitat y proyectos territoriales', description: 'Participación técnica en proyectos de integración sociourbana y desarrollo del hábitat.' },
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
    'Actualizar fechas y continuidad en Río Tigre y ARQEP / AEP.',
    'Confirmar estado del Diploma en Bioarquitectura.',
    'Validar las cuatro categorías propuestas de servicios y su redacción.',
    'Elegir proyectos, roles, fechas, ubicación, memorias e imágenes autorizadas.',
    'Aprobar textos y aportar fotografías profesionales si se desea.',
  ],
};
