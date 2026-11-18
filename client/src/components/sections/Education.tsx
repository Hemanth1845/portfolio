import React from 'react';
import { GraduationCap, BookOpen, MapPin, Star } from 'lucide-react';
import { EDUCATION_ITEMS } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Consistently outstanding academic trajectory reflecting discipline, analytical thinking, and foundational mastery.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {EDUCATION_ITEMS.map((item) => {
            const isUniversity = item.id === 'kl-university';

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-[1px] transition-all duration-300 flex flex-col justify-between ${
                  isUniversity
                    ? 'bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-white/10 shadow-xl shadow-blue-500/10 scale-100 md:scale-[1.02]'
                    : 'bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20'
                }`}
              >
                <div className="rounded-[23px] bg-[#080c14] p-7 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Top Light */}
                  {isUniversity && (
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                  )}

                  <div>
                    {/* 3D Graduation Cap Icon / Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl p-[1.5px] flex items-center justify-center ${
                        isUniversity
                          ? 'bg-gradient-to-tr from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30'
                          : 'bg-white/10'
                      }`}>
                        <div className="w-full h-full bg-[#0a0f1d] rounded-[13px] flex items-center justify-center">
                          <GraduationCap className={`w-7 h-7 ${isUniversity ? 'text-blue-400' : 'text-slate-300'}`} />
                        </div>
                      </div>

                      {/* Score Highlight Pill */}
                      <div className="text-right">
                        <div className={`text-2xl font-extrabold font-heading ${
                          isUniversity ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400' : 'text-white'
                        }`}>
                          {item.score}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.scoreType}
                        </div>
                      </div>
                    </div>

                    {/* Degree */}
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 leading-snug">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <div className="text-sm font-semibold text-blue-400/90 font-mono mb-2">
                      {item.institution}
                    </div>

                    {/* Location */}
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {/* Relevant Coursework if applicable */}
                    {item.coursework && (
                      <div className="pt-4 border-t border-white/8 space-y-2">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                          Relevant Coursework:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Academic Distinction</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      Verified
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
