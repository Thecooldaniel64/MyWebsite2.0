import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const portfolioImages = [
  'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3Mjk3OTAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcyOTM3NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTgwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1763950744273-617bee945bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHNob3djYXNlfGVufDF8fHx8MTc3MzAwNDMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1721864428830-7417b93831b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBwcm9qZWN0JTIwbW9ja3VwfGVufDF8fHx8MTc3MzAwNDMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-stone-900 px-6 overflow-hidden relative">
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
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/80"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Imagen Hero muy grande */}
        <div className="mb-12 relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc3Mjk2MTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hero"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-[3rem] object-cover shadow-2xl border-8 border-amber-500 ring-8 ring-amber-500/30"
            />
            {/* Efecto de brillo en las esquinas */}
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
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">Tu Nombre</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-stone-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Desarrollador Full Stack & Diseñador Creativo
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Especializado en crear experiencias digitales increíbles. Transformo ideas en realidad a través del código y el diseño.
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
          Ver mi trabajo
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}