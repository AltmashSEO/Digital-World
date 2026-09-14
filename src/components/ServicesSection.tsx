import React, { useState, useMemo } from 'react';
import {
  Globe,
  ShoppingBag,
  LayoutTemplate,
  Sparkles,
  TrendingUp,
  MapPin,
  Target,
  Megaphone,
  Share2,
  Palette,
  BarChart3,
  Activity,
  Users,
  MessageSquare,
  CreditCard,
  FileText,
  ArrowRight,
  Check,
  Search,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'marketing' | 'tech' | 'branding'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs = [
    { key: 'all', label: 'All Services (16)' },
    { key: 'web', label: 'Web & E-Commerce' },
    { key: 'marketing', label: 'Marketing & PPC' },
    { key: 'tech', label: 'Analytics & Tech' },
    { key: 'branding', label: 'Branding & Content' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'LayoutTemplate': return <LayoutTemplate className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((srv) => {
      const matchesCategory = selectedCategory === 'all' || srv.category === selectedCategory;
      const matchesSearch =
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-24 relative bg-[#040817]">
      {/* Glow background accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Full-Spectrum Digital Growth & Development Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From high-speed e-commerce stores to targeted customer acquisition campaigns, every solution is built for measurable ROI and compounding growth.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/90">
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                id={`services-tab-${tab.key}`}
                onClick={() => setSelectedCategory(tab.key as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === tab.key
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="services-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search service, keyword, or tech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid (16 cards) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm mb-4">No services match your search term "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/90 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-[10px] font-black uppercase tracking-wider text-red-300">
                      Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-700/40 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 group-hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    {getServiceIcon(service.icon)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-3 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/80">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Get Started Button */}
                <button
                  id={`btn-get-started-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800/90 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:text-white border border-slate-700/80 group-hover:border-transparent transition-all flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
