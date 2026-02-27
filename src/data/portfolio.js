export const personal = {
  name: "Shorya Pratap Singh",
  title: "Product Manager",
  subTitle: "& Growth Strategist",
  tagline: "I ship products that move metrics.",
  bio: "Product-oriented analyst turned PM, with a track record of cutting drop-offs, accelerating adoption, and aligning cross-functional teams around outcomes that matter. I work at the intersection of data, user behaviour, and business strategy.",
  email: "singhshoryapratap3@gmail.com",
  phone: "+91-6398277004",
  linkedin: "https://www.linkedin.com/in/shorya09",
  location: "India · Open to Relocation",
}

export const metrics = [
  { value: "22%→7%", label: "Drop-off Reduction", context: "Procol" },
  { value: "27%", label: "Feature Adoption ↑", context: "Procol" },
  { value: "30%", label: "Escalations Cut", context: "Innovaccer" },
  { value: "65%", label: "Onboarding Step Adoption", context: "Innovaccer" },
  { value: "13%", label: "Implementation Time ↓", context: "Innovaccer" },
  { value: "6%", label: "Demo Conversion ↑", context: "Innovaccer" },
]

export const experience = [
  {
    company: "PROCOL",
    badge: "Current",
    role: "Growth & Strategy Analyst",
    period: "Jul 2025 – Present",
    location: "Gurugram, Haryana",
    type: "Full-time",
    color: "#C8FF00",
    impact: ["22%→7% drop-off", "27% adoption ↑", "22% faster cycle"],
    highlights: [
      { metric: "22%→7%", desc: "Cut workflow drop-offs by designing a post-workflow usability checkpoint with Product, Engineering & Analytics — measuring task completion, error rates, and abandonment." },
      { metric: "27% ↑", desc: "Increased feature adoption by creating a quarterly stakeholder prioritisation framework ranking requests by user impact and revenue potential." },
      { metric: "22% faster", desc: "Reduced roadmap cycle time by owning end-to-end backlog strategy with competitive analysis of 3–5 peers." },
      { metric: "Daily viz", desc: "Built operational trackers and dashboards in SQL, Excel, Power BI to monitor adoption and flag at-risk accounts." },
      { metric: "PRDs", desc: "Translated business goals into user stories; supported sprint planning, QA validation, and post-launch monitoring." },
    ],
  },
  {
    company: "INNOVACCER",
    badge: "Internship",
    role: "Business & Growth Analyst",
    period: "Jan 2025 – Jul 2025",
    location: "Noida, UP",
    type: "Internship",
    color: "#818cf8",
    impact: ["30% escalations ↓", "65% onboarding ↑", "6% conversion ↑"],
    highlights: [
      { metric: "30% ↓", desc: "Cut onboarding escalations, lowered early churn 11%, shortened implementation time 13% by leading cross-functional initiative to remove a redundant third-party integration." },
      { metric: "65% ↑", desc: "Redesigned onboarding playbook with step-by-step integration workflows, ownership mapping, SLA timelines, and client communication templates." },
      { metric: "6% ↑", desc: "Developed persona-focused demo scripts and messaging frameworks through data-driven buyer-persona research and pilot demos." },
      { metric: "E2E", desc: "Led end-to-end project: scoped with stakeholders, prioritised fixes, coordinated engineering & CS, owned validation and rollout." },
    ],
  },
  {
    company: "ERNST & YOUNG",
    badge: "Internship",
    role: "Summer Intern",
    period: "Jul 2024 – Oct 2024",
    location: "Gurugram, Haryana",
    type: "Internship",
    color: "#34d399",
    impact: ["7% drop-off ↓", "5% adoption ↑", "2 A/B tests"],
    highlights: [
      { metric: "7% ↓", desc: "Mapped entire onboarding journey using flowcharts and CX team shadowing; proposed KYC step rearrangements that reduced drop-offs." },
      { metric: "A/B tests", desc: "Set up funnel tracking in Google Analytics, ran 2 key A/B tests on onboarding emails improving feature adoption by 5% and trial-to-paid conversions by 3%." },
    ],
  },
]

