"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [openExpertise, setOpenExpertise] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [quickActionOpen, setQuickActionOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 600, y: 350 });
  const [sysTime, setSysTime] = useState("21:00:00 WIB");

  // State untuk Mode Background Cyberpunk Interaktif
  const [cyberOverdrive, setCyberOverdrive] = useState(false);

  // State untuk Interactive CLI Terminal Modal
  const [cliOpen, setCliOpen] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState([
    { type: "system", text: "MRR CYBER-OS v4.5 — Neural Developer Terminal" },
    { type: "system", text: "Ketik 'help' untuk melihat daftar perintah sistem." }
  ]);

  // Pelacak Kursor & Jam Real-Time WIB
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

  // Kalkulasi Parallax Background Mengikuti Kursor Mouse
  const moveX =
    typeof window !== "undefined"
      ? ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * 35
      : 0;
  const moveY =
    typeof window !== "undefined"
      ? ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * 25
      : 0;

  // ================= DATA PRIBADI =================
  const whatsappNumber = "6282246971567";
  const whatsappMessage = encodeURIComponent(
    "Halo Rafi, saya melihat portofolio Cyberpunk Anda dan tertarik untuk berdiskusi."
  );

  const myEmail = "rafi25ramadhan@gmail.com";
  const myLinkedin =
    "https://www.linkedin.com/in/muhamad-rafi-ramadhan-955ba82ab";
  const myGithub = "https://github.com/raraanyway";

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Mobile & Native",
    "Backend & DB",
    "Tools & DevOps"
  ];

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
      desc: "Utility-first responsive layouts, custom neon tokens, and fluid editorial micro-interactions."
    },
    {
      code: "05",
      name: "Mobile UX & Theming",
      category: "Mobile & Native",
      level: "88%",
      customSvg: "mobile",
      desc: "Adaptive UI patterns, fluid screen responsiveness, and modern cyberpunk/dark user theming."
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

  const expertiseList = [
    {
      id: 0,
      code: "SYS // 01",
      title: "Frontend & Responsive Web Development",
      description:
        "Menguasai pengembangan antarmuka web modern menggunakan HTML5 semantik, JavaScript (ES6+), serta framework terdepan seperti React.js dan Next.js. Implementasi desain responsif dikombinasikan secara optimal menggunakan utility-first Tailwind CSS untuk menghasilkan layout yang cepat, fleksibel, estetis, dan memiliki aksesibilitas (a11y) tinggi di berbagai ukuran layar perangkat.",
      tags: ["HTML5", "JavaScript (ES6+)", "React & Next.js", "Tailwind CSS"]
    },
    {
      id: 1,
      code: "SYS // 02",
      title: "Mobile App Interface & Cross-Platform UX",
      description:
        "Merancang struktur navigasi dan pola tata letak antarmuka aplikasi mobile yang intuitif dan adaptif. Berfokus pada fluiditas sentuhan (touch gestures), manajemen status komponen yang reaktif, serta penerapan konsistensi tema visual terang dan gelap guna memberikan kenyamanan optimal bagi pengguna perangkat bergerak (mobile users).",
      tags: ["Mobile UX", "Responsive UI", "State Management", "Dark/Light Theming"]
    },
    {
      id: 2,
      code: "SYS // 03",
      title: "Backend & RESTful API Engineering",
      description:
        "Membangun logika server-side yang tangguh, aman, dan modular menggunakan ekosistem PHP dengan framework Laravel serta JavaScript via Node.js dan Express.js. Berpengalaman dalam merancang arsitektur MVC, sistem autentikasi pengguna yang aman, middleware pipelines, serta pengelolaan endpoint REST API untuk pertukaran data yang efisien.",
      tags: ["PHP & Laravel", "Express.js & Node.js", "MVC Architecture", "REST API"]
    },
    {
      id: 3,
      code: "SYS // 04",
      title: "Database Design & Relational Modeling",
      description:
        "Merancang struktur basis data relasional yang efisien dan ternormalisasi menggunakan MySQL serta embedded storage SQLite. Menerapkan strategi pengindeksan terarah, pemeliharaan integritas transaksi ACID, optimalisasi query SQL kompleks, serta penerjemahan kebutuhan alur operasional bisnis nyata menjadi skema tabel yang terstruktur rapi.",
      tags: ["MySQL", "SQLite", "Database Indexing", "ACID Transactions"]
    },
    {
      id: 4,
      code: "SYS // 05",
      title: "Version Control, Tooling & Bundlers",
      description:
        "Mengelola siklus hidup kode sumber dan kolaborasi tim secara profesional menggunakan alur kerja Git & GitHub (branching strategy, atomic commits, dan merge conflict resolution). Memanfaatkan bundler berperangkat tinggi seperti Vite dan Next.js untuk mempercepat proses Hot Module Replacement (HMR) serta mengotomasi optimasi build menuju tahap produksi.",
      tags: ["Git & GitHub", "Vite Bundler", "Next.js Pipeline", "Clean Code"]
    }
  ];

  const projects = [
    {
      id: "laundry",
      code: "NODE // 01",
      title: "R&F Express – Laundry Operating System & Kanban Tracker",
      subtitle: "Web Application • Operations",
      category: "Full-Stack Web",
      stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      description:
        "Sistem informasi binatu komprehensif yang mengintegrasikan pelacakan cucian real-time melalui papan Kanban visual, rekapitulasi data kasir otomatis, dan perhitungan beban inventaris harian.",
      githubUrl: myGithub
    },
    {
      id: "unitrade",
      code: "NODE // 02",
      title: "UniTrade – Campus E-Commerce & Student Trading Forum",
      subtitle: "Mobile Application • Community Marketplace",
      category: "Mobile Platform",
      stack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
      description:
        "Aplikasi mobile marketplace dan forum jual-beli khusus civitas kampus untuk transaksi barang bekas terverifikasi, modul ajar, dan perlengkapan perkuliahan secara aman antar mahasiswa/i.",
      githubUrl: "https://github.com/raraanyway/UniTrade"
    }
  ];

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

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [
      ...cliHistory,
      { type: "user", text: `rafi@cyber-os:~$ ${cliInput}` }
    ];

    if (cmd === "help") {
      newHistory.push({
        type: "output",
        text: "Perintah tersedia: about | skills | projects | overdrive | location | whatsapp | contact | clear"
      });
    } else if (cmd === "about") {
      newHistory.push({
        type: "output",
        text: "Muhamad Rafi Ramadhan — Web & Mobile Developer, Mahasiswa aktif S1 Sistem Informasi."
      });
    } else if (cmd === "skills") {
      newHistory.push({
        type: "output",
        text: "11 Core Skills: HTML5, JS (ES6+), React/Next.js, Tailwind, Mobile UX, PHP/Laravel, Express/Node, MySQL/SQLite, REST API, Git/GitHub, Vite/Bundlers."
      });
    } else if (cmd === "projects") {
      newHistory.push({
        type: "output",
        text: "1. R&F Express Laundry OS | 2. UniTrade Mobile E-Commerce App"
      });
    } else if (cmd === "overdrive" || cmd === "robot") {
      setCyberOverdrive(!cyberOverdrive);
      newHistory.push({
        type: "output",
        text: `Cyberpunk Background Overdrive: ${!cyberOverdrive ? "AKTIF (HIGH GLOW)" : "NORMAL"}`
      });
    } else if (cmd === "location") {
      newHistory.push({
        type: "output",
        text: "Domisili: Jakarta Selatan, DKI Jakarta, Indonesia."
      });
    } else if (cmd === "whatsapp" || cmd === "wa") {
      newHistory.push({
        type: "output",
        text: "Membuka jalur komunikasi WhatsApp..."
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
    <div className="min-h-screen bg-[#05020A] text-[#F5F0FF] selection:bg-[#EC4899] selection:text-white relative overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* LAYER BACKGROUND INTERAKTIF: ROBOT 1, ROBOT 2, ROBOT 3 SEBAGAI AMBIENT BG */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Cahaya Nebula Ungu & Crimson Red */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-700/30 via-fuchsia-600/20 to-transparent blur-[160px]" />
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-red-600/30 via-pink-600/20 to-transparent blur-[160px]" />
        <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-800/30 via-rose-600/20 to-transparent blur-[150px]" />

        {/* 1. BACKGROUND KANAN ATAS: ROBOT 1 (ANDROID PEMEGANG TABLET) */}
        {/* Menggunakan mix-blend-luminosity + radial-gradient mask agar background kotak-kotak putih hilang menyatu */}
        <div
          style={{
            transform: `translate(${moveX * -1.2}px, ${moveY * -1.2}px) scale(${cyberOverdrive ? 1.08 : 1})`,
            transition: "transform 0.25s ease-out",
            WebkitMaskImage: "radial-gradient(circle at 55% 45%, black 25%, transparent 72%)",
            maskImage: "radial-gradient(circle at 55% 45%, black 25%, transparent 72%)"
          }}
          className={`absolute -right-16 sm:-right-6 top-6 w-[440px] sm:w-[620px] h-[480px] sm:h-[650px] transition-opacity duration-500 ${
            cyberOverdrive ? "opacity-55" : "opacity-30"
          }`}
        >
          <img
            src="/robot1.jpg"
            alt=""
            className="w-full h-full object-cover object-center mix-blend-luminosity contrast-150 brightness-75 filter hue-rotate-[260deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#05020A] via-purple-600/40 to-red-500/40 mix-blend-color" />
        </div>

        {/* 2. BACKGROUND KIRI TENGAH: ROBOT 2 (WAJAH WIREFRAME AI & KODE BINER) */}
        <div
          style={{
            transform: `translate(${moveX * 1.1}px, ${moveY * 0.9}px) scale(${cyberOverdrive ? 1.06 : 1})`,
            transition: "transform 0.25s ease-out",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
            maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)"
          }}
          className={`absolute -left-24 sm:-left-10 top-[28%] w-[460px] sm:w-[680px] h-[420px] sm:h-[560px] transition-opacity duration-500 ${
            cyberOverdrive ? "opacity-60" : "opacity-35"
          }`}
        >
          <img
            src="/robot2.jpg"
            alt=""
            className="w-full h-full object-cover object-center mix-blend-screen contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/45 via-pink-500/35 to-red-600/30 mix-blend-color" />
        </div>

        {/* 3. BACKGROUND KANAN BAWAH: ROBOT 3 (JABAT TANGAN WIREFRAME CYBERNETIC) */}
        <div
          style={{
            transform: `translate(${moveX * -0.9}px, ${moveY * 1.2}px) scale(${cyberOverdrive ? 1.06 : 1})`,
            transition: "transform 0.25s ease-out",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
            maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)"
          }}
          className={`absolute right-0 sm:right-10 bottom-[-40px] w-[460px] sm:w-[680px] h-[400px] sm:h-[520px] transition-opacity duration-500 ${
            cyberOverdrive ? "opacity-60" : "opacity-35"
          }`}
        >
          <img
            src="/robot3.jpg"
            alt=""
            className="w-full h-full object-cover object-center mix-blend-screen contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/40 via-pink-600/35 to-purple-600/40 mix-blend-color" />
        </div>

        {/* Bintang Neon Berkelap-kelip */}
        <div className="absolute top-24 left-[12%] w-2.5 h-2.5 rounded-full bg-pink-500 star-neon-1" />
        <div className="absolute top-44 right-[22%] w-2 h-2 rounded-full bg-purple-400 star-neon-2" />
        <div className="absolute top-1/3 left-[38%] w-2.5 h-2.5 rounded-full bg-red-500 star-neon-3" />
        <div className="absolute top-[58%] right-[14%] w-2.5 h-2.5 rounded-full bg-fuchsia-400 star-neon-1" />
        <div className="absolute bottom-28 left-[18%] w-2 h-2 rounded-full bg-rose-500 star-neon-2" />
        <div className="absolute top-[22%] right-[9%] w-2.5 h-2.5 rounded-full bg-purple-500 star-neon-3" />
      </div>

      {/* ================= DYNAMIC INTERACTIVE MOUSE GLOW & CYBER GRID ================= */}
      <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0" />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.18), rgba(239, 68, 68, 0.08) 40%, transparent 75%)`
        }}
      />

      {/* ================= TOP CYBERPUNK HUD BAR ================= */}
      <div className="sticky top-0 z-40 bg-[#080312]/80 backdrop-blur-xl border-b border-purple-500/30 px-4 py-2.5 shadow-[0_4px_30px_rgba(168,85,247,0.15)]">
        <div className="max-w-[1220px] mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-0.5 rounded bg-gradient-to-r from-purple-600/30 to-red-600/30 text-pink-400 border border-pink-500/50 font-bold shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              SYS.PORTFOLIO // v4.5
            </span>
            <span className="text-purple-300/70 hidden sm:inline">
              LOC: JAKARTA_SELATAN // ID
            </span>
          </div>

          <div className="flex items-center gap-4 text-purple-200">
            {/* Tombol Interaktif untuk Memperjelas Background Robot */}
            <button
              onClick={() => setCyberOverdrive(!cyberOverdrive)}
              className={`px-3 py-0.5 rounded border text-[10px] font-bold transition cursor-pointer ${
                cyberOverdrive
                  ? "bg-red-600 text-white border-red-400 shadow-[0_0_15px_#EF4444]"
                  : "bg-purple-950/70 text-pink-300 border-pink-500/40 hover:border-pink-400"
              }`}
            >
              {cyberOverdrive ? "⚡ BG_ROBOT: HIGH_GLOW" : "👁️ BG_ROBOT: AMBIENT"}
            </button>
            <span className="text-pink-400 font-bold">{sysTime}</span>
            <span className="hidden md:inline text-emerald-400 font-semibold">
              ● ONLINE
            </span>
          </div>
        </div>
      </div>

      {/* ================= FLOATING CLI TERMINAL BUTTON (KIRI BAWAH) ================= */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setCliOpen(!cliOpen)}
          className="group px-5 py-3 rounded-xl bg-[#0F071E]/95 backdrop-blur-md text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2.5 text-xs font-mono-tech font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:to-red-600 hover:scale-105 active:scale-95 transition-all duration-300 border border-purple-500/50 cursor-pointer"
        >
          <span className="text-pink-400 group-hover:text-white">&gt;_</span>
          <span>CYBER_TERMINAL</span>
        </button>
      </div>

      {/* ================= MODAL INTERACTIVE CLI TERMINAL ================= */}
      {cliOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0516] border-2 border-purple-500/60 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.35)] font-mono-tech text-xs relative">
            <div className="bg-gradient-to-r from-[#1A0B2E] to-[#2A081C] px-4 py-3 flex items-center justify-between border-b border-purple-500/30">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCliOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 cursor-pointer"
                />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-pink-300 font-bold text-[11px]">
                  rafi@cyber-os: ~
                </span>
              </div>
              <button
                onClick={() => setCliOpen(false)}
                className="text-purple-300 hover:text-red-400 text-xs font-bold cursor-pointer"
              >
                ESC ✕
              </button>
            </div>

            <div className="p-5 h-64 overflow-y-auto space-y-2 text-purple-200">
              {cliHistory.map((item, i) => (
                <div
                  key={i}
                  className={
                    item.type === "user"
                      ? "text-white font-bold"
                      : item.type === "error"
                      ? "text-red-400"
                      : item.type === "system"
                      ? "text-pink-400 font-bold"
                      : "text-cyan-300"
                  }
                >
                  {item.text}
                </div>
              ))}
              <form
                onSubmit={handleCliSubmit}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-pink-500 font-bold">
                  rafi@cyber-os:~$
                </span>
                <input
                  type="text"
                  autoFocus
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="ketik 'help' atau 'overdrive' lalu Enter..."
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
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] text-white rounded-xl shadow-xl text-xs font-mono-tech font-bold hover:bg-[#20ba59] hover:scale-105 transition-all"
          >
            <span>💬</span>
            <span>Chat WhatsApp</span>
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#140826] border border-purple-500/40 rounded-xl shadow-xl text-xs font-mono-tech font-bold text-white hover:border-pink-500 hover:text-pink-400 hover:scale-105 transition-all cursor-pointer"
          >
            <span>{copied ? "✓" : "📋"}</span>
            <span>{copied ? "Email Tersalin!" : "Salin Email"}</span>
          </button>
          <a
            href={myGithub}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#140826] border border-purple-500/40 rounded-xl shadow-xl text-xs font-mono-tech font-bold text-white hover:border-pink-500 hover:text-pink-400 hover:scale-105 transition-all"
          >
            <span>🌿</span>
            <span>Kunjungi GitHub</span>
          </a>
        </div>

        <button
          onClick={() => setQuickActionOpen(!quickActionOpen)}
          aria-label="Toggle Quick Action"
          className="w-13 h-13 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)] flex items-center justify-center text-xl font-bold hover:scale-110 active:scale-90 transition-all duration-300 border border-white/30 cursor-pointer"
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

      {/* ================= MAIN CONTAINER (GLASSMORPHISM AGAR BG ROBOT TERLIHAT) ================= */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        
        {/* ================= CYBERPUNK HERO SECTION ================= */}
        <section
          id="about"
          className="bg-[#0B0418]/70 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-[0_0_80px_-15px_rgba(168,85,247,0.4)] border border-purple-500/35 relative"
        >
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-pink-500 pointer-events-none z-20" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-500 pointer-events-none z-20" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400 pointer-events-none z-20" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-pink-500 pointer-events-none z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px]">
            
            {/* KOLOM KIRI: IDENTITAS & BIO */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center text-white font-cyber font-black text-sm tracking-tighter shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                      MRR
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-pink-400 block font-bold">
                        FIG. 01 // DEVELOPER UNIT
                      </span>
                      <span className="text-xs font-mono-tech text-purple-200/80">
                        Jakarta Selatan • Indonesia
                      </span>
                    </div>
                  </div>

                  <nav className="flex flex-wrap items-center gap-4 text-xs font-mono-tech font-bold uppercase tracking-wider">
                    <a href="#skills" className="text-purple-200 hover:text-pink-400 transition">
                      Skills
                    </a>
                    <a href="#expertise" className="text-purple-200 hover:text-pink-400 transition">
                      Focus
                    </a>
                    <a href="#projects" className="text-purple-200 hover:text-pink-400 transition">
                      Projects
                    </a>
                    <a
                      href="#contact"
                      className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:scale-105 transition"
                    >
                      Contact
                    </a>
                  </nav>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-pink-500/40 text-pink-400 text-[11px] font-mono-tech font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                  <span>⚡</span> FULL-STACK WEB &amp; MOBILE DEVELOPER
                </div>

                <div className="mt-5 relative">
                  <h1 className="font-cyber text-4xl sm:text-6xl lg:text-[62px] font-black uppercase leading-[0.95] tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.45)]">
                      Muhamad Rafi
                    </span>
                    <br />
                    <span className="text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      Ramadhan
                    </span>
                  </h1>
                </div>

                <p className="mt-6 text-purple-100/85 text-sm sm:text-base leading-relaxed text-justify max-w-xl font-normal">
                  Mahasiswa aktif S1 Sistem Informasi yang berfokus mengembangkan aplikasi web dan mobile modern, merancang arsitektur database yang solid, serta membangun antarmuka pengguna yang intuitif end-to-end.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-xs font-cyber font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_45px_rgba(239,68,68,0.75)] hover:-translate-y-0.5 transition-all"
                  >
                    Explore System ↓
                  </a>
                  <a
                    href="/cv.pdf"
                    download="CV_Muhamad_Rafi_Ramadhan.pdf"
                    className="px-6 py-3.5 rounded-xl bg-[#170B2C]/90 text-purple-100 border border-purple-500/40 text-xs font-mono-tech font-bold uppercase tracking-widest hover:bg-purple-900/40 hover:border-pink-500 transition-all"
                  >
                    📄 Download CV
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <span className="text-[10px] font-mono-tech font-bold text-pink-400 uppercase tracking-widest block mb-3">
                  // CORE NEURAL STACK
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono-tech font-semibold">
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
                      className="px-3 py-1.5 bg-[#160A2A]/90 text-purple-100 rounded-lg border border-purple-500/30 hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: FOTO PROFIL ASLI DENGAN BINGKAI HOLOGRAM CYBERPUNK */}
            {/* Transparan agar siluet Robot 1 di background tetap tembus terlihat */}
            <div className="lg:col-span-5 bg-gradient-to-b from-purple-950/35 via-pink-950/25 to-red-950/35 p-8 sm:p-10 flex flex-col justify-between items-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-purple-500/30">
              
              {/* Garis Neon Horizontal Cyberpunk ala Dozfx */}
              <div className="absolute inset-x-0 top-14 space-y-3 pointer-events-none opacity-45">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[1px]" />
                <div className="h-2.5 w-4/5 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[2px]" />
              </div>

              <div className="w-full relative z-10 flex items-center justify-between text-[11px] font-mono-tech">
                <span className="px-2.5 py-1 rounded bg-black/50 border border-pink-500/40 text-pink-400 font-bold">
                  ID // M_RAFI_R
                </span>
                <span className="text-emerald-400 font-bold">
                  ● VERIFIED_DEV
                </span>
              </div>

              {/* Bingkai Lingkaran Hologram Foto Profil */}
              <div className="my-8 relative flex items-center justify-center group">
                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-pink-500/45 animate-orbit-cw pointer-events-none" />
                <div className="absolute w-80 h-80 sm:w-88 sm:h-88 rounded-full border border-purple-500/25 animate-orbit-ccw pointer-events-none" />

                <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-full p-2 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 shadow-[0_0_50px_rgba(236,72,153,0.5)] relative z-10">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0414] relative">
                    <img
                      src="/fotoprofile.jpg"
                      alt="Muhamad Rafi Ramadhan"
                      className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="w-full relative z-10 bg-black/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-pink-500/40 flex items-center justify-between font-mono-tech text-xs">
                <span className="text-purple-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available for Work
                </span>
                <span className="text-pink-400 font-bold">Jakarta Selatan</span>
              </div>

            </div>
          </div>
        </section>

        {/* ================= RUNNING CYBERPUNK TICKER ================= */}
        <div className="mt-6 bg-[#0D051D]/80 backdrop-blur-md border border-purple-500/30 rounded-xl py-3 overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <div className="animate-marquee-hud font-cyber text-[11px] uppercase tracking-[0.25em] text-purple-300">
            <div className="flex items-center gap-8 px-4 shrink-0">
              <span className="text-pink-500 font-bold">
                FULL-STACK WEB DEVELOPMENT
              </span>
              <span>⚡</span>
              <span>NEXT.JS &amp; REACT ECOSYSTEM</span>
              <span>⚡</span>
              <span className="text-red-500 font-bold">
                MOBILE APPLICATION UI/UX
              </span>
              <span>⚡</span>
              <span>PHP LARAVEL &amp; NODE.JS</span>
              <span>⚡</span>
              <span className="text-purple-400 font-bold">
                MYSQL &amp; SQLITE ARCHITECTURE
              </span>
              <span>⚡</span>
              <span>S1 SISTEM INFORMASI</span>
              <span>⚡</span>
            </div>
            <div className="flex items-center gap-8 px-4 shrink-0">
              <span className="text-pink-500 font-bold">
                FULL-STACK WEB DEVELOPMENT
              </span>
              <span>⚡</span>
              <span>NEXT.JS &amp; REACT ECOSYSTEM</span>
              <span>⚡</span>
              <span className="text-red-500 font-bold">
                MOBILE APPLICATION UI/UX
              </span>
              <span>⚡</span>
              <span>PHP LARAVEL &amp; NODE.JS</span>
              <span>⚡</span>
              <span className="text-purple-400 font-bold">
                MYSQL &amp; SQLITE ARCHITECTURE
              </span>
              <span>⚡</span>
              <span>S1 SISTEM INFORMASI</span>
              <span>⚡</span>
            </div>
          </div>
        </div>

        {/* ================= SKILLS & TECHNICAL TOOLKIT ================= */}
        <section
          id="skills"
          className="mt-12 bg-[#0B0418]/70 backdrop-blur-md rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-purple-500/30 scroll-mt-20 relative"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-widest font-extrabold text-pink-400 bg-pink-500/10 px-3.5 py-1 rounded border border-pink-500/30">
              System Capabilities
            </span>
            <h2 className="font-cyber text-3xl sm:text-4xl font-black text-white tracking-tight mt-3 uppercase">
              Skills &amp; Technical Toolkit
            </h2>
            <p className="mt-2 text-sm text-purple-200/70 leading-relaxed">
              Kompilasi bahasa pemrograman, framework, arsitektur basis data, dan
              perangkat rekayasa perangkat lunak yang saya gunakan.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-bold border hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                    : "bg-[#150928]/80 text-purple-200 border-purple-500/30 hover:border-pink-500 hover:text-white"
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
                className="bg-[#120724]/80 backdrop-blur-sm border border-purple-500/25 rounded-2xl p-6 flex flex-col justify-between hover:border-pink-500 hover:shadow-[0_0_35px_rgba(236,72,153,0.25)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-pink-500/25 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {skill.logos ? (
                        skill.logos.map((logoUrl, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-xl bg-[#1D0C36] border border-purple-500/30 p-2 flex items-center justify-center group-hover:border-pink-500 group-hover:scale-110 transition-all"
                          >
                            <img
                              src={logoUrl}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-[#1D0C36] border border-purple-500/30 p-2 flex items-center justify-center text-pink-400 font-mono-tech font-bold">
                          ⚡
                        </div>
                      )}
                    </div>

                    <span className="text-xs font-mono-tech font-bold text-pink-400 bg-pink-500/10 border border-pink-500/30 px-2.5 py-1 rounded-md">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-cyber font-bold text-white text-base group-hover:text-pink-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono-tech font-extrabold text-purple-400 uppercase tracking-wider block mb-2">
                    {skill.category}
                  </span>

                  <p className="text-xs text-purple-200/75 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-500/20">
                  <div className="w-full bg-black/60 rounded-full h-2 overflow-hidden p-0.5 border border-purple-500/30">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-full rounded-full shadow-[0_0_12px_#EC4899]"
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
          className="mt-12 bg-[#0A0415]/70 backdrop-blur-md text-white rounded-[2rem] p-8 sm:p-12 lg:p-14 shadow-2xl border border-purple-500/30 relative overflow-hidden"
        >
          <div className="pb-10 border-b border-purple-500/25 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
            <div className="shrink-0">
              <span className="inline-flex items-center text-xs font-mono-tech uppercase tracking-widest font-extrabold text-pink-400 bg-pink-500/10 px-3.5 py-1 rounded border border-pink-500/30">
                Technical Focus // Neural Mesh
              </span>
            </div>
            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed max-w-2xl m-0">
              Pendekatan komprehensif dalam rekayasa perangkat lunak—mencakup
              pengembangan antarmuka reaktif, arsitektur backend andal,
              perancangan basis data relasional, hingga manajemen versi kode
              sumber berstandar industri.
            </p>
          </div>

          <div className="divide-y divide-purple-500/20 mt-4">
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
                      <span className="text-xs font-mono-tech text-pink-400 px-2.5 py-1 rounded bg-pink-500/10 border border-pink-500/30">
                        {item.code}
                      </span>
                      <h3
                        className={`font-cyber text-lg sm:text-2xl font-bold transition-colors ${
                          isOpen
                            ? "text-pink-400"
                            : "text-purple-100 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xl font-mono-tech transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-pink-500"
                          : "text-purple-400 group-hover:translate-y-1"
                      }`}
                    >
                      ↓
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-5 pt-2 space-y-4">
                      <p className="text-purple-200/85 text-sm leading-relaxed max-w-4xl text-justify">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono-tech px-3 py-1 bg-[#180A2E] border border-pink-500/40 rounded-md text-pink-300"
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
              <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-pink-400">
                // DEPLOYED_SYSTEMS
              </span>
              <h2 className="font-cyber text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                Aplikasi Pilihan &amp; Hasil Karya
              </h2>
            </div>
            <span className="text-xs font-mono-tech text-purple-300/70">
              VERIFIED REPOSITORIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#0D061C]/75 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-purple-500/30 hover:border-pink-500 shadow-xl hover:shadow-[0_0_50px_rgba(236,72,153,0.25)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#16082B]/90 via-[#0B0415]/90 to-[#260720]/90 rounded-2xl border border-purple-500/30 p-8 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:border-pink-500 transition-colors">
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-pink-500/20 to-transparent animate-scanline pointer-events-none" />

                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono-tech font-bold px-2.5 py-1 rounded bg-purple-950/90 text-purple-200 border border-purple-500/40">
                        {proj.code}
                      </span>
                      <span className="text-[10px] font-mono-tech font-extrabold uppercase px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-red-600 text-white shadow">
                        {proj.category}
                      </span>
                    </div>

                    <div className="my-auto flex items-center justify-center py-4 z-10 group-hover:scale-110 transition-transform duration-500">
                      {proj.id === "laundry" ? (
                        <div className="text-center">
                          <span className="font-cyber text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                            R&amp;F EXPRESS
                          </span>
                          <span className="block text-[10px] font-mono-tech text-purple-300 tracking-widest mt-1">
                            KANBAN LAUNDRY OS
                          </span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="font-cyber text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-amber-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                            UNITRADE
                          </span>
                          <span className="block text-[10px] font-mono-tech text-pink-300 tracking-widest mt-1">
                            CAMPUS MARKETPLACE
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-purple-500/20 text-[11px] font-mono-tech text-purple-300 z-10">
                      <span>Status: Production Ready</span>
                      <span className="text-pink-400 font-bold">
                        Source Code ↗
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-pink-400">
                    {proj.subtitle}
                  </span>

                  <h3 className="font-cyber text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-pink-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-purple-200/75 text-xs sm:text-sm leading-relaxed text-justify">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-purple-500/20 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[11px] font-mono-tech text-purple-200 bg-[#180A2D] border border-purple-500/30 px-2.5 py-0.5 rounded"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-mono-tech font-bold text-white bg-gradient-to-r from-purple-600 to-red-600 px-4 py-2 rounded-xl hover:opacity-95 flex items-center gap-1.5 shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
                  >
                    Buka GitHub <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WORKFLOW & BANNER KONTAK ================= */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflows.map((wf, idx) => (
              <div
                key={idx}
                className="bg-[#0C051A]/75 backdrop-blur-md rounded-3xl p-7 border border-purple-500/30 hover:border-pink-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-cyber text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
                      {wf.step}
                    </span>
                    <span className="text-[10px] font-mono-tech font-extrabold uppercase tracking-wider px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/30">
                      {wf.phase}
                    </span>
                  </div>
                  <h3 className="font-cyber text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                    {wf.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-purple-200/75 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono-tech text-purple-400">
                  <span>Standardized Protocol</span>
                  <span className="text-emerald-400 font-bold">● Verified</span>
                </div>
              </div>
            ))}
          </div>

          <div
            id="contact"
            className="mt-10 bg-[#0C051A]/75 backdrop-blur-md rounded-[2rem] p-8 sm:p-12 border-2 border-purple-500/50 animate-pulse-cyber grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-20"
          >
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono-tech font-extrabold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded border border-pink-500/30">
                // NEURAL HANDSHAKE PROTOCOL
              </span>
              <h3 className="font-cyber text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight uppercase">
                Mari Bangun Sistem Aplikasi Anda Berikutnya
              </h3>
              <p className="text-purple-200/80 text-xs sm:text-sm leading-relaxed text-justify">
                Terbuka untuk peluang kerja Full-Time, Part-Time, Magang, maupun
                kolaborasi pengembangan proyek Web &amp; Mobile di area Jakarta
                Selatan dan sekitarnya.
              </p>
              <div className="pt-2 space-y-2 text-xs font-mono-tech text-purple-200">
                <p>📍 Jakarta Selatan, DKI Jakarta, Indonesia</p>
                <p>🎓 Undergraduate in Information Systems (S1 Sistem Informasi)</p>
              </div>
              <div className="pt-3 flex flex-wrap gap-3 font-mono-tech">
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
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#190B2E] text-white border border-purple-500/40 rounded-xl text-xs font-bold hover:bg-pink-600 hover:border-pink-500 transition-all shadow-lg"
                >
                  <span>✉️</span> Email Saya
                </a>
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
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-[#150826]/90 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-pink-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#150826]/90 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-pink-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                    Detail Pesan / Tawaran Proyek
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Halo Rafi, kami tertarik untuk mendiskusikan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#150826]/90 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-pink-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-cyber font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-95 shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all cursor-pointer"
                >
                  Transmit Message →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-16 bg-[#080311]/80 backdrop-blur-md text-purple-300/70 rounded-3xl p-8 sm:p-12 shadow-2xl border border-purple-500/25">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-purple-500/20">
            <div>
              <p className="text-xs text-white font-cyber font-bold tracking-wider">
                © 2026 MUHAMAD RAFI RAMADHAN // ALL RIGHTS RESERVED.
              </p>
              <p className="text-[11px] font-mono-tech text-pink-400 mt-1">
                CYBERPUNK NEURAL PORTFOLIO EDITION
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-mono-tech font-semibold text-purple-200">
              <a href="#about" className="hover:text-pink-400 transition">
                Home
              </a>
              <a href="#skills" className="hover:text-pink-400 transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-pink-400 transition">
                Projects
              </a>
              <a href="#expertise" className="hover:text-pink-400 transition">
                Focus
              </a>
              <a href="#contact" className="hover:text-pink-400 transition">
                Contact
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-tech">
            <span className="text-purple-400 text-[11px]">
              Jakarta Selatan, DKI Jakarta, Indonesia
            </span>

            <div className="flex flex-wrap items-center gap-6 text-purple-200 text-xs font-bold tracking-wider">
              <a
                href={`mailto:${myEmail}`}
                className="hover:text-pink-400 transition-all"
              >
                EMAIL
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#25D366] transition-all font-bold"
              >
                WHATSAPP
              </a>
              <a
                href={myGithub}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition-all"
              >
                GITHUB
              </a>
              <a
                href={myLinkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition-all"
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