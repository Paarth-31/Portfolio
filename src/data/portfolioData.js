/**
 * portfolioData.js
 * All portfolio content — edit this to update your portfolio.
 */

const portfolioData = {
  hero: {
    name: 'Paarth Gupta',
    roles: ['Full-Stack Developer', 'Competitive Programmer', 'Problem Solver', 'Backend Engineer'],
    bio: "Pre-final year student at IIIT Allahabad building robust, scalable web applications and intelligent systems. Passionate about clean architecture, intuitive UI, and solving real-world problems with elegant code.",
    stats: [
      { num: '5+',  label: 'Projects' },
      { num: '2+',  label: 'Years Coding' },
      { num: '520+', label: 'LeetCode' },
    ],
    github: 'https://github.com/Paarth-31',
    linkedin: 'https://www.linkedin.com/in/paarth-gupta',
    email: 'paarth31@gmail.com',
    resumeLink: '#',
  },

  ticker: [
    'React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'C++',
    'WebRTC', 'FastAPI', 'Git & GitHub', 'AWS EC2', 'Next.js', 'Express.js',
    'Full-Stack Dev', 'Competitive Programming', 'System Design', 'NLP & AI',
  ],

  about: {
    paragraphs: [
      "I'm a sophomore at IIIT Allahabad with a deep passion for building things for the web. My work spans from crafting seamless user interfaces to designing robust backend systems, always with a focus on clean architecture and intuitive design.",
      "I love solving complex problems — whether that's through competitive programming or building production-ready applications. When I'm not coding, I'm either honing my DSA skills on LeetCode, contributing to open-source, or exploring the latest in AI and ML.",
    ],
    skills: [
      { name: 'React.js',    category: 'Frontend'  },
      { name: 'TypeScript',  category: 'Language'  },
      { name: 'Node.js',     category: 'Backend'   },
      { name: 'Express.js',  category: 'Backend'   },
      { name: 'Python',      category: 'Language'  },
      { name: 'C++',         category: 'Language'  },
      { name: 'PostgreSQL',  category: 'Database'  },
      { name: 'MySQL',       category: 'Database'  },
      { name: 'FastAPI',     category: 'Backend'   },
      { name: 'Git & GitHub', category: 'Tools'   },
      { name: 'WebRTC',      category: 'Protocol'  },
      { name: 'AWS EC2',     category: 'Cloud'     },
      { name: 'Next.js',     category: 'Frontend'  },
      { name: 'Socket.io',   category: 'Backend'   },
    ],
    education: {
      institution: 'Indian Institute of Information Technology Allahabad',
      degree: 'B.Tech in Information Technology',
      period: '2024 – Present',
      cgpa: '7.98',
    },
  },

  projects: [
    {
      title: 'GlyphConnect',
      subtitle: 'Secure Real-Time Remote Desktop Platform',
      description:
        'A cross-platform Electron desktop app with React, TypeScript, and WebRTC enabling peer-to-peer screen sharing, remote control, and chunked file transfer across 4 dedicated data channels — secured with ECDH P-256 key exchange and AES-256-GCM end-to-end encryption.',
      tags: ['React', 'TypeScript', 'Electron', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS EC2'],
      github: 'https://github.com/Paarth-31',
      highlight: true,
    },
    {
      title: 'CiteAI',
      subtitle: 'Full-Stack Legal Research Intelligence Platform',
      description:
        'An end-to-end 5-stage NLP pipeline that auto-classifies legal documents by domain, generates InLegalBERT/BioBERT embeddings, performs FAISS indexing with cosine similarity, and builds a NetworkX citation-graph with NLI-based relationship classification. Features a Next.js frontend with interactive graph visualizer and RAG chat interface.',
      tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'FAISS', 'NLP', 'JWT'],
      github: 'https://github.com/Paarth-31',
      highlight: false,
    },
    {
      title: 'Synonym',
      subtitle: '3D Semantic File Exploration Platform',
      description:
        'A multi-stage NLP pipeline using TF-IDF keyword extraction and SentenceTransformer embeddings (all-MiniLM-L6-v2) with a custom PyTorch genre classifier. Architected a full-stack data pipeline integrating Electron, Python NLP backend, and PostgreSQL database supporting 10,000+ records with full-text semantic search and cross-platform deployment via electron-builder.',
      tags: ['Electron', 'Python', 'PyTorch', 'PostgreSQL', 'NLP', 'electron-builder'],
      github: 'https://github.com/Paarth-31',
      highlight: false,
    },
  ],

  achievements: [
    {
      icon: '🏆',
      title: 'Postman API Expert',
      desc: 'Validated 15+ RESTful API endpoints and engineered 10+ automated test scripts, ensuring 100% response accuracy and robust backend integration.',
    },
    {
      icon: '🥇',
      title: 'Microsoft Office Specialist — All-India Rank 3',
      desc: 'Achieved All-India Rank 3 (500+ participants) in Compudon-MOS for enterprise productivity software.',
    },
    {
      icon: '⚡',
      title: 'LeetCode — Global Ranks 256 & 497',
      desc: 'Knight badge with 520+ problems solved (Max Rating 2108). Secured global ranks of 256 and 497 in Weekly Contests 500 & 496.',
    },
    {
      icon: '🔥',
      title: 'Codeforces — Global Rank 792',
      desc: 'Mashallah.Coder Expert with 250+ problems solved (Max Rating 1604). Attained global rank of 792 (Round 1103, Div 3).',
    },
    {
      icon: '⭐',
      title: 'CodeChef — Top 1 Global Rank 45',
      desc: 'Paarth_31 with 3-star rating and 320+ problems (Max Rating 1734). Achieved a top-tier global rank of 45 in Contest 221.',
    },
  ],

  codingProfiles: [
    { platform: 'CodeChef',   handle: 'Paarth_31',       stars: '3★', problems: '320+', rating: 1734, url: 'https://www.codechef.com/users/paarth_31' },
    { platform: 'Codeforces', handle: 'Mashallah.Coder', stars: 'Expert', problems: '250+', rating: 1604, url: 'https://codeforces.com/profile/Mashallah.Coder' },
    { platform: 'LeetCode',   handle: 'Paarth31',        stars: 'Knight', problems: '520+', rating: 2108, url: 'https://leetcode.com/Paarth31' },
  ],

  experience: [
    {
      period: 'Oct 2025 — Present',
      title: 'Member',
      org: 'Cyber Sudarshana Society (CSS), IIITA',
      desc: 'Solved 25+ cryptography and web vulnerabilities, completed 40 hours of cybersecurity training. Bridging cutting-edge AI research and real-world cybersecurity through applied threat intelligence and digital forensics.',
    },
    {
      period: 'Aug 2025 — Present',
      title: 'Member',
      org: 'Acoustics and Media Society (AMS), IIITA',
      desc: 'Directed photography for 5 fests (5,000+ attendees). Edited 2,000+ highlight images, boosting social media engagement by 30%.',
    },
    {
      period: 'Aug 2025 — Present',
      title: 'Member',
      org: 'Sarasva Literary Society, IIITA',
      desc: 'Managed logistics for 100+ MUN delegates. Co-organized a TEDx conference for 6 speakers and 500+ attendees.',
    },
  ],

  contact: {
    email: 'paarth31@gmail.com',
    github: 'https://github.com/Paarth-31',
    linkedin: 'https://linkedin.com/in/paarth-gupta',
    phone: '+91 7560015005',
  },
};

export default portfolioData;
