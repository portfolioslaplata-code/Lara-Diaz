import { useRef, useState } from 'react';
import { Arrow } from './Primitives.jsx';

// Solo monta la imagen actual; las restantes no se descargan hasta navegar.
// El modal desmonta este componente al cerrar y su key reinicia cada proyecto.
export default function ProjectSlider({ images, labels }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  if (!images.length) return null;
  const multiple = images.length > 1;
  const current = images[index];
  const move = (step) => setIndex((value) => (value + step + images.length) % images.length);
  // La proporción inicial fija el escenario durante la navegación, incluso al
  // alternar fotos verticales y horizontales. El CSS limita su altura al viewport.
  const ratio = Math.max(1, (images[0].width || 4) / (images[0].height || 3));
  return <section className={`project-gallery${multiple ? ' has-controls' : ''}`} aria-label={labels.gallery} style={{ '--gallery-ratio': ratio }}
    onKeyDown={(event) => {
      if (!multiple || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.closest('input, select, textarea, [contenteditable="true"]')) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
    <figure>
      <div className="slider-image" tabIndex={multiple ? 0 : undefined} role={multiple ? 'group' : undefined} aria-label={multiple ? labels.gallery : undefined}
        onTouchStart={(event) => {
          touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
        }}
        onTouchMove={(event) => { if (event.touches.length !== 1) touchStart.current = null; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!multiple || !start || !event.changedTouches.length) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
        }}>
        <img key={current.src} src={current.src} alt={current.alt || ''} width={current.width} height={current.height} loading="lazy" decoding="async" />
      </div>
      {current.caption && <figcaption>{current.caption}</figcaption>}
    </figure>
    {multiple && <div className="slider-controls">
      <button type="button" className="slider-previous" aria-label={labels.previous} onClick={() => move(-1)}><Arrow /></button>
      <span className="slider-position" role="status" aria-live="polite" aria-atomic="true"><span aria-hidden="true">{index + 1} / {images.length}</span><span className="sr-only">{labels.image} {index + 1} {labels.of} {images.length}</span></span>
      <button type="button" aria-label={labels.next} onClick={() => move(1)}><Arrow /></button>
    </div>}
  </section>;
}
