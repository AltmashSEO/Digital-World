import React from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';

interface PricingSectionProps {
  onRequestQuote: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#040817] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Predictable Packages Tailored to Your Growth Stage
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business is unique. We provide clear milestone structures without lock-ins. Select your tier to request a detailed custom scope and quote.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`relative flex flex-col justify-between p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-950/90 via-slate-900/90 to-blue-950/90 border-2 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.25)] lg:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-blue-700/60 shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-xs font-black uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Most Popular Choice</span>
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                      {plan.name}
                    </h3>
                    <span className="px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 text-[11px] font-semibold text-sky-400">
                      {plan.idealFor}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing / Quote Indicator */}
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/50 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Investment</span>
                    <span className="text-lg font-bold text-white">Custom Milestone Pricing</span>
                  </div>
                  <div className="text-right">
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-sky-300">
                      <Clock className="w-3.5 h-3.5" />
                      {plan.timeline}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Package Deliverables:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-blue-900/60 border border-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-sky-300" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  id={`btn-quote-${plan.id}`}
                  onClick={() => onRequestQuote(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_25px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5'
                      : 'text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-700 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Transparent Milestones & Quality Assurance</h4>
              <p className="text-xs text-slate-400">All agreements are staged with clear deliverables. You only approve work that matches specifications.</p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Enterprise')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold whitespace-nowrap"
          >
            Need Custom Scope?
          </button>
        </div>
      </div>
    </section>
  );
};
