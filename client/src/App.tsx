import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackgroundCanvas } from './components/3d/BackgroundCanvas';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Achievements } from './components/sections/Achievements';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/modals/ResumeModal';
import { downloadResumeDocument } from './utils/downloadResume';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Record visitor impression in backend API
    fetch('/api/visitor', { method: 'POST' }).catch(() => {
      // Backend logging fallback
    });
  }, []);

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const handleDownloadResume = () => {
    downloadResumeDocument();
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e2e8f0] selection:bg-blue-600/30 selection:text-blue-200">
      {/* 3D Ambient Canvas Background */}
      <BackgroundCanvas />

      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={handleOpenResumeModal} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-12">
        <Hero
          onOpenResumeModal={handleOpenResumeModal}
          onDownloadResume={handleDownloadResume}
        />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <ResumeSection
          onOpenResumeModal={handleOpenResumeModal}
          onDownloadResume={handleDownloadResume}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* High-Resolution Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
        onDownload={handleDownloadResume}
      />
    </div>
  );
}

export default App;
