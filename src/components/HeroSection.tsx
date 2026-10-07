import ArrowIcon from './ArrowIcon'

function HeroSection() {
  return (
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Agência de marketing digital</p>
        <h1>
          Ideias boas.
          <br />
          <span>Resultados</span> maiores.
        </h1>
        <p className="hero-description">
          Estratégia, criatividade e dados para marcas que querem crescer de verdade — e aparecer
          por todos os motivos certos.
        </p>
        <div className="hero-actions">
          <a className="button button--dark" href="#contato">
            Vamos tirar do papel <ArrowIcon />
          </a>
          <a className="text-link" href="#projetos">
            Conheça nosso trabalho <ArrowIcon diagonal />
          </a>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            <span>J</span><span>M</span><span>A</span><span>+</span>
          </div>
          <p><strong>Gente boa, trabalho bem feito.</strong><br />E resultados que falam por si.</p>
        </div>
      </div>

      <div className="hero-art" aria-label="Painel ilustrativo de crescimento digital">
        <div className="art-orbit art-orbit--one" />
        <div className="art-orbit art-orbit--two" />
        <div className="art-spark art-spark--one">✳</div>
        <div className="art-spark art-spark--two">✳</div>
        <div className="growth-card">
          <div className="growth-card-top">
            <span>Visão geral</span>
            <span className="period-pill">Últimos 30 dias⌄</span>
          </div>
          <p className="growth-label">Alcance total</p>
          <div className="growth-number">
            248.6<span>k</span><span className="growth-change">↗ 32,8%</span>
          </div>
          <div className="chart">
            <div className="chart-grid">
              <span>250k</span><span>200k</span><span>150k</span><span>100k</span>
            </div>
            <svg
              viewBox="0 0 390 150"
              preserveAspectRatio="none"
              role="img"
              aria-label="Gráfico ilustrativo com tendência de crescimento"
            >
              <defs>
                <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b9e76c" stopOpacity=".48" />
                  <stop offset="100%" stopColor="#b9e76c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M0 122 C26 112 30 93 57 101 S94 117 119 86 S152 99 180 69 S216 81 240 55 S278 68 302 37 S335 51 356 27 S377 25 390 8 V150 H0Z" />
              <path className="chart-line" d="M0 122 C26 112 30 93 57 101 S94 117 119 86 S152 99 180 69 S216 81 240 55 S278 68 302 37 S335 51 356 27 S377 25 390 8" />
              <circle cx="356" cy="27" r="5" />
            </svg>
          </div>
          <div className="chart-months">
            <span>01 mai</span><span>08 mai</span><span>15 mai</span><span>22 mai</span><span>30 mai</span>
          </div>
        </div>
        <div className="floating-note">
          <span className="note-icon">↗</span>
          <span><strong>É no detalhe</strong><br />que o crescimento acontece.</span>
        </div>
        <div className="floating-badge"><span>l</span></div>
      </div>
      <a className="scroll-cue" href="#servicos"><span /> Role para descobrir</a>
    </section>
  )
}

export default HeroSection
