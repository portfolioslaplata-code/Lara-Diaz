/**
 * Editar datos sin cambiar cards ni modal. Para publicar una ficha: provisional: false.
 * cover: { src, alt, position? }; images: [{ src, alt, caption? }].
 * narrative: párrafos; technical: [{ label, value }]. Los campos vacíos se ocultan.
 * No importar el portfolio histórico sin selección y aprobación de Lara.
 */
export const projects = ['01', '02', '03'].map((number, index) => ({
  id: `proyecto-${number}`,
  title: `Proyecto ${number}`,
  provisional: true,
  artwork: index + 1,
  cover: null,
  category: '',
  year: '',
  location: '',
  role: '',
  description: '',
  narrative: [],
  images: [],
  technical: [],
}));
