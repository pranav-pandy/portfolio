// ─────────────────────────────────────────────────────────────
// All site content lives in this file. Edit text here; you should
// not need to touch any component to change what the site says.
// Keep every claim consistent with CLAUDE.md.
// ─────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  type?: string; // e.g. "Volunteer"
  location: string;
  dates?: string; // omit to hide dates
  logo?: string; // square image in /public, e.g. "/logos/tcs.jpg"
  description?: string;
  tech: string[];
  bullets: string[];
};

export type Project = {
  title: string;
  summary: string; // one line, shown under the title
  details: string[];
  tags: string[];
  githubUrl?: string; // leave out until the repo link is verified
  liveUrl?: string; // playable / live demo link
  flagship?: boolean; // shown as a full-width card
  label?: string; // small badge, e.g. "Coursework"
};

export type SkillGroup = { name: string; items: string[] };

export type Education = {
  school: string;
  degree: string;
  location: string;
  dates: string;
  gpa?: string;
  note?: string;
  courses?: string[];
  logo?: string; // image in /public, e.g. "/logos/usc.jpg"
};

export const profile = {
  name: "Pranav Pandy Mohanapandian",
  title: "Software Engineer",
  location: "Los Angeles, CA",
  tagline:
    "Early-career software engineer with an M.S. in Computer Science from USC, financial-software experience at TCS, and full-stack projects built end to end.",

  // Put the image in /public (e.g. /public/profile.jpg) and set "/profile.jpg".
  // Leave as null to hide the photo.
  photo: "/profile.jpg" as string | null,

  email: "mohanapa@usc.edu",
  github: "https://github.com/pranav-pandy",
  linkedin: "https://www.linkedin.com/in/pranav-pandy-software-dev",

  // To swap the resume: replace the PDF in /public with the same filename.
  // If the filename changes, update this path.
  resume: "/Pranav_Mohanapandian_Resume_SDE.pdf",

  about: [
    "I'm a software engineer in Los Angeles with an M.S. in Computer Science from USC (May 2026).",
    "At Tata Consultancy Services, I worked full-time on a core banking application: COBOL transaction modules, Java and JavaScript screens, and production defect fixes. As a volunteer developer at Santech America, I built mobile and backend features for an industrial field-operations app using React Native, NestJS, and PostgreSQL.",
    "My projects cover full-stack and backend work end to end, from REST APIs and PostgreSQL to web and native iOS clients, along with cloud, mobile, and AI/ML work. I'm looking for Software Engineer roles.",
  ],

  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      logo: "/logos/tcs.jpg",
      role: "Software Development Engineer",
      type: "Full-time",
      location: "Chennai, India",
      dates: "January 2024 – August 2024",
      tech: ["COBOL", "Java", "JavaScript", "HTML", "CSS"],
      bullets: [
        "Developed and maintained banking transaction modules in COBOL for a core banking application, supporting business-critical financial operations and database-driven workflows.",
        "Enhanced customer-facing and internal banking screens using Java, JavaScript, HTML, and CSS.",
        "Resolved production defects and implemented business-rule enhancements, reducing system errors by 23% and improving transaction throughput by 15%.",
        "Performed root-cause analysis, regression testing, and incident resolution.",
      ],
    },
    {
      company: "Santech America",
      logo: "/logos/santech.jpg",
      role: "Software Development Volunteer",
      location: "Katy, TX",
      description:
        "Industrial technology company. Products include AiQMate (field operations), SanEdge (IoT edge computing), and SanHawk (predictive maintenance).",
      tech: [
        "React Native",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Azure DevOps",
        "Claude API",
      ],
      bullets: [
        "Built full-stack features for AiQMate using React Native (TypeScript), NestJS, Prisma, and PostgreSQL.",
        "Rewrote the task workflow with supervisor approve/reject/redo reviews and role-based task screens.",
        "Built a Breakdown Analysis module, signature capture, and evidence uploads.",
        "Created a reusable mobile UI component kit for iOS and Android, and added autosave and validation to forms.",
        "Wrote the specification for LLM-assisted procedure authoring, using the Claude API to generate draft industrial procedures from equipment manuals and media.",
        "Created a demo-plant data generator used for customer demonstrations of the platform.",
        "Documented the SanEdge asset health-scoring algorithm (rolling z-scores, EMA smoothing, Mahalanobis-distance checks).",
      ],
    },
  ] satisfies Experience[],

  // Order here is the order on the page.
  projects: [
    {
      title: "Stock Trading Web & iOS App",
      flagship: true,
      summary:
        "Full-stack stock trading app with one REST backend shared by a web client and a native iOS app.",
      details: [
        "Stock search, watchlists, and simulated portfolio trading (no real money).",
        "Keeps holdings and cash consistent under concurrent buy/sell requests using transactional database updates.",
        "Integrates external financial-data APIs for near real-time quotes, company profiles, and news.",
        "Built as a modular monolith; containerized with Docker and deployed on AWS ECS for reproducible deployments.",
      ],
      tags: [
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "Swift/SwiftUI (MVVM)",
        "Docker",
        "AWS ECS",
      ],
    },
    {
      title: "RoomSync",
      summary: "Roommate matching and housing search platform.",
      details: [
        "Attribute-based recommender that ranks roommate compatibility by vector similarity across 10+ lifestyle attributes.",
        "Works for new users without historical training data.",
        "REST APIs with JWT authentication, and GeoJSON map-based listing search.",
      ],
      tags: ["Python", "Scikit-learn", "REST APIs", "JWT", "GeoJSON"],
    },
    {
      title: "Semantic Movie Recommender",
      summary:
        "Content-based movie recommendations using semantic search over movie descriptions.",
      details: [
        "Generated semantic embeddings for 35,000+ movie descriptions with the Universal Sentence Encoder.",
        "Approximate nearest-neighbor search with pgvector, keeping embeddings, metadata, and SQL filters in one PostgreSQL database.",
        "Sub-second retrieval.",
      ],
      tags: ["TensorFlow", "Universal Sentence Encoder", "PostgreSQL", "pgvector"],
    },
    {
      title: "Serverless YouTube Video Summarizer",
      summary: "Serverless REST endpoint that summarizes long YouTube videos.",
      details: [
        "Runs on AWS Lambda with no dedicated server, executing on demand.",
        "Fetches transcripts of 10–60+ minute videos with the YouTube Transcript API and summarizes them with Gemini.",
      ],
      tags: ["AWS Lambda", "Gemini API", "Flask", "Python"],
    },
    {
      title: "AI-Powered Stock Analyzer",
      summary: "Conversational assistant for stock analysis.",
      details: [
        "Built with LangChain and Gemini.",
        "Combines market data, company fundamentals, and news from multiple financial sources in one conversational workflow.",
      ],
      tags: ["Python", "LangChain", "Gemini API", "Streamlit"],
    },
    {
      title: "Tuberculosis Detection from Chest X-Rays",
      summary: "CNN that classifies tuberculosis from chest X-ray images.",
      details: [
        "Trained a CNN classifier with about 90% accuracy.",
        "Deployed in a Django web app.",
      ],
      tags: ["Deep Learning (CNN)", "Django"],
    },
    {
      title: "Search Engine & Information Retrieval Toolkit",
      label: "Coursework",
      summary: "Tools for crawling, indexing, and comparing search engine results.",
      details: [
        "7-thread web crawler.",
        "Unigram and bigram inverted indexes with text normalization, built with MapReduce (MRJob).",
        "Compared search engine results using Spearman correlation.",
      ],
      tags: ["Python", "BeautifulSoup", "MRJob"],
    },
    {
      title: "Broken Run",
      label: "Team project · Coursework",
      summary: "Unity game built by a student team for USC's CSCI 526 course, playable in the browser.",
      details: [
        "Built in Unity with C#, with a WebGL build that runs in the browser.",
        "Developed through alpha, beta, and gold milestones.",
      ],
      tags: ["Unity", "C#", "WebGL"],
      githubUrl: "https://github.com/CSCI-526/main-broken-souls",
      liveUrl: "https://csci-526.github.io/main-broken-souls/Gold-Milestone/",
    },
  ] satisfies Project[],

  skills: [
    {
      name: "Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Swift", "C/C++", "COBOL", "HTML/CSS"],
    },
    {
      name: "Frameworks",
      items: ["React Native (Expo)", "React", "Node.js", "Express.js", "NestJS", "Flask", "SwiftUI"],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "pgvector"],
    },
    {
      name: "Cloud & Tools",
      items: ["AWS (ECS, Lambda)", "Azure DevOps", "Docker", "Git", "GitHub", "Linux", "Jira"],
    },
    {
      name: "AI/ML",
      items: [
        "TensorFlow",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "LangChain",
        "Gemini API",
        "Claude API",
        "Vector embeddings",
        "Semantic search",
        "Recommender systems",
      ],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      school: "University of Southern California",
      logo: "/logos/usc.jpg",
      degree: "M.S. Computer Science",
      location: "Los Angeles, CA",
      dates: "August 2024 – May 2026",
      gpa: "3.8/4.0",
      note: "Graduated",
      courses: [
        "Analysis of Algorithms",
        "Web Technologies",
        "Machine Learning",
        "Applied NLP",
        "Information Retrieval",
      ],
    },
    {
      school: "Panimalar Engineering College",
      logo: "/logos/panimalar.jpg",
      degree: "B.E. Computer Science and Engineering",
      location: "Chennai, India",
      dates: "August 2019 – April 2023",
      gpa: "4.0/4.0",
      courses: [
        "Deep Learning",
        "Probability and Statistics",
        "Database Systems",
        "Distributed Systems",
        "Cloud Computing",
      ],
    },
  ] satisfies Education[],
};
