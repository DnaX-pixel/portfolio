export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
  images?: string[]; // Array of image paths for the slider
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  year: string;
  github?: string;
  demo?: string;
  links?: ProjectLink[];
  image?: string;
}

export interface Skill {
  name: string;
  category: "networking" | "systems" | "web" | "iot";
  icon?: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  icon?: string;
  pdf?: string; // Path to certification PDF file
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  achievements?: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    company: "Reisa Makmur Enterprise",
    position: "Network Technician",
    period: "Jan 2022 - Jun 2022",
    location: "Sabah & Sarawak",
    description: [
      "Conducted site surveys across Sabah to assess readiness for carrier-grade network deployments (power, cooling, racks, fiber).",
      "Supported network deployment projects for Telekom Malaysia (TM) in Sabah & Sarawak, including rack installation and structured cabling.",
      "Installed, configured, and commissioned POC3 carrier-grade network equipment in live environments.",
      "Performed network testing and traffic validation to ensure performance and service reliability.",
    ],
    technologies: ["POC3 Equipment", "Fiber Optic", "Network Testing", "Site Surveys"],
    images: [
      "/images/experience/reisa-makmur/image1.jpg",
      "/images/experience/reisa-makmur/image2.jpg",
      "/images/experience/reisa-makmur/image3.jpg",
      "/images/experience/reisa-makmur/image4.jpg",
      "/images/experience/reisa-makmur/image5.jpg",
    ],
  },
  {
    company: "Telekom Malaysia Berhad (TM)",
    position: "Network Technician",
    period: "Jun 2021 - Dec 2021",
    location: "Sabah",
    description: [
      "Monitored network performance and availability, identifying issues and supporting migration activities.",
      "Assisted in upgrading and optimizing network infrastructure to support increased demand and new technologies.",
      "Supported network enhancement projects in rural areas to improve connectivity and service reliability.",
      "Performed basic network troubleshooting, maintenance, and configuration to ensure continuous service.",
    ],
    technologies: ["Network Monitoring", "PRTG", "Network Optimization", "Troubleshooting"],
    images: [
      "/images/experience/telekom-malaysia/image1.jpg",
      "/images/experience/telekom-malaysia/image2.jpg",
      "/images/experience/telekom-malaysia/image3.jpg",
      "/images/experience/telekom-malaysia/image4.jpg",
      "/images/experience/telekom-malaysia/image5.jpg",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FreelanceForGood",
    description: "Web Platform Connecting Freelancers with Charity Organizations",
    longDescription: "Built a web platform connecting freelancers with NGOs for project-based social impact work. Implemented role-based user management for freelancers and NGOs. Designed and managed a relational database for users, projects, applications, and milestones. Optimized usability, data consistency, and scalability for real-world deployment.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Docker", "Github", "VPS", "WinSCP"],
    features: [
      "Role-based user management (Freelancers & NGOs)",
      "Project posting and application system",
      "Milestone tracking and management",
      "Relational database design",
      "Scalable architecture",
    ],
    year: "2025-2026",
    demo: "http://72.62.76.82/",
  },
  {
    title: "IoT Smart Charity Rack",
    description: "IoT-based smart donation rack for real-time item tracking and monitoring",
    longDescription: "Developed an IoT-based smart donation rack for real-time item tracking and monitoring. Integrated ESP32 with RFID, load cell (HX711), LCD, buzzer, LED, and solenoid lock. Implemented weight-based item detection with Wi-Fi updates to a web dashboard.",
    techStack: ["ESP32", "Arduino IDE", "RFID", "HX711 Load Cell", "Wi-Fi", "HTML Dashboard", "Firebase"],
    features: [
      "Real-time item tracking via RFID",
      "Weight-based item detection",
      "Wi-Fi connectivity for dashboard updates",
      "Firebase integration for data storage",
      "Automated locking mechanism",
    ],
    year: "2025",
    demo: "https://youtu.be/3NNwsGXmkSQ?si=EsMWfhYQN3GlGu2K",
  },
  {
    title: "PRTG Network Monitoring for SME",
    description: "Network Monitoring Solution in a Virtualized SME Environment",
    longDescription: "Designed and evaluated a PRTG-based network monitoring solution in a virtualized environment using VirtualBox and GNS3. The system simulates a small office network to enable real-time monitoring of core services, traffic behavior, and network performance for SMEs.",
    techStack: [
      "PRTG Network Monitor",
      "GNS3",
      "VirtualBox",
      "Windows Server 2019",
      "SNMP / MIB",
      "DHCP",
      "DNS",
      "ICMP",
      "UDP",
    ],
    features: [
      "Virtual SME network simulation using VirtualBox & GNS3",
      "Real-time monitoring of DHCP, DNS, ICMP, and UDP services",
      "Service availability and downtime detection",
      "Network traffic analysis using packet sniffer",
      "SNMP and MIB-based monitoring integration",
      "Centralized monitoring dashboard with PRTG",
    ],
    year: "2025",
    demo: "/documents/Final Report _ Design and Evaluation of a Network Monitoring Solution for a Small to Medium Enterprise (SME) Using PRTG. (1).pdf",
  },
  {
    title: "GEMS Service Request (GSR) Form System",
    description: "Internal Web System to Automate GSR Form Generation & Approval for TM",
    longDescription: "A web-based internal system built for TM (Telekom Malaysia) to fully automate the creation and approval of GEMS Service Request (GSR) forms. The system eliminates repetitive manual form preparation by allowing requesters to fill in only the changing fields, while keeping the official fixed form layout intact. The completed GSR is auto-generated as a filled .docx Word document and exported as PDF – matching the exact TM template format. The system also handles the full internal approval chain from submission through PIC review and final GM decision.",
    techStack: ["Laravel 13", "PHP 8.2", "MySQL", "Docker", "Blade", "Tailwind CSS", "PhpWord", "DomPDF"],
    features: [
      "Fully automated GSR form generation matching official TM template",
      "Dynamic input fields – only changing values are captured",
      "Auto-export to .docx (PhpWord) and PDF (DomPDF) with exact TM formatting",
      "Complete approval workflow: Requester → PIC → GM",
      "Structured relational database to store requests, fields, and approval status",
      "Containerized deployment with Docker for consistent environments",
    ],
    year: "2026",
    demo: "http://72.61.149.40:8084/login",
  },
  {
    title: "Dashboard Monitor & Alert App",
    description: "Automated Web Monitoring · OCR Change Detection · Smart Multi-Channel Alerts",
    longDescription: "A fully automated daily reporting pipeline built for TM Network Division compliance monitoring. The system runs every morning via Windows Task Scheduler, downloads the latest project Excel file from a configured source, evaluates it against two deterministic ND compliance rules, and delivers results through three channels: SMTP email, WhatsApp via a local Baileys Node.js bridge, and Telegram. A separate Power BI OCR mode captures a live screenshot of the ND dashboard using Playwright, crops three compliance panels (Meet RFS, QC, GR), uses Tesseract OCR to extract NC counts from the image, and blasts each panel as a WhatsApp image with a compliance summary caption directly to the team group. A Telegram bot also allows team members to query the raw data with natural language questions using a lightweight scikit-learn intent router.",
    techStack: ["Python", "pandas", "Ollama", "Playwright", "Node.js", "pytesseract", "Pillow", "scikit-learn", "openpyxl", "Baileys"],
    features: [
      "Scheduled daily execution via Windows Task Scheduler",
      "Automated Excel ingestion and deterministic ND compliance rule evaluation",
      "Multi-channel delivery: SMTP email, WhatsApp (Baileys), and Telegram",
      "Live Power BI dashboard capture using Playwright",
      "OCR-based NC count extraction with Tesseract + Pillow image cropping",
      "Auto-generated WhatsApp image blasts with compliance summaries",
      "Natural language data queries via Telegram bot with scikit-learn intent router",
      "Local AI narrative generation with Ollama – no paid cloud APIs",
    ],
    year: "2025",
    demo: "http://72.61.149.40/login",
  },
];

