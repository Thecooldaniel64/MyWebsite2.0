import { Briefcase, Calendar, MapPin } from 'lucide-react';


const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Presente',
    location: 'Madrid, España',
    description: 'Liderando el desarrollo de aplicaciones web escalables usando React, Node.js y PostgreSQL. Implementación de arquitecturas microservicios.',
  },
  {
    company: 'Digital Solutions',
    position: 'Desarrollador Frontend',
    period: '2020 - 2022',
    location: 'Barcelona, España',
    description: 'Desarrollo de interfaces de usuario modernas y responsivas. Colaboración con equipos de diseño para crear experiencias excepcionales.',
  },
  {
    company: 'StartUp Creativa',
    position: 'Desarrollador Web Junior',
    period: '2018 - 2020',
    location: 'Valencia, España',
    description: 'Desarrollo y mantenimiento de sitios web corporativos. Aprendizaje de mejores prácticas en desarrollo web moderno.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center text-neutral-900">
          Acerca de Mí
        </h2>
        <p className="text-xl text-neutral-700 text-center mb-16 max-w-3xl mx-auto">
          Con más de 5 años de experiencia en desarrollo web, me apasiona crear soluciones digitales que marcan la diferencia.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-stone-800 to-neutral-900 rounded-2xl p-8 hover:shadow-2xl hover:shadow-amber-500/10 transition-all border border-amber-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-lg">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:text-right mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-stone-400 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-stone-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}