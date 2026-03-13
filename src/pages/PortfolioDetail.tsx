// src/pages/PortfolioDetail.tsx
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../app/data/Project';

export function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Proyecto no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="text-amber-500 hover:underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Botón volver */}
<motion.button
  onClick={() => navigate('/#portfolio')}
  className="flex items-center gap-2 text-stone-400 hover:text-amber-500 mb-8 transition-colors"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
>
  <ArrowLeft className="w-5 h-5" />
  Volver al portafolio
</motion.button>

        {/* Imagen destacada */}
        <motion.div
          className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm border border-amber-600/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Descripción completa */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-stone-300 leading-relaxed">{project.fullDescription}</p>

          {/* Reto y solución */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold text-amber-500 mb-3">El reto</h3>
              <p className="text-stone-400">{project.challenge}</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold text-amber-500 mb-3">La solución</h3>
              <p className="text-stone-400">{project.solution}</p>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
            <h3 className="text-xl font-semibold text-amber-500 mb-3">Tecnologías utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 bg-neutral-700 text-stone-200 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Ver proyecto en vivo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                Ver código en GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}