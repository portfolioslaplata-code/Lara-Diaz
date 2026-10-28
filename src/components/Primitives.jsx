export function Arrow({ diagonal = false, className = '' }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M3 12h17m-7-7 7 7-7 7'} /></svg>;
}

export function SectionHeading({ content, number }) {
  return <div className="section-heading">
    <p className="eyebrow"><span>{number}</span> {content.eyebrow}</p>
    <h2>{content.title}<br /><em>{content.accent}</em></h2>
    {content.description && <p className="section-description">{content.description}</p>}
  </div>;
}

// Composición abstracta original: no representa una obra real.
export function ArchitecturalArt({ variant = 0 }) {
  if (variant > 0) return <svg viewBox="0 0 500 390" className={`project-art project-art-${variant}`} aria-hidden="true" focusable="false">
    <rect width="500" height="390" fill="var(--art-ground)" />
    {variant === 1 ? <>
      <path d="M120 320V161a94 94 0 0 1 188 0v159Z" fill="var(--art-solid)" />
      <path d="M175 320V171a38 38 0 0 1 76 0v149Z" fill="var(--art-ground)" />
      <path d="M290 320V73h87v247" fill="none" stroke="var(--art-line)" />
      <path d="M70 320h360M105 46v302M394 46v302M82 63h329" fill="none" stroke="var(--art-line)" opacity=".5" />
    </> : variant === 2 ? <>
      <path d="M95 285 250 198l155 87-155 88Z" fill="var(--art-solid)" />
      <path d="M95 225 250 138l155 87-155 88Zm0-60L250 78l155 87-155 88Z" fill="none" stroke="var(--art-line)" />
      <path d="M95 165v120m310-120v120M250 78v295M58 307l192 108 192-108" fill="none" stroke="var(--art-line)" strokeDasharray="3 5" opacity=".7" />
    </> : <>
      <circle cx="282" cy="140" r="73" fill="var(--art-solid)" />
      <path d="M85 307V115h101v192m-58-1V157h58m-1 150V218h178v89M67 307h363" fill="none" stroke="var(--art-line)" />
      <path d="M202 306v-71m20 71v-71m20 71v-71m20 71v-71m20 71v-71m20 71v-71m20 71v-71m20 71v-71" stroke="var(--art-line)" opacity=".65" />
      <path d="M63 86h366M400 58v278" stroke="var(--art-line)" strokeDasharray="3 5" opacity=".5" />
    </>}
    <path d="M28 27h16m-8-8v16M456 363h16m-8-8v16" stroke="var(--art-line)" />
  </svg>;

  return <svg className="hero-art" viewBox="0 0 560 590" fill="none" aria-hidden="true" focusable="false">
    <path d="M54 60H507V531H54Z" stroke="var(--line)" />
    <path d="M31 105h502M31 484h502M104 32v525M461 32v525" stroke="var(--line)" strokeDasharray="3 5" />
    <circle cx="395" cy="132" r="65" fill="var(--mustard)" />
    <path d="M104 484V243a128 128 0 0 1 256 0v241Z" fill="var(--terracotta)" />
    <path d="M178 484V254a54 54 0 0 1 108 0v230Z" fill="var(--canvas)" />
    <path d="M300 484V325h161v159Z" fill="var(--burgundy)" />
    <path d="M320 347h121m-121 17h121m-121 17h121m-121 17h121m-121 17h121m-121 17h121m-121 17h121m-121 17h121" stroke="var(--sand)" opacity=".45" />
    <path d="M68 484h427M130 484V243a102 102 0 0 1 204 0v60" stroke="var(--burgundy)" />
    <path d="M104 515h357m-357-8v16m357-16v16M78 115v369m-7-369h14m-14 369h14" stroke="var(--muted)" />
    <path d="M41 60h26M54 47v26m440 458h26m-13-13v26" stroke="var(--burgundy)" />
    <circle cx="104" cy="484" r="4" fill="var(--burgundy)" />
  </svg>;
}

export function PortraitSlot({ image, children, className = '' }) {
  return <div className={className}>{image?.src ? <img src={image.src} alt={image.alt || ''} style={{ objectPosition: image.position || 'center' }} loading={className.includes('hero') ? 'eager' : 'lazy'} /> : children}</div>;
}
