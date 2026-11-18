import type { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ravada Hemanth',
  title: 'Software Engineer | Full-Stack Developer | AI Enthusiast',
  tagline: 'Building intelligent solutions through code, creativity, and technology.',
  location: 'Andhra Pradesh, India',
  email: '2300032944cseelge@gmail.com',
  phone: '+91 9014189399',
  tcsStatus: 'Selected for TCS Prime',
  university: 'KL University',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  cgpa: '9.41',
  socials: {
    github: 'https://github.com/hemanth1845/',
    linkedin: 'https://www.linkedin.com/in/ravada-hemanth-248622330/',
    leetcode: 'https://leetcode.com/u/ravada_hemanth',
  },
  about: {
    summary:
      "I'm Ravada Hemanth, a Computer Science Engineering student at KL University with a strong interest in software engineering, backend development, full-stack applications, and Generative AI. I enjoy building practical applications, designing efficient backend systems, and exploring how AI can solve real-world problems. I have hands-on experience with Java, Python, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and AI technologies. My goal is to become a skilled software engineer who builds scalable, reliable, and impactful technology solutions.",
    stats: [
      { label: 'CGPA', value: '9.41', description: 'KL University (Top Academic Standing)' },
      { label: 'TCS Prime', value: 'Selected', description: 'Premier Engineering Placement Track' },
      { label: 'Featured Projects', value: '3', description: 'Full-Stack, EdTech & CRM Systems' },
      { label: 'Internship Experience', value: '1', description: 'Frontend Developer at Edunet' },
    ],
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Component Architecture'],
  },
  {
    id: 'backend',
    name: 'Backend Architecture',
    skills: [
      'Node.js',
      'Express.js',
      'Spring Boot',
      'REST APIs',
      'Authentication and Authorization',
      'MVC Architecture',
      'CRUD Operations',
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'NLP',
      'RAG',
      'LangChain',
      'Semantic Search',
      'Vector Embeddings',
      'Image Processing',
      'PyTorch',
      'Neural Networks',
      'CNN',
      'Scikit-learn',
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Cloud Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Microsoft Azure'],
  },
  {
    id: 'analytics',
    name: 'Data Analysis & Mathematics',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Linear Algebra',
      'Probability & Statistics',
      'Hypothesis Testing',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'placement-portal',
    title: 'Automated Placement Preparation Portal',
    category: 'MERN Stack EdTech Platform',
    description:
      'Developed a centralized automated placement preparation platform to help students improve their coding, aptitude, and interview preparation with comprehensive progress tracking.',
    technologies: ['MERN Stack', 'MongoDB', 'Node.js', 'Express.js', 'React.js', 'REST APIs'],
    features: [
      'Full-stack architecture deployed on cloud infrastructure with live interactive sessions.',
      'Secure user authentication and role-based student session management.',
      'Interactive coding practice environment with curated algorithmic problem sets.',
      'Aptitude and logical reasoning assessment modules with timed mock tests.',
      'Comprehensive progress tracking with granular performance analytics.',
      'Clean REST API integration supporting high-concurrency exam submissions.',
    ],
    githubUrl: 'https://github.com/hemanth1845/',
    liveUrl: 'https://learning-project-wnr5.onrender.com',
    isConfigurableGithub: false,
    isConfigurableLive: false,
    metric: 'Live Deployed on Render • High Concurrency',
  },
  {
    id: 'crm-project',
    title: 'CRM — Customer Relationship Management System',
    category: 'Enterprise Full-Stack Application',
    description:
      'Developed a full-stack Customer Relationship Management (CRM) system designed to streamline business workflows, customer lead tracking, sales pipelines, and client communications.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
    features: [
      'Comprehensive customer and lead management lifecycle tracking.',
      'Secure role-based authentication and authorization for enterprise users.',
      'Dynamic dashboard with sales pipeline stages and customer activity logs.',
      'MongoDB database schema optimized for high-volume customer interactions.',
      'RESTful API endpoints for CRUD operations on leads, accounts, and tasks.',
      'Responsive modern UI with real-time status updates and interaction tracking.',
    ],
    githubUrl: 'https://github.com/Hemanth1845/CRM-PROJECT.git',
    liveUrl: 'https://github.com/Hemanth1845/CRM-PROJECT.git',
    isConfigurableGithub: false,
    isConfigurableLive: true,
    metric: 'Enterprise Architecture & Lead Pipeline',
  },
  {
    id: 'admission-enquiry-system',
    title: 'AI-Powered College Admission Enquiry System',
    category: 'Full-Stack AI Application',
    description:
      'Developed a full-stack AI-powered college admission enquiry application that helps students obtain relevant admission information through intelligent document retrieval.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LangChain', 'RAG', 'REST APIs'],
    features: [
      'Full-stack application architecture with seamless frontend-backend orchestration.',
      'Robust REST API development for managing college admission catalogs and queries.',
      'Scalable MongoDB database operations for document indexing and student records.',
      'Semantic search and vector-based document retrieval for fast question answering.',
      'Context-aware AI responses using LangChain and Retrieval-Augmented Generation (RAG).',
      'Significantly reduces enquiry turnaround time through intelligent query parsing.',
    ],
    githubUrl: 'https://github.com/hemanth1845/',
    liveUrl: 'https://admission-ai-demo.vercel.app',
    isConfigurableGithub: true,
    isConfigurableLive: true,
    metric: 'RAG Architecture + Vector Search',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'edunet-internship',
    role: 'Frontend Developer',
    company: 'Edunet',
    period: 'August 2025 – December 2025',
    location: 'Remote / Virtual Internship',
    description: [
      'Built 5+ responsive and interactive web applications using React.js, JavaScript, HTML, and CSS, improving usability and cross-device responsiveness.',
      'Integrated RESTful APIs with frontend components to retrieve and display dynamic application data efficiently.',
      'Optimized data rendering and reusable UI components to improve application responsiveness and user experience.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'UI/UX Optimization'],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'kl-university',
    institution: 'KL University, Vijayawada',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027 (Expected)',
    location: 'Vijayawada, Andhra Pradesh',
    score: '9.41',
    scoreType: 'CGPA',
    coursework: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Object-Oriented Programming'],
  },
  {
    id: 'sri-chaitanya',
    institution: 'Sri Chaitanya Junior College, Srikakulam',
    degree: 'Intermediate — MPC (Mathematics, Physics, Chemistry)',
    location: 'Srikakulam, Andhra Pradesh',
    score: '94.3%',
    scoreType: 'Percentage',
  },
  {
    id: 'ssc',
    institution: 'Board of Secondary Education',
    degree: 'Secondary School Certificate (SSC 10th)',
    location: 'Andhra Pradesh',
    score: '98%',
    scoreType: 'Percentage',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'mongodb-dev',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB Inc.',
    verificationUrl: 'https://learn.mongodb.com/c/verified-credentials',
    badgeColor: '#10B981', // Emerald green
  },
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    verificationUrl: 'https://aws.amazon.com/verification',
    badgeColor: '#F59E0B', // Amber
  },
  {
    id: 'azure-admin',
    title: 'Microsoft Azure Administrator',
    issuer: 'Microsoft Corporation',
    verificationUrl: 'https://learn.microsoft.com/credentials',
    badgeColor: '#3B82F6', // Azure Blue
  },
];
