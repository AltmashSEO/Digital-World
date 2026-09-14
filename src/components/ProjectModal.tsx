import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, MapPin, Tag, ArrowRight, MessageSquare } from 'lucide-react';
import { PortfolioItem } from '../types';
import { AGENCY_DETAILS } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquireProject }) => {
  if (!project) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Digital World! I saw your work on "${project.name}" (${project.industry}) and would love a similar solution for my business.`);
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#060c22] border border-blue-900/60 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-xs font-bold text-sky-400">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {project.clientLocation}
            </span>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c22] via-[#060c22]/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] mb-1">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-sky-300">
              {project.industry}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Outcome Highlights */}
          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
              Result-Focused Impact
            </h4>
            <p className="text-sm font-semibold text-slate-200">
              {project.resultsSummary}
            </p>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Grid: Challenges vs Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2.5">
                Core Challenges Addressed
              </h5>
              <ul className="space-y-1.5">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5">
                Delivered Solutions
              </h5>
              <ul className="space-y-1.5">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services & Tech Tags */}
          <div>
            <div className="mb-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Services Provided
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.servicesProvided.map((srv) => (
                  <span key={srv} className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 text-xs font-medium text-sky-300">
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technology Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onInquireProject(project.name);
              }}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
            >
              <span>Build A Similar Solution For Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3 px-5 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/50 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Discuss On WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
