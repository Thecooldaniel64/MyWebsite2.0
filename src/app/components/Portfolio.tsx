// src/components/Portfolio.tsx
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/Project';

export function Portfolio() {
  const location = useLocation();

  return (
    <section id="portfolio" className="py-20 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center text-white">
          Portafolio
        </h2>
        <p className="text-xl text-stone-400 text-center mb-16 max-w-3xl mx-auto">
          Una selección de mis proyectos más destacados y trabajos recientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all group border border-neutral-700 hover:border-amber-500/50 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => window.location.href = `/portfolio/${project.id}`} // Cambia esto por Link de react-router, pero necesitas usar navigate dentro de un componente con useNavigate. Mejor usar Link.
            >
              <Link to={`/portfolio/${project.id}`} className="block">
                <div className="relative overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center gap-4 pb-6">
                    {/* Puedes mantener estos botones o quitarlos, ahora el área completa es clickeable */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                  <p className="text-stone-400 mb-4 leading-relaxed line-clamp-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm border border-amber-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="text-stone-500 text-sm">+{project.tags.length-3}</span>}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}