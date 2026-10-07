import { useState } from 'react'
import ArrowIcon from './ArrowIcon'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#inicio" aria-label="Lume, início" onClick={closeMenu}>
          lume<span>.</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-navigation${menuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <a href="#servicos" onClick={closeMenu}>O que fazemos</a>
          <a href="#sobre" onClick={closeMenu}>A Lume</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
