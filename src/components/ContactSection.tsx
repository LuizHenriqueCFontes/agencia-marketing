import ArrowIcon from './ArrowIcon'

function ContactSection() {
  return (
    <section className="contact section-pad" id="contato">
      <div className="contact-inner section-wrap">
        <div>
          <p className="eyebrow">Seu próximo passo começa aqui</p>
          <h2>Vamos fazer<br />algo <span>incrível?</span></h2>
          <p className="contact-copy">
            Conta pra gente o que você está imaginando. A primeira conversa é por nossa conta.
          </p>
        </div>
        <a className="contact-card" href="mailto:oi@lume.agency?subject=Vamos%20conversar">
          <span className="contact-card-label">Escreva pra gente</span>
          <span className="contact-email">oi@lume.agency</span>
          <span className="contact-action">
            Começar uma conversa <ArrowIcon diagonal />
          </span>
        </a>
        <div className="contact-bottom">
          <span>Sem pressão. Sem apresentação de 50 slides. Só uma boa conversa.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
