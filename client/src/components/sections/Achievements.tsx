import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Trophy3DCanvas } from '../3d/Trophy3DCanvas';

export const Achievements: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);

  const triggerConfetti = () => {
    setCelebrated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#3B82F6', '#8B5CF6', '#FDE047'],
    });
    setTimeout(() => setCelebrated(false), 3000);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial gold & blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-300">
            <Award className="w-3.5 h-3.5" />
            MAJOR CAREER MILESTONE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Recognized for algorithmic problem solving, software engineering acumen, and rigorous technical competence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Featured TCS Prime Achievement Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-amber-400/40 via-blue-500/30 to-white/10 shadow-2xl shadow-amber-500/10 group">
            
            <div className="rounded-[22px] bg-[#070b13] p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl">
              
              {/* Corner Watermark */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left: 3D Trophy WebGL Canvas */}
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[280px]">
                    <Trophy3DCanvas />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-[11px] font-mono text-amber-400/80 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Trophy • Interactive 3D Gold Model
                    </span>
                  </div>
                </div>

                {/* Right: Achievement Details */}
                <div className="md:col-span-7 space-y-6 text-center md:text-left">
                  
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    PREMIER PLACEMENT SELECTION
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center md:justify-start gap-3">
                      TCS PRIME
                      <span className="text-base sm:text-lg font-mono font-bold px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/30">
                        SELECTED
                      </span>
                    </h3>
                    <p className="text-sm font-mono text-slate-400">
                      Tata Consultancy Services • High-Performance Engineering Cadre
                    </p>
                  </div>

                  {/* Core Statement strictly following requirements */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/8 space-y-2">
                    <p className="text-slate-200 text-base font-medium leading-relaxed">
                      "Selected for the <strong className="text-amber-300 font-bold">TCS Prime</strong> role."
                    </p>
                    <p className="text-xs text-slate-400 leading-normal">
                      Earned selection through competitive technical assessments evaluating data structures, complex algorithms, system concepts, and analytical problem-solving.
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Premier engineering tier</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>DSA & algorithmic excellence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Rigorous technical interview</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>KL University top performer</span>
                    </div>
                  </div>

                  {/* Celebrate Button */}
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <button
                      onClick={triggerConfetti}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 transition-all duration-300 active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {celebrated ? 'Celebrating!' : 'Celebrate Selection'}
                    </button>

                    <div className="text-[11px] font-mono text-slate-500">
                      *Note: Candidate has been selected for TCS Prime role.
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
