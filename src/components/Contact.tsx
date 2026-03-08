import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { lang, translations } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!translations) return null;

  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${t.emailDirect}?subject=Contacto desde CV - ${formData.name}&body=${formData.message}%0D%0A%0D%0ADe: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-stone-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center text-neutral-900">
          {t.title}
        </h2>
        <p className="text-xl text-neutral-700 text-center mb-16 max-w-3xl mx-auto">
          {t.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-800 mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                  placeholder={t.formName}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-800 mb-2">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                  placeholder={t.formEmail}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-neutral-800 mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none bg-white"
                  placeholder={t.formMessage}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.submit}
              </button>
            </form>
          </div>

          {/* Redes sociales e información */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl text-neutral-900 mb-6">Encuéntrame en:</h3>
            <div className="space-y-4 mb-12">
              <a
                href={t.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-800 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-neutral-900 p-3 rounded-full group-hover:bg-amber-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-amber-500 group-hover:text-white" />
                </div>
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href={t.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-neutral-800 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-neutral-900 p-3 rounded-full group-hover:bg-amber-600 transition-colors">
                  <Github className="w-6 h-6 text-amber-500 group-hover:text-white" />
                </div>
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href={`mailto:${t.social.email}`}
                className="flex items-center gap-4 text-neutral-800 hover:text-amber-600 transition-colors group"
              >
                <div className="bg-neutral-900 p-3 rounded-full group-hover:bg-amber-600 transition-colors">
                  <Mail className="w-6 h-6 text-amber-500 group-hover:text-white" />
                </div>
                <span className="text-lg">{t.social.email}</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-stone-900 rounded-2xl p-8 border border-amber-500/20">
              <h4 className="text-xl text-white mb-4">¿Prefieres el email directo?</h4>
              <a href={`mailto:${t.emailDirect}`} className="text-amber-500 hover:text-amber-400 underline text-lg">
                {t.emailDirect}
              </a>
              <p className="text-stone-400 mt-4">{t.extra}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}