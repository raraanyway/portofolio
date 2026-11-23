"use client";
import { useState, useEffect } from "react";

export default function MaintenancePage() {
  const [sysTime, setSysTime] = useState("00:00:00 WIB");
  const progress = 68;

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setSysTime(`${now.toTimeString().split(" ")[0]} WIB`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "6282246971567";
  const whatsappMessage = encodeURIComponent(
    "Halo Rafi, saya melihat halaman pembaruan portofolio Anda dan ingin berdiskusi."
  );

  return (
    <main className="min-h-screen bg-[#06030C] text-[#F5F0FF] flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden selection:bg-pink-500 selection:text-white">
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 cyber-grid-bg pointer-events-none opacity-60" />
      <div className="fixed top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-red-600/20 blur-[150px] pointer-events-none" />

      {/* Top Bar */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between text-[11px] font-mono-tech uppercase tracking-widest text-purple-300/80 border-b border-purple-500/25 pb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-pink-400 font-bold">RAFI // UNDER_MAINTENANCE</span>
        </div>
        <span className="text-purple-200 font-semibold">{sysTime}</span>
      </header>

      {/* Center Maintenance Card */}
      <section className="max-w-2xl w-full mx-auto my-auto py-12 relative z-10">
        <div className="bg-[#0C051A]/90 backdrop-blur-xl border border-purple-500/40 rounded-3xl p-8 sm:p-12 shadow-[0_0_70px_-15px_rgba(236,72,153,0.35)] relative overflow-hidden">
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-pink-500" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-red-500" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/90 border border-pink-500/40 text-pink-400 text-[11px] font-mono-tech font-bold uppercase tracking-widest mb-6">
            <span>⚡</span> PORTFOLIO UPDATE
          </div>

          <h1 className="font-cyber text-3xl sm:text-5xl font-black uppercase leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Sedang Diperbarui
            </span>
          </h1>

          <p className="mt-4 text-purple-200/80 text-sm sm:text-base leading-relaxed">
            Portofolio <strong className="text-white">Muhamad Rafi Ramadhan</strong> sedang dalam tahap perombakan tampilan dan tata letak. Silakan hubungi kanal di bawah jika ada keperluan mendesak.
          </p>

          {/* Progress Bar */}
          <div className="mt-8 space-y-2 font-mono-tech text-xs">
            <div className="flex justify-between text-purple-300">
              <span>PROSES PENYUSUNAN TATA LETAK</span>
              <span className="text-pink-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-black/70 rounded-full p-0.5 border border-purple-500/30 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-[0_0_15px_#EC4899] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="mt-8 pt-6 border-t border-purple-500/20 flex flex-wrap items-center gap-3 font-mono-tech text-xs font-bold">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition shadow-lg"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://github.com/raraanyway"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#160A2A] border border-purple-500/40 text-purple-100 hover:border-pink-500 hover:text-pink-400 transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-rafi-ramadhan-955ba82ab"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#160A2A] border border-purple-500/40 text-purple-100 hover:border-pink-500 hover:text-pink-400 transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto text-center text-[11px] font-mono-tech text-purple-400/60 border-t border-purple-500/20 pt-4 relative z-10">
        © 2026 MUHAMAD RAFI RAMADHAN • JAKARTA SELATAN, INDONESIA
      </footer>
    </main>
  );
}