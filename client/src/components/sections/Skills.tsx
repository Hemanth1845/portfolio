import React, { useState } from 'react';
import { Cpu, Search, CheckCircle, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { TechOrb3DCanvas } from '../3d/TechOrb3DCanvas';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
    const filteredSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return {
      ...cat,
      isVisible: matchesCategory && (searchQuery.trim() === '' || filteredSkills.length > 0),
      skills: filteredSkills,
    };
  }).filter((cat) => cat.isVisible);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            A comprehensive, modern stack spanning full-stack development, distributed backend engineering, and artificial intelligence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* 3D Visual & Overview Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex items-center justify-center">
              <TechOrb3DCanvas />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <Sparkles className="w-3 h-3" />
                STACK ARCHITECTURE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Multi-Disciplinary Engineering Competencies
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From object-oriented systems in <strong className="text-white">Java</strong> and dynamic backend services in <strong className="text-white">Node.js & Express.js</strong>, to intelligent document retrieval pipelines powered by <strong className="text-blue-400">LangChain & RAG</strong>, every skill is backed by practical projects and verified coursework.
              </p>

              {/* Search & Category Filter Controls */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search any skill (e.g., Spring Boot, PyTorch, RAG)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick stats note */}
                <div className="text-xs font-mono text-slate-400 shrink-0 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>35+ Verified Technologies</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-blue-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                    {cat.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-blue-600/15 border border-white/5 hover:border-blue-500/30 text-xs font-medium text-slate-300 hover:text-blue-300 transition-all duration-200 flex items-center gap-1.5 cursor-default"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-400/70" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in Academic / Projects</span>
                <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No technologies found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
