import React from 'react';
import { Logo } from './Logo';
import { MessageSquare, Mail, Phone, MapPin, Globe2, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { AGENCY_DETAILS, SERVICES_LIST } from '../data/agencyData';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'All Services', href: '#services' },
    { label: 'Portfolio & Case Studies', href: '#portfolio' },
    { label: 'Work Process', href: '#process' },
    { label: 'Pricing Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-[#02050f] text-slate-300 border-t border-blue-950/80 pt-16 pb-12 overflow-hidden">
      {/* Top subtle blue border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" onClick={scrollToTop} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              <strong>Digital World</strong> is an international digital marketing, web development, and business growth agency. We architect high-converting websites and scalable ad campaigns that turn digital traffic into verified revenue.
            </p>
            <p className="text-xs font-semibold text-sky-400 italic">
              “{AGENCY_DETAILS.tagline}”
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Get Free Business Audit</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="hover:text-sky-400 transition-colors line-clamp-1"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`https://wa.me/${AGENCY_DETAILS.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="font-mono">{AGENCY_DETAILS.whatsappNumber} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="flex items-center gap-2.5 text-sky-400 hover:text-sky-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{AGENCY_DETAILS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Globe2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Active Regions: India, UAE, Canada & Global Clients
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Digital World</strong>. All rights reserved. Your Vision. Our Strategy. Your Growth.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
