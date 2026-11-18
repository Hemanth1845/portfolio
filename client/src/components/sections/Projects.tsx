import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2, ChevronRight, Layers, Bot, GraduationCap, Users } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            ENGINEERED SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Practical full-stack, enterprise workflow, and artificial intelligence applications engineered for real-world impact and reliability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {PROJECTS.map((project, index) => {
            const isAIProject = project.id === 'admission-enquiry-system';
            const isCRMProject = project.id === 'crm-project';
            const isPlacementProject = project.id === 'placement-portal';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-blue-500/50 hover:to-violet-500/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="rounded-[23px] bg-[#080d16] p-6 sm:p-7 h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle top background highlight */}
                  <div className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all ${
                    isAIProject
                      ? 'bg-blue-600/15 group-hover:bg-blue-600/25'
                      : isCRMProject
                      ? 'bg-emerald-600/15 group-hover:bg-emerald-600/25'
                      : 'bg-violet-600/15 group-hover:bg-violet-600/25'
                  }`} />

                  <div>
                    {/* 3D Visual Preview Banner */}
                    <div className="relative w-full h-44 sm:h-48 rounded-2xl mb-5 bg-gradient-to-br from-slate-900 to-[#0c1424] border border-white/10 overflow-hidden flex items-center justify-center p-4 group-hover:border-blue-500/40 transition-colors">
                      {/* Isometric Grid Background */}
                      <div className="absolute inset-0 bg-cyber-grid opacity-30" />

                      {/* 3D Isometric Representation */}
                      {isAIProject ? (
                        <div className="relative flex flex-col items-center justify-center text-center space-y-2.5 z-10 transform group-hover:scale-105 transition-transform duration-500">
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[2px] shadow-2xl shadow-blue-500/40">
                            <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center">
                              <Bot className="w-8 h-8 text-cyan-400 animate-pulse" />
                            </div>
                          </div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono border border-blue-400/30">
                            <Sparkles className="w-2.5 h-2.5 text-cyan-300" />
                            RAG Architecture + Vector Search
                          </div>
                        </div>
                      ) : isCRMProject ? (
                        <div className="relative flex flex-col items-center justify-center text-center space-y-2.5 z-10 transform group-hover:scale-105 transition-transform duration-500">
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-[2px] shadow-2xl shadow-emerald-500/40">
                            <div className="w-full h-full bg-[#091512] rounded-[14px] flex items-center justify-center">
                              <Users className="w-8 h-8 text-emerald-400 animate-pulse" />
                            </div>
                          </div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-400/30">
                            <Layers className="w-2.5 h-2.5 text-emerald-300" />
                            Enterprise Lead Pipeline Engine
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex flex-col items-center justify-center text-center space-y-2.5 z-10 transform group-hover:scale-105 transition-transform duration-500">
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-[2px] shadow-2xl shadow-violet-500/40">
                            <div className="w-full h-full bg-[#0d091a] rounded-[14px] flex items-center justify-center">
                              <GraduationCap className="w-8 h-8 text-violet-300 animate-pulse" />
                            </div>
                          </div>
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-mono border border-violet-400/30">
                            <Layers className="w-2.5 h-2.5 text-violet-300" />
                            Automated Prep Engine
                          </div>
                        </div>
                      )}

                      {/* Project Index Pill */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-400 backdrop-blur-md">
                        0{index + 1}
                      </div>

                      {/* Live Deployment Status Pill */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 backdrop-blur-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {isPlacementProject ? 'Live on Render' : isCRMProject ? 'GitHub Repo' : 'Production'}
                      </div>
                    </div>

                    {/* Title & Category */}
                    <div className="space-y-1.5 mb-3">
                      <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-blue-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">Key Features:</div>
                      <div className="space-y-1 text-xs text-slate-300">
                        {project.features.slice(0, 3).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with Direct Working Links */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all hover:border-blue-500/40"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      {/* Live Demo Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{isPlacementProject ? 'Live Demo' : 'Preview'}</span>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setActiveProjectModal(project);
                        if (onSelectProject) onSelectProject(project);
                      }}
                      className="text-xs font-mono text-slate-400 hover:text-blue-400 flex items-center gap-0.5 transition-colors"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for Project Repository & Live Links */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-lg w-full p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase">Project Architecture & Links</span>
                <h4 className="text-lg font-bold text-white font-heading mt-0.5">
                  {activeProjectModal.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {activeProjectModal.description}
            </p>

            <div className="space-y-2 mb-5">
              <span className="text-xs font-mono text-slate-400">All Project Capabilities:</span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeProjectModal.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3 mb-6 text-xs font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-slate-400">GitHub Repository URL:</span>
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 bg-blue-950/40 p-2 rounded border border-blue-800/30 break-all hover:underline"
                >
                  {activeProjectModal.githubUrl}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-400">Live Application URL:</span>
                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-800/30 break-all hover:underline"
                >
                  {activeProjectModal.liveUrl}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200"
              >
                Close
              </button>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white font-semibold flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Open Code
              </a>
              <a
                href={activeProjectModal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-semibold flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Live Site
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
