import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Achievement from './pages/Achievement';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import StarBackground from './components/Starb';

function App() {
  return (
    <>
      {/* Star Background Effect */}
      {/* <StarBackground /> */}

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with section IDs */}
      <main className="relative z-10 pt-32">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievement />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
