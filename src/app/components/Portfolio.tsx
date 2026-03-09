import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.',
    image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3Mjk3OTAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación móvil para gestión de proyectos y tareas con colaboración en tiempo real.',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcyOTM3NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    title: 'Dashboard Analítico',
    description: 'Panel de control con visualización de datos en tiempo real y reportes personalizables.',
    image: 'https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTgwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Sistema de Branding',
    description: 'Identidad visual completa y sistema de diseño para empresa tecnológica emergente.',
    image: 'https://images.unsplash.com/photo-1763950744273-617bee945bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHNob3djYXNlfGVufDF8fHx8MTc3MzAwNDMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Figma', 'Illustrator', 'Design System'],
  },
  {
    title: 'Portfolio Interactivo',
    description: 'Sitio web portfolio con animaciones avanzadas y experiencias interactivas únicas.',
    image: 'https://images.unsplash.com/photo-1721864428830-7417b93831b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBwcm9qZWN0JTIwbW9ja3VwfGVufDF8fHx8MTc3MzAwNDMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Motion', 'Three.js', 'GSAP'],
  },
];

export function Portfolio() {
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
              key={index}
              className="bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all group border border-neutral-700 hover:border-amber-500/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center gap-4 pb-6">
                  <button className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors shadow-lg">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm border border-amber-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}