import React, { useState, useEffect } from 'react';

export const FinalOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes countdown
  const whatsappUrl = "https://wa.me/5573988158615?text=Quero%20minha%20progressiva%20organica%20agora%20do%20lote%20em%20oferta";

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="px-6 text-center">
      <div className="relative bg-stone-900/60 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-stone-800">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <svg className="w-64 h-64 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>

        <span className="inline-block px-5 py-2 mb-8 text-sm font-bold tracking-widest text-black uppercase bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          Oferta Promocional
        </span>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Últimas unidades</h2>
        <p className="text-xl md:text-2xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estamos nas últimas unidades do lote com <span className="text-emerald-500 font-bold underline">R$ 210,00 de desconto</span> direto. Não perca esta oportunidade.
        </p>

        {/* Highlighted Price Block - Matches Hero theme */}
        <div className="flex flex-col items-center gap-6 mb-14">
          <p className="text-stone-500 line-through text-2xl mb-2">De R$ 350,00 por apenas:</p>
          
          <div className="bg-[#0a1f14] text-emerald-500 px-12 py-8 rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.2)] border-2 border-emerald-500/30 transform -rotate-1">
            <p className="text-7xl md:text-8xl font-black tracking-tighter mb-2">R$ 139,90</p>
            <p className="text-white text-2xl font-bold">4x de R$ 34,97 sem juros</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-14">
          <div className="bg-stone-950/50 p-8 rounded-3xl border border-stone-800 backdrop-blur-sm">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-3">Sua oferta expira em</p>
            <p className="text-5xl font-mono text-emerald-400 font-bold">{formatTime(timeLeft)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4 py-4 px-8 bg-emerald-950/30 rounded-2xl border border-emerald-500/20">
            <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1-1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <p className="text-emerald-500 text-2xl font-black uppercase tracking-widest">
              FRETE GRÁTIS: BA + SE
            </p>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-black font-black py-7 px-10 rounded-2xl transition-all shadow-[0_0_50px_rgba(16,185,129,0.4)] flex flex-col items-center group active:scale-95"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">👉</span>
              <span className="text-xl md:text-2xl">FALAR NO WHATSAPP E GARANTIR</span>
            </div>
            <span className="text-xs opacity-70 mt-2 uppercase tracking-[0.2em]">Lote promocional limitado</span>
          </a>

          <p className="text-stone-600 text-base flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Seus dados estão 100% seguros • Compra Verificada
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-stone-700 font-medium tracking-[0.3em] text-xs uppercase">
        Sem menu • Sem distração • Só conversão
      </div>
    </section>
  );
};