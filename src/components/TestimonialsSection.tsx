import React from 'react';
import { Star, Quote, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#060b1e] border-t border-blue-950/60 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Client Feedback & Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            What Growing Brands Say About Working With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Client satisfaction is our primary benchmark. Here is how we deliver measurable impact across international markets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="relative p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-500/30" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-8">
                  “{t.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk']">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-sky-400 font-medium">
                    {t.role}, <span className="text-slate-300">{t.businessName}</span>
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {t.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-sky-400" />
                      {t.industry}
                    </span>
                  </div>
                </div>

                {/* Structured placeholder badge */}
                <div className="hidden sm:block">
                  <span className="px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-[10px] font-semibold text-sky-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Project</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable placeholder notice for client */}
        <div className="text-center p-4 rounded-2xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span>Testimonial modules are fully structured. Additional client reviews and video testimonials can easily be integrated anytime.</span>
        </div>
      </div>
    </section>
  );
};
