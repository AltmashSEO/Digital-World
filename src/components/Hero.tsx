import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Globe, CheckCircle2, TrendingUp, MonitorSmartphone, Target, Layers, Zap } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface HeroProps {
  onOpenAuditModal: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onScrollToServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#040817]"
    >
      {/* Dynamic Digital Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Deep blue radial glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Digital Matrix Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        ></div>

        {/* Glowing perspective digital floor grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="0" x2="30%" y2="100%" stroke="url(#blueGridGlow)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="90%" y1="0" x2="70%" y2="100%" stroke="url(#blueGridGlow)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#blueGridGlow)" strokeWidth="0.8" strokeDasharray="4 6" />
          <defs>
            <linearGradient id="blueGridGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating business growth cards in background */}
        <div className="hidden xl:block absolute top-40 left-[8%] animate-float-slow opacity-80 pointer-events-none">
          <div className="px-4 py-2.5 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_25px_rgba(37,99,235,0.25)] flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Search Engine Traffic</p>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>+240% Growth</span>
                <span className="text-[10px] text-emerald-400">▲ Organic</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden xl:block absolute top-64 right-[8%] animate-float-slow opacity-80 pointer-events-none" style={{ animationDelay: '2.5s' }}>
          <div className="px-4 py-2.5 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-sky-500/30 shadow-[0_0_25px_rgba(56,189,248,0.25)] flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Google & Meta Ads</p>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>4.8x ROAS</span>
                <span className="text-[10px] text-sky-400">● Verified</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-36 left-[12%] animate-float-slow opacity-75 pointer-events-none" style={{ animationDelay: '4s' }}>
          <div className="px-3.5 py-2 rounded-xl bg-slate-900/70 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-slate-200">Sub-1.8s Core Web Vitals</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Global Service Region Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] text-xs font-medium text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>Serving Ambitious Businesses Across <strong>India</strong>, <strong>UAE</strong>, <strong>Canada</strong> & <strong>Worldwide</strong></span>
          </div>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            id="hero-main-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1] mb-6"
          >
            Grow Your Business in the{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                Digital World
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 rounded-full opacity-80"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            {AGENCY_DETAILS.heroSubtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              id="hero-cta-audit"
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              <span>Get a Free Audit</span>
              <span className="px-2 py-0.5 rounded-full bg-red-600 text-[10px] font-black tracking-wider uppercase text-white shadow">
                100% Free
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-services"
              onClick={onScrollToServices}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-sky-500/60 shadow-lg hover:text-white transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <Layers className="w-5 h-5 text-sky-400" />
              <span>View Our Services</span>
            </button>
          </div>

          {/* Tagline Callout */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-blue-950/40 border border-blue-900/60 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-300 mb-14">
            <span className="text-red-400 font-bold">★</span>
            <span className="tracking-wide">“{AGENCY_DETAILS.tagline}”</span>
            <span className="text-sky-400 font-bold">★</span>
          </div>
        </div>

        {/* Display Trust Points Requested by User */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Core Pillars of Digital Dominance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGENCY_DETAILS.trustPoints.map((point, index) => {
              const icons = [
                <MonitorSmartphone key="1" className="w-5 h-5 text-sky-400" />,
                <TrendingUp key="2" className="w-5 h-5 text-emerald-400" />,
                <Target key="3" className="w-5 h-5 text-red-400" />,
                <Sparkles key="4" className="w-5 h-5 text-amber-400" />,
              ];

              return (
                <div
                  key={point.title}
                  id={`hero-trust-point-${index}`}
                  className="group relative p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                >
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-12">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