export const pmStack = [
  {
    category: "Discovery & Research",
    icon: "◎",
    color: "#C8FF00",
    items: ["User Interviews", "Funnel Analysis", "Competitive Research", "Persona Development", "Root Cause Analysis"],
  },
  {
    category: "Strategy & Planning",
    icon: "◈",
    color: "#818cf8",
    items: ["PRD Writing", "Roadmapping", "OKR Setting", "Prioritisation Frameworks", "GTM Playbooks"],
  },
  {
    category: "Execution & Delivery",
    icon: "◆",
    color: "#34d399",
    items: ["Agile / Scrum", "Sprint Planning", "Stakeholder Mgmt", "QA Validation", "Release Management"],
  },
  {
    category: "Analytics & Growth",
    icon: "◉",
    color: "#fb923c",
    items: ["SQL", "Power BI", "A/B Testing", "KPI Dashboards", "Cohort Analysis"],
  },
]

export const tools = [
  { name: "JIRA", cat: "PM" }, { name: "Notion", cat: "PM" }, { name: "Figma", cat: "Design" },
  { name: "SQL", cat: "Analytics" }, { name: "Power BI", cat: "Analytics" }, { name: "Excel", cat: "Analytics" },
  { name: "Metabase", cat: "Analytics" }, { name: "MySQL", cat: "Analytics" }, { name: "HubSpot", cat: "GTM" },
  { name: "Salesforce", cat: "GTM" }, { name: "Trello", cat: "PM" }, { name: "N8N", cat: "Automation" },
  { name: "Python", cat: "Analytics" }, { name: "MS Project", cat: "PM" }, { name: "SAGE", cat: "Analytics" },
]

export const caseStudies = [
  {
    id: "01",
    tag: "Product Case Study",
    title: "AI Enhanced Browser",
    problem: "Structural scalability gaps causing drop-offs in a high-frequency AI browsing product.",
    approach: ["Identified structural scalability gaps in high-frequency usage patterns", "Defined success metrics, risks, and ecosystem impact framework", "Designed folder-based + private mode system using prioritisation framework"],
    framework: "Jobs-to-be-Done + MoSCoW Prioritisation",
    link: "#",
  },
  {
    id: "02",
    tag: "Feature Strategy",
    title: "Google Keep — Notetaker",
    problem: "Scalability and feature gaps in a note-taking product with high daily active usage.",
    approach: ["Identified structural scalability gaps in high-frequency usage patterns", "Defined success metrics, risks, and ecosystem impact framework", "Designed folder-based + private mode system using prioritisation framework"],
    framework: "RICE Scoring + Opportunity Solution Tree",
    link: "#",
  },
]

export const caseFramework = [
  "Key Approach & Actions",
  "Results & Measurable Impact",
  "Lessons Learned",
  "Artefact & Deliverables",
]

export const education = [
  { degree: "B.E. — Electronics & Communication", institute: "Jaypee Institute of Information Technology", year: "2021–2025", icon: "🎓" },
  { degree: "SQL Bootcamp: Zero to Hero", institute: "Udemy Certification", year: "Jun 2023", icon: "📜" },
  { degree: "12th CBSE", institute: "Dewan Public School", year: "2021", score: "94%", icon: "📘" },
  { degree: "10th CBSE", institute: "St. Thomas English Medium School", year: "2019", score: "89.6%", icon: "📗" },
]

export const achievements = [
  { title: "Marketing Head — JYC Noida-62", desc: "Led team of 5, secured ₹1.5L in sponsorships via cold outreach and value-based partner pitches." },
  { title: "PR Head — Robotics Hub (UCR)", desc: "Managed PR for annual event at JIIT Noida; drove targeted outreach and branding." },
  { title: "ROBO Wars — IIT Kanpur Techfest", desc: "Participated in Techkriti ROBO Wars (15kg category) — demonstrated problem-solving under constraints." },
]
