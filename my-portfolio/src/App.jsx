import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Achievement from './pages/Achievement';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      {/* Star Background Effect */}


      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievement />
        <Footer />
      </main>
    </>
  );
}

export default App;
