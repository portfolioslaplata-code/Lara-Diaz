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
    artCaption: 'Espacio / materia / territorio',
    image: null, // { src: '/images/lara.webp', alt: '...', position: '50% 50%' }
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Una práctica,',
    accent: 'muchas conexiones.',
    paragraphs: [
      'Soy arquitecta egresada de la Universidad Nacional de La Plata en 2019. Mi recorrido reúne el proyecto arquitectónico y la dirección de obra con experiencias en construcción sustentable y sistemas constructivos en madera.',
      'El trabajo en cooperativas, los proyectos de hábitat e integración sociourbana y la docencia también forman parte de esa trayectoria. Son ámbitos que conectan el conocimiento técnico con los materiales, el territorio y las personas que lo habitan.',
    ],
    terms: ['Arquitectura', 'Territorio', 'Sustentabilidad', 'Construcción'],
    figureCaption: 'Materiales, espacios y personas.',
    image: null, // Misma estructura que hero.image. El gráfico editorial se reemplaza automáticamente.
  },
  education: {
    eyebrow: 'Formación', title: 'Aprender, conectar,', accent: 'construir.',
    description: 'Una formación que cruza arquitectura, materiales y desarrollo territorial.',
    groups: [
      { id: 'academica', title: 'Formación académica', items: [
        { year: '2019', title: 'Arquitecta', institution: 'Facultad de Arquitectura y Urbanismo · UNLP' },
        { year: '2020', title: 'Diploma Superior en Desarrollo Local, Territorial y Economía Social', institution: 'FLACSO' },
      ] },
      { id: 'sustentable', title: 'Bioarquitectura y construcción sustentable', items: [
        { year: '2024', title: 'Diploma en Bioarquitectura', institution: 'UTN · Facultad Regional San Francisco, FPAA, FADEA y Aula Abierta', status: 'En curso según CV de 2024', needsConfirmation: true },
        { year: '2024', title: 'Jornadas FEDEMAD', institution: 'Construcción en madera y energías renovables' },
      ] },
      { id: 'territorio', title: 'Territorio, hábitat y economía social', items: [
        { year: '2024', title: 'Cooperativismo en la escuela', institution: 'Universidad del Chubut' },
        { year: '2023', title: 'La gestión interna de las organizaciones', institution: 'FLACSO' },
        { year: '2016', title: 'Hábitat III', institution: 'Conferencia de Naciones Unidas sobre vivienda y desarrollo urbano sostenible · Ecuador' },
      ] },
      { id: 'participacion', title: 'Formación y participación profesional', items: [
        { year: '2024', title: 'Liderazgo y gestión de organizaciones', institution: 'Trayectos de formación en Economía Social, Popular y Solidaria' },
        { year: '2023', title: 'Los espacios de la enseñanza de la arquitectura', institution: 'Ponencia y publicación · Congreso ARQUISUR' },
      ] },
    ],
  },
  experience: {
    eyebrow: 'Experiencias laborales', title: 'Del proyecto', accent: 'al territorio.',
    description: 'Obra, trabajo colectivo y enseñanza: distintas escalas de una misma práctica profesional.',
    sourceNote: 'Recorrido documentado hasta 2024. La continuidad de las actividades está pendiente de actualización.',
    items: [
      { id: 'rio-tigre', date: '2024', organization: 'Río Tigre', role: 'Arquitecta', location: 'Cholila, Chubut', status: 'Continuidad por confirmar', needsConfirmation: true, description: 'Diseño y construcción de viviendas con sistemas de madera. Dirección y gestión de obra, interpretación de proyectos, seguimiento constructivo y aportes técnicos al sistema.' },
      { id: 'arqep', date: 'Desde 2019, según CV de 2024', organization: 'Cooperativa ARQEP / AEP', role: 'Arquitecta y socia', location: '', status: 'Continuidad por confirmar', needsConfirmation: true, description: 'Proyecto y dirección de obras públicas y privadas. Gestión de iniciativas de hábitat y políticas públicas junto a organizaciones sociales y municipios.' },
      { id: 'opisu', date: '2020–2021', organization: 'OPISU', role: 'Arquitecta responsable urbana', location: 'Provincia de Buenos Aires', description: 'Proyecto y seguimiento de obras públicas en barrios populares, relevamientos técnicos e informes de gestión.' },
      { id: 'docencia', date: '2022–2024', organization: 'Experiencia docente', role: 'Arquitectura y formación técnica', description: '', details: [
        { date: '2022–2023', text: 'Ayudante en Taller de Proyecto Arquitectónico 1 y 2 · Universidad Nacional de Avellaneda.' },
        { date: '2024', text: 'Políticas Públicas y Desarrollo Local · Instituto Superior Prof. Pablo Luppi.' },
        { date: '2024', text: 'Legislación de la Construcción y Gestión y Administración de Obra · ESETP N.º 7727.' },
      ] },
      { id: 'ambiental', date: '2018–2019', organization: 'Cooperativa Ambiental', role: 'Dirección de obras públicas', location: 'Ensenada, Buenos Aires', description: 'Dirección de obras públicas adjudicadas a la cooperativa.' },
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
    pendingNote: 'Propuesta inicial de servicios, pendiente de validación con Lara.',
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
