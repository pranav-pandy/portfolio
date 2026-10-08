# Portfolio Website — Project Brief

You are building a personal portfolio website for **Pranav Pandy Mohanapandian**, an early-career software engineer. Use ONLY the facts in this file. Do not invent experience, metrics, technologies, or claims.

## Goal
A clean, fast, professional one-page portfolio (with optional project detail pages) that recruiters can scan in under a minute. Audience: recruiters and hiring managers for Software Engineer and AI/ML Engineer roles in the US.

## Tech stack for the site
- Next.js (App Router) + TypeScript + Tailwind CSS, static export
- Deploy target: Vercel (or GitHub Pages via `next export`)
- No backend, no database, no analytics trackers unless asked
- Fully responsive, light/dark mode, accessible (semantic HTML, alt text, keyboard navigation)
- Keep all content in one data file (e.g. `src/data/profile.ts`) so it is easy to edit

## Sections
1. Hero: name, one-line positioning, buttons for Resume (SDE only; opens the PDF in a new tab for viewing), GitHub, LinkedIn, Email. Optional profile photo (none yet).
2. About: short paragraph (see "Positioning")
3. Experience: TCS, then Santech America (volunteer)
4. Projects: cards with title, one-line summary, tech tags, GitHub link
5. Skills: grouped
6. Education
7. Contact

## Contact & links
- Email: mohanapa@usc.edu
- Phone: kept private, not stored in this repo (DO NOT show phone on the public site — confirmed. The published resume PDF must also be a version without the phone number.)
- GitHub: https://github.com/pranav-pandy
- LinkedIn: https://www.linkedin.com/in/pranav-pandy-software-dev
- Location: Los Angeles, CA
- Resume PDF: `/public/Pranav_Mohanapandian_Resume_SDE.pdf` only (I am targeting software roles; do not publish the AI/ML resume)

## Positioning
Early-career software engineer with an M.S. in Computer Science from USC, professional financial-software experience at TCS, and end-to-end full-stack/backend project experience, complemented by cloud, mobile, and AI/ML work.

Do NOT describe me as an "AI expert", "senior engineer", "distributed-systems architect", or "production ML engineer".

## Experience

### Tata Consultancy Services (TCS) — Software Development Engineer
Chennai, India | January 2024 – August 2024 | Full-time (NOT an internship)
- Developed and maintained banking transaction modules in COBOL for a core banking application, supporting business-critical financial operations and database-driven workflows
- Enhanced customer-facing and internal banking screens using Java, JavaScript, HTML, and CSS
- Resolved production defects and implemented business-rule enhancements, reducing system errors by 23% and improving transaction throughput by 15%
- Root-cause analysis, regression testing, and incident resolution

### Santech America — Software Development Volunteer
Katy, TX | Show no dates
Industrial technology company. Products: AiQMate (field operations), SanEdge (IoT edge computing), SanHawk (predictive maintenance).
- Built full-stack features for AiQMate using React Native (TypeScript), NestJS, Prisma, and PostgreSQL
- Rewrote the task workflow with supervisor approve/reject/redo reviews and role-based task screens; built a Breakdown Analysis module, signature capture, and evidence uploads
- Created a reusable mobile UI component kit for iOS and Android, and added autosave and validation to forms
- Wrote the specification for LLM-assisted procedure authoring using the Claude API to generate draft industrial procedures from equipment manuals and media
- Created a demo-plant data generator used for customer demonstrations of the platform
- Documented the SanEdge asset health-scoring algorithm (rolling z-scores, EMA smoothing, Mahalanobis-distance checks)

Rules for Santech content:
- I did NOT build SanHawk. Mention it only as part of the company's product suite.
- I wrote documentation for SanEdge, not its application code.
- Do NOT show screenshots, code, internal names, or customer details from Santech products.
- Do NOT quote PR or commit counts.

## Projects (in this order)

### 1. Stock Trading Web & iOS App — flagship
Node.js, PostgreSQL, REST APIs, Swift/SwiftUI (MVVM), Docker, AWS ECS
- Shared REST backend serving a web client and a native iOS app: stock search, watchlists, simulated portfolio trading
- Portfolio consistency under concurrent buy/sell requests using transactional database updates
- Integrates external financial-data APIs for near real-time quotes, company profiles, and news
- Rules: say "near real-time", never "real-time". Trading is SIMULATED, not real money. Architecture is a modular monolith, NOT microservices. Docker gives reproducible deployments, not scalability.

