import { useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark.jsx';

export default function Navbar({ data, navigation }) {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    const closeOutside = (event) => { if (!header.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);
  return <header className="site-header" ref={header}>
    <div className="page-shell header-inner">
      <a href="#inicio" className="brand" aria-label={`${data.name} · ${data.ui.backTop}`} onClick={() => setOpen(false)}>
        <BrandMark />
        <span className="brand-copy"><span className="brand-name">{data.name}</span><span className="brand-profession">{data.profession}</span></span>
      </a>
      <button ref={button} type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? data.ui.closeMenu : data.ui.menu}<span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <nav id="main-navigation" className={`main-navigation ${open ? 'is-open' : ''}`} aria-label={data.ui.mainNavigation} onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== button.current) setOpen(false);
      }}>
        {navigation.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className={item.id === 'contacto' ? 'nav-contact' : ''}><span className="nav-label">{item.label}</span>{item.id === 'contacto' && <span aria-hidden="true">↗</span>}</a>)}
      </nav>
    </div>
  </header>;
}
