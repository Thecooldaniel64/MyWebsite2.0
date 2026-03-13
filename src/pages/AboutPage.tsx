// src/pages/AboutPage.tsx
import { About } from '../app/components/About';

export function AboutPage() {
  return (
    <div className="pt-20"> {/* Padding top para compensar el navbar fijo */}
      <About />
    </div>
  );
}