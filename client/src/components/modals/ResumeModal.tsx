import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto bg-[#0a0e17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0d131f] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                Ravada_Hemanth_Resume.pdf
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Official Document • Verified TCS Prime Candidate
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Container (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#070a10]">
          
          {/* Printable White-on-Black Paper Container */}
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl font-sans text-xs leading-relaxed select-text print:p-0 print:shadow-none">
            
            {/* Header: Name and Contact */}
            <div className="text-center pb-4 border-b border-slate-300 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-slate-900 font-heading">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  LeetCode
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="pt-4 space-y-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-normal pt-1">
                Computer Science Engineering student with a <strong className="font-bold text-slate-900">9.41 CGPA</strong> and hands-on experience in <strong className="font-bold text-slate-900">Java, Python, JavaScript, Spring Boot, React.js, Node.js, and MongoDB</strong>. Built full-stack and AI-powered applications using <strong className="font-bold text-slate-900">REST APIs, RAG, LangChain, and Machine Learning</strong>, with a strong foundation in DSA, DBMS, OOP, and Operating Systems. Selected for the premier <strong className="font-bold text-blue-700">TCS Prime</strong> role.
              </p>
            </div>

            {/* Education */}
            <div className="pt-4 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Education
              </h2>

              <div className="space-y-2 pt-1">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>KL University, Vijayawada</span>
                    <span className="text-blue-700 font-extrabold">CGPA: 9.41</span>
                  </div>
                  <div className="text-slate-700 italic">Bachelor of Technology — Computer Science and Engineering</div>
                  <div className="text-slate-600 text-[11px]">
                    Relevant Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Object-Oriented Programming
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-semibold text-slate-900">
                    <span>Sri Chaitanya Junior College, Srikakulam</span>
                    <span>94.3%</span>
                  </div>
                  <div className="text-slate-600 text-[11px] italic">Intermediate (MPC)</div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-semibold text-slate-900">
                    <span>Board of Secondary Education</span>
                    <span>98%</span>
                  </div>
                  <div className="text-slate-600 text-[11px] italic">SSC 10th</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="pt-4 space-y-1.5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Technical Skills
              </h2>

              <div className="space-y-1 pt-1 text-slate-800">
                <div>
                  <strong className="font-bold text-slate-900">Languages:</strong> Java, Python, JavaScript, C, SQL, HTML, CSS
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Frameworks & Libraries:</strong> Spring Boot, React.js, Node.js, Express.js, PyTorch, LangChain
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Backend:</strong> REST APIs, Authentication & Authorization, MVC Architecture, CRUD Operations
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Databases:</strong> MySQL, MongoDB
                </div>
                <div>
                  <strong className="font-bold text-slate-900">AI / ML:</strong> Machine Learning, NLP, RAG, Semantic Search, Vector Embeddings, Image Processing
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Tools & Platforms:</strong> Git, GitHub, Docker, Kubernetes, Jenkins, AWS, Microsoft Azure
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="pt-4 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Featured Projects
              </h2>

              {/* Project 1: Placement Prep Portal */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Automated Placement Preparation Portal</span>
                  <a href="https://learning-project-wnr5.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1 text-[11px]">
                    <span>learning-project-wnr5.onrender.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-slate-600 text-[11px] italic">
                  MERN Stack | MongoDB | Node.js | Express.js | React.js | REST APIs
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5">
                  <li>Developed a full-stack automated placement preparation platform for coding practice, aptitude preparation, mock tests, and interview readiness.</li>
                  <li>Implemented user authentication, CRUD operations, progress tracking, and personalized dashboards for managing student learning activities.</li>
                  <li>Live Deployment: https://learning-project-wnr5.onrender.com</li>
                </ul>
              </div>

              {/* Project 2: CRM */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>CRM — Customer Relationship Management System</span>
                  <a href="https://github.com/Hemanth1845/CRM-PROJECT.git" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1 text-[11px]">
                    <span>CRM-PROJECT.git</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-slate-600 text-[11px] italic">
                  React.js | Node.js | Express.js | MongoDB | REST APIs | JWT Auth
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5">
                  <li>Developed a full-stack Customer Relationship Management (CRM) system designed to streamline business workflows, customer lead tracking, and sales pipelines.</li>
                  <li>Implemented role-based authentication, activity tracking, and dynamic dashboards for business management.</li>
                  <li>GitHub: https://github.com/Hemanth1845/CRM-PROJECT.git</li>
                </ul>
              </div>

              {/* Project 3: AI College Admission Enquiry System */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>AI-Powered College Admission Enquiry System</span>
                </div>
                <div className="text-slate-600 text-[11px] italic">
                  React.js | Node.js | Express.js | MongoDB | LangChain | RAG | REST APIs
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5">
                  <li>Developed a full-stack web application using React.js, Node.js, Express.js, and MongoDB to handle college admission enquiries.</li>
                  <li>Built REST APIs and database operations for managing admission information and delivering relevant responses from institutional data.</li>
                  <li>Implemented search and document retrieval functionality to provide accurate, context-aware admission information to students.</li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div className="pt-4 space-y-1.5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Experience
              </h2>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Frontend Developer — Edunet</span>
                  <span className="font-mono text-xs text-slate-700">08/2025 – 12/2025</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 pt-0.5">
                  <li>Built 5+ responsive and interactive web applications using React.js, JavaScript, HTML, and CSS, improving usability and cross-device responsiveness.</li>
                  <li>Integrated RESTful APIs with frontend components to retrieve and display dynamic application data efficiently.</li>
                  <li>Optimized data rendering and reusable UI components to improve application responsiveness and user experience.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-4 space-y-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Certifications
              </h2>

              <div className="space-y-0.5 pt-1 text-slate-800">
                <div>• <strong className="font-semibold">MongoDB Associate Developer</strong> — MongoDB Inc.</div>
                <div>• <strong className="font-semibold">AWS Certified Cloud Practitioner</strong> — Amazon Web Services</div>
                <div>• <strong className="font-semibold">Microsoft Azure Administrator</strong> — Microsoft</div>
              </div>
            </div>

            {/* Key Achievement */}
            <div className="pt-4 space-y-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 border-b border-slate-300 pb-0.5">
                Key Honors
              </h2>
              <div className="pt-1 text-slate-800">
                • <strong className="font-semibold text-blue-700">Selected for TCS Prime:</strong> High-performance software engineering tier placement at Tata Consultancy Services.
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3.5 bg-[#0d131f] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Direct Email:</span>
            <span className="text-slate-200">{PERSONAL_INFO.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              Close Viewer
            </button>
            <button
              onClick={onDownload}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-md shadow-blue-600/20"
            >
              Download PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
