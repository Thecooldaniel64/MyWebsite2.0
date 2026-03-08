import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// Usamos las imágenes de tu servidor (ajusta las rutas)
const portfolioImages = [
  '/pictures/1.jpeg',
  '/pictures/5.jpeg',
  '/pictures/Img1.jpg',
  '/pictures/6.png',
  '/pictures/1.jpeg', // repetimos para llenar
];

const collagePositions = [
  { top: '10%', left: '5%', size: 'w-48 h-48', rotate: -12, delay: 0 },
  { top: '60%', left: '8%', size: 'w-56 h-56', rotate: 8, delay: 0.2 },
  { top: '15%', right: '10%', size: 'w-52 h-52', rotate: 15, delay: 0.1 },
  { top: '55%', right: '5%', size: 'w-64 h-64', rotate: -8, delay: 0.3 },
  { top: '35%', left: '3%', size: 'w-44 h-44', rotate: 20, delay: 0.15 },
  { top: '25%', right: '15%', size: 'w-40 h-40', rotate: -15, delay: 0.25 },
];

export function Hero() {
  const { lang, translations } = useLanguage();

  if (!translations) return null;

  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-stone-900 px-6 overflow-hidden relative">
      {/* Collage de fondo con tus imágenes */}
      <div className="absolute inset-0 overflow-hidden">
        {portfolioImages.map((img, index) => {
          const position = collagePositions[index % collagePositions.length];
          return (
            <motion.div
              key={index}
              className={`absolute ${position.size} opacity-20 hover:opacity-40 transition-opacity`}
              style={{
                top: position.top,
                left: position.left,
                right: position.right,
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{
                opacity: 0.2,
                scale: 1,
                rotate: position.rotate,
              }}
              transition={{ duration: 1, delay: position.delay }}
              whileHover={{ opacity: 0.5, scale: 1.1 }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl backdrop-blur-sm">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/80"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Imagen Hero: tu foto */}
        <div className="mb-12 relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <img
              src="/pictures/me.jpg"
              alt={t.name}
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-[3rem] object-cover shadow-2xl border-8 border-amber-500 ring-8 ring-amber-500/30"
            />
            <div className="absolute top-0 left-0 w-24 h-24 bg-amber-400/40 rounded-tl-[3rem] blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-400/40 rounded-br-[3rem] blur-2xl"></div>
          </motion.div>
        </div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t.greeting}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
            {t.name}
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-stone-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {t.title}
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {t.description}
        </motion.p>
        <motion.button
          onClick={() => scrollToSection('portfolio')}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 text-lg rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-2xl hover:shadow-amber-500/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.cta}
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}