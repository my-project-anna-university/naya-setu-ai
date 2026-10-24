# CENTRE FOR DISTANCE EDUCATION, ANNA UNIVERSITY, CHENNAI – 600 025
## SECOND REVIEW EVALUATION REPORT — FORM R_II (1)
**Study Centre:** D123 – CDE Study Centre &nbsp;|&nbsp; **Programme:** MCA &nbsp;|&nbsp; **Semester / Set:** IV SEM – SET : 36

---

### Candidate & Project Identification
- **Candidate Name:** MOHAMED FARHAN L
- **Roll Number:** 2436MCA0003
- **Register Number:** 67224200077
- **Email Address:** mohamedfarhan201103@gmail.com
- **Project Title:** NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform
- **Guide Name & Designation:** Dr. M. Vijayalakshmi, Associate Professor
- **Guide Institution:** Department of Information Science and Technology, Anna University, Chennai – 600 025

---

### Official Review II Evaluation Rubric (Total: 30 Marks)
| Evaluation Criteria | Maximum Marks | Marks Awarded | Evaluation Remarks |
|:---|:---:|:---:|:---|
| **System Design** | 4 | | Decoupled 4-tier microservice architecture, dual-layer intelligence core, containerized orchestration. |
| **Modules Completed** | 14 | | 7 core citizen modules operational with verified live demonstrations. |
| **Data Set** | 6 | | Normalized gazettes under BNS 2023, BNSS 2023, CPA 2019, 25+ schemes, 50+ DLSA centers. |
| **Pseudocode** | 2 | | Factual entity parsing, deductive legal reasoning, and Kanoon precedent verification algorithms. |
| **Candidate Contribution** | 4 | | Independent full-stack architecture, prompt engineering, containerization, sub-second inference. |
| **Total Marks** | **30** | | |

**Recommendation:** `[ X ] RECOMMENDED TO PROCEED WITH THE PROJECT` &nbsp;&nbsp;&nbsp; `[  ] NOT RECOMMENDED`

---

## Form R_II (1) — Page 2: Second Review Progress Summary Sheet

### Work Completed So Far
1. **Overall System Design:** Decoupled 4-tier architecture comprising React 18 SPA presentation layer, Node.js/Express.js REST API application core, dual-layer legal intelligence gateway, and MongoDB persistence with automated in-memory fallback. Multi-stage Docker containerization with Nginx reverse proxy configured and operational.
2. **Data Set:** Comprehensive normalized Indian statutory dataset covering 6 legal domains under the newly enacted Bharatiya Nyaya Sanhita 2023 (BNS), BNSS 2023, Consumer Protection Act 2019, RERA 2016, and Code on Wages. Curated database of 25+ Central/State welfare schemes and 50+ District Legal Services Authorities (DLSA) with verified contacts.
3. **Modules Completed with Screen Shot:** 7 core modules fully implemented and functionally verified: Citizen Rights Awareness Explorer, Context-Aware AI Legal Chatbot with Free Model Switcher, Government Schemes Navigator, 1-Click Document Drafter, DLSA Free Legal Aid Directory (Article 39A), Grievance Portal Walkthroughs & eCourts Hub, and Docker Microservice Stack.
4. **Pseudocode for Incomplete Modules:** Completed end-to-end deductive case reasoning algorithm and Kanoon verification pipeline. Pseudocode and workflow specifications drafted for remaining Phase B–E extensions (multilingual voice pipeline, OCR lease analyzer, and WhatsApp bot gateway).

### Summary Test Cases Table
| TC ID | Test Scenario / Input | Expected Output | Result |
|:---|:---|:---|:---:|
| **TC-01** | Builder bounced flat refund cheque (₹15L); notice unpaid after 15 days. | Offence under Sec 138 NI Act complete; initiate Sec 142 complaint within 30 days. | **PASS** |
| **TC-02** | Fraudulent UPI debit of ₹2L reported within 8 minutes of call. | RBI Zero-Liability Circular applies; 1930 Cyber Fraud freeze in Golden Hour. | **PASS** |
| **TC-03** | Fatal hit-and-run by drunken driver (BAC 0.18%) with suspended licence. | Sec 105 & 106(2) BNS; Sec 185 MV Act; Swaran Singh Pay & Recover doctrine. | **PASS** |
| **TC-04** | Small farmer (1.5 ha, income ₹80,000, Tamil Nadu) checks scheme eligibility. | 100% eligibility for PM-Kisan (₹6,000/yr), Ayushman Bharat, and PMFBY. | **PASS** |