export const skills: Skill[] = [
  // Networking & Infrastructure
  { name: "VLAN Configuration", category: "networking" },
  { name: "Network Segmentation", category: "networking" },
  { name: "Firewall Configuration", category: "networking" },
  { name: "Access Control", category: "networking" },
  { name: "Fiber Optic Patching", category: "networking" },
  { name: "Single-Mode Fiber", category: "networking" },
  { name: "Network Troubleshooting", category: "networking" },
  { name: "Link Testing", category: "networking" },
  { name: "Site Survey", category: "networking" },
  { name: "Server Rack Installation", category: "networking" },
  { name: "Cable Management", category: "networking" },
  
  // Systems & Tools
  { name: "Huawei Network Equipment", category: "systems" },
  { name: "ODU/IDU", category: "systems" },
  { name: "POC3", category: "systems" },
  { name: "PRTG Network Monitoring", category: "systems" },
  { name: "Linux", category: "systems" },
  { name: "Windows", category: "systems" },
  
  // Web Development
  { name: "PHP", category: "web" },
  { name: "MySQL", category: "web" },
  { name: "HTML", category: "web" },
  { name: "CSS", category: "web" },
  { name: "JavaScript", category: "web" },
  { name: "Database Design", category: "web" },
  { name: "Qlik", category: "web" },
  
  // IoT & Embedded
  { name: "ESP32", category: "iot" },
  { name: "RFID", category: "iot" },
  { name: "Sensors", category: "iot" },
  { name: "IoT Integration", category: "iot" },
  { name: "Arduino IDE", category: "iot" },
];

export const certifications: Certification[] = [
  {
    title: "CCNA – Introduction to Cybersecurity",
    organization: "Cisco",
    year: "2025",
    pdf: "/documents/certifications/CCNA-CyberSec.pdf",
  },
  {
    title: "CCNA – Introduction to Networks",
    organization: "Cisco",
    year: "2024",
  },
  {
    title: "HCIA-Cloud Computing",
    organization: "Huawei Enterprise",
    year: "2022",
    pdf: "/documents/certifications/Cloud-Computing.pdf",
  },
  {
    title: "HCIA-Datacom",
    organization: "Huawei Enterprise",
    year: "2022",
    pdf: "/documents/certifications/Datacom.pdf",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science with Honours (Network Engineering)",
    institution: "Universiti Malaysia Sabah",
    period: "Oct 2022 - Current",
    cgpa: "3.15",
    achievements: [
      "Dean's List Award (1-2024/2025)",
      "Final Year Project: FreelanceForGood - Web Platform Connecting Freelancers with Charity Organizations",
      "Huawei ICT Competition 2022-2023 - Fifth Runner Up in Network Track",
      "Huawei ICT Competition 2022-2023 - Top Active University in Huawei Event",
    ],
    location: "Sabah, Malaysia",
  },
  {
    degree: "Diploma of Computer Networking",
    institution: "Kolej Profesional MARA Indera Mahkota",
    period: "May 2019 - Dec 2021",
    cgpa: "3.67",
    achievements: [
      "Vice Secretary of Guidance Council",
      "Dean's Award from Semester 2 - 6",
      "Certificate of Excellent Achievement",
    ],
    location: "Pahang, Malaysia",
  },
];

export const personalInfo = {
  name: "Muhammad Daniel Bin Rosley",
  tagline: "Network Engineer",
  location: "Sabah, Malaysia",
  email: "mohddanialnial@gmail.com",
  phone: "+60 12-8970435",
  linkedin: "https://www.linkedin.com/in/muhammaddanielrosley/",
  address: "Taman Layar Impian Lot No 44 Lorong 1B Tuaran Sabah",
  about: "Field-oriented Network Engineer with experience in network deployment, fiber optic cross-connection, and high-speed Ethernet commissioning. Involved in site surveys across Sabah and Sarawak, link migration, traffic validation, and TM server rack installations. Skilled in working within live carrier-grade environments with strong focus on reliability, documentation, and operational standards.",
  // Background image configuration
  // Options: "none" | "full" | "behind-profile" | "gradient-overlay" | "corner-accent"
  backgroundImageStyle: "none", // Change this to your preferred style
  backgroundImageOpacity: 0.2, // 0.1 to 1.0 (only used for "full" and "gradient-overlay")
};

