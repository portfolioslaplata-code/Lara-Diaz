import { useState } from 'react';
import { ArchitecturalArt, Arrow, SectionHeading } from './Primitives.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects({ data, projects, number, closeLabel }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return <section id="proyectos" className="section projects-section" aria-labelledby="projects-heading"><div className="page-shell">
    <div className="projects-intro" id="projects-heading"><SectionHeading content={data} number={number} /><span className="project-count" aria-hidden="true">{String(projects.length).padStart(2, '0')}</span></div>
    <div className="projects-grid">{projects.map((project) => <button type="button" key={project.id} className="project-card" aria-haspopup="dialog" aria-label={`${data.openLabel} ${project.title}`} onClick={() => setSelectedProject(project)}>
      <span className="project-cover">{project.cover?.src ? <img src={project.cover.src} alt={project.cover.alt || ''} width={project.cover.width} height={project.cover.height} loading="lazy" decoding="async" style={{ objectPosition: project.cover.position || 'center', objectFit: project.cover.fit || 'cover' }} /> : <ArchitecturalArt variant={project.artwork || 1} />}</span>
      <span className="project-card-bottom"><span>{project.provisional && <span className="project-status">{data.provisionalLabel}</span>}{project.category && <span className="project-category">{project.category}</span>}<span className="project-title">{project.title}</span>{(project.location || project.year) && <span className="project-context">{[project.location, project.year].filter(Boolean).join(' · ')}</span>}</span><span className="project-open"><Arrow diagonal /></span></span>
    </button>)}</div>
    {selectedProject && <ProjectModal project={selectedProject} content={data} closeLabel={closeLabel} onClose={() => setSelectedProject(null)} />}
  </div></section>;
}
