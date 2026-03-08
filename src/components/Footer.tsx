import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { lang, translations } = useLanguage();
  if (!translations) return null;
  return (
    <footer className="bg-neutral-950 text-white py-8 px-6 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-stone-400">{translations[lang].footer.text}</p>
      </div>
    </footer>
  );
}