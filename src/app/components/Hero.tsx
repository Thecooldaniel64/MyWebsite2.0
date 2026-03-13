import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioImages = [
  '/images/Lotes.png',
  '/images/dashboard.png',
  '/images/server.png',
  '/images/6.png',
  '/images/3.jpeg',
];

// Posiciones para el collage de fondo
const collagePositions = [
  { top: '10%', left: '5%', size: 'w-48 h-48', rotate: -12, delay: 0 },
  { top: '60%', left: '8%', size: 'w-56 h-56', rotate: 8, delay: 0.2 },
  { top: '15%', right: '10%', size: 'w-52 h-52', rotate: 15, delay: 0.1 },
  { top: '55%', right: '5%', size: 'w-64 h-64', rotate: -8, delay: 0.3 },
  { top: '35%', left: '3%', size: 'w-44 h-44', rotate: 20, delay: 0.15 },
  { top: '25%', right: '15%', size: 'w-40 h-40', rotate: -15, delay: 0.25 },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-stone-900">
      {/* Collage de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {portfolioImages.map((img, index) => {
          const position = collagePositions[index];
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
              transition={{
                duration: 1,
                delay: position.delay,
              }}
              whileHover={{ 
                opacity: 0.5,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl backdrop-blur-sm">
                <img
                  src={img}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
        
        {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/0 to-neutral-900/0"></div>
      </div>

      {/* Contenido principal - Imagen a la izquierda, texto a la derecha */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
        
        {/* Columna izquierda - Imagen grande sin transparencia */}
        {/* Columna izquierda - Imagen grande sin transparencia */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0 lg:pr-8 xl:pr-12"
>
  <div className="relative">
    <img
      src="/images/me2.jpeg"
      alt="Jesús Daniel Hernández"
      className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] object-cover rounded-2xl shadow-2xl"
    />
  </div>
</motion.div>

        {/* Columna derecha - Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 block mt-2">
              Daniel Hernandez
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-amber-400/90 mb-6">
              Desarrollador Full Stack & DevOps
          </h2>
          
          <p className="text-base md:text-lg text-stone-300 max-w-xl mx-auto lg:mx-0 mb-8">
            Especializado en crear experiencias digitales increíbles con IA. Transformo ideas en realidad a través del código y el diseño.
          </p>
          
          <motion.button
            onClick={() => scrollToSection('portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 text-lg rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-2xl hover:shadow-amber-500/30"
          >
            Ver mi trabajo
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}