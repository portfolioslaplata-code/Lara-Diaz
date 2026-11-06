import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ProjectSlider from './ProjectSlider.jsx';

// El dialog nativo aporta top layer, fondo inerte y contención del foco.
// React controla su montaje. Se restaura tanto el scroll como la card de origen.
export default function ProjectModal({ project, content, closeLabel, onClose }) {
  const dialogRef = useRef(null);
  const pointerStartedOutside = useRef(false);
  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    document.documentElement.style.scrollbarGutter = 'stable';
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    const surface = dialog.querySelector('.dialog-surface');
    const header = dialog.querySelector('.dialog-top');
    const measureHeader = () => surface.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
    measureHeader();
    const observer = new ResizeObserver(measureHeader);
    observer.observe(header);
    dialog.querySelector('.dialog-close').focus({ preventScroll: true });
    surface.scrollTop = 0;
    return () => {
      observer.disconnect();
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  const facts = ['category', 'year', 'location', 'role', 'status'].filter((key) => project[key]);
  const narrative = project.narrative?.filter(Boolean) || [];
  const images = project.images?.filter((image) => image.src) || [];
  const technical = project.technical?.filter((item) => item.label && item.value) || [];
  return createPortal(<dialog ref={dialogRef} className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" aria-describedby={project.provisional ? 'project-pending' : undefined}
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onPointerDown={(event) => { pointerStartedOutside.current = event.target === event.currentTarget; }}
    onClick={(event) => { if (event.target === event.currentTarget && pointerStartedOutside.current) onClose(); }}
    onKeyDown={(event) => {
      if (event.key !== 'Tab') return;
      const focusable = [...event.currentTarget.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')].filter((element) => !element.disabled && element.getClientRects().length);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }}>
    <div className="dialog-surface">
      <div className="dialog-top"><h2 id="project-dialog-title">{project.title}</h2><button className="dialog-close" type="button" onClick={onClose} aria-label={closeLabel}><span>{closeLabel}</span><span aria-hidden="true">×</span></button></div>
      <div className="dialog-content">
        {project.provisional ? <p id="project-pending" className="dialog-pending">{content.pendingMessage}</p> : <>
          {images.length > 0 && <ProjectSlider key={project.id} images={images} labels={content.labels} />}
          <div className="project-details">
          {facts.length > 0 && <dl className="project-facts">{facts.map((key) => <div key={key}><dt>{content.labels[key]}</dt><dd>{project[key]}</dd></div>)}</dl>}
          {project.description && <p className="project-description">{project.description}</p>}
          {narrative.length > 0 && <section className="project-narrative"><h3>{content.labels.narrative}</h3>{narrative.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>}
          {technical.length > 0 && <section className="project-technical"><h3>{content.labels.technical}</h3><dl>{technical.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>}
          </div>
        </>}
      </div>
    </div>
  </dialog>, document.body);
}
