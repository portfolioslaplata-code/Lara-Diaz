// Material y datos proporcionados por Lara, noviembre de 2026.
// Las vistas no permiten inferir materiales, ejecución ni roles no documentados.
const image = (name, alt, width, height) => ({ src: `/images/optimized/${name}.webp`, alt, width, height });
const alpina = image('alpina', 'Vista del anteproyecto de vivienda alpina en El Maitén, con cubierta inclinada y galería', 1402, 1122);
const epuyen = image('epuyen', 'Vista del anteproyecto de vivienda en Epuyén, con galería frente al paisaje montañoso', 1536, 1024);
const diana = [
  image('diana-exterior', 'Casa Diana y Agustin: vista exterior de la vivienda de dos plantas', 1436, 1096),
  image('diana-estar', 'Casa Diana y Agustin: vista del estar y comedor junto a la estufa', 1281, 1122),
  image('diana-estudio', 'Casa Diana y Agustin: espacio de estudio en la planta superior', 1448, 1086),
  image('diana-dormitorio', 'Casa Diana y Agustin: dormitorio con ventanas hacia las montañas', 1536, 1024),
  image('diana-detalle', 'Casa Diana y Agustin: detalle de una estructura de madera con relleno de fibras', 458, 553),
];
const lago = [
  image('lago-exterior', 'Vivienda de 80 m² en Lago Puelo: vista exterior de la fachada', 1024, 1536),
  image('lago-estar', 'Vivienda de 80 m² en Lago Puelo: vista de cocina y estar', 1024, 495),
  image('lago-dormitorio', 'Vivienda de 80 m² en Lago Puelo: dormitorio con escritorio junto a la ventana', 575, 579),
];
const cover = (photo, width, height) => ({ ...photo, src: photo.src.replace('.webp', '-cover.webp'), width, height });

export const projects = [
  {
    id: 'vivienda-alpina', title: 'Vivienda alpina · El Maitén', category: 'Anteproyecto de vivienda',
    year: '2026', location: 'El Maitén', role: '', status: '',
    description: 'Anteproyecto de una cabaña de troncos de 75 m², con dos habitaciones, en El Maitén.',
    cover: cover(alpina, 800, 640), images: [alpina], narrative: [],
    technical: [{ label: 'Superficie', value: '75 m²' }, { label: 'Programa', value: '2 habitaciones' }, { label: 'Sistema descrito', value: 'Cabaña de troncos' }],
  },
  {
    id: 'vivienda-epuyen', title: 'Vivienda unifamiliar · Epuyén', category: 'Anteproyecto',
    year: '2026', location: 'Epuyén', role: '', status: '',
    description: 'Anteproyecto de vivienda unifamiliar de 80 m² con dos habitaciones, en Epuyén.',
    cover: cover(epuyen, 800, 533), images: [epuyen], narrative: [],
    technical: [{ label: 'Superficie', value: '80 m²' }, { label: 'Programa', value: '2 habitaciones' }],
  },
  {
    id: 'casa-diana-agustin', title: 'Casa Diana y Agustin', category: 'Vivienda unifamiliar',
    year: '2026', location: 'Lago Puelo', role: 'Proyecto y dirección de obra', status: 'Obra en proceso',
    description: 'Vivienda unifamiliar de 90 m² y tres dormitorios en Lago Puelo. Proyecto y dirección de obra; obra en proceso.',
    cover: cover(diana[0], 800, 611), images: diana, narrative: [],
    technical: [{ label: 'Superficie', value: '90 m²' }, { label: 'Programa', value: '3 dormitorios' }],
  },
  {
    id: 'vivienda-lago-puelo', title: 'Vivienda unifamiliar · Lago Puelo', category: 'Vivienda unifamiliar',
    year: '2026', location: 'Lago Puelo', role: '', status: 'Obra en curso',
    description: 'Vivienda unifamiliar de 80 m² en Lago Puelo, con dos habitaciones con escritorios. Obra en curso.',
    cover: { ...cover(lago[0], 533, 800), fit: 'contain' }, images: lago, narrative: [],
    technical: [{ label: 'Superficie', value: '80 m²' }, { label: 'Programa', value: '2 habitaciones con escritorios' }],
  },
];
