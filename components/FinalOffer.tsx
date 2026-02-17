import React, { useState, useEffect } from 'react';

export const FinalOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1200);
  const pixUrl = "https://wa.me/5573988158615?text=Quero%20pagar%20por%20PIX%20para%20envio%20imediato";
  const cardUrl = "https://wa.me/5573988158615?text=Quero%20link%20de%20pagamento%20no%20cartão";

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
      <div className="relative bg-stone-900/60 rounded-[3rem] p-12 md:p-20 text-white border border-stone-800 overflow-hidden shadow-2xl">
        <span className="inline-block px-5 py-2 mb-8 text-sm font-bold tracking-widest text-black uppercase bg-emerald-500 rounded-full">
          ÚLTIMAS UNIDADES EM ESTOQUE
        </span>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Escolha sua forma de pagamento</h2>
        
        <div className="bg-[#0a1f14] text-emerald-500 px-12 py-8 rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.2)] border-2 border-emerald-500/30 mb-12 inline-block">
          <p className="text-7xl md:text-8xl font-black tracking-tighter mb-2">R$ 139,90</p>
          <p className="text-white text-2xl font-bold">Frete Grátis BA + SE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* PIX Button */}
          <a 
            href={pixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 bg-emerald-500 hover:bg-emerald-400 text-black rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-black">PAGAR COM PIX</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Liberação imediata do pedido</span>
          </a>

          {/* Card Button */}
          <a 
            href={cardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 bg-white hover:bg-stone-200 text-black rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <span className="text-xl font-black">CARTÃO DE CRÉDITO</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Até 4x sem juros de R$ 34,97</span>
          </a>
        </div>

        <div className="bg-stone-950/50 p-6 rounded-2xl border border-stone-800 mb-10 max-w-xs mx-auto">
          <p className="text-stone-500 text-[10px] uppercase tracking-widest mb-2">Lote expira em</p>
          <p className="text-3xl font-mono text-emerald-400 font-bold">{formatTime(timeLeft)}</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
          </div>
          <p className="text-stone-500 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            Ambiente Seguro • Seus dados estão protegidos
          </p>
        </div>
      </div>
    </section>
  );
};