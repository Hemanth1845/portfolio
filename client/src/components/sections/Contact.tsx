import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import type { ContactFormData } from '../../types/portfolio';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const errors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email format';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof ContactFormData]) {
      setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Your message was successfully received and stored in our database.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Failed to submit message. Please try again or reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage(
        'Could not reach the backend server (make sure Express is running on port 5000). You can also email directly at 2300032944cseelge@gmail.com.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Whether discussing engineering opportunities, full-stack architectures, or collaborative projects, my inbox is open.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.tcsStatus} • {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-blue-600/15 border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-emerald-600/15 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels with Functional Placeholders */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                  Social & Coding Platforms
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-center transition-all flex flex-col items-center gap-1.5 group"
                  >
                    <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono text-slate-300">LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-slate-700/20 border border-white/10 hover:border-slate-500/40 text-center transition-all flex flex-col items-center gap-1.5 group"
                  >
                    <GithubIcon className="w-5 h-5 text-slate-200 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono text-slate-300">GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-amber-600/20 border border-white/10 hover:border-amber-500/40 text-center transition-all flex flex-col items-center gap-1.5 group"
                  >
                    <LeetCodeIcon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono text-slate-300">LeetCode</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry%20for%20Ravada%20Hemanth`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  Email Me Directly
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white font-heading">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Messages are securely recorded via our Express API and persisted into MongoDB.
                </p>
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message Dispatched & Stored!</div>
                    <div className="mt-0.5 text-emerald-300/90">{feedbackMessage}</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <div className="font-semibold">Transmission Note</div>
                    <div className="mt-0.5 text-rose-300/90">{feedbackMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none transition-all ${
                        validationErrors.name
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none transition-all ${
                        validationErrors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none transition-all ${
                      validationErrors.subject
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                    }`}
                  />
                  {validationErrors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{validationErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none transition-all resize-y ${
                      validationErrors.message
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{validationErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing & Storing in MongoDB...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Ravada Hemanth</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-[11px] font-mono text-slate-500">
                    Live form verification enabled. Authenticated MongoDB collection: <code className="text-slate-400">portfolio.contacts</code>
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
