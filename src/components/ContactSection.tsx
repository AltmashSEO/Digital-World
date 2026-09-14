import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  Globe2,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_DETAILS, SERVICES_LIST } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    service: preselectedService || 'WordPress Website Development',
    projectDetails: '',
    budget: 'Flexible / Let’s Discuss',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or company name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Please provide your WhatsApp or phone number';
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please briefly describe your project goals or requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#2563eb', '#10b981', '#ffffff'],
      });
    }, 700);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Digital World! My name is ${formData.name || 'a visitor'} from ${formData.businessName || 'my business'}. I am looking for ${formData.service} services.`
    );
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#040817] border-t border-blue-950/60 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Start Your Growth Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Let’s Build Something Exceptional Together
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind, need a tailored quote, or want to consult with our digital directors? Send a message below or reach out directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                Get In Touch
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-8">
                We respond to all verified project inquiries within 2 hours during business hours.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp Channel */}
                <a
                  href={`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${encodeURIComponent("Hello Digital World! I would like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Direct WhatsApp</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-[9px] font-bold text-emerald-300">Fastest</span>
                    </div>
                    <p className="text-sm font-bold text-white font-mono">{AGENCY_DETAILS.whatsappNumber}</p>
                    <p className="text-[11px] text-slate-400">Instant chat with project leads</p>
                  </div>
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${AGENCY_DETAILS.email}?subject=Project%20Inquiry%20-%20Digital%20World`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 hover:border-sky-400 hover:bg-blue-950/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Official Email</span>
                    <p className="text-sm font-bold text-white break-all">{AGENCY_DETAILS.email}</p>
                    <p className="text-[11px] text-slate-400">For proposals & RFP briefs</p>
                  </div>
                </a>

                {/* Global Coverage */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Service Coverage</span>
                    <p className="text-xs font-semibold text-white">India • UAE • Canada • Worldwide</p>
                    <p className="text-[11px] text-slate-400">Global delivery, localized strategy</p>
                  </div>
                </div>
              </div>

              {/* Working Hours & Guarantee */}
              <div className="pt-6 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Active Hours: Monday – Saturday (9:00 AM – 8:00 PM IST / GST / EST coverage). Non-disclosure & confidentiality standard.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-blue-900/50 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our agency leads have received your project details for <strong className="text-sky-400">{formData.service}</strong>. We will review and reach out shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp Immediately</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          whatsapp: '',
                          service: 'WordPress Website Development',
                          projectDetails: '',
                          budget: 'Flexible / Let’s Discuss',
                        });
                      }}
                      className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                      Project Specification Form
                    </h4>
                    <span className="text-[11px] text-sky-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Free Strategic Consultation</span>
                    </span>
                  </div>

                  {/* Name and Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-business" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Business / Company Name *
                      </label>
                      <input
                        type="text"
                        id="contact-business"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        placeholder="e.g. Aura Luxe Salon"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.businessName ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.businessName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email and WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-whatsapp" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => {
                          setFormData({ ...formData, whatsapp: e.target.value });
                          if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.whatsapp ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Required Service *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Growth Retainer (Web + Ads + SEO)" className="bg-slate-900 text-white">
                        Complete Growth Retainer (Web + Ads + SEO)
                      </option>
                      <option value="Free Business Audit Consultation" className="bg-slate-900 text-white">
                        Free Business Audit Consultation
                      </option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                      }}
                      placeholder="Tell us about your current challenges, target audience, ideal launch timeline, and goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.projectDetails ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                      }`}
                    ></textarea>
                    {errors.projectDetails && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="btn-start-your-project"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Project Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Start Your Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your information is strictly confidential. No spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
