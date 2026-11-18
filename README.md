# Ravada Hemanth — Premium 3D Software Engineer Portfolio

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Hemanth1845/portfolio)

A cinematic, award-winning interactive 3D personal portfolio website engineered for **Ravada Hemanth**, Computer Science Engineering student at **KL University** (9.41 CGPA), selected for the premier **TCS Prime** role.

Built with **React.js, TypeScript, Vite, Tailwind CSS v4, Three.js, Node.js, Express.js, and MongoDB Atlas**.

---

## ⚡ 1-Click Deployment to Netlify

Click the **Deploy to Netlify** button above or click this direct link:
👉 **[Deploy Hemanth's Portfolio to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/Hemanth1845/portfolio)**

Netlify will automatically detect our `netlify.toml` configuration:
- **Base directory**: `client`
- **Build command**: `npm run build`
- **Publish directory**: `client/dist`
- **SPA Fallback**: Configured via `_redirects` and `netlify.toml`
- **Serverless API**: `netlify/functions/contact.mjs`

---

## 🌟 Highlights & Features

- **Futuristic 3D Cinematic Theme**:
  - Deep Obsidian Black (`#050505`), Electric Blue (`#3B82F6`), Neon Violet (`#8B5CF6`), and 24K Gold highlights.
  - Multi-layered glassmorphism panels with backdrop blur and delicate glowing accents.
- **Interactive 3D WebGL Canvas Elements (Three.js)**:
  - **Hero 3D Core**: Interactive metallic icosahedron, electric blue wireframe cage, orbiting quantum satellites, and deep celestial particle field responsive to mouse coordinates.
  - **TCS Prime 3D Award Trophy**: 3D sculpted gold trophy with rotating laurel arcs, star gem, and particle sparkles.
  - **3D Tech Constellation Orb**: Spherical 3D constellation with dodecahedron nodes representing Java, Python, React, Spring Boot, PyTorch, RAG, Docker, AWS, and Azure.
  - **Background Neural Particle Network**: Fluid particle mesh connected dynamically with mouse proximity.
- **Verified Candidate Profile**:
  - **Candidate**: Ravada Hemanth
  - **Role Selection**: Selected for **TCS Prime**
  - **Academics**: KL University B.Tech CSE (9.41 CGPA), Sri Chaitanya (94.3%), SSC (98%)
  - **Certifications**: MongoDB Associate Developer, AWS Certified Cloud Practitioner, Microsoft Azure Administrator
  - **Experience**: Frontend Developer at Edunet (August 2025 – December 2025)
- **Featured Projects**:
  1. **Automated Placement Preparation Portal**: [Live Demo](https://learning-project-wnr5.onrender.com) | [GitHub](https://github.com/hemanth1845/)
  2. **CRM — Customer Relationship Management System**: [GitHub Repository](https://github.com/Hemanth1845/CRM-PROJECT.git)
  3. **AI-Powered College Admission Enquiry System**: RAG + LangChain Document Retrieval
- **Interactive In-Browser ATS Resume**: Complete document viewer with print and download support.
- **Full-Stack Contact Engine**: Validated contact form connected to **MongoDB Atlas Cluster0**.

---

## 🚀 Local Development & Execution

### 1. Unified Full-Stack Production Server (Port 5000)
```bash
cd server
npm start
```
Access at: **http://localhost:5000**

### 2. Vite Development Server with HMR (Port 5173)
```bash
cd client
npm run dev
```
Access at: **http://localhost:5173**

---

## 📁 Repository Architecture

```
portfolio/
├── netlify.toml                     # Netlify Build, Redirects & Function Config
├── client/                          # React + TypeScript + Vite + Tailwind CSS + Three.js
│   ├── public/_redirects            # Netlify Single Page App Redirects
│   ├── src/
│   │   ├── components/3d/           # Hero3D, Trophy3D, TechOrb3D, BackgroundCanvas
│   │   ├── components/layout/       # Navbar, Footer
│   │   ├── components/sections/     # Hero, About, Achievements, Skills, Projects,
│   │   │                            # Experience, Education, Certifications, Resume, Contact
│   │   ├── components/modals/       # ResumeModal, ProjectModal
│   │   ├── data/portfolioData.ts    # Single Source of Truth
│   │   └── utils/downloadResume.ts  # Resume Generator
│   └── package.json
├── netlify/
│   └── functions/
│       └── contact.mjs              # Serverless Contact API for Netlify
├── server/                          # Express.js + Mongoose Backend
│   ├── models/Contact.js            # MongoDB Contact Schema
│   ├── models/Visitor.js            # MongoDB Visitor Tracking Schema
│   ├── index.js                     # Unified API & Static Server
│   └── .env.example                 # Connection template
└── package.json
```

---

## 👤 Developer Contact

- **Name**: Ravada Hemanth
- **GitHub**: [https://github.com/hemanth1845/](https://github.com/hemanth1845/)
- **LinkedIn**: [https://www.linkedin.com/in/ravada-hemanth-248622330/](https://www.linkedin.com/in/ravada-hemanth-248622330/)
- **Email**: [2300032944cseelge@gmail.com](mailto:2300032944cseelge@gmail.com)
- **Phone**: +91 9014189399
- **Location**: Andhra Pradesh, India
