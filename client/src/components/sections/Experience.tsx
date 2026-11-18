import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Practical industry immersion building high-performance web interfaces and consuming scalable REST architectures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Modern Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical glowing timeline connector line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative mb-12 sm:mb-16">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-[#050505] shadow-lg shadow-blue-500/50" />
                </div>
              </div>

              {/* Timeline Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 group">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>

                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {exp.role}
                  </h3>

                  <div className="text-sm font-semibold text-blue-400/90 font-mono mb-4">
                    {exp.company}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/8 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
