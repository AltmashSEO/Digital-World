import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2, Zap, Search, ShieldCheck } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface AuditCtaSectionProps {
  onOpenAuditModal: () => void;
}

export const AuditCtaSection: React.FC<AuditCtaSectionProps> = ({ onOpenAuditModal }) => {
  const openWhatsAppAudit = () => {
    const text = encodeURIComponent("Hi Digital World! I would like to get the Free Business Audit for my website, SEO, and online growth opportunities.");
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  const auditPoints = [
    { title: 'Website Speed & Core Web Vitals Audit', desc: 'Pinpoint mobile lag and checkout bottlenecks' },
    { title: 'Google Ranking & Local 3-Pack Health', desc: 'Identify missed local buyer searches and map rankings' },
    { title: 'Ad Conversion Leak Diagnostics', desc: 'Detect untracked leads and pixel discrepancies' },
    { title: 'Actionable 3-Step Growth Blueprint', desc: 'Receive custom recommendations in under 24 hours' },
  ];

  return (
    <section className="py-20 relative bg-[#040817] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-950/90 via-slate-900 to-blue-950/90 border-2 border-blue-500/40 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(37,99,235,0.25)] overflow-hidden">
          {/* Internal background decorations */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Copy & Buttons */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-xs font-black uppercase tracking-wider text-red-400 mb-6 shadow">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span>Zero Cost • Zero Obligation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-6 leading-tight">
                Is Your Business Ready to Grow Online?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
                Get a free audit of your website, SEO, Google ranking, social media presence and online growth opportunities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="audit-cta-whatsapp-btn"
                  onClick={openWhatsAppAudit}
                  className="px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 text-white fill-white/20" />
                  <span>DM Us Now – Get Free Audit</span>
                </button>

                <button
                  id="audit-cta-modal-btn"
                  onClick={onOpenAuditModal}
                  className="px-6 py-4 rounded-2xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-400 transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-sky-400" />
                  <span>Request Online Form</span>
                </button>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confidential report sent directly to your WhatsApp or Email in 24 hours.</span>
              </div>
            </div>

            {/* Right Column: Interactive Diagnostic Breakdown */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-blue-900/60 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    What’s Included in Your Free Audit
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-[10px] font-bold text-emerald-300">
                    Complimentary
                  </span>
                </div>

                {auditPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white mb-0.5">{pt.title}</h5>
                      <p className="text-[11px] text-slate-400">{pt.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-400">
                    Average turnaround: <strong className="text-white">24 hours</strong> via WhatsApp: <strong className="text-emerald-400">{AGENCY_DETAILS.whatsappNumber}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
