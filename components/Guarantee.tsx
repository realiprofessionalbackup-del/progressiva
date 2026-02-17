import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-stone-900 to-black border-2 border-emerald-500/20 p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Garantia Blindada de Resultado</h2>
        <p className="text-xl text-stone-300 leading-relaxed mb-8">
          Temos tanta confiança em nossa fórmula profissional que oferecemos uma garantia única: <span className="text-emerald-500 font-bold underline">Cabelo 100% liso ou seu dinheiro de volta</span>. Se você seguir o passo a passo e não tiver o resultado prometido, nós devolvemos cada centavo.
        </p>
        <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">O risco é todo nosso.</p>
      </div>
    </section>
  );
};