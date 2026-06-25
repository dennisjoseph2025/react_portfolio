import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactLenis from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import { SpotlightBackground } from './components/SpotlightBackground';
import { GrainOverlay } from './components/GrainOverlay';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <ReactLenis root>
      <Helmet>
        <title>Dennis Joseph (Denjo) — Software Developer Portfolio</title>
        <meta name="description" content="Dennis Joseph (Denjo) — Software Developer specializing in Python, Django, React, and full-stack development. View projects, skills, and experience." />
        <meta property="og:title" content="Dennis Joseph (Denjo) — Software Developer Portfolio" />
        <meta property="og:description" content="Dennis Joseph (Denjo) — Software Developer specializing in Python, Django, React, and full-stack development." />
        <meta property="og:url" content="https://dennis-r.vercel.app/" />
        <meta name="twitter:title" content="Dennis Joseph (Denjo) — Software Developer Portfolio" />
        <meta name="twitter:description" content="Dennis Joseph (Denjo) — Software Developer specializing in Python, Django, React, and full-stack development." />
      </Helmet>
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
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ReactLenis>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/project/:slug" element={<ProjectDetail />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;