import React from 'react';
import { ArrowDown, Download, Send, MapPin, Terminal, Code2 } from 'lucide-react';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroProps {
  onOpenResumeModal?: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[450px] h-[450px] bg-violet-600/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Mask */}
      <div className="absolute inset-0 bg-cyber-grid radial-mask opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-blue-300">
                  {PERSONAL_INFO.tcsStatus}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase font-heading leading-none">
                <span className="block text-slate-200">Ravada</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 text-glow-blue">
                  Hemanth
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                <Terminal className="w-4 h-4 text-blue-400 hidden sm:block" />
                <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-300 tracking-wide">
                  Software Engineer <span className="text-blue-500">|</span> Full-Stack Developer <span className="text-violet-500">|</span> AI Enthusiast
                </p>
              </div>
            </div>

            {/* Tagline Quote */}
            <blockquote className="border-l-2 border-blue-500/50 pl-4 py-1 text-slate-400 italic text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              "{PERSONAL_INFO.tagline}"
            </blockquote>

            {/* Key Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="glass-panel p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-mono">Academic Score</div>
                <div className="text-lg font-bold text-white font-heading text-blue-400">9.41 CGPA</div>
              </div>

              <div className="glass-panel p-3 rounded-xl border border-amber-500/20 text-center bg-amber-500/5">
                <div className="text-xs text-amber-300/80 font-mono">Prime Role</div>
                <div className="text-lg font-bold text-amber-300 font-heading">TCS Prime</div>
              </div>

              <div className="glass-panel p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-mono">Core Focus</div>
                <div className="text-lg font-bold text-white font-heading text-violet-400">Full-Stack</div>
              </div>

              <div className="glass-panel p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-mono">Specialization</div>
                <div className="text-lg font-bold text-white font-heading text-cyan-400">GenAI & RAG</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <Code2 className="w-4 h-4" />
                Explore My Work
              </a>

              <button
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-violet-400" />
                Contact Me
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              <Hero3DCanvas />
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="pt-16 flex flex-col items-center justify-center gap-2 text-slate-500 text-xs font-mono">
          <span>SCROLL TO EXPLORE</span>
          <a
            href="#about"
            className="p-2 rounded-full border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-white transition-all animate-bounce"
            aria-label="Scroll to About"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
