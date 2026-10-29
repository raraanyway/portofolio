export const metadata = {
  title: "Portofolio — Muhamad Rafi Ramadhan",
  description: "Web & Mobile Developer Portfolio - Muhamad Rafi Ramadhan, Mahasiswa S1 Sistem Informasi.",
  openGraph: {
    title: "Portofolio — Muhamad Rafi Ramadhan",
    description: "Jelajahi karya, proyek sistem, dan keahlian rekayasa perangkat lunak saya di sini.",
    url: "https://rafispace.vercel.app",
    siteName: "Portofolio",
    images: [
      {
        url: "https://rafispace.vercel.app/og-image.jpg", // Pastikan file og-image.jpg ada di folder public
        width: 1200,
        height: 630,
        alt: "Portofolio Muhamad Rafi Ramadhan",
      },
    ],
    type: "website",
  },
};

"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [openExpertise, setOpenExpertise] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [quickActionOpen, setQuickActionOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [sysTime, setSysTime] = useState("14:00:00 WIB");

  // State untuk Interactive CLI Terminal Modal
  const [cliOpen, setCliOpen] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState([
    { type: "system", text: "MRR Portfolio OS — Interactive Developer Terminal" },
    { type: "system", text: "Ketik 'help' untuk melihat daftar perintah yang tersedia." }
  ]);

  // Efek Pelacak Kursor & Jam Real-Time WIB
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      setSysTime(`${timeStr} WIB`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // ================= DATA PRIBADI =================
  const whatsappNumber = "6282246971567";
  const whatsappMessage = encodeURIComponent(
    "Halo Rafi, saya melihat portofolio Anda dan tertarik untuk berdiskusi."
  );

  const myEmail = "rafi25ramadhan@gmail.com";
  const myLinkedin = "https://www.linkedin.com/in/muhamad-rafi-ramadhan-955ba82ab";
  const myGithub = "https://github.com/raraanyway";
  const myPortfolioUrl = "https://rafispace.vercel.app";

  // Kategori Filter Toolkit
  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Mobile & Native",
    "Backend & DB",
    "Tools & DevOps"
  ];

  // 11 Keahlian dengan Logo Software Resmi
  const skillsData = [
    {
      code: "01",
      name: "HTML5",
      category: "Languages",
      level: "95%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      ],
      desc: "Semantic web markup, accessibility (a11y) standards, and clean document structure."
    },
    {
      code: "02",
      name: "JavaScript (ES6+)",
      category: "Languages",
      level: "92%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      ],
      desc: "Asynchronous programming, event architecture, DOM manipulation, and dynamic client-side logic."
    },
    {
      code: "03",
      name: "React & Next.js",
      category: "Frontend",
      level: "90%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      ],
      desc: "App Router, SSR, reusable component modularity, and modern reactive state management."
    },
    {
      code: "04",
      name: "Tailwind CSS",
      category: "Frontend",
      level: "94%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      ],
      desc: "Utility-first responsive layouts, custom color tokens, and fluid editorial micro-interactions."
    },
    {
      code: "05",
      name: "Mobile UX & Theming",
      category: "Mobile & Native",
      level: "88%",
      customSvg: "mobile",
      desc: "Adaptive UI patterns, fluid screen responsiveness, and modern light/dark user theming."
    },
    {
      code: "06",
      name: "PHP & Laravel",
      category: "Backend & DB",
      level: "88%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
      ],
      desc: "MVC pattern, Eloquent ORM, authentication pipelines, and robust backend logic."
    },
    {
      code: "07",
      name: "Express.js & Node.js",
      category: "Backend & DB",
      level: "87%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      ],
      desc: "High-throughput asynchronous servers, middleware pipelines, and microservice backends."
    },
    {
      code: "08",
      name: "MySQL & SQLite",
      category: "Backend & DB",
      level: "89%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
      ],
      desc: "Relational data modeling, schema indexing, ACID transactions, and structured query optimization."
    },
    {
      code: "09",
      name: "REST API Architecture",
      category: "Backend & DB",
      level: "91%",
      customSvg: "api",
      desc: "Designing and consuming secure, stateless JSON endpoints with structured error handling."
    },
    {
      code: "10",
      name: "Git & GitHub",
      category: "Tools & DevOps",
      level: "92%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      ],
      desc: "Branching strategies, atomic commits, repository workflows, and collaborative version control."
    },
    {
      code: "11",
      name: "Vite & Next.js Bundlers",
      category: "Tools & DevOps",
      level: "90%",
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      ],
      desc: "Fast HMR workflows, code-splitting optimization, and edge deployment automation."
    }
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  // 5 Poin Technical Focus
  const expertiseList = [
    {
      id: 0,
      code: "01",
      title: "Frontend & Responsive Web Development",
      description:
        "Menguasai pengembangan antarmuka web modern menggunakan HTML5 semantik, JavaScript (ES6+), serta framework terdepan seperti React.js dan Next.js. Implementasi desain responsif dikombinasikan secara optimal menggunakan utility-first Tailwind CSS untuk menghasilkan layout yang cepat, fleksibel, estetis, dan memiliki aksesibilitas (a11y) tinggi di berbagai ukuran layar perangkat.",
      tags: ["HTML5", "JavaScript (ES6+)", "React & Next.js", "Tailwind CSS"]
    },
    {
      id: 1,
      code: "02",
      title: "Mobile App Interface & Cross-Platform UX",
      description:
        "Merancang struktur navigasi dan pola tata letak antarmuka aplikasi mobile yang intuitif dan adaptif. Berfokus pada fluiditas sentuhan (touch gestures), manajemen status komponen yang reaktif, serta penerapan konsistensi tema visual terang dan gelap guna memberikan kenyamanan optimal bagi pengguna perangkat bergerak (mobile users).",
      tags: ["Mobile UX", "Responsive UI", "State Management", "Dark/Light Theming"]
    },
    {
      id: 2,
      code: "03",
      title: "Backend & RESTful API Engineering",
      description:
        "Membangun logika server-side yang tangguh, aman, dan modular menggunakan ekosistem PHP dengan framework Laravel serta JavaScript via Node.js dan Express.js. Berpengalaman dalam merancang arsitektur MVC, sistem autentikasi pengguna yang aman, middleware pipelines, serta pengelolaan endpoint REST API untuk pertukaran data yang efisien.",
      tags: ["PHP & Laravel", "Express.js & Node.js", "MVC Architecture", "REST API"]
    },
    {
      id: 3,
      code: "04",
      title: "Database Design & Relational Modeling",
      description:
        "Merancang struktur basis data relasional yang efisien dan ternormalisasi menggunakan MySQL serta embedded storage SQLite. Menerapkan strategi pengindeksan terarah, pemeliharaan integritas transaksi ACID, optimalisasi query SQL kompleks, serta penerjemahan kebutuhan alur operasional bisnis nyata menjadi skema tabel yang terstruktur rapi.",
      tags: ["MySQL", "SQLite", "Database Indexing", "ACID Transactions"]
    },
    {
      id: 4,
      code: "05",
      title: "Version Control, Tooling & Bundlers",
      description:
        "Mengelola siklus hidup kode sumber dan kolaborasi tim secara profesional menggunakan alur kerja Git & GitHub (branching strategy, atomic commits, dan merge conflict resolution). Memanfaatkan bundler berperangkat tinggi seperti Vite dan Next.js untuk mempercepat proses Hot Module Replacement (HMR) serta mengotomasi optimasi build menuju tahap produksi.",
      tags: ["Git & GitHub", "Vite Bundler", "Next.js Pipeline", "Clean Code"]
    }
  ];

  // Data Proyek
  const projects = [
    {
      id: "laundry",
      code: "PROJECT // 01",
      title: "R&F Express – Laundry Operating System & Kanban Tracker",
      subtitle: "Web Application • Operations",
      category: "Full-Stack Web",
      stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      description:
        "Sistem informasi binatu komprehensif yang mengintegrasikan pelacakan cucian real-time melalui papan Kanban visual, rekapitulasi data kasir otomatis, dan perhitungan beban inventaris harian.",
      bgColor: "bg-[#0B0E1A]",
      isDarkBg: true,
      githubUrl: myGithub,
      demoUrl: "#"
    },
    {
      id: "unitrade",
      code: "PROJECT // 02",
      title: "UniTrade – Campus E-Commerce & Student Trading Forum",
      subtitle: "Mobile Application • Community Marketplace",
      category: "Mobile Platform",
      stack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
      description:
        "Aplikasi mobile marketplace dan forum jual-beli khusus civitas kampus untuk transaksi barang bekas terverifikasi, modul ajar, dan perlengkapan perkuliahan secara aman antar mahasiswa/i.",
      bgColor: "bg-[#F8F6F2]",
      isDarkBg: false,
      githubUrl: "https://github.com/raraanyway/UniTrade",
      demoUrl: "#"
    }
  ];

  // Alur Kerja Pengembangan
  const workflows = [
    {
      step: "01",
      title: "System Analysis & Database Schema",
      phase: "Planning & Architecture",
      desc: "Memetakan kebutuhan alur bisnis, merancang relasi tabel database (ERD) di MySQL/SQLite, serta menyusun kontrak endpoint REST API."
    },
    {
      step: "02",
      title: "Full-Stack & UI Implementation",
      phase: "Development Phase",
      desc: "Membangun logika backend dengan Laravel/Node.js dan merakit antarmuka pengguna yang responsif menggunakan Next.js, React, serta Tailwind CSS."
    },
    {
      step: "03",
      title: "Testing, Git Workflow & Deployment",
      phase: "Quality & Release",
      desc: "Melakukan uji fungsionalitas transaksi data, manajemen repositori terstruktur via GitHub, dan optimalisasi bundlers menuju produksi."
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Fungsi Eksekusi Perintah CLI Terminal
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [
      ...cliHistory,
      { type: "user", text: `rafi@portfolio:~$ ${cliInput}` }
    ];

    if (cmd === "help") {
      newHistory.push({
        type: "output",
        text: "Perintah tersedia: about | skills | projects | location | whatsapp | contact | clear"
      });
    } else if (cmd === "about") {
      newHistory.push({
        type: "output",
        text: "Muhamad Rafi Ramadhan — Web & Mobile Developer, Mahasiswa S1 Sistem Informasi."
      });
    } else if (cmd === "skills") {
      newHistory.push({
        type: "output",
        text: "11 Core Skills: HTML5, JS (ES6+), React/Next.js, Tailwind, Mobile UX, PHP/Laravel, Express/Node, MySQL/SQLite, REST API, Git/GitHub, Vite/Bundlers."
      });
    } else if (cmd === "projects") {
      newHistory.push({
        type: "output",
        text: "1. R&F Express Laundry OS | 2. UniTrade Mobile E-Commerce App (github.com/raraanyway/UniTrade)"
      });
    } else if (cmd === "location") {
      newHistory.push({
        type: "output",
        text: "Domisili: Jakarta Selatan, DKI Jakarta, Indonesia."
      });
    } else if (cmd === "whatsapp" || cmd === "wa") {
      newHistory.push({
        type: "output",
        text: "Membuka tautan WhatsApp..."
      });
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );
    } else if (cmd === "contact") {
      newHistory.push({
        type: "output",
        text: `Email: ${myEmail} | GitHub: ${myGithub} | LinkedIn: ${myLinkedin}`
      });
    } else if (cmd === "clear") {
      setCliHistory([]);
      setCliInput("");
      return;
    } else {
      newHistory.push({
        type: "error",
        text: `Perintah '${cmd}' tidak dikenali. Ketik 'help' untuk bantuan.`
      });
    }

    setCliHistory(newHistory);
    setCliInput("");
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-[#F4F2ED] selection:bg-[#E84A27] selection:text-white relative overflow-x-hidden font-sans">
      {/* ================= ANIMASI 3 ROBOT BERJALAN DI BACKGROUND ================= */}
      <style>{`
        @keyframes walkRobot1 {
          0% { transform: translateX(-180px) translateY(0px) scale(0.7); opacity: 0.15; }
          25% { transform: translateX(25vw) translateY(-8px) scale(0.7); }
          50% { transform: translateX(50vw) translateY(0px) scale(0.7); opacity: 0.35; }
          75% { transform: translateX(75vw) translateY(-8px) scale(0.7); }
          100% { transform: translateX(110vw) translateY(0px) scale(0.7); opacity: 0.15; }
        }
        @keyframes walkRobot2 {
          0% { transform: translateX(110vw) translateY(0px) scale(0.55) scaleX(-1); opacity: 0.1; }
          50% { transform: translateX(40vw) translateY(-6px) scale(0.55) scaleX(-1); opacity: 0.3; }
          100% { transform: translateX(-180px) translateY(0px) scale(0.55) scaleX(-1); opacity: 0.1; }
        }
        @keyframes walkRobot3 {
          0% { transform: translateX(-200px) translateY(0px) scale(0.65); opacity: 0.12; }
          50% { transform: translateX(60vw) translateY(-10px) scale(0.65); opacity: 0.28; }
          100% { transform: translateX(110vw) translateY(0px) scale(0.65); opacity: 0.12; }
        }
        .robot-walker-1 {
          position: fixed;
          bottom: 12%;
          z-index: 1;
          pointer-events: none;
          animation: walkRobot1 32s linear infinite;
        }
        .robot-walker-2 {
          position: fixed;
          bottom: 38%;
          z-index: 1;
          pointer-events: none;
          animation: walkRobot2 40s linear infinite;
        }
        .robot-walker-3 {
          position: fixed;
          bottom: 65%;
          z-index: 1;
          pointer-events: none;
          animation: walkRobot3 36s linear infinite;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 0.6; }
          60% { opacity: 0.6; }
          100% { transform: translateY(500%); opacity: 0; }
        }
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(232, 74, 39, 0.35); box-shadow: 0 0 15px rgba(232, 74, 39, 0.08); }
          50% { border-color: rgba(232, 74, 39, 0.85); box-shadow: 0 0 28px rgba(232, 74, 39, 0.28); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes marquee-hud {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scanline {
          animation: scanline 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-orbit-cw {
          animation: orbit-cw 24s linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbit-ccw 18s linear infinite;
        }
        .animate-pulse-border {
          animation: pulse-border 3.5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-marquee-hud {
          display: flex;
          width: 200%;
          animation: marquee-hud 30s linear infinite;
        }
        .tech-grid-bg {
          background-size: 48px 48px;
          background-image: 
            linear-gradient(to right, rgba(232, 74, 39, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(232, 74, 39, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* ================= 3 ROBOT FUTURISTIK VECTOR DI BACKGROUND ================= */}
      <div className="robot-walker-1">
        <svg className="w-24 h-32 sm:w-32 sm:h-44 drop-shadow-[0_0_15px_rgba(232,74,39,0.5)]" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="25" r="18" fill="#1C2030" stroke="#E84A27" strokeWidth="3"/>
          <path d="M40 22C45 20 55 20 60 22" stroke="#E57C23" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="43" cy="24" r="2.5" fill="#E84A27"/>
          <circle cx="57" cy="24" r="2.5" fill="#E84A27"/>
          <rect x="30" y="45" width="40" height="50" rx="8" fill="#151824" stroke="#E84A27" strokeWidth="2"/>
          <circle cx="50" cy="65" r="8" fill="#E84A27" fillOpacity="0.4"/>
          <path d="M30 55L15 75M70 55L85 75" stroke="#1C2030" strokeWidth="4" strokeLinecap="round"/>
          <path d="M40 95L35 130M60 95L65 130" stroke="#151824" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="robot-walker-2">
        <svg className="w-20 h-28 sm:w-28 sm:h-36 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="25" rx="15" ry="12" fill="#1C2030" stroke="#3B82F6" strokeWidth="3"/>
          <rect x="38" y="22" width="24" height="6" rx="3" fill="#3B82F6"/>
          <rect x="32" y="40" width="36" height="45" rx="6" fill="#151824" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M32 50L18 65M68 50L82 65" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
          <path d="M42 85L38 125M58 85L62 125" stroke="#1C2030" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="robot-walker-3">
        <svg className="w-20 h-28 sm:w-28 sm:h-36 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="25" r="14" fill="#1C2030" stroke="#A855F7" strokeWidth="3"/>
          <circle cx="50" cy="25" r="5" fill="#A855F7"/>
          <rect x="35" y="42" width="30" height="48" rx="5" fill="#151824" stroke="#A855F7" strokeWidth="2"/>
          <path d="M35 52L20 62M65 52L80 62" stroke="#A855F7" strokeWidth="3" strokeLinecap="round"/>
          <path d="M42 90L40 125M58 90L60 125" stroke="#151824" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ================= DYNAMIC INTERACTIVE MOUSE GLOW & TECH GRID ================= */}
      <div className="fixed inset-0 tech-grid-bg pointer-events-none z-0" />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 74, 39, 0.12), transparent 75%)`
        }}
      />

      {/* ================= TOP STATUS BAR ================= */}
      <div className="sticky top-0 z-40 bg-[#07080C]/85 backdrop-blur-md border-b border-white/10 px-4 py-2.5">
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E84A27]/15 text-[#E84A27] border border-[#E84A27]/30 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E84A27] animate-ping" />
              PORTFOLIO SYSTEM
            </span>
            <span className="text-neutral-400 hidden sm:inline">
              JAKARTA SELATAN, ID
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="text-neutral-300 font-semibold">{sysTime}</span>
            <span className="hidden md:inline text-emerald-400">
              ● AVAILABLE FOR PROJECTS
            </span>
          </div>
        </div>
      </div>

      {/* ================= FLOATING CLI TERMINAL BUTTON (KIRI BAWAH) ================= */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setCliOpen(!cliOpen)}
          className="group px-5 py-3 rounded-xl bg-[#0E1018]/90 backdrop-blur-md text-white shadow-[0_0_25px_rgba(232,74,39,0.2)] flex items-center gap-2.5 text-xs font-mono font-bold hover:bg-[#E84A27] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#E84A27]/40 cursor-pointer"
        >
          <span className="text-[#E84A27] group-hover:text-white">&gt;_</span>
          <span>CLI Terminal</span>
        </button>
      </div>

      {/* ================= MODAL INTERACTIVE CLI TERMINAL ================= */}
      {cliOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0C12] border border-[#E84A27]/50 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_0_50px_rgba(232,74,39,0.25)] font-mono text-xs relative">
            <div className="bg-[#12141F] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCliOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 cursor-pointer"
                />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-neutral-300 font-bold text-[11px]">
                  rafi@portfolio: ~
                </span>
              </div>
              <button
                onClick={() => setCliOpen(false)}
                className="text-neutral-400 hover:text-[#E84A27] text-xs font-bold cursor-pointer"
              >
                ESC ✕
              </button>
            </div>

            <div className="p-5 h-64 overflow-y-auto space-y-2 text-neutral-300">
              {cliHistory.map((item, i) => (
                <div
                  key={i}
                  className={
                    item.type === "user"
                      ? "text-white font-bold"
                      : item.type === "error"
                      ? "text-red-400"
                      : item.type === "system"
                      ? "text-[#E84A27]"
                      : "text-emerald-400"
                  }
                >
                  {item.text}
                </div>
              ))}
              <form
                onSubmit={handleCliSubmit}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-[#E84A27] font-bold">
                  rafi@portfolio:~$
                </span>
                <input
                  type="text"
                  autoFocus
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="ketik 'help' lalu Enter..."
                  className="bg-transparent text-white focus:outline-none w-full"
                />
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOATING QUICK ACTION BUTTON (KANAN BAWAH) ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <div
          className={`flex flex-col gap-2.5 mb-3 transition-all duration-300 origin-bottom-right ${
            quickActionOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] text-white rounded-xl shadow-xl text-xs font-bold hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
          >
            <span>💬</span>
            <span>Chat WhatsApp</span>
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#12141D] border border-white/15 rounded-xl shadow-xl text-xs font-bold text-white hover:border-[#E84A27] hover:text-[#E84A27] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>{copied ? "✓" : "📋"}</span>
            <span>{copied ? "Email Tersalin!" : "Salin Email"}</span>
          </button>

          <a
            href={myGithub}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#12141D] border border-white/15 rounded-xl shadow-xl text-xs font-bold text-white hover:border-[#E84A27] hover:text-[#E84A27] hover:scale-105 active:scale-95 transition-all"
          >
            <span>🌿</span>
            <span>Kunjungi GitHub</span>
          </a>
        </div>

        <button
          onClick={() => setQuickActionOpen(!quickActionOpen)}
          aria-label="Toggle Quick Action"
          className="w-13 h-13 rounded-xl bg-[#E84A27] text-white shadow-[0_0_25px_rgba(232,74,39,0.45)] flex items-center justify-center text-xl font-bold hover:bg-[#ff5935] hover:scale-110 active:scale-90 transition-all duration-300 border border-white/25 cursor-pointer"
        >
          <span
            className={`transition-transform duration-300 ${
              quickActionOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section
          id="about"
          className="bg-[#0D0F17]/90 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-[0_0_65px_-15px_rgba(232,74,39,0.18)] border border-white/10 relative group"
        >
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E84A27] pointer-events-none z-20" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E84A27] pointer-events-none z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[590px]">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E84A27] flex items-center justify-center text-white font-black text-xs tracking-tighter shadow-[0_0_20px_rgba(232,74,39,0.5)]">
                      RR
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 block">
                        Jakarta Selatan • Indonesia
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#E84A27]/10 border border-[#E84A27]/30 text-[#E84A27] font-semibold">
                    WEB &amp; MOBILE DEVELOPER
                  </span>
                </div>

                <div className="mt-8 relative">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84A27] via-[#FF7B54] to-[#E84A27] drop-shadow-[0_0_25px_rgba(232,74,39,0.3)]">
                      Muhamad Rafi
                    </span>
                    <br />
                    <span className="text-white">Ramadhan</span>
                  </h1>
                </div>

                <p className="mt-6 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                  Seorang{" "}
                  <strong className="text-[#E84A27] font-bold">
                    Web &amp; Mobile Developer
                  </strong>{" "}
                  serta mahasiswa aktif{" "}
                  <strong className="text-white font-bold">
                    S1 Sistem Informasi
                  </strong>{" "}
                  di{" "}
                  <strong className="text-white font-bold">
                    Jakarta Selatan
                  </strong>{" "}
                  yang berfokus membangun aplikasi modern yang terukur,
                  berarsitektur database solid, dan memiliki pengalaman
                  pengguna yang intuitif end-to-end.
                </p>

                {/* Hyperlink Live Portfolio */}
                <div className="mt-5 mb-2">
                  <span className="text-xs text-neutral-400 block mb-1">Live Portfolio Website:</span>
                  <a 
                    href={myPortfolioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline font-mono font-medium text-sm"
                  >
                    rafispace.vercel.app
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-xl bg-[#E84A27] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#ff5a36] hover:shadow-[0_0_25px_rgba(232,74,39,0.55)] hover:-translate-y-0.5 transition-all"
                  >
                    Lihat Karya ↓
                  </a>
                  <a
                    href="/cv.pdf"
                    download="CV_Muhamad_Rafi_Ramadhan.pdf"
                    className="px-6 py-3 rounded-xl bg-[#161926] text-neutral-200 border border-white/15 text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#E84A27]/15 hover:border-[#E84A27] transition-all"
                  >
                    📄 Download CV
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#E84A27] uppercase tracking-widest">
                    Core Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold">
                  {[
                    "Next.js",
                    "React.js",
                    "Tailwind CSS",
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "REST API",
                    "Git & GitHub"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#151824] text-neutral-200 rounded-lg border border-white/10 hover:border-[#E84A27] hover:text-[#E84A27] hover:shadow-[0_0_15px_rgba(232,74,39,0.2)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#E84A27] via-[#D63C1A] to-[#9E2309] p-8 sm:p-10 flex flex-col justify-between text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />

              <nav className="flex flex-wrap justify-end items-center gap-4 text-xs font-mono font-bold uppercase tracking-wider relative z-10">
                <a href="#about" className="hover:text-black transition-colors">
                  Home
                </a>
                <a href="#skills" className="hover:text-black transition-colors">
                  Skills
                </a>
                <a
                  href="#expertise"
                  className="hover:text-black transition-colors"
                >
                  Focus
                </a>
                <a
                  href="#projects"
                  className="hover:text-black transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-[#07080C] text-white rounded-lg border border-white/20 hover:bg-white hover:text-[#07080C] hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  Contact
                </a>
              </nav>

              <div className="my-10 flex flex-col items-center justify-center relative z-10">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-white/40 animate-orbit-cw pointer-events-none" />
                  <div className="absolute -inset-8 rounded-full border border-white/20 animate-orbit-ccw pointer-events-none" />

                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white/70 bg-neutral-900/30 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.45)] relative group">
                    <img
                      src="/fotoprofile.jpg"
                      alt="Muhamad Rafi Ramadhan"
                      className="w-full h-full object-cover object-top scale-125 z-10 group-hover:scale-135 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/30 to-transparent z-20 animate-scanline pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-white/95 relative z-10 bg-black/25 px-4 py-2.5 rounded-xl border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Work • Jakarta Selatan</span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= RUNNING TECH TICKER ================= */}
        <div className="mt-6 bg-[#0D0F17] border border-white/10 rounded-xl py-2.5 overflow-hidden shadow-lg">
          <div className="animate-marquee-hud font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            <div className="flex items-center gap-8 px-4 shrink-0">
              <span className="text-[#E84A27] font-bold">
                FULL-STACK WEB DEVELOPMENT
              </span>
              <span>•</span>
              <span>NEXT.JS &amp; REACT ECOSYSTEM</span>
              <span>•</span>
              <span className="text-[#E84A27] font-bold">
                MOBILE APPLICATION UI/UX
              </span>
              <span>•</span>
              <span>PHP LARAVEL &amp; NODE.JS</span>
              <span>•</span>
              <span className="text-[#E84A27] font-bold">
                MYSQL &amp; SQLITE ARCHITECTURE
              </span>
              <span>•</span>
              <span>S1 SISTEM INFORMASI</span>
              <span>•</span>
            </div>
            <div className="flex items-center gap-8 px-4 shrink-0">
              <span className="text-[#E84A27] font-bold">
                FULL-STACK WEB DEVELOPMENT
              </span>
              <span>•</span>
              <span>NEXT.JS &amp; REACT ECOSYSTEM</span>
              <span>•</span>
              <span className="text-[#E84A27] font-bold">
                MOBILE APPLICATION UI/UX
              </span>
              <span>•</span>
              <span>PHP LARAVEL &amp; NODE.JS</span>
              <span>•</span>
              <span className="text-[#E84A27] font-bold">
                MYSQL &amp; SQLITE ARCHITECTURE
              </span>
              <span>•</span>
              <span>S1 SISTEM INFORMASI</span>
              <span>•</span>
            </div>
          </div>
        </div>

        {/* ================= SKILLS & TECHNICAL TOOLKIT ================= */}
        <section
          id="skills"
          className="mt-10 bg-[#0D0F17]/90 backdrop-blur-xl rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-white/10 scroll-mt-20 relative"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-[#E84A27] bg-[#E84A27]/10 px-3.5 py-1 rounded border border-[#E84A27]/30">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3 uppercase">
              Skills &amp; Technical Toolkit
            </h2>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Kompilasi bahasa pemrograman, framework, arsitektur basis data, dan
              perangkat rekayasa perangkat lunak yang saya gunakan.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#E84A27] text-white border-[#E84A27] shadow-[0_0_20px_rgba(232,74,39,0.4)]"
                    : "bg-[#151824] text-neutral-300 border-white/10 hover:border-[#E84A27]/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#131622]/90 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E84A27] hover:shadow-[0_0_30px_rgba(232,74,39,0.18)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#E84A27]/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {skill.logos ? (
                        skill.logos.map((logoUrl, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-xl bg-[#1C2030] border border-white/10 p-2 flex items-center justify-center group-hover:border-[#E84A27]/50 group-hover:scale-110 transition-all duration-300 shadow-inner"
                          >
                            <img
                              src={logoUrl}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))
                      ) : skill.customSvg === "mobile" ? (
                        <div className="w-10 h-10 rounded-xl bg-[#1C2030] border border-white/10 p-2 flex items-center justify-center group-hover:border-[#E84A27]/50 group-hover:scale-110 transition-all duration-300 text-[#E84A27]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5"
                          >
                            <rect
                              x="5"
                              y="2"
                              width="14"
                              height="20"
                              rx="2"
                              ry="2"
                            />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-[#1C2030] border border-white/10 p-2 flex items-center justify-center group-hover:border-[#E84A27]/50 group-hover:scale-110 transition-all duration-300 text-[#E84A27]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <span className="text-xs font-mono font-bold text-[#E84A27] bg-[#E84A27]/10 border border-[#E84A27]/30 px-2.5 py-1 rounded-md">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base group-hover:text-[#E84A27] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono font-extrabold text-[#E84A27] uppercase tracking-wider block mb-2">
                    {skill.category}
                  </span>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="bg-gradient-to-r from-[#E84A27] to-[#FF8566] h-full rounded-full shadow-[0_0_10px_#E84A27] transition-all duration-700"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECHNICAL FOCUS ================= */}
        <section
          id="expertise"
          className="mt-10 bg-[#0A0B11] text-white rounded-[2rem] p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
            <div className="shrink-0">
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-widest font-extrabold text-[#E84A27] bg-[#E84A27]/10 px-3.5 py-1 rounded border border-[#E84A27]/30">
                Technical Focus
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl m-0">
              Pendekatan komprehensif dalam rekayasa perangkat lunak—mencakup
              pengembangan antarmuka reaktif, arsitektur backend andal, perancangan
              basis data, hingga manajemen versi kode sumber.
            </p>
          </div>

          <div className="divide-y divide-white/10 mt-2">
            {expertiseList.map((item) => {
              const isOpen = openExpertise === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setOpenExpertise(isOpen ? null : item.id)}
                  className="py-6 cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#E84A27] px-2.5 py-1 rounded bg-[#E84A27]/10 border border-[#E84A27]/30">
                        {item.code}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-bold transition-colors ${
                          isOpen
                            ? "text-[#E84A27]"
                            : "text-neutral-200 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xl font-mono transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#E84A27]"
                          : "text-neutral-500 group-hover:translate-y-1"
                      }`}
                    >
                      ↓
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-6 pt-2 space-y-4 animate-fadeIn">
                      <p className="text-neutral-300 text-sm leading-relaxed max-w-4xl">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1 bg-[#141724] border border-[#E84A27]/30 rounded-md text-[#E84A27]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PROYEK PILIHAN ================= */}
        <section id="projects" className="mt-20 scroll-mt-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E84A27]">
                Projects I Have Built
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                Aplikasi Pilihan &amp; Hasil Karya
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              FEATURED REPOSITORIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#0D0F17]/95 rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-[#E84A27] shadow-xl hover:shadow-[0_0_45px_rgba(232,74,39,0.18)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div
                    className={`aspect-[16/10] ${proj.bgColor} rounded-2xl border ${
                      proj.isDarkBg
                        ? "border-white/10"
                        : "border-neutral-300"
                    } p-8 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:border-[#E84A27]/60 transition-colors`}
                  >
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#E84A27]/15 to-transparent animate-scanline pointer-events-none" />

                    <div className="flex items-center justify-between z-10">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded ${
                          proj.isDarkBg
                            ? "bg-white/10 text-neutral-300"
                            : "bg-black/10 text-neutral-800"
                        }`}
                      >
                        {proj.code}
                      </span>
                      <span className="text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full bg-[#E84A27] text-white shadow-sm">
                        {proj.category}
                      </span>
                    </div>

                    <div className="my-auto flex items-center justify-center py-4 z-10 group-hover:scale-110 transition-transform duration-500 animate-float-slow">
                      {proj.id === "laundry" ? (
                        <div className="flex items-center gap-3.5 select-none">
                          <svg
                            className="w-12 h-12 sm:w-14 sm:h-14 text-[#A855F7] shrink-0 drop-shadow-[0_0_15px_rgba(168,85,247,0.45)]"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 22H18"
                              stroke="#A855F7"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                            <path
                              d="M2 30H16"
                              stroke="#A855F7"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6 38H16"
                              stroke="#A855F7"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                            <rect
                              x="18"
                              y="16"
                              width="24"
                              height="26"
                              rx="3"
                              fill="#A855F7"
                            />
                            <path
                              d="M42 25H53C54.6569 25 56 26.3431 56 28V42H42V25Z"
                              fill="#A855F7"
                            />
                            <path
                              d="M45 28H51.5L54 33H45V28Z"
                              fill="#0B0E1A"
                            />
                            <circle
                              cx="26"
                              cy="44"
                              r="6"
                              fill="#A855F7"
                              stroke="#0B0E1A"
                              strokeWidth="3"
                            />
                            <circle
                              cx="48"
                              cy="44"
                              r="6"
                              fill="#A855F7"
                              stroke="#0B0E1A"
                              strokeWidth="3"
                            />
                          </svg>
                          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            R&amp;F Express
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center select-none">
                          <svg
                            className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_10px_20px_rgba(229,124,35,0.3)]"
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 20V68C25 88.5 40.5 102 60 102C79.5 102 95 88.5 95 68V44C87 49 82 57 80 65C79 52 83 38 95 29V20H73V68C73 77.5 67.5 83 60 83C52.5 83 47 77.5 47 68V20H25Z"
                              fill="#E57C23"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between pt-3 border-t text-[11px] font-mono z-10 ${
                        proj.isDarkBg
                          ? "border-white/10 text-neutral-400"
                          : "border-neutral-300 text-neutral-600"
                      }`}
                    >
                      <span>Featured Application</span>
                      <span className="text-[#E84A27] font-bold">
                        Source Code ↗
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E84A27]">
                    {proj.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#E84A27] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[11px] font-mono text-neutral-300 bg-[#161926] border border-white/10 px-2.5 py-0.5 rounded"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-mono font-bold text-white bg-[#E84A27] px-4 py-2 rounded-xl hover:bg-[#ff5a36] flex items-center gap-1.5 group-hover:translate-x-1 transition-all shadow-md"
                  >
                    Buka GitHub <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ENGINEERING WORKFLOW & ACADEMIC BACKGROUND ================= */}
        <section className="mt-20">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E84A27]">
              How I Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Alur Kerja &amp; Metodologi Sistem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflows.map((wf, idx) => (
              <div
                key={idx}
                className="bg-[#0D0F17]/90 rounded-3xl p-7 border border-white/10 hover:border-[#E84A27] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#E84A27] font-mono">
                      {wf.step}
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 bg-[#E84A27]/10 text-[#E84A27] rounded-full border border-[#E84A27]/30">
                      {wf.phase}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E84A27] transition-colors">
                    {wf.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Standardized Process</span>
                  <span className="text-emerald-400 font-bold">● Verified</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0D0F17]/90 rounded-3xl p-7 sm:p-9 border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E84A27]">
                  Academic Background
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Active Student
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Bachelor of Information Systems (S1 Sistem Informasi)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Mempelajari rekayasa perangkat lunak, analisis proses bisnis,
                perancangan Enterprise Resource Planning (ERP), struktur basis
                data relasional, serta metode sistem pendukung keputusan.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap gap-2">
              {[
                "System Analysis",
                "Database Design",
                "ERP Concepts",
                "Software Engineering"
              ].map((course) => (
                <span
                  key={course}
                  className="text-xs font-mono px-3 py-1.5 bg-[#151824] border border-white/10 rounded-xl text-neutral-200 font-semibold"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* ================= BANNER KOLABORASI & KONTAK ================= */}
          <div
            id="contact"
            className="mt-8 bg-[#0D0F17] rounded-[2rem] p-8 sm:p-12 border-2 border-[#E84A27]/40 animate-pulse-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-20"
          >
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E84A27] bg-[#E84A27]/10 px-3 py-1 rounded border border-[#E84A27]/30">
                Ready to Collaborate
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Mari Bangun Sistem Aplikasi Anda Berikutnya
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Terbuka untuk peluang kerja Full-Time, Part-Time, Magang, maupun
                kolaborasi pengembangan proyek Web &amp; Mobile di area Jakarta
                Selatan dan sekitarnya.
              </p>
              <div className="pt-2 space-y-3 text-xs font-mono text-neutral-300">
                <p className="flex items-center gap-2">
                  <span>📍</span>{" "}
                  <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>🎓</span>{" "}
                  <span>
                    Undergraduate in Information Systems (S1 Sistem Informasi)
                  </span>
                </p>
                <div className="pt-3 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20ba59] hover:scale-105 transition-all shadow-lg"
                  >
                    <span>💬</span> Chat WhatsApp
                  </a>
                  <a
                    href={`mailto:${myEmail}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#161926] text-white border border-white/15 rounded-xl text-xs font-bold hover:bg-[#E84A27] hover:border-[#E84A27] transition-all shadow-lg"
                  >
                    <span>✉️</span> Email Saya
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                action="https://formspree.io/f/xqpplaqg"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-[#141722] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E84A27] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#141722] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E84A27] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Detail Pesan / Tawaran Proyek
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="Halo Rafi, kami tertarik untuk mendiskusikan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141722] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E84A27] transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E84A27] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#ff5a36] hover:shadow-[0_0_25px_rgba(232,74,39,0.45)] transition-all cursor-pointer"
                >
                  Kirim Pesan Sekarang →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-16 bg-[#090A0F] text-neutral-400 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-white/10">
            <div>
              <p className="text-xs text-white font-mono font-bold">
                © 2026 Muhamad Rafi Ramadhan. All Rights Reserved.
              </p>
              <div className="flex gap-4 mt-2 text-[11px] font-mono text-neutral-500">
                <span className="hover:text-neutral-300 cursor-pointer transition">
                  Terms of Use
                </span>
                <span>•</span>
                <span className="hover:text-neutral-300 cursor-pointer transition">
                  Privacy Policy
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-mono font-semibold text-neutral-300">
              <a href="#about" className="hover:text-[#E84A27] transition">
                Home
              </a>
              <a href="#skills" className="hover:text-[#E84A27] transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-[#E84A27] transition">
                Projects
              </a>
              <a href="#expertise" className="hover:text-[#E84A27] transition">
                Focus
              </a>
              <a href="#contact" className="hover:text-[#E84A27] transition">
                Contact
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <span className="text-neutral-500 text-[11px]">
              Jakarta Selatan, DKI Jakarta, Indonesia
            </span>

            <div className="flex flex-wrap items-center gap-6 text-neutral-300 text-xs font-bold tracking-wider">
              <a
                href={`mailto:${myEmail}`}
                className="hover:text-[#E84A27] hover:scale-105 transition-all"
              >
                EMAIL
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366] hover:scale-105 transition-all font-bold"
              >
                WHATSAPP
              </a>
              <a
                href={myGithub}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84A27] hover:scale-105 transition-all"
              >
                GITHUB
              </a>
              <a
                href={myLinkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E84A27] hover:scale-105 transition-all"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}