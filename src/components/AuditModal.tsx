import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, ShieldCheck, Globe, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_DETAILS } from '../data/agencyData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [primaryFocus, setPrimaryFocus] = useState('Website Speed & Conversion');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim() && !websiteUrl.trim()) {
      setError('Please provide at least your website URL or WhatsApp number.');
      return;
    }

    setError('');
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#2563eb', '#10b981'],
    });
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Digital World! I would like a Free Audit for my business (${businessName || 'My Business'}, Website: ${websiteUrl || 'Not yet launched'}). Primary focus: ${primaryFocus}.`
    );
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#060c22] border border-blue-900/80 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/70">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-950 border border-red-500/40 text-[10px] font-black uppercase tracking-wider text-red-400">
              100% Free
            </span>
            <span className="text-xs font-bold text-sky-400">24h Express Turnaround</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                Audit Request Queued!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Our digital audit specialists are analyzing your digital footprint. We will send the PDF breakdown and video overview to your WhatsApp/email within 24 hours.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Immediate Message on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl text-xs text-slate-400 hover:text-white bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk'] mb-1">
                  Get Your Free Business Audit
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We review your website speed, local SEO ranking, Google ads tracking, and growth opportunities.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Website URL / Instagram Page
                </label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g. yourbrand.com or @instagram_handle"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Your WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+91 7983517402"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Business Name / Niche
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Royal Collar Fashion / Fitness Studio"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Main Area You Want Us to Check
                </label>
                <select
                  value={primaryFocus}
                  onChange={(e) => setPrimaryFocus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="Website Speed & Conversion">Website Speed & Conversion Bottlenecks</option>
                  <option value="Google & Local SEO Ranking">Google 3-Pack & Organic SEO Ranking</option>
                  <option value="Google & Meta PPC Ads">Google & Meta Ads Waste & Attribution</option>
                  <option value="Shopify Store Performance">Shopify Store Checkout & UX Flow</option>
                  <option value="Complete 360 Growth Audit">Complete 360° Digital Footprint Audit</option>
                </select>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Request Free Audit Report</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Or Chat Instantly on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Confidential. No obligation to purchase anything.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
