import { LanguageProvider } from '../context/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}