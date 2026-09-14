import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, AGENCY_DETAILS } from '../data/agencyData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi Digital World! I have a question about your services.");
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-24 relative bg-[#060b1e] border-t border-blue-950/60 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Everything You Need to Know Before Starting
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Straight answers about our timelines, pricing policies, ads setup, and ongoing agency support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-14">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-slate-900/90 border-sky-500/50 shadow-[0_4px_25px_rgba(56,189,248,0.1)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-bold text-sky-400 uppercase tracking-wider shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-400 border-sky-500/40 bg-blue-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question about your project?</h4>
              <p className="text-xs text-slate-400">Get an immediate answer directly from our technical directors.</p>
            </div>
          </div>

          <button
            onClick={openWhatsApp}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Ask On WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
