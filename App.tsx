import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Benefits } from './components/Benefits';
import { Composition } from './components/Composition';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
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
    <div className="min-h-screen flex flex-col items-center bg-black">
      {/* ProgressBar for engagement */}
      <div className="fixed top-0 left-0 w-full h-1 bg-stone-900 z-50">
        <div 
          className="h-full bg-emerald-500 transition-all duration-300 shadow-[0_0_10px_#10b981]" 
          style={{ width: `${Math.min(100, (scrolled ? 100 : 0))}%` }}
        />
      </div>

      <main className="w-full max-w-4xl mx-auto flex flex-col gap-16 md:gap-24 pb-24">
        <Hero />
        <Results />
        <Benefits />
        <Composition />
        <Guarantee />
        <FAQ />
        <FinalOffer />
      </main>

      <footer className="w-full py-12 bg-stone-950 text-stone-500 text-center text-sm px-6 border-t border-stone-900">
        <div className="flex flex-col gap-4">
          <p>&copy; {new Date().getFullYear()} Progressiva Orgânica Profissional. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-stone-700">
            <span className="hover:text-stone-500 cursor-pointer">Termos de Uso</span>
            <span className="hover:text-stone-500 cursor-pointer">Políticas de Privacidade</span>
          </div>
          <p className="mt-2 text-stone-700">Este produto é para uso externo. Siga as instruções de aplicação.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;