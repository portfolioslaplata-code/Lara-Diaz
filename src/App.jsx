import { portfolio } from './data/portfolio.js';
import { projects } from './data/projects.js';
import Navbar from './components/Navbar.jsx';
import { About, Contact, Education, Experience, Footer, Hero, Services } from './components/Sections.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  const sections = [
    { id: 'sobre-mi', Component: About, data: portfolio.about, visible: portfolio.about.paragraphs.some(Boolean) },
    { id: 'formacion', Component: Education, data: portfolio.education, visible: portfolio.education.groups.some((group) => group.items.length) },
    { id: 'experiencia', Component: Experience, data: portfolio.experience, visible: portfolio.experience.items.length },
    { id: 'proyectos', Component: Projects, data: portfolio.projects, visible: projects.length, extra: { projects, closeLabel: portfolio.ui.closeProject } },
    { id: 'servicios', Component: Services, data: portfolio.services, visible: portfolio.services.items.length },
    { id: 'contacto', Component: Contact, data: portfolio.contact, visible: portfolio.contact.email },
  ].filter((section) => section.visible);
  const activeIds = new Set(sections.map((section) => section.id));
  const navigation = portfolio.navigation.filter((item) => activeIds.has(item.id));
  return <>
    <a className="skip-link" href="#contenido">{portfolio.ui.skip}</a>
    <Navbar data={portfolio} navigation={navigation} />
    <main id="contenido" tabIndex={-1}>
      <Hero data={portfolio} activeIds={activeIds} />
      {sections.map(({ id, Component, data, extra }, index) => <Component key={id} data={data} number={String(index + 1).padStart(2, '0')} {...extra} />)}
    </main>
    <Footer data={portfolio} navigation={navigation} />
  </>;
}
