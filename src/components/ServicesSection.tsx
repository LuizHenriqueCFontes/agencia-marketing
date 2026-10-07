import ArrowIcon from './ArrowIcon'

const services = [
  {
    number: '01',
    title: 'Estratégia digital',
    description:
      'Um plano claro para sua marca chegar às pessoas certas e transformar atenção em oportunidade.',
    tags: ['Posicionamento', 'Planejamento'],
  },
  {
    number: '02',
    title: 'Mídia de performance',
    description:
      'Campanhas inteligentes, otimizadas de perto para cada investimento trabalhar a favor do seu negócio.',
    tags: ['Meta Ads', 'Google Ads'],
  },
  {
    number: '03',
    title: 'Conteúdo & social',
    description:
      'Conteúdo com personalidade que constrói comunidade, fortalece marcas e cria conversas de verdade.',
    tags: ['Redes sociais', 'Conteúdo'],
  },
  {
    number: '04',
    title: 'Marca & criação',
    description:
      'Identidades visuais e ideias criativas para sua marca ser reconhecida antes mesmo de dizer seu nome.',
    tags: ['Branding', 'Direção criativa'],
  },
]

function ServicesSection() {
  return (
    <section className="services section-wrap section-pad" id="servicos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">O que fazemos</p>
          <h2>Seu próximo capítulo<br />começa <span>por aqui.</span></h2>
        </div>
        <p className="section-intro">
          Da primeira ideia ao próximo grande passo, juntamos as peças certas para fazer sua
          marca avançar.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-number">{service.number}</span>
              <span className="service-arrow"><ArrowIcon diagonal /></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="tag-list">
              {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
