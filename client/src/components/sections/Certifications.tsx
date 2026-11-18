import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, CheckCircle2, Cloud, Database } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import type { CertificationItem } from '../../types/portfolio';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            INDUSTRY CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Industry-recognized certifications validating expertise across database design, cloud infrastructure, and enterprise administration.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CERTIFICATIONS.map((cert) => {
            return (
              <div
                key={cert.id}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/15 to-transparent hover:from-blue-500/40 hover:to-violet-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="rounded-[23px] bg-[#080d16] p-7 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle corner light */}
                  <div
                    className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                    style={{ backgroundColor: cert.badgeColor }}
                  />

                  <div>
                    {/* Header badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center p-[1px] shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${cert.badgeColor}, #1e293b)` }}
                      >
                        <div className="w-full h-full bg-[#0a0f1d] rounded-[11px] flex items-center justify-center">
                          {cert.id === 'mongodb-dev' ? (
                            <Database className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Cloud className="w-6 h-6 text-blue-400" />
                          )}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    {/* Certification Title */}
                    <h3 className="text-xl font-bold text-white font-heading mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="text-sm font-medium text-slate-400 font-mono mb-4">
                      {cert.issuer}
                    </div>

                    {/* Verification details text */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Validates foundational and practical engineering capability in {cert.title.toLowerCase()}.
                    </p>
                  </div>

                  {/* Verification Action */}
                  <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify Credential</span>
                    </button>

                    <span className="text-[11px] font-mono text-slate-500">
                      Official Issuer
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Verification Dialog Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-md w-full p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Official Credential Verification
                </span>
                <h4 className="text-lg font-bold text-white font-heading mt-1">
                  {selectedCert.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3 mb-6 text-xs font-mono">
              <div>
                <span className="text-slate-400">Awarded To:</span>
                <div className="text-white font-bold text-sm">Ravada Hemanth</div>
              </div>
              <div>
                <span className="text-slate-400">Issuing Authority:</span>
                <div className="text-blue-300 font-semibold">{selectedCert.issuer}</div>
              </div>
              <div>
                <span className="text-slate-400">Verification Link:</span>
                <div className="text-slate-300 break-all select-all pt-1">
                  {selectedCert.verificationUrl}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200"
              >
                Close
              </button>
              <a
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white font-semibold flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Go to Issuer Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
