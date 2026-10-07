function AboutSection() {
  return (
    <section className="about section-pad" id="sobre">
      <div className="about-inner section-wrap">
        <div className="about-stamp" aria-hidden="true">
          <span className="stamp-circle">L</span>
          <span className="stamp-caption">Estratégia com<br />um toque de brilho</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Um pouco sobre nós</p>
          <h2>Não acreditamos<br />em <span>mais do mesmo.</span></h2>
          <p>
            A Lume nasceu para fazer diferente: menos fórmula pronta, mais conversa, parceria
            e estratégia feita para o que sua marca realmente precisa.
          </p>
          <p>
            Somos um time enxuto, próximo e obcecado por fazer cada projeto brilhar. Sem
            promessas mágicas. Com boas ideias e trabalho consistente.
          </p>
          <a className="text-link" href="#contato">
            Prazer, somos a Lume
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path d="M5 15 15 5M6 5h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
