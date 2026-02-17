import React from 'react';

export const Composition: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Poder Orgânico & Vegano</h2>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">Desenvolvida com o que há de mais moderno na cosmetologia verde para um alinhamento seguro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-stone-900/40 p-8 rounded-3xl border border-stone-800">
          <h3 className="text-emerald-500 text-2xl font-bold mb-4">Zero Formol</h3>
          <p className="text-stone-300 leading-relaxed">Diferente das progressivas comuns, nossa fórmula utiliza ácidos orgânicos que realinham a fibra capilar sem ardência, sem cheiro forte e sem riscos à saúde.</p>
        </div>
        <div className="bg-stone-900/40 p-8 rounded-3xl border border-stone-800">
          <h3 className="text-emerald-500 text-2xl font-bold mb-4">Ativos Nobres</h3>
          <p className="text-stone-300 leading-relaxed">Blend de óleos vegetais e aminoácidos que tratam enquanto alisam, devolvendo a massa capilar e o brilho intenso que você só vê em salões de luxo.</p>
        </div>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-2"><span className="text-2xl">🌱</span> <span className="text-white font-bold">100% VEGANA</span></div>
        <div className="flex items-center gap-2"><span className="text-2xl">🐰</span> <span className="text-white font-bold">CRUELTY FREE</span></div>
        <div className="flex items-center gap-2"><span className="text-2xl">🚫</span> <span className="text-white font-bold">SEM PARABENOS</span></div>
      </div>
    </section>
  );
};