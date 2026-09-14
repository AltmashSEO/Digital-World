import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Menu, X, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onOpenContact: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'pricing', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Digital World! I'd like to discuss a project / get a free audit for my business.");
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040817]/90 backdrop-blur-md border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo
          size="md"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-sky-400 bg-blue-950/60 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick WhatsApp button */}
          <button
            id="header-whatsapp-btn"
            onClick={openWhatsApp}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all shadow-[0_0_10px_rgba(16,185,129,0.15)]"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp Us</span>
          </button>

          {/* Primary High-Converting CTA */}
          <button
            id="header-audit-btn"
            onClick={onOpenAuditModal}
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Free Audit</span>
            <span className="inline-block px-1.5 py-0.5 rounded bg-red-600 text-[9px] font-black text-white ml-1">
              FREE
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-audit-header-btn"
            onClick={onOpenAuditModal}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center gap-1 shadow-[0_0_10px_rgba(37,99,235,0.4)]"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Audit</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6 text-sky-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#040817]/98 backdrop-blur-2xl border-b border-blue-900/50 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-sky-400 bg-blue-950/70 border border-blue-800/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Free Business Audit</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp: {AGENCY_DETAILS.whatsappNumber}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
