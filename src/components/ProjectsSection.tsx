import ArrowIcon from './ArrowIcon'

const projects = [
  {
    name: 'Casa Botânica',
    category: 'Branding · Conteúdo · Performance',
    result: '+214%',
    resultLabel: 'em vendas online',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85',
    className: 'project-card--botanica',
  },
  {
    name: 'Órbita Café',
    category: 'Estratégia · Social · Performance',
    result: '3,8x',
    resultLabel: 'retorno sobre mídia',
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1100&q=85',
    className: 'project-card--orbita',
  },
  {
    name: 'Noma Studio',
    category: 'Posicionamento · Branding',
    result: '+180%',
    resultLabel: 'de novos clientes',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',
    className: 'project-card--noma',
  },
]

function ProjectsSection() {
  return (
    <section className="projects section-wrap section-pad" id="projetos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Trabalho que fala</p>
          <h2>Histórias reais.<br /><span>Impacto de verdade.</span></h2>
        </div>
        <p className="section-intro">
          Cada negócio tem seu próprio brilho. Aqui estão algumas histórias que tivemos o
          prazer de ajudar a contar.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.className}`} key={project.name}>
            <div className="project-image" style={{ backgroundImage: `url("${project.image}")` }}>
              <span className="project-category">{project.category}</span>
              <span className="project-open" aria-label={`Ver projeto ${project.name}`}>
                <ArrowIcon diagonal />
              </span>
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p><strong>{project.result}</strong> {project.resultLabel}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">
        *Resultados obtidos em projetos reais, em períodos e estratégias diferentes.
      </p>
    </section>
  )
}

export default ProjectsSection
