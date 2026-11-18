import React from 'react';
import { FileText, Download, Eye, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
  onDownloadResume,
}) => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <FileText className="w-3.5 h-3.5" />
            CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Want to Know More About My Journey?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Explore my technical background, projects, education, and professional experience.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Interactive Resume Card & Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden group">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Document Mockup Preview */}
              <div className="md:col-span-5 relative">
                <div
                  onClick={onOpenResumeModal}
                  className="cursor-pointer group/doc relative rounded-2xl bg-[#0e1422] border border-white/15 p-5 shadow-2xl transition-all duration-300 group-hover/doc:border-blue-500/50 group-hover/doc:scale-[1.02]"
                >
                  {/* Top document bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <FileText className="w-3.5 h-3.5" />
                      Ravada_Hemanth.pdf
                    </span>
                    <span className="text-emerald-400">ATS Verified</span>
                  </div>

                  {/* Document Thumbnail Mockup */}
                  <div className="space-y-3 pointer-events-none select-none">
                    <div className="text-center pb-2 border-b border-white/5">
                      <div className="text-base font-bold text-white font-heading tracking-wider">
                        RAVADA HEMANTH
                      </div>
                      <div className="text-[9px] text-slate-400 font-mono">
                        {PERSONAL_INFO.email} • +91 9014189399
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="h-2 w-16 bg-blue-500/40 rounded" />
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                      <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                    </div>

                    <div className="space-y-1">
                      <div className="h-2 w-20 bg-indigo-500/40 rounded" />
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                      <div className="h-1.5 w-4/6 bg-white/10 rounded" />
                    </div>

                    <div className="space-y-1">
                      <div className="h-2 w-14 bg-violet-500/40 rounded" />
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] rounded-2xl opacity-0 group-hover/doc:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      Click to View Document
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-mono text-slate-400">
                    *Source PDF document fully embedded and previewable.
                  </span>
                </div>
              </div>

              {/* Right Column: Highlights & Actions */}
              <div className="md:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                    <Sparkles className="w-3 h-3" />
                    UPDATED FOR 2026 / 2027
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    Comprehensive Engineering Dossier
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Includes documented achievements, software engineering coursework from KL University (9.41 CGPA), Edunet internship responsibilities, verified certifications, and full-stack projects.
                  </p>
                </div>

                {/* Key Summary Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Selected for TCS Prime role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>KL University CSE (9.41 CGPA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>3 Industry Certifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Production MERN & RAG stack</span>
                  </div>
                </div>

                {/* Main Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onDownloadResume}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>

                  <button
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4 text-blue-400" />
                    View Resume
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
