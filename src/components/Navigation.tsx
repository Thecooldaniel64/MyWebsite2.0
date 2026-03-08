import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { id: 'hero', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'portfolio', key: 'portfolio' },
  { id: 'contact', key: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, translations } = useLanguage();

  if (!translations) return null;

  const t = translations[lang].nav;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-amber-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl text-white hover:text-amber-500 transition-colors"
          >
            {translations[lang].hero.name.split(' ')[0]}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-300 hover:text-amber-500 transition-colors"
              >
                {t[item.key]}
              </button>
            ))}
            {/* Language Switcher Grande */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setLang('es')}
                className={`px-4 py-2 rounded-full font-bold text-lg transition-all ${
                  lang === 'es'
                    ? 'bg-amber-500 text-black'
                    : 'bg-neutral-800 text-stone-300 hover:bg-neutral-700'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-full font-bold text-lg transition-all ${
                  lang === 'en'
                    ? 'bg-amber-500 text-black'
                    : 'bg-neutral-800 text-stone-300 hover:bg-neutral-700'
                }`}
              >
                EN
              </button>
            </div>
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
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-300 hover:text-amber-500 transition-colors text-left"
                >
                  {t[item.key]}
                </button>
              ))}
              {/* Mobile language switcher */}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setLang('es')}
                  className={`flex-1 px-4 py-2 rounded-full font-bold text-lg ${
                    lang === 'es' ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-stone-300'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`flex-1 px-4 py-2 rounded-full font-bold text-lg ${
                    lang === 'en' ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-stone-300'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}