// src/components/Navigation.tsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/', sectionId: 'hero' },
  { label: 'Portafolio', path: '/', sectionId: 'portfolio' },
  { label: 'Contacto', path: '/', sectionId: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (location.pathname === '/') {
      // Si ya estamos en la página principal, solo hacemos scroll
      scrollToSection(item.sectionId);
    } else {
      // Si estamos en otra página, navegamos a la principal y luego hacemos scroll
      navigate(item.path);
      // Esperamos un poco a que la página se renderice para hacer scroll
      setTimeout(() => {
        scrollToSection(item.sectionId);
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-amber-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl text-white hover:text-amber-500 transition-colors">
            Daniel Hernandez
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-stone-300 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-500/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-stone-300 hover:text-amber-500 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}