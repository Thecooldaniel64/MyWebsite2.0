import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-8 px-6 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-stone-400">
          Hecho con <Heart className="w-4 h-4 text-amber-500 fill-current" /> por Tu Nombre © 2026
        </p>
      </div>
    </footer>
  );
}