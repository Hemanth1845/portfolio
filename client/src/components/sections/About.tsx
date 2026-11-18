import React from 'react';
import { Award, GraduationCap, Layers, User, BrainCircuit } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <User className="w-3.5 h-3.5" />
            BACKGROUND & JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            A Little About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: 3D Holographic Profile Avatar / Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-between group">
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl" />

              <div>
                {/* 3D Abstract Developer Avatar Artwork */}
                <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-violet-600/30 border border-blue-500/30 blur-sm group-hover:blur-md transition-all duration-500" />
                  
                  <div className="relative w-full h-full rounded-2xl bg-[#090d16] border border-white/10 p-6 flex flex-col items-center justify-center gap-4 overflow-hidden">
                    {/* Abstract futuristic cyber face / sphere */}
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-b from-blue-500/20 to-violet-500/20 border border-blue-400/40 flex items-center justify-center shadow-inner">
                      <BrainCircuit className="w-14 h-14 text-blue-400 animate-pulse" />
                      <div className="absolute inset-0 rounded-full border border-violet-400/30 animate-spin" style={{ animationDuration: '15s' }} />
                    </div>

                    <div className="text-center space-y-1">
                      <div className="font-heading font-bold text-white text-lg">Ravada Hemanth</div>
                      <div className="text-xs font-mono text-blue-400">KL University • B.Tech CSE</div>
                    </div>

                    <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Status: ACTIVE</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Interests */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    Technical Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Software Engineering',
                      'Backend Systems',
                      'Full-Stack Applications',
                      'Generative AI & RAG',
                      'REST APIs & Microservices',
                      'Database Optimization',
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-slate-300 font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Education & Achievement badges in card */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-mono">Education</span>
                  </div>
                  <div className="text-xs text-white font-semibold">KL University</div>
                  <div className="text-[11px] text-slate-400">B.Tech CSE</div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-mono">Achievement</span>
                  </div>
                  <div className="text-xs text-amber-200 font-semibold">TCS Prime</div>
                  <div className="text-[11px] text-amber-300/80">Selected</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Prose & Animated Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Bio Prose Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-2xl font-bold text-white font-heading">
                Engineering with Curiosity, Precision, and Purpose
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm <strong className="text-white">Ravada Hemanth</strong>, a Computer Science Engineering student at <span className="text-blue-400 font-medium">KL University</span> with a strong interest in software engineering, backend development, full-stack applications, and Generative AI.
                </p>
                <p>
                  I enjoy building practical applications, designing efficient backend systems, and exploring how AI can solve real-world problems.
                </p>
                <p>
                  I have hands-on experience with <span className="text-slate-100 font-medium">Java, Python, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and AI technologies</span>.
                </p>
                <p className="text-slate-400 italic border-l-2 border-violet-500/50 pl-3">
                  My goal is to become a skilled software engineer who builds scalable, reliable, and impactful technology solutions.
                </p>
              </div>
            </div>

            {/* Exactly Specified Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Stat 1: 9.41 CGPA */}
              <div className="glass-card p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-center group hover:border-blue-500/50">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-heading">
                  9.41
                </div>
                <div className="text-xs font-bold text-white mt-1">CGPA</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">KL University</div>
              </div>

              {/* Stat 2: TCS Prime Selected */}
              <div className="glass-card p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 text-center group hover:border-amber-500/60">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-heading tracking-wide">
                  TCS Prime
                </div>
                <div className="text-xs font-bold text-amber-200 mt-1">Selected</div>
                <div className="text-[11px] text-amber-400/80 font-mono mt-0.5">Top Tier Role</div>
              </div>

              {/* Stat 3: 2 Featured Projects */}
              <div className="glass-card p-5 rounded-xl border border-violet-500/20 bg-violet-500/5 text-center group hover:border-violet-500/50">
                <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-heading">
                  2
                </div>
                <div className="text-xs font-bold text-white mt-1">Featured Projects</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Full-Stack & AI</div>
              </div>

              {/* Stat 4: 1 Internship Experience */}
              <div className="glass-card p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-center group hover:border-cyan-500/50">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-heading">
                  1
                </div>
                <div className="text-xs font-bold text-white mt-1">Internship</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Edunet Frontend</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
