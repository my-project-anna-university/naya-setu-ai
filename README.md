# NyayaSetu (न्यायसेतु)

### AI Connecting Citizens with Legal Rights & Government Services

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](file:///C:/Users/DELL/My-project/nyayasetu/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0%2B-47A248.svg)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

---

## 📌 Project Overview

**NyayaSetu** (*"Bridge to Justice"*) is an AI-powered legal empowerment and civic access platform tailored specifically for Indian citizens. The platform simplifies complex statutory laws, bridges the awareness gap for government welfare schemes, demystifies court procedures, and equips citizens with automated document drafting and legal aid connectivity.

Developed as a **Master of Computer Applications (MCA) Semester IV Project**:
- **Author / Developer**: Anush S
- **Academic Year**: 2026
- **Domain**: Legal-Tech / Civic-Tech / Artificial Intelligence

---

## 🚀 Key Modules & Features

NyayaSetu delivers 7 interconnected modules engineered to simplify legal accessibility:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           NYAYASETU PLATFORM                            │
├──────────────────┬──────────────────┬──────────────────┬────────────────┤
│ 1. Rights        │ 2. AI Legal      │ 3. Schemes       │ 4. Document    │
│    Explorer      │    Assistant     │    Navigator     │    Drafter     │
├──────────────────┼──────────────────┼──────────────────┼────────────────┤
│ 5. Grievance     │ 6. Legal Aid     │ 7. Court Hub &   │                │
│    Portal Guide  │    Directory     │    Case Status   │                │
└──────────────────┴──────────────────┴──────────────────┴────────────────┘
```

### 1. Citizen Rights Explorer
- Comprehensive directory of Indian citizen rights across 6 key domains:
  - **Constitutional Rights**: Fundamental Rights (Articles 14–32), Directive Principles, Writs.
  - **Consumer Rights**: Consumer Protection Act 2019, unfair trade practices, refund/replacement rights.
  - **Labor & Employment**: Minimum Wages, Payment of Gratuity, POSH Act 2013, Maternity Benefits.
  - **Women's Rights & Protections**: Protection of Women from Domestic Violence Act 2005, 498A, Maintenance under CrPC/BNSS.
  - **Cyber Rights & Digital Privacy**: Information Technology Act 2000, Digital Personal Data Protection Act (DPDPA 2023).
  - **Criminal Procedure Rights**: Arrest guidelines (DK Basu), bail provisions under Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), rights during interrogation.
- Searchable by keywords, statutory section numbers, and simplified real-world scenarios.

### 2. AI Legal Assistant / Chatbot
- Hybrid conversational engine combining a verified statutory legal knowledge base with Google Gemini 1.5 Flash.
- Plain-language legal interpretations without dense legalese.
- Legal safety guardrails ensuring statutory disclaimers (Advocates Act 1961 compliance).
- Emergency helpline detection (instantly displays 112, 1091, 1930 Cyber helpline for distress queries).

### 3. Government Schemes & Welfare Navigator
- Central and State welfare database (PM-KISAN, Ayushman Bharat - PMJAY, PMAY, Sukanya Samriddhi Yojana, etc.).
- **Interactive Eligibility Checker**: Filter schemes by age, gender, occupation, caste category, annual income, and state.
- Step-by-step application blueprints with required document checklists and direct portal links.

### 4. Legal Document Drafting & Templates
- Dynamic, interactive document generation wizard:
  - **Right to Information (RTI) Application** (under Section 6(1) of the RTI Act 2005).
  - **Consumer Forum Complaint Notice** (Section 35 of the Consumer Protection Act).
  - **Residential Rent Agreement** (Model Tenancy compliant).
  - **General Affidavit / Name Change Affidavit**.
  - **Formal Legal Notice for Recovery of Dues / Deficient Service**.
- Real-time preview, input validation, and print/PDF export readiness.

### 5. Citizen Grievance & Complaint Assistant
- Guided walkthroughs for lodging grievances with statutory and administrative bodies:
  - **CPGRAMS** (Centralized Public Grievance Redress and Monitoring System).
  - **National Consumer Helpline (NCH)** & e-Daakhil portal.
  - **National Cyber Crime Reporting Portal** (`cybercrime.gov.in`).
  - **Police e-FIR** guidance for cognizable vs. non-cognizable offenses.

### 6. Legal Aid & Pro Bono Directory
- Geolocation and district-level directory of **NALSA**, State Legal Services Authorities (**SLSA**), and District Legal Services Authorities (**DLSA**).
- Directory of verified pro bono lawyers and legal aid clinics providing free legal services under Article 39A of the Constitution of India.
- National and State **Lok Adalat** schedules, eligibility benchmarks, and legal aid clinic contact helplines.

### 7. Case Status & Court Information Hub
- Direct integration pathways and query guidance for the **eCourts Services** national portal.
- **Court Fees Calculator** estimation based on suit value and jurisdiction.
- **Procedural Timeline Visualizer**: Interactive flowchart showing the stages of Civil Suits, Criminal Cases, and Bail hearings in Indian courts.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) (SPA)
- **Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Validation & Security**: [Helmet](https://helmetjs.github.io/), [CORS](https://github.com/expressjs/cors), [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) / Google Gemini API

### Database
- **Database**: [MongoDB](https://www.mongodb.com/) (Community Server / Atlas)
- **Object Data Modeling**: [Mongoose](https://mongoosejs.com/)

---

## 📋 Prerequisites

Before setting up NyayaSetu locally, make sure you have installed:
1. **Node.js**: v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
2. **npm**: v9.0.0 or higher (packaged with Node.js)
3. **MongoDB**: v6.0 or higher running on `mongodb://localhost:27017` or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster connection string.
4. *(Optional)* **Google Gemini API Key**: For live AI chatbot queries ([Get free API key](https://aistudio.google.com/)).

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/nyayasetu.git
cd nyayasetu
```

### Step 2: Install All Dependencies
Install root, server, and client dependencies with a single command:
```bash
npm run install:all
```
*(Alternatively, run `npm install` inside root, `server/`, and `client/` directories.)*

### Step 3: Configure Environment Variables
Create the server `.env` file using `.env.example` as a template:
```bash
# In the project root or inside server/
cp .env.example server/.env
```

Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/nyayasetu
JWT_SECRET=your_super_secret_jwt_key_here
GEMINI_API_KEY=your_gemini_api_key_here
CLIENT_URL=http://localhost:5173
```

### Step 4: Seed the Database
Populate MongoDB with Indian statutes, constitutional articles, central welfare schemes, DLSA directory records, and document templates:
```bash
npm run seed
```

### Step 5: Start the Development Environment
Run both backend Express server and frontend React client concurrently:
```bash
npm run dev
```

- **Frontend Client**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`
- **API Health Check**: `http://localhost:5000/api/health`

---

## 📂 Project Structure Tree

```
nyayasetu/
├── .env.example                   # Environment variable template
├── .gitignore                     # Git ignore rules for MERN
├── package.json                   # Root orchestrator package.json
├── LICENSE                        # MIT License
├── README.md                      # Primary project documentation
├── CONTRIBUTING.md                # Contributor guidelines
├── docs/                          # Technical specifications
│   └── ARCHITECTURE.md            # In-depth system architecture & diagrams
│
├── server/                        # Backend Application (Node.js + Express)
│   ├── package.json               # Backend dependencies
│   ├── .env.example               # Backend environment variables
│   ├── src/
│   │   ├── config/                # Database & external API setup
│   │   │   ├── db.js              # Mongoose connection configuration
│   │   │   └── gemini.js          # Google Gemini AI client
│   │   ├── controllers/           # API request controllers
│   │   │   ├── authController.js
│   │   │   ├── rightsController.js
│   │   │   ├── schemesController.js
│   │   │   ├── documentsController.js
│   │   │   ├── grievanceController.js
│   │   │   ├── legalAidController.js
│   │   │   └── aiController.js
│   │   ├── models/                # Mongoose database models
│   │   │   ├── User.js
│   │   │   ├── Right.js
│   │   │   ├── Scheme.js
│   │   │   ├── DocumentTemplate.js
│   │   │   ├── DraftedDocument.js
│   │   │   ├── LegalAidClinic.js
│   │   │   └── ChatSession.js
│   │   ├── routes/                # Express REST routes
│   │   │   ├── authRoutes.js
│   │   │   ├── rightsRoutes.js
│   │   │   ├── schemesRoutes.js
│   │   │   ├── documentsRoutes.js
│   │   │   ├── grievanceRoutes.js
│   │   │   ├── legalAidRoutes.js
│   │   │   └── aiRoutes.js
│   │   ├── middlewares/           # Custom middlewares
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── rateLimiter.js
│   │   ├── data/                  # Seed datasets
│   │   │   ├── rightsData.js
│   │   │   ├── schemesData.js
│   │   │   ├── templatesData.js
│   │   │   └── legalAidData.js
│   │   ├── seed.js                # Database seeder execution script
│   │   └── utils/                 # Utilities & helpers
│   └── server.js                  # Express entry point
│
└── client/                        # Frontend Application (React + Vite)
    ├── package.json               # Client dependencies
    ├── vite.config.js             # Vite configuration
    ├── tailwind.config.js         # Tailwind styling setup
    ├── postcss.config.js          # PostCSS configuration
    ├── index.html                 # Single page root HTML
    └── src/
        ├── assets/                # Logos & icons
        ├── components/            # Reusable UI components
        │   ├── Navbar.jsx         # Navigation bar with responsive drawer
        │   ├── Footer.jsx         # Footer with civic links & statutory notice
        │   ├── ProtectedRoute.jsx # Role-based route guard
        │   ├── LegalDisclaimer.jsx# Standard disclaimer banner
        │   └── Modal.jsx          # Accessible dialog component
        ├── context/               # Global state contexts
        │   ├── AuthContext.jsx    # Authentication & token manager
        │   └── LanguageContext.jsx# UI language preferences
        ├── pages/                 # 7 Primary Module Pages
        │   ├── Home.jsx           # Landing page with hero & module grid
        │   ├── RightsExplorer.jsx # Filterable Indian statutory rights
        │   ├── AIAssistant.jsx    # Multilingual legal AI chatbot
        │   ├── SchemesNavigator.jsx# Welfare schemes & eligibility matcher
        │   ├── DocumentDrafter.jsx# Dynamic legal document builder
        │   ├── GrievanceGuide.jsx # CPGRAMS & portal filing assistant
        │   ├── LegalAidDirectory.jsx# DLSA / SLSA & pro bono directory
        │   ├── CourtHub.jsx       # eCourts & fee calculator hub
        │   ├── Login.jsx          # User login
        │   └── Register.jsx       # Citizen registration
        ├── services/              # Axios service endpoints
        │   └── api.js             # Configured Axios client
        ├── utils/                 # Formatting & constant helpers
        └── App.jsx                # Application root with router
```

---

## 📡 API Documentation Summary

The NyayaSetu API is accessible under `/api/v1` (with server root health check at `/api/health`):

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/health` | Service health status check | Public |
| `POST` | `/api/v1/auth/register` | Register citizen or legal provider account | Public |
| `POST` | `/api/v1/auth/login` | Authenticate and obtain JWT token | Public |
| `GET` | `/api/v1/auth/me` | Retrieve active authenticated profile | Protected |
| `GET` | `/api/v1/rights` | Query rights with category & search filters | Public |
| `GET` | `/api/v1/rights/:id` | Get comprehensive details of a single right | Public |
| `GET` | `/api/v1/schemes` | Fetch government welfare schemes | Public |
| `POST` | `/api/v1/schemes/check-eligibility` | Evaluate eligibility against demographic inputs | Public |
| `GET` | `/api/v1/documents/templates` | Retrieve available legal document templates | Public |
| `POST` | `/api/v1/documents/draft` | Generate and compile customized document | Protected |
| `GET` | `/api/v1/grievance/guides` | Retrieve procedural grievance filing guides | Public |
| `GET` | `/api/v1/legalaid/clinics` | Search DLSA/SLSA clinics by state/district | Public |
| `POST` | `/api/v1/ai/consult` | Hybrid AI legal query response with guardrails | Public / Auth |

---

## 🖼️ Screenshots

*Screenshots and UI demonstrations will be showcased below:*

| Home Dashboard | Citizen Rights Explorer |
|:---:|:---:|
| *(Screenshot Placeholder: Home Landing)* | *(Screenshot Placeholder: Rights Explorer)* |

| AI Legal Assistant | Legal Document Drafter |
|:---:|:---:|
| *(Screenshot Placeholder: Chatbot Interface)* | *(Screenshot Placeholder: Document Generator)* |

---

## ⚖️ Legal Disclaimer

> **Important**: NyayaSetu is an educational and civic empowerment tool designed for informational purposes only. It is **not** a substitute for certified legal counsel from an advocate enrolled under the Bar Council of India (Advocates Act, 1961). For contentious legal disputes, litigation, or criminal court representation, citizens should consult an enrolled advocate or visit their nearest District Legal Services Authority (DLSA) for free legal aid.

---

## 📜 License

This project is open-source and licensed under the terms of the [MIT License](file:///C:/Users/DELL/My-project/nyayasetu/LICENSE).

---

## 🙏 Acknowledgments

- **Dr. M. Vijayalakshmi**, Project Guide, for invaluable guidance and academic supervision throughout the development of this MCA project.
- **National Legal Services Authority (NALSA)**, **Ministry of Law and Justice**, and **Digital India** for publishing statutory data, public portals, and citizen welfare schemas.
- **Open Source Community** for tools including React, Vite, Express, Mongoose, and Tailwind CSS.
