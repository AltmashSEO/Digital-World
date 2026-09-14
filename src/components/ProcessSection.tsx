import React, { useState } from 'react';
import { Compass, FileSearch, Code2, Rocket, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/agencyData';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'FileSearch': return <FileSearch className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'BarChart': return <BarChart className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#060b1e] border-t border-blue-950/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
            <span>Our 5-Step Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-5">
            A Battle-Tested Blueprint from Concept to Compounding Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project follows an organized, milestone-driven framework to guarantee on-time delivery, pixel perfection, and optimal conversion performance.
          </p>
        </div>

        {/* Step Tabs / Numbers Row */}
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0 hidden sm:block"></div>

          {WORK_PROCESS_STEPS.map((s) => {
            const isCurrent = activeStep === s.step;
            const isCompleted = activeStep > s.step;

            return (
              <button
                key={s.step}
                id={`process-step-tab-${s.step}`}
                onClick={() => setActiveStep(s.step)}
                className={`relative z-10 flex flex-col items-center gap-2 group focus:outline-none transition-all`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.7)] scale-110 border-2 border-sky-400'
                      : isCompleted
                      ? 'bg-blue-950 text-sky-400 border border-blue-700'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>0{s.step}</span>
                </div>
                <span
                  className={`text-[11px] sm:text-xs font-semibold max-w-[80px] sm:max-w-[100px] text-center leading-tight transition-colors hidden sm:block ${
                    isCurrent ? 'text-sky-300' : 'text-slate-400'
                  }`}
                >
                  {s.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase Card */}
        {WORK_PROCESS_STEPS.map((step) => {
          if (step.step !== activeStep) return null;

          return (
            <div
              key={step.step}
              id={`process-step-content-${step.step}`}
              className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-blue-800/60 shadow-[0_10px_50px_rgba(0,0,0,0.5)] animate-in fade-in duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950/90 border border-blue-700 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] shrink-0">
                    {getStepIcon(step.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-[10px] font-black uppercase tracking-wider text-sky-400 border border-blue-800">
                        Stage 0{step.step} of 05
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-opacity"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStep === 5}
                    onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-30 disabled:pointer-events-none transition-opacity"
                  >
                    Next Stage
                  </button>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {step.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Key Stage Deliverables & Milestones:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {step.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/50 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Action Callout */}
        <div className="text-center mt-12">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <span>Ready to Start Stage 01? Contact Our Leads</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
