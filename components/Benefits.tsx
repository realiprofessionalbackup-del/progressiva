
import React from 'react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    { title: "Cabelo alinhado", desc: "Para quem não aguenta mais o volume excessivo e quer fios disciplinados." },
    { title: "Brilho de salão", desc: "Acabamento luminoso que reflete saúde, mesmo lavando em casa." },
    { title: "Praticidade real", desc: "Aplicação intuitiva com guia profissional para você mesma fazer." }
  ];

  return (
    <section className="px-6 py-16 bg-white rounded-[3rem] shadow-sm border border-stone-100 mx-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center leading-tight">Para quem essa progressiva é ideal?</h2>
        
        <div className="space-y-10">
          {benefitsList.map((b, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-900 flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2 leading-snug">{b.title}</h3>
                <p className="text-lg text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
