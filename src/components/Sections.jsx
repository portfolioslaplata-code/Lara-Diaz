import { ArchitecturalArt, Arrow, PortraitSlot, SectionHeading } from './Primitives.jsx';

export function Hero({ data, activeIds }) {
  const content = data.hero;
  return <section id="inicio" className="hero page-shell" aria-labelledby="hero-title">
    <div className="hero-main">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-square" />{content.eyebrow}</p>
        <h1 id="hero-title">{data.name}</h1>
        <p className="hero-profession">{data.profession}</p>
        <p className="hero-statement">{content.headline}<br /><em>{content.accent}</em></p>
        <p className="hero-description">{content.description}</p>
        <div className="hero-actions flex flex-wrap items-center gap-5">
          {activeIds.has('proyectos') && <a href="#proyectos" className="button-primary">{content.primaryLabel}<Arrow diagonal /></a>}
          {activeIds.has('contacto') && <a href="#contacto" className="text-link">{content.secondaryLabel}<Arrow diagonal /></a>}
        </div>
      </div>
      <figure className="hero-figure">
        <PortraitSlot image={content.image} className="hero-image-slot"><ArchitecturalArt /></PortraitSlot>
      </figure>
    </div>
    <div className="hero-bottom">
      <span>{data.university}</span>
      {activeIds.has('sobre-mi') && <a href="#sobre-mi">{content.scrollLabel}<span aria-hidden="true">↓</span></a>}
    </div>
  </section>;
}

export function About({ data, number }) {
  return <section id="sobre-mi" className="section about-section" aria-labelledby="about-heading">
    <div className="page-shell about-grid">
      <div id="about-heading"><SectionHeading content={data} number={number} /></div>
      <div className="about-copy">{data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <PortraitSlot image={data.image} className="about-image-slot">
        <div className="about-symbol" aria-hidden="true"><span /><span /><span /></div>
        <p>{data.figureCaption}</p>
      </PortraitSlot>
    </div>
  </section>;
}

export function Education({ data, number }) {
  return <section id="formacion" className="section education-section page-shell" aria-labelledby="education-heading">
    <div id="education-heading"><SectionHeading content={data} number={number} /></div>
    <div className="education-grid">{data.groups.filter((group) => group.items.length).map((group, index) => <article className="education-group" key={group.id}>
      <div className="group-heading"><span aria-hidden="true">{String.fromCharCode(65 + index)}</span><h3>{group.title}</h3></div>
      <ul>{group.items.map((item) => <li key={`${item.year}-${item.title}`}>
        <span className="entry-year">{item.year}</span><div><h4>{item.title}</h4><p>{item.institution}</p>{item.status && <p className="status-note">{item.status}</p>}</div>
      </li>)}</ul>
    </article>)}</div>
  </section>;
}

export function Experience({ data, number }) {
  return <section id="experiencia" className="section experience-section" aria-labelledby="experience-heading"><div className="page-shell">
    <div className="experience-intro" id="experience-heading"><SectionHeading content={data} number={number} /></div>
    <ol className="experience-list">{data.items.map((item) => <li key={item.id} className="experience-row">
      <div className="experience-date"><span>{item.date}</span></div>
      <div className="experience-identity"><h3>{item.organization}</h3><p>{item.role}</p>{item.location && <span>{item.location}</span>}</div>
      <div className="experience-description">{item.description && <p>{item.description}</p>}</div>
    </li>)}</ol>
  </div></section>;
}

export function Services({ data, number }) {
  return <section id="servicios" className="section services-section page-shell" aria-labelledby="services-heading">
    <div id="services-heading"><SectionHeading content={data} number={number} /></div>
    <ol className="services-list">{data.items.map((item, index) => <li key={item.title}>
      <span className="service-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="service-cross" aria-hidden="true">+</span>
    </li>)}</ol>
  </section>;
}

export function Contact({ data, number }) {
  return <section id="contacto" className="contact-section" aria-labelledby="contact-heading"><div className="page-shell contact-inner">
    <div id="contact-heading"><SectionHeading content={data} number={number} /></div>
    <div className="contact-action"><a className="contact-email" href={`mailto:${data.email}`} aria-label={`${data.linkLabel}: ${data.email}`}><span>{data.email}</span><Arrow diagonal /></a><p>{data.linkLabel}</p></div>
    <div className="contact-geometry" aria-hidden="true"><span /><span /></div>
  </div></section>;
}

export function Footer({ data, navigation }) {
  const footerLinks = navigation.filter((item) => ['sobre-mi', 'proyectos', 'contacto'].includes(item.id));
  return <footer className="site-footer page-shell"><a className="footer-name" href="#inicio">{data.name}<span>{data.profession}</span></a>
    <nav aria-label={data.ui.footerNavigation}>{footerLinks.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
    <span className="footer-year">© {new Date().getFullYear()} <span className="footer-mark" aria-hidden="true">✳</span></span>
  </footer>;
}
