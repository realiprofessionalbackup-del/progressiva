
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Benefits } from './components/Benefits';
import { FinalOffer } from './components/FinalOffer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* ProgressBar for engagement */}
      <div className="fixed top-0 left-0 w-full h-1 bg-stone-200 z-50">
        <div 
          className="h-full bg-stone-900 transition-all duration-300" 
          style={{ width: `${Math.min(100, (scrolled ? 100 : 0))}%` }}
        />
      </div>

      <main className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24 pb-24">
        <Hero />
        <Results />
        <Benefits />
        <FinalOffer />
      </main>

      <footer className="w-full py-12 bg-stone-900 text-stone-400 text-center text-sm px-6">
        <p>&copy; {new Date().getFullYear()} Progressiva Orgânica Profissional. Todos os direitos reservados.</p>
        <p className="mt-2 text-stone-600">Este produto é para uso externo. Siga as instruções de aplicação.</p>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;
