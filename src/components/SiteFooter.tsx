function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-wrap">
        <a className="wordmark wordmark--footer" href="#inicio">lume<span>.</span></a>
        <p>Marcas mais vivas. Ideias em movimento.</p>
        <span>© {new Date().getFullYear()} Lume Agência Criativa</span>
      </div>
    </footer>
  )
}

export default SiteFooter
