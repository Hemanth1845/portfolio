import { PERSONAL_INFO } from '../data/portfolioData';

export const downloadResumeDocument = () => {
  // Generate a clean, styled, print-ready HTML resume document that downloads as an HTML/PDF printable file
  const resumeContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ravada Hemanth - Resume</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #1a202c;
      line-height: 1.5;
      margin: 0;
      padding: 40px;
    }
    h1 {
      font-size: 24pt;
      margin: 0 0 4px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
    }
    .contact-info {
      text-align: center;
      font-size: 10pt;
      color: #4a5568;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #2d3748;
    }
    h2 {
      font-size: 12pt;
      text-transform: uppercase;
      border-bottom: 1px solid #cbd5e0;
      margin-top: 18px;
      margin-bottom: 8px;
      padding-bottom: 2px;
      color: #1a202c;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-top: 6px;
    }
    .item-sub {
      font-style: italic;
      color: #4a5568;
      font-size: 10pt;
    }
    ul {
      margin: 4px 0 10px 18px;
      padding: 0;
      font-size: 10pt;
    }
    li {
      margin-bottom: 3px;
    }
    .skills-grid p {
      margin: 4px 0;
      font-size: 10pt;
    }
    a {
      color: #2b6cb0;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="contact-info">
    ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} | Andhra Pradesh, India<br>
    <a href="${PERSONAL_INFO.socials.linkedin}">LinkedIn</a> | 
    <a href="${PERSONAL_INFO.socials.github}">GitHub</a> | 
    <a href="${PERSONAL_INFO.socials.leetcode}">LeetCode</a>
  </div>

  <h2>Summary</h2>
  <p style="font-size: 10pt;">
    Computer Science Engineering student with a <strong>9.41 CGPA</strong> and hands-on experience in <strong>Java, Python, JavaScript, Spring Boot, React.js, Node.js, and MongoDB</strong>. Built full-stack and AI-powered applications using <strong>REST APIs, RAG, LangChain, and Machine Learning</strong>, with a strong foundation in DSA, DBMS, OOP, and Operating Systems. Selected for the premier <strong>TCS Prime</strong> role.
  </p>

  <h2>Education</h2>
  <div class="item-header">
    <span>KL University, Vijayawada</span>
    <span>CGPA: 9.41</span>
  </div>
  <div class="item-sub">Bachelor of Technology — Computer Science and Engineering</div>
  <p style="font-size: 9pt; color: #4a5568; margin: 2px 0;">Relevant Coursework: Data Structures, Algorithms, Operating Systems, DBMS</p>

  <div class="item-header" style="margin-top: 6px;">
    <span>Sri Chaitanya Junior College, Srikakulam</span>
    <span>94.3%</span>
  </div>
  <div class="item-sub">Intermediate (MPC)</div>

  <div class="item-header" style="margin-top: 6px;">
    <span>Secondary School Certificate</span>
    <span>98%</span>
  </div>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <p><strong>Languages:</strong> Java, Python, JavaScript, C, SQL, HTML, CSS</p>
    <p><strong>Frameworks & Libraries:</strong> Spring Boot, React.js, Node.js, Express.js, PyTorch, LangChain</p>
    <p><strong>Backend:</strong> REST APIs, Authentication & Authorization, MVC Architecture, CRUD Operations</p>
    <p><strong>Databases:</strong> MongoDB, MySQL</p>
    <p><strong>AI & ML:</strong> Machine Learning, NLP, RAG, Semantic Search, Vector Embeddings, Image Processing</p>
    <p><strong>Tools & Platforms:</strong> Git, GitHub, Docker, Kubernetes, Jenkins, AWS, Microsoft Azure</p>
  </div>

  <h2>Projects</h2>
  
  <div class="item-header">
    <span>Automated Placement Preparation Portal</span>
    <span><a href="https://learning-project-wnr5.onrender.com">Live Demo</a></span>
  </div>
  <div class="item-sub">MERN Stack | MongoDB | Node.js | Express.js | React.js | REST APIs</div>
  <ul>
    <li>Developed a full-stack placement preparation platform for coding practice, aptitude preparation, mock tests, and interview readiness.</li>
    <li>Implemented user authentication, CRUD operations, progress tracking, and personalized dashboards for managing student learning activities.</li>
    <li>Deployed live cloud application: <a href="https://learning-project-wnr5.onrender.com">https://learning-project-wnr5.onrender.com</a>.</li>
  </ul>

  <div class="item-header">
    <span>CRM — Customer Relationship Management System</span>
    <span><a href="https://github.com/Hemanth1845/CRM-PROJECT.git">GitHub</a></span>
  </div>
  <div class="item-sub">React.js | Node.js | Express.js | MongoDB | REST APIs | JWT Auth</div>
  <ul>
    <li>Developed a full-stack Customer Relationship Management (CRM) system designed to streamline business workflows, customer lead tracking, sales pipelines, and client communications.</li>
    <li>Implemented role-based access control, analytics dashboards, and robust RESTful APIs backed by MongoDB.</li>
  </ul>

  <div class="item-header">
    <span>AI-Powered College Admission Enquiry System</span>
  </div>
  <div class="item-sub">React.js | Node.js | Express.js | MongoDB | LangChain | RAG | REST APIs</div>
  <ul>
    <li>Developed a full-stack web application using React.js, Node.js, Express.js, and MongoDB to handle college admission enquiries.</li>
    <li>Built REST APIs and database operations for managing admission information and delivering relevant responses from institutional data.</li>
    <li>Implemented search and document retrieval functionality to provide accurate, context-aware admission information to students.</li>
  </ul>

  <h2>Experience</h2>
  <div class="item-header">
    <span>Frontend Developer — Edunet</span>
    <span>08/2025 – 12/2025</span>
  </div>
  <ul>
    <li>Built 5+ responsive and interactive web applications using React.js, JavaScript, HTML, and CSS, improving usability and cross-device responsiveness.</li>
    <li>Integrated RESTful APIs with frontend components to retrieve and display dynamic application data efficiently.</li>
    <li>Optimized data rendering and reusable UI components to improve application responsiveness and user experience.</li>
  </ul>

  <h2>Certifications</h2>
  <ul>
    <li>MongoDB Associate Developer — MongoDB</li>
    <li>AWS Certified Cloud Practitioner — Amazon Web Services</li>
    <li>Microsoft Azure Administrator — Microsoft</li>
  </ul>

  <h2>Honors & Milestones</h2>
  <ul>
    <li><strong>TCS Prime — Selected:</strong> Selected for the prestigious TCS Prime software engineering role.</li>
  </ul>
</body>
</html>`;

  const blob = new Blob([resumeContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ravada_Hemanth_Resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
