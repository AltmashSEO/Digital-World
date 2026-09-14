import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight, CheckCircle, Sparkles, MapPin } from 'lucide-react';

interface PortfolioSectionProps {
  onInquireProject: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Business Websites',
    'E-commerce Stores',
    'Fitness Websites',
    'Salon and Beauty Websites',
    'Local Business Websites',
    'Digital Marketing Campaigns',
    'Branding and Graphic Design',
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 relative bg-[#060b1e] border-t border-blue-950/60">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Proven Agency Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            Real Work. Tangible Strategy. Scalable Results.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore recent client implementations across e-commerce, local businesses, gyms, clinics, and digital marketing funnels worldwide.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`portfolio-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group flex flex-col justify-between rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-sky-500/50 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] hover:-translate-y-1.5"
            >
              <div>
                {/* Project Image & Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e24] via-transparent to-black/30"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold uppercase tracking-wider text-sky-300">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-medium text-slate-300">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {project.clientLocation}
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                      {project.industry}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-sky-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Result Focus Pill */}
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Outcome / Focus:
                    </p>
                    <p className="text-xs font-semibold text-slate-200 line-clamp-2">
                      {project.resultsSummary}
                    </p>
                  </div>

                  {/* Services Provided Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.servicesProvided.slice(0, 3).map((srv) => (
                      <span
                        key={srv}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] text-slate-300"
                      >
                        {srv}
                      </span>
                    ))}
                    {project.servicesProvided.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-800/80 text-[10px] text-slate-400">
                        +{project.servicesProvided.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  id={`btn-view-project-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-blue-950/50 hover:bg-blue-600 hover:text-white border border-blue-800/50 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  <Eye className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            * All case study metrics and deliverables represent verified strategic frameworks. Want a tailored proposal and live demo for your niche?
          </p>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(name) => onInquireProject(name)}
      />
    </section>
  );
};
