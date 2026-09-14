import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AuditCtaSection } from './components/AuditCtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('WordPress Website Development');

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectName: string) => {
    setPrefilledService(`Project Inquiry: ${projectName}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (planName: string) => {
    setPrefilledService(`Pricing Quote: ${planName} Plan`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040817] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header with Navigation & Brand Logo */}
      <Navbar
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenContact={(srv) => {
          if (srv) setPrefilledService(srv);
          scrollToContact();
        }}
      />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onOpenAuditModal={() => setAuditModalOpen(true)}
          onScrollToServices={scrollToServices}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onOpenAudit={() => setAuditModalOpen(true)}
          onExplorePortfolio={scrollToPortfolio}
        />

        {/* 3. Services Section (16 Services) */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* 4. Portfolio / Case Studies */}
        <PortfolioSection
          onInquireProject={handleInquireProject}
        />

        {/* 5. Why Choose Digital World */}
        <WhyChooseUs />

        {/* 6. Work Process (5 Steps) */}
        <ProcessSection
          onStartProject={scrollToContact}
        />

        {/* 7. Pricing Packages */}
        <PricingSection
          onRequestQuote={handleRequestQuote}
        />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Free Business Audit CTA Banner */}
        <AuditCtaSection
          onOpenAuditModal={() => setAuditModalOpen(true)}
        />

        {/* 10. FAQ Accordion */}
        <FaqSection />

        {/* 11. Contact Page & Form */}
        <ContactSection
          preselectedService={prefilledService}
          onClearPreselectedService={() => setPrefilledService('WordPress Website Development')}
        />
      </main>

      {/* Agency Footer */}
      <Footer
        onOpenAuditModal={() => setAuditModalOpen(true)}
      />

      {/* Floating Action WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Free Business Audit Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
