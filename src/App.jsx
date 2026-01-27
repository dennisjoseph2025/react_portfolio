import ReactLenis from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import { SpotlightBackground } from './components/SpotlightBackground';
import { GrainOverlay } from './components/GrainOverlay';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { ActivityTicker } from './components/ActivityTicker';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen text-secondary overflow-x-hidden relative w-full bg-black">
        <SpotlightBackground />
        <GrainOverlay />
        <Navbar />
        <main className="relative z-10">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <ActivityTicker />
          <Projects />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
