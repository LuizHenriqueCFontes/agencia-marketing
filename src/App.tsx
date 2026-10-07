import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import TestimonialSection from './components/TestimonialSection'
import TrustStrip from './components/TrustStrip'
import './App.css'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
