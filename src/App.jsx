import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact-Me/Contact';
import Technologies from './pages/Technologies/Technologies';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/Scroll/ScrollToTopButton';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
