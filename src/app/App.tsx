// src/app/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioDetail } from '../pages/PortfolioDetail';
import { ScrollToHash } from './components/ScrollToHash';

function HomePage() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <Portfolio />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}