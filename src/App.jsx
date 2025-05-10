import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollIndicator from './components/ScrollIndicator'
import StatsCounter from './components/StatsCounter'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 dark:text-white">
      {/* Background particles for added visual interest */}
      <ParticlesBackground
        count={80}
        color="rgb(59, 130, 246)"
        speed={0.5}
        size={3}
        opacity={0.2}
      />

      {/* Scroll indicator and progress bar */}
      <ScrollIndicator />

      <Navbar />
      <Hero />
      <Features />
      <StatsCounter />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
