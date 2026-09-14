import React from 'react';
import {
  Sliders,
  MessageCircle,
  Cpu,
  Crosshair,
  PiggyBank,
  ShieldCheck,
  LineChart,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sliders': return <Sliders className="w-5 h-5" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5" />;
      case 'PiggyBank': return <PiggyBank className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-choose" className="py-24 relative bg-[#040817] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>The Digital World Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Why High-Performing Businesses Choose Us Over Traditional Agencies
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate as an agile, performance-first extension of your team. No layers of account bureaucracy—just direct strategy, rapid technical execution, and measurable growth.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              id={`why-choose-card-${idx}`}
              className="group p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/90 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-3 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standard on all projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