### 2. RoomSync — Roommate Matching & Housing Platform
Python, Scikit-learn, REST APIs, JWT, GeoJSON
- Attribute-based recommender ranking roommate compatibility by vector similarity across 10+ lifestyle attributes, built to work for new users without historical training data
- JWT authentication and GeoJSON map-based listing search
- Rule: it is NOT a trained ML model. Never say "AI finds your perfect roommate".

### 3. Semantic Movie Recommender
TensorFlow, Universal Sentence Encoder, PostgreSQL, pgvector
- Semantic embeddings for 35,000+ movie descriptions; approximate nearest-neighbor search in PostgreSQL/pgvector with sub-second retrieval

### 4. Serverless YouTube Video Summarizer
AWS Lambda, Gemini API, Flask, Python
- Serverless pipeline that fetches transcripts of 10–60+ minute videos and summarizes them with Gemini through a REST endpoint

### 5. AI-Powered Stock Analyzer
Python, LangChain, Gemini API, Streamlit
- Conversational assistant combining market data, fundamentals, and news from multiple sources

### 6. Tuberculosis Detection from Chest X-Rays
Deep learning (CNN), Django
- CNN classifying tuberculosis from chest X-rays, about 90% accuracy, deployed in a Django web app

### 7. Search Engine & Information Retrieval Toolkit (coursework)
Python, BeautifulSoup, MRJob
- 7-thread web crawler, unigram/bigram inverted indexes with MapReduce, search-engine result comparison with Spearman correlation

### 8. Broken Run (team game project, coursework)
Unity, C#, WebGL
- Unity game built by a student team for USC's CSCI 526 course; WebGL build playable in the browser
- Developed through alpha, beta, and gold milestones
- Repo: https://github.com/CSCI-526/main-broken-souls
- Playable: https://csci-526.github.io/main-broken-souls/Gold-Milestone/
- Rule: it is a TEAM project. Do not claim the whole game; describe my own role only once I state it. Do not quote commit counts.

GitHub repo links for each project: not yet provided. Show no GitHub button on a card until I verify and add its link. Never use placeholder URLs.

## Skills
- Languages: Python, Java, JavaScript, TypeScript, SQL, Swift, C/C++, COBOL, HTML/CSS
- Frameworks: React Native (Expo), React, Node.js, Express.js, NestJS, Flask, SwiftUI
- Databases: PostgreSQL, MySQL, MongoDB, Prisma ORM, pgvector
- Cloud & Tools: AWS (ECS, Lambda), Azure DevOps, Docker, Git, GitHub, Linux, Jira
- AI/ML: TensorFlow, Scikit-learn, NumPy, Pandas, LangChain, Gemini API, Claude API, vector embeddings, semantic search, recommender systems
- Do NOT add Kubernetes, Angular, Spring Boot, PyTorch, Hugging Face, GraphQL, or microservices.

## Education
- University of Southern California, Los Angeles — M.S. Computer Science, GPA 3.8/4.0, August 2024 – May 2026 (graduated)
  - Courses: Analysis of Algorithms, Web Technologies, Machine Learning, Applied NLP, Information Retrieval
- Panimalar Engineering College, Chennai — B.E. Computer Science and Engineering, GPA 4.0/4.0, August 2019 – April 2023
  - Courses: Deep Learning, Probability and Statistics, Database Systems, Distributed Systems, Cloud Computing

## Writing style
- Plain, specific, confident. No hype words ("passionate", "cutting-edge", "rockstar", "thrilled").
- Short sentences. Recruiters skim.
- Every claim must be something I can explain in an interview.

## Decisions (answered)
- Project GitHub links: to be added later after I verify them
- Phone: not shown
- Profile photo: /public/profile.jpg (resized from Picture/IMG_6342.PNG)
- Colors: USC-inspired (cardinal #990000, gold #FFCC00 as accent only), tuned for dark-mode contrast. Fallback: neutral + teal