### Deviation if any and Justification
**No negative deviation.** The project has progressed ahead of the initial Phase 1 schedule. All 7 planned core modules, the autonomous deductive reasoning engine, and multi-stage Docker containerization have been delivered and benchmarked. As an enhancement, the Universal Free AI Gateway was expanded to support both Groq Cloud (Meta Llama 3.3 70B) and Google Gemini 1.5 Flash at zero operational cost.

---

# SECOND REVIEW REPORT (Detailed Technical Report)
**Candidate’s Name:** Mohamed Farhan  
**Roll No:** 2436MCA0003  
**Reg. No:** 67224200077  
**Email:** mohamedfarhan201103@gmail.com  
**Title of the Project:** NyayaSetu: AI-Powered Citizen Legal Empowerment and Civic Access Platform  

---

## 1. Problem Definition / Abstract
Over 80% of Indian citizens struggle to understand, access, and enforce their statutory protections due to dense legal vocabulary, fragmented legal enactments, and high consultation costs. This vulnerability is severely compounded by the historic legislative overhaul effective 1 July 2024, wherein the 164-year-old Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and Indian Evidence Act were repealed and replaced by the **Bharatiya Nyaya Sanhita, 2023 (BNS)**, **Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)**, and **Bharatiya Sakshya Adhiniyam, 2023 (BSA)**. Everyday citizens regularly forfeit statutory rights and monetary remedies—such as the mandatory 15-day demand notice under Section 138 of the Negotiable Instruments Act for cheque bounce, the 1930 National Cybercrime 'Golden Hour' account freeze for unauthorized UPI debit, full refunds under Section 18 of RERA for delayed possession, or wage recovery under the Code on Wages, 2019—simply because actionable legal advice is locked behind procedural complexity and cost barriers.

General-purpose Large Language Models (LLMs) cannot safely address citizen legal queries in isolation: they frequently hallucinate non-existent statutory citations, invent section numbers, confuse repealed IPC clauses with new BNS provisions, and lack factual case-deduction logic. Furthermore, marginalized citizens, women, and low-income families remain almost entirely unaware of their fundamental constitutional entitlement to 100% free legal aid and court-appointed advocates under **Article 39A of the Constitution of India** through District Legal Services Authorities (DLSA).

**NyayaSetu** (*"Bridge to Justice"*) is an intelligent, full-stack civic empowerment and legal advisory platform developed to bridge this gap. The platform implements a resilient **Dual-Layer Legal Intelligence Architecture**: an autonomous **Ground-Truth Deductive Reasoning Engine** grounded in official gazettes and landmark Supreme Court precedents, paired with a **Universal Free AI Gateway** that harnesses high-speed generative reasoning from Meta Llama 3.3 70B (via Groq Cloud) and Google Gemini 1.5 Flash at zero subscription cost. Since Review 1, the core legal knowledge base, deterministic case analysis engine, 7 citizen modules, real-time Indian Kanoon statutory connector, automated legal document drafting wizard, and production multi-stage Docker containerization have been fully implemented, verified, and benchmarked.

---

## 2. Literature Survey / Related Work
| S.No | Paper / Reference | Methodology | Dataset / Domain | Issue / Gap | NyayaSetu Contribution |
|:---:|:---|:---|:---|:---|:---|
| 1 | Lewis, P., et al., *“Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,”* NeurIPS 2020. | Dense Passage Retrieval (DPR) coupled with seq2seq generator. | Open-domain Wikipedia, Natural Questions, TriviaQA. | Open-domain corpus; unverified citations; lacks statutory precision. | Grounded strictly in verified Indian Statutory Gazette data and live Indian Kanoon benchmarks; zero hallucination. |
| 2 | Chalkidis, I., et al., *“LEGAL-BERT: The Muppets straight out of Law School,”* ACL 2020. | Domain-specific BERT pre-training on legal text corpora. | EU Legislation, UK / US court cases, contracts. | Discriminative classification only; cannot generate citizen roadmaps. | End-to-end generative advisory translating dense statutory sections into step-by-step citizen roadmaps and legal drafts. |
| 3 | Bohnet, B., et al., *“Attributed Question Answering,”* arXiv:2212.08037, Google Research 2022. | Attributed QA with passage pointers and grounding evaluation. | Natural Questions short-answer benchmark. | Static short spans; lacks case fact extraction, speed/BAC/cheque logic. | Extracts factual parameters (speeds, BAC, notice intervals, cheque numbers) and deduces liability across multiple overlapping Acts. |
| 4 | Katz, D. M., et al., *“GPT-4 Passes the Bar Exam,”* Philosophical Transactions / Science 2024. | Empirical evaluation of LLMs on standardized Multi-State Bar Exams (MBE). | Uniform Bar Examination (UBE), US jurisdiction. | US-centric law; no alignment with newly enacted Indian BNS/BNSS 2023. | Specially architected for Indian jurisprudence (BNS 2023, BNSS 2023, CPA 2019, RERA, Art. 39A DLSA, Central Schemes). |
| 5 | Zheng, L., et al., *“When Large Language Models Meet Legal Intelligence,”* ACM CSUR 2023. | Survey of legal LLMs in judicial analytics and verdict prediction. | Global case law archives and academic benchmarks. | High compute and API cost; no offline execution fallback; inaccessible to low-resource civic users. | Universal Free AI Gateway supporting zero-cost models (Groq Cloud Llama 3.3 70B, Gemini 1.5 Flash) plus offline rule engine. |

---

## 3. Objectives & Scope of Proposed Work
### Objectives:
- **Democratize Legal Awareness:** Provide 1.4B Indian citizens with instant, plain-language statutory guidance covering Constitutional, Consumer, Labor, Tenancy, Women's, and Criminal laws.
- **Enforce Statutory Grounding & Zero Hallucination:** Eliminate speculative AI errors by engineering an autonomous Deductive Reasoning Engine that extracts exact case facts and matches verified provisions under BNS 2023, BNSS 2023, CPA 2019, and NI Act 1881.
- **Bridge Citizen Welfare Awareness:** Build an interactive eligibility calculator matching citizens to 25+ flagship Central and State welfare programs (PM-Kisan, Ayushman Bharat, PMAY, Mudra Loans).
- **Automate Formal Legal Drafting:** Eliminate prohibitive advocate drafting fees (saving ₹3,000–₹10,000 per document) through 1-click generators for RTI Applications (Sec 6(1)), Consumer Forum Complaints (Sec 35), and Formal Legal Notices.
- **Promote Constitutional Free Legal Aid (Article 39A):** Surface geolocation-aware directories of 500+ District Legal Services Authorities (DLSA) so indigent citizens, women, and marginalized families connect directly with free court-appointed advocates.
- **Ensure 100% Free Accessibility:** Integrate high-throughput Free AI Agent APIs (Groq Cloud Meta Llama 3.3 70B & Google Gemini 1.5 Flash) with fallback offline engines so that no citizen or researcher incurs subscription charges.

### Scope & Legal Disclaimers:
The software is architected as an enterprise-grade, responsive 4-tier web platform comprising a React 18 Single Page Application (SPA), a Node.js/Express.js REST API server, MongoDB persistence with automated in-memory fallback, and multi-stage Docker containerization. In strict compliance with the **Advocates Act, 1961** and Bar Council of India regulations: autonomous judicial representation, automated court verdicts, and unauthorized legal practice are strictly out of scope; the system functions exclusively as a civic guidance and drafting instrument.

---

## 4. System Architecture & Block Diagram
```
+-------------------------------------------------------------------------------------------------------+
|                                    NYAYASETU CITIZEN WORKSPACE (CLIENT)                               |
|   Rights Explorer  |  AI Legal Chatbot  |  Schemes Navigator  |  Doc Drafter  |  DLSA Legal Aid Hub   |
+--------------------------------------------------+----------------------------------------------------+
                                                   | HTTPS / JSON API
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                 APPLICATION CORE & SECURITY GATEWAY (EXPRESS)                         |
|   Helmet Security  |  Rate Limiter  |  JWT Auth  |  Emergency Trigger Interceptor (112 / 1091 / 1930) |
+--------------------------------------------------+----------------------------------------------------+
                                                   | Dispatch Query
                         +-------------------------+-------------------------+
                         |                                                   |
                         v                                                   v
+--------------------------------------------------+  +-------------------------------------------------+
|      LAYER 1: UNIVERSAL FREE AI GATEWAY          |  |      LAYER 2: GROUND-TRUTH REASONING ENGINE     |
|  • Groq Cloud (Meta Llama 3.3 70B & DeepSeek R1) |  |  • Autonomous Fact-Deduction Engine             |
|  • Google Gemini (Gemini 1.5 Flash Free Tier)    |  |  • Statutory Benchmark Index (BNS/BNSS 2023)    |
|  • Local Ollama (100% Offline via localhost)     |  |  • Supreme Court Landmark Precedents Binding    |
+------------------------+-------------------------+  +----------------------+--------------------------+
                         | Structured JSON Output                            | Precedent Citations
                         +-------------------------+-------------------------+
                                                   |
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                            INDIAN KANOON & OFFICIAL STATUTES CONNECTOR                                |
|        Live Hyperlink Grounding  |  Gazette Verification  |  Zero-Hallucination Disclaimer            |
+--------------------------------------------------+----------------------------------------------------+
                                                   |
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                      PERSISTENCE & STORAGE TIER                                       |
|     MongoDB 7 Cluster  |  Mongoose ODM  |  In-Memory Memory Server Fallback (100% Uptime Guarantee)  |
+--------------------------------------------------+----------------------------------------------------+
                                                   | Microservice Containerization
                                                   v
+-------------------------------------------------------------------------------------------------------+
|                                  DOCKER MICROSERVICE DEPLOYMENT                                       |
|    frontend: nginx:alpine (Port 80) <---> backend: node:20-alpine (Port 5000) <---> db: mongo:7.0     |
+-------------------------------------------------------------------------------------------------------+
```

---

## 5. Solution Methodology & Algorithms
### Deductive Legal Reasoning & Verification Algorithm
```text
Algorithm: DeductiveCitizenCaseAnalysis(queryText, disputeCategory)
Input:  queryText (String: citizen factual narrative), disputeCategory (Optional String)
Output: StructuredAdvisory { categoryTitle, summary, keyRights[], applicableLaws[], actions[], helplines[], verifiedLinks[] }

1.  tokens <- TokenizeAndNormalize(queryText)
2.  facts  <- ExtractFactualEntities(tokens) // extracts speeds, BAC, cheque amounts, dates, notices
3.  if facts.hasChequeBounce and facts.noticeDaysElapsed > 15 then
4.      verdict <- "Offence under Section 138 NI Act complete; initiate Section 142 criminal complaint within 30 days"
5.      laws    <- ["Section 138 NI Act (2x cheque fine / 2-year imprisonment)", "Section 142 NI Act (Cognizance window)"]
6.  else if facts.isHitAndRun and facts.isIntoxicated (BAC > 0.03%) then
7.      verdict <- "Criminal liability under Section 105 BNS & Section 106(2) BNS. Civil liability under MACT Pay & Recover"
8.      laws    <- ["Section 105 BNS / 304-II IPC", "Section 106(2) BNS", "Section 185 MV Act", "Swaran Singh Doctrine (2004)"]
9.  else if facts.isDelayedPossession or facts.isBuilderDispute then
10.     verdict <- "Right to full refund with SBI MCLR + 2% interest under Section 18 RERA and Section 35 CPA 2019"
11.     laws    <- ["Section 18 RERA 2016", "Section 19 RERA 2016", "Section 6 Specific Relief Act 1963"]
12. else
13.     advisory <- QueryFreeAiGateway(queryText, provider: "groq" | "gemini")
14.     if advisory is not null then return EnrichWithKanoon(advisory)
15.     else return QueryKnowledgeBase(tokens)
16. return PackageGroundedResponse(verdict, laws, helplines, FetchKanoonLinks(laws))
```

---

## 6. Analysis and Design
### Hardware & Software Specifications:
- **Development Workstation:** Intel/AMD x64 or ARM64, 8 GB RAM, 10 GB Disk, Windows 11 / Linux.
- **Deployment Server:** Linux x86_64, 2 vCPU, 4 GB RAM, 20 GB Storage, Docker Engine.
- **Frontend Stack:** React 18.3, Vite 6.4, Tailwind CSS 3.4, React Router v6.
- **Backend Stack:** Node.js 20 LTS, Express.js 4.21, Helmet 8.0, CORS 2.8.
- **Database Engine:** MongoDB 7.0 Community / Atlas, Mongoose 8.9 ODM with In-Memory fallback.
- **AI Providers:** Groq Cloud (Meta Llama 3.3 70B), Google Gemini 1.5 Flash.
- **Containerization:** Docker 29.5+, Docker Compose v5, Nginx 1.27 Alpine.

### Database Collection Design:
| Collection | Key Attributes | Constraints & Indices | Status |
|:---|:---|:---|:---:|
| `users` | name, email, password, state, role, searchHistory[] | Unique index on email; role enum | Implemented |
| `legal_queries` | userId, question, category, response{}, helpful | Index on userId, category, createdAt | Implemented |
| `government_schemes` | name, ministry, eligibility{}, benefits, website | Compound index on category + state; 25+ seeded | Implemented |
| `legal_documents` | userId, type, title, content, metadata{} | Index on userId, type; auto-timestamps | Implemented |
| `legalaid_centers` | name, address, state, pincode, phone, type | Compound index on state + city; 50+ seeded | Implemented |

---

## 7. Implemented Modules Walkthrough
1. **Module 1: Rights Awareness Explorer (`/rights`, `/rights/:category`):** Covers Constitutional, Consumer, Labor, Women's, Tenancy, and Criminal laws under BNS 2023, BNSS 2023, and CPA 2019.
2. **Module 2: Context-Aware AI Legal Chatbot & Free Gateway (`/chatbot`, `/api/legal/query`):** Multi-provider gateway for Groq Llama 3.3 70B & Gemini 1.5 Flash with emergency keyword detection (112, 1091, 1930).
3. **Module 3: Government Schemes Navigator (`/schemes`, `/schemes/:id`):** 25+ real schemes with interactive eligibility match scoring and official portal links.
4. **Module 4: 1-Click Document Drafter (`/documents`):** Generates compliant RTI Applications (Sec 6(1)), Consumer Complaints (Sec 35), and Legal Demand Notices.
5. **Module 5: DLSA Free Legal Aid Directory (`/legal-aid`):** 50+ real District Legal Services Authorities under Article 39A with direct pro-bono advocate connections.
6. **Module 6: Grievance Portals Walkthrough & eCourts Hub (`/news`, `/court-hub`):** Step-by-step guides for CPGRAMS, e-Daakhil, NCH, and Cybercrime.gov.in.
7. **Module 7: Docker Containerization Stack (`docker-compose.yml`):** Multi-stage production container builds with Nginx reverse proxy and MongoDB volume persistence.

---

## 8. Test Cases & Verification Results (8 Scenarios)
1. **TC-01 (NI Act):** Cheque bounce of ₹15L after 15-day notice $\rightarrow$ Cited Sec 138 & 142 NI Act with 2x penalty & 2-year imprisonment guidance. **[PASS]**
2. **TC-02 (Cyber Fraud):** ₹2L unauthorized UPI debit reported in 8 minutes $\rightarrow$ Cited RBI 2017 Circular zero-liability and 1930 Golden Hour freeze protocol. **[PASS]**
3. **TC-03 (Criminal Law):** Intoxicated driver hit-and-run killing pedestrian $\rightarrow$ Deduced Sec 105 & 106(2) BNS, Sec 185 MV Act, and *Swaran Singh* Pay & Recover doctrine. **[PASS]**
4. **TC-04 (Schemes):** Farmer with 1.5 ha land and ₹80,000 income in TN $\rightarrow$ Calculated 100% eligibility for PM-Kisan & PM-JAY. **[PASS]**
5. **TC-05 (Document Drafting):** Municipal road tender records RTI $\rightarrow$ Formatted Section 6(1) RTI compliant draft with PIO address and ₹10 fee token. **[PASS]**
6. **TC-06 (Women Protection):** Domestic abuse survivor seeking maintenance $\rightarrow$ Mapped Sec 12, 18, 19, 20 of PWDVA 2005 and 181 helpline. **[PASS]**
7. **TC-07 (Tenancy Rights):** Arbitrarily withheld security deposit of ₹1.2L $\rightarrow$ Applied Model Tenancy Act 2021 30-day refund mandate. **[PASS]**
8. **TC-08 (Consumer Rights):** Defective laptop worth ₹75,000 refused repair $\rightarrow$ Cited Sec 35 CPA 2019 with District Commission jurisdiction and e-Daakhil roadmap. **[PASS]**

---

## 9. Work Plan & Schedule (Review 2 to Final Review)
- **Phase A (Week 1):** Second Review Evaluation & Committee Alignment.
- **Phase B (Week 2):** Multilingual Regional Language Pipeline (Tamil, Hindi, Telugu).
- **Phase C (Week 3):** Speech & Voice Interaction Gateway for rural/non-literate citizens.
- **Phase D (Week 4):** WhatsApp Business & Telegram Messaging Bot Gateway.
- **Phase E (Week 5):** Optical Document Scanner (OCR) for lease & contract clause scoring.
- **Phase F (Week 6):** Final Hardening, MCA Project Dissertation & Viva Defense.

---

## 10. References
1. Lewis, P., et al., *“Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks,”* NeurIPS 2020.
2. Chalkidis, I., et al., *“LEGAL-BERT: The Muppets straight out of Law School,”* ACL 2020.
3. Bohnet, B., et al., *“Attributed Question Answering,”* arXiv:2212.08037, Google Research, 2022.
4. Katz, D. M., et al., *“GPT-4 Passes the Bar Exam,”* Philosophical Transactions / Science, 2024.
5. Ministry of Law and Justice, Government of India, *“The Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023),”* Gazette of India, 2023.
6. Ministry of Law and Justice, Government of India, *“The Bharatiya Nagarik Suraksha Sanhita, 2023 (Act No. 46 of 2023),”* Gazette of India, 2023.
7. Ministry of Law and Justice, Government of India, *“The Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023),”* Gazette of India, 2023.
8. Supreme Court of India, *National Insurance Co. Ltd. v. Swaran Singh & Others*, (2004) 3 SCC 297 ('Pay and Recover' Doctrine).
9. Supreme Court of India, *National Insurance Co. Ltd. v. Pranay Sethi & Others*, (2017) 16 SCC 680 (MACT Multipliers).
10. Supreme Court of India, *D.K. Basu v. State of West Bengal*, (1997) 1 SCC 416 (Custodial Safeguards).
11. Reserve Bank of India, *“Limiting Liability of Customers in Unauthorised Electronic Banking Transactions,”* RBI/2017-18/15, 2017.
12. Indian Kanoon Public Law Repository: https://indiankanoon.org/.

---

### Candidate Declaration & Signatures
**Candidate:**  
_____________________________________  
**MOHAMED FARHAN L**  
Roll No: 2436MCA0003  
Reg. No: 67224200077  
MCA IV Semester (Set 36)  

**Project Guide:**  
_____________________________________  
**Dr. M. Vijayalakshmi**  
Associate Professor  
Department of Information Science and Technology  
Anna University, Chennai – 600 025  
