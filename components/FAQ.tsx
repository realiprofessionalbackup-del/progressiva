
import React, { useState } from 'react';

// Added explicit prop type interface for FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
}

// Updated to use React.FC for better component type inference
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-emerald-500 transition-colors"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-stone-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    { question: "É compatível com outras químicas?", answer: "Sim! Por ser orgânica e sem formol, ela é compatível com tinturas e outras químicas. Recomendamos apenas um teste de mecha antes da aplicação total." },
    { question: "Quanto tempo dura o resultado?", answer: "O alinhamento dura em média de 3 a 4 meses, dependendo do crescimento do seu cabelo e dos cuidados pós-lavagem." },
    { question: "Gestantes e lactantes podem usar?", answer: "Apesar de ser 100% orgânica, sempre orientamos que gestantes e lactantes consultem seu médico de confiança antes de usar qualquer produto." },
    { question: "Preciso de ajuda profissional para aplicar?", answer: "Não! Você receberá um guia passo a passo exclusivo que te ensina a aplicar em casa com a mesma técnica dos melhores salões." }
  ];

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Dúvidas Frequentes</h2>
      <div className="space-y-2">
        {/* Fix: Explicitly pass props to FAQItem instead of using spread with key to avoid type mismatch */}
        {faqs.map((f, i) => (
          <FAQItem 
            key={i} 
            question={f.question} 
            answer={f.answer} 
          />
        ))}
      </div>
    </section>
  );
};
