import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { lang, translations } = useLanguage();

  if (!translations) return null;

  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 px-6 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center text-neutral-900">
          {t.title}
        </h2>
        <p className="text-xl text-neutral-700 text-center mb-16 max-w-3xl mx-auto">
          {t.description}
        </p>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl text-neutral-900 mb-6">{t.skillsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill: string, idx: number) => (
              <span key={idx} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {t.experiences.map((exp: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-r from-stone-800 to-neutral-900 rounded-2xl p-8 hover:shadow-2xl hover:shadow-amber-500/10 transition-all border border-amber-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-white mb-2">{exp.position}</h3>
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