import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-300 text-lg">
                  RH
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white text-base tracking-wide flex items-center gap-2">
                Ravada Hemanth
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                  Prime
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Software Engineer</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0c1017]/80 px-4 py-1.5 rounded-full border border-white/8 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.label === 'Achievements' && (
                    <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:border-blue-500/40"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              Resume
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-200"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
