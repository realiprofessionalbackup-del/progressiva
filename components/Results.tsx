import React from 'react';

export const Results: React.FC = () => {
  const whatsappUrl = "https://wa.me/5573988158615?text=Quero%20minha%20progressiva%20organica%20agora%20do%20lote%20em%20oferta";

  return (
    <section className="px-6">
      <div className="text-center mb-12 px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">Veja o tipo de resultado</h2>
        <p className="text-xl text-stone-600 max-w-xl mx-auto leading-relaxed">
          Resultados reais de quem seguiu nosso passo a passo exclusivo de aplicação profissional em casa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="bg-white p-2 rounded-3xl shadow-xl border border-stone-100 overflow-hidden group">
          <div className="relative w-full overflow-hidden rounded-2xl bg-stone-50">
            <img 
              src="https://i.ibb.co/39LCXC7G/Whats-App-Image-2026-02-08-at-22-09-24.jpg" 
              alt="Antes e Depois Cabelo" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent pointer-events-none flex items-end p-4 md:p-8">
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 text-center flex flex-col items-center">
        <div className="flex gap-1 mb-6">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-4 leading-tight">Compra segura + Suporte humanizado</h3>
        <p className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed">Estamos online no WhatsApp para tirar qualquer dúvida e guiar você no passo a passo da aplicação.</p>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 font-bold py-5 px-12 rounded-2xl transition-all shadow-md flex items-center gap-4 text-xl"
        >
          <span>👉</span>
          <span>GARANTIR MEU LOTE</span>
        </a>
      </div>
    </section>
  );
};