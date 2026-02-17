import React from 'react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5573988158615?text=Quero%20minha%20progressiva%20organica%20agora%20do%20lote%20em%20oferta";

  return (
    <section className="pt-12 md:pt-20 px-6 flex flex-col items-center text-center">
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <span className="px-4 py-1 text-xs font-bold tracking-widest text-black uppercase bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]">
          100% LISO NATURAL
        </span>
        <span className="px-4 py-1 text-xs font-bold tracking-widest text-emerald-500 uppercase border border-emerald-500/30 bg-emerald-950/20 rounded-full">
          SEM FORMOL
        </span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 px-2">
        Cabelo <span className="text-emerald-500">100% liso</span> com brilho espelhado
      </h1>
      
      <p className="text-xl md:text-2xl text-stone-400 font-light mb-8 max-w-2xl leading-relaxed">
        Fórmula profissional <span className="text-white font-medium">Vegana e Sem Sulfato</span>. O alinhamento perfeito do salão, agora na sua casa.
      </p>

      {/* Trust & Safety Badge */}
      <div className="flex items-center gap-3 mb-8 px-5 py-2 bg-stone-900/80 border border-stone-800 rounded-full">
        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        <span className="text-xs font-bold text-stone-300 uppercase tracking-tighter">Compra 100% Segura • Entrega Garantida em todo Brasil</span>
      </div>

      {/* Price Highlight Box */}
      <div className="bg-[#0a1f14] border-2 border-emerald-900/50 p-8 rounded-[2.5rem] mb-12 w-full max-w-lg shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500 shadow-[0_0_20px_#10b981]"></div>
        <p className="text-emerald-500/60 line-through text-xl mb-2">De R$ 350,00 por apenas:</p>
        
        <div className="bg-emerald-500 text-black px-8 py-6 rounded-3xl mb-6 inline-block shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          <span className="text-5xl md:text-7xl font-black tracking-tighter">R$ 139,90</span>
        </div>

        <p className="text-white text-2xl font-bold mb-8">
          Ou 4x de <span className="text-emerald-400 font-black">R$ 34,97</span> sem juros
        </p>

        <div className="flex items-center justify-center gap-4 py-5 px-8 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-lg shadow-lg border border-emerald-400/30">
          <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1-1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
          Frete Grátis BA + SE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full text-left">
        {[
          "100% Liso na primeira aplicação",
          "Fórmula Vegana de alta performance",
          "Garantia de resultado ou seu dinheiro de volta"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-5 bg-stone-900/50 rounded-2xl border border-stone-800">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-500 font-bold">✓</div>
            <span className="text-lg font-medium text-stone-300 leading-snug">{item}</span>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-lg mx-auto mb-12">
        <div className="absolute inset-0 bg-emerald-500 blur-[120px] rounded-full opacity-10 transform -rotate-12"></div>
        <img 
          src="https://i.ibb.co/JNJjFMY/Whats-App-Image-2026-02-14-at-10-43-50.jpg" 
          alt="Produto Progressiva Orgânica" 
          className="relative z-10 w-full h-auto object-contain rounded-3xl shadow-2xl animate-float border-4 border-stone-900"
        />
      </div>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-md bg-white hover:bg-stone-200 text-black font-black py-6 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4"
      >
        <span className="text-xl">QUERO MEU CABELO 100% LISO</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </section>
  );
};