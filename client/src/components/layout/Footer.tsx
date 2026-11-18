import React from 'react';
import { ArrowUp, Mail, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060a] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-blue-400 text-sm">RH</span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wide">
                Ravada Hemanth
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software Engineer | Full-Stack Developer | AI Enthusiast. Dedicated to building scalable, reliable, and intelligent digital solutions.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {PERSONAL_INFO.tcsStatus}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Journey</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-blue-400 transition-colors">TCS Prime Milestone</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Technical Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience & Education</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 border border-white/5 transition-all"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-violet-400 border border-white/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Direct: {PERSONAL_INFO.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <span>Designed & Built with MERN, Three.js & Tailwind CSS for</span>
            <span className="text-slate-300 font-semibold">Ravada Hemanth</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
