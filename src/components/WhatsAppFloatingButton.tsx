import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Digital World! I would like to chat with an agency specialist about my business growth.");
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
      {/* Friendly Chat Bubble Tooltip */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 text-xs text-white shadow-[0_4px_25px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="font-semibold text-slate-200">
            Need quick answers? <span className="text-emerald-400 font-bold">Chat on WhatsApp</span>
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={openWhatsApp}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-[#040817] animate-pulse"></span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};
