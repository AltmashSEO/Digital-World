import React from 'react';
import { Target, Compass, Sparkles, Code2, Globe2, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface AboutSectionProps {
  onOpenAudit: () => void;
  onExplorePortfolio: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAudit, onExplorePortfolio }) => {
  const targetClients = [
    { title: 'Small Businesses', desc: 'Local shops, trade contractors, boutique firms needing dependable local footfall and inquiries.' },
    { title: 'High-Growth Startups', desc: 'Tech ventures and SaaS platforms requiring agile MVP websites and scalable conversion funnels.' },
    { title: 'Local Businesses', desc: 'Clinics, salons, gyms, and professional services looking to rank #1 on Google Maps 3-pack.' },
    { title: 'E-commerce Brands', desc: 'Direct-to-consumer and retail brands seeking Shopify speed, multi-currency sales, and high ROAS.' },
    { title: 'International Clients', desc: 'Cross-border enterprises requiring global standards, multi-lingual architecture, and worldwide support.' },
  ];

  const pillars = [
    { name: 'Strategy', desc: 'Market intelligence, competitor gap audits, and keyword intent mapping.', icon: Compass, color: 'text-sky-400' },
    { name: 'Creativity', desc: 'Striking visual identity, modern typography, and persuasion-driven copy.', icon: Sparkles, color: 'text-amber-400' },
    { name: 'Technology', desc: 'Blazing-fast code, seamless API integrations, and bulletproof security.', icon: Code2, color: 'text-blue-400' },
    { name: 'Performance Marketing', desc: 'Data-driven Google & Meta campaigns wired for measurable revenue ROI.', icon: Target, color: 'text-red-400' },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#060b1e] border-t border-b border-blue-950/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
            <span>About Digital World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-6">
            Building High-Authority Online Presences That Turn Visitors Into Clients
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            At <strong>Digital World</strong>, we believe an online presence shouldn’t just look attractive—it must function as a tireless, 24/7 revenue engine. We combine <span className="text-sky-400 font-semibold">strategy</span>, <span className="text-amber-300 font-semibold">creativity</span>, <span className="text-blue-400 font-semibold">technology</span>, and <span className="text-red-400 font-semibold">performance marketing</span> to give ambitious businesses a definitive competitive edge.
          </p>
        </div>

        {/* 4 Professional Statistics Cards Requested by User */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AGENCY_DETAILS.stats.map((stat, idx) => {
            const glowBorders = [
              'hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]',
              'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]',
              'hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
              'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
            ];

            return (
              <div
                key={stat.label}
                id={`stat-card-${idx}`}
                className={`relative p-6 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 ${glowBorders[idx]}`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-2 bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <h3 className="text-base font-bold text-sky-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Synergy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="p-6 rounded-2xl bg-blue-950/25 border border-blue-900/40 hover:border-blue-700/60 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-center justify-center mb-4">
                  <Icon className={`w-5 h-5 ${pillar.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Target Clients & Global Delivery Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-blue-900/50 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-[11px] font-bold uppercase tracking-wider text-red-400 mb-3">
                Tailored Across Industries
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] mb-4">
                Who We Specialize in Helping Win Online
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you are launching your first local shop or scaling an established brand across multiple borders, we build the exact digital leverage you need.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-800/40 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-2">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  <span>Cross-Border Reach & Localized Expertise:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {AGENCY_DETAILS.regions.map((reg) => (
                    <span key={reg} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/60 text-xs font-semibold text-white">
                      {reg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenAudit}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Claim Your Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onExplorePortfolio}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 flex items-center justify-center gap-2"
                >
                  <span>View Case Studies</span>
                </button>
              </div>
            </div>

            {/* Target Clients List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targetClients.map((client, idx) => (
                <div
                  key={client.title}
                  className={`p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/30 transition-all ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <h5 className="text-sm font-bold text-white">{client.title}</h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6.5">
                    {client.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
