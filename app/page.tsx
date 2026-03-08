"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const VENTURES_DATA = [
  {
    id: "01",
    name: "WEATSO",
    category: "IT Consulting",
    short: "Arsitektur Sistem B2B",
    detail: "Membangun solusi perangkat lunak enterprise. Mengaudit dan mengeksekusi infrastruktur teknologi untuk efisiensi operasional.",
    link: "https://weatso.com",
    color: "bg-neutral-900 hover:bg-neutral-800 border-white/10",
    accent: "text-blue-500"
  },
  {
    id: "02",
    name: "EVORY",
    category: "Event Tech",
    short: "Sistem Manajemen Tamu",
    detail: "Digitalisasi pengalaman event. Dari registrasi pintar, QR check-in, hingga analitik kehadiran untuk penyelenggara acara.",
    link: "https://evory.com",
    color: "bg-neutral-900 hover:bg-neutral-800 border-white/10",
    accent: "text-purple-500"
  },
  {
    id: "03",
    name: "COLABZ",
    category: "Creative Studio",
    short: "Branding & UI/UX",
    detail: "Menerjemahkan visi bisnis menjadi identitas visual yang mematikan. Memastikan dominasi brand Anda di pasar digital.",
    link: "#",
    color: "bg-neutral-900 hover:bg-neutral-800 border-white/10",
    accent: "text-[#D4AF37]"
  }
];

export default function Home() {
  const [introPhase, setIntroPhase] = useState(0);
  const [activeVenture, setActiveVenture] = useState<number | null>(0);

  useEffect(() => {
    // Transisi cepat: 1.5 detik untuk wipe text, lalu transisi ke main content
    const t1 = setTimeout(() => setIntroPhase(1), 1500); 
    const t2 = setTimeout(() => setIntroPhase(2), 2200); 
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-[#ededed] selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- 1. INTRO: LOGO RAKSASA --- */}
      <AnimatePresence>
        {introPhase < 2 && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
            exit={{ backgroundColor: "rgba(5,5,5,0)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div 
              layoutId="brand-logo"
              // LOGO JAUH LEBIH BESAR SAAT INTRO
              className="relative w-40 h-40 md:w-64 md:h-64 mb-8"
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} 
            >
               <Image src="/Logo.png" alt="Anugerah Logo" fill className="object-contain" priority />
            </motion.div>

            <AnimatePresence>
              {introPhase === 0 && (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.5 }}
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-white text-lg md:text-2xl font-bold tracking-[0.4em] uppercase text-center ml-[0.4em]">
                    Anugerah Ventures
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introPhase === 2 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        
        {/* --- NAVBAR: LOGO KIRI ATAS + HOVER TEXT --- */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-center">
          {/* Group hover untuk trigger teks muncul di desktop */}
          <div className="group flex items-center gap-4 cursor-pointer relative">
            {introPhase === 2 && (
              <motion.div 
                layoutId="brand-logo" 
                // LOGO LEBIH BESAR DARI SEBELUMNYA DI NAVBAR
                className="relative w-16 h-16 md:w-20 md:h-20"
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                 <Image src="/Logo.png" alt="Anugerah Logo" fill className="object-contain object-left" />
              </motion.div>
            )}
            {/* Teks muncul saat hover (Hanya Desktop) */}
            <div className="hidden md:block overflow-hidden w-0 group-hover:w-auto transition-all duration-500 ease-out">
              <span className="whitespace-nowrap text-white font-bold text-sm tracking-[0.3em] pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase">
                Anugerah Ventures
              </span>
            </div>
          </div>

          <Link href="/access" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full uppercase tracking-widest bg-white/5 backdrop-blur-md">
            Partner Access
          </Link>
        </nav>

        {/* --- HERO SECTION: POSISI MD & VENTURE BUILDER --- */}
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
          <div className="max-w-5xl">
             <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }}
                className="text-[#D4AF37] font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
             >
                Strategic Venture Builder
             </motion.p>
             <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}
                className="text-4xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1] tracking-tighter uppercase mb-8"
             >
                Kami Mengeksekusi <br/> <span className="text-neutral-600">Visi & Finansial.</span>
             </motion.h1>
             
             <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4 }}
                className="max-w-2xl text-neutral-400 text-sm md:text-base leading-relaxed mb-12"
             >
                Anugerah bertindak sebagai Managing Director untuk seluruh ekosistem portofolio kami. Kami tidak sekadar membangun produk; kami menanamkan tata kelola finansial, arah strategis, dan arsitektur bisnis untuk memastikan dominasi pasar yang terukur.
             </motion.div>

             <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-2xl"
             >
                <div>
                   <span className="text-3xl font-bold text-white block">03</span>
                   <span className="text-xs text-neutral-500 uppercase tracking-widest">Active Portfolios</span>
                </div>
                <div>
                   <span className="text-3xl font-bold text-white block">Top</span>
                   <span className="text-xs text-neutral-500 uppercase tracking-widest">Management Level</span>
                </div>
             </motion.div>
          </div>
        </section>

        {/* --- THE MANIFESTO: FILOSOFI BRUTAL ANDA --- */}
        <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] relative border-t border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Filosofi 1: Anti-Alasan Modal */}
            <div>
              <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-4 block">01 / The Capital Fallacy</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Eksekusi Mengalahkan Alasan Modal.</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Kami muak dengan narasi bahwa modal adalah satu-satunya penghalang inovasi. Banyak yang mengklaim memiliki keahlian, tetapi bersembunyi di balik alasan "kurang dana". Jika Anda benar-benar memiliki eksekusi dan visi yang tajam, buktikan. Kami akan menyediakan sisanya.
              </p>
            </div>

            {/* Filosofi 2: Determinasi Mutlak (Terjemahan dari analogi pecandu) */}
            <div>
              <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-4 block">02 / Relentless Resourcefulness</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Determinasi Tanpa Kompromi.</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ketika seseorang memiliki obsesi absolut terhadap sebuah tujuan, tidak ada kata "mepet" atau "menunda". Segala cara yang rasional dan strategis akan ditempuh. Itulah DNA kami. Kami tidak mengenal jalan buntu. Apa yang kami targetkan untuk kami bangun, pasti akan kami wujudkan, apa pun harganya.
              </p>
            </div>

          </div>
        </section>

        {/* --- INTERACTIVE ECOSYSTEM GRID --- */}
        <section className="py-20 px-6 md:px-20 bg-[#050505] relative border-t border-white/5">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold block mb-4">Ecosystem</span>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Our Ventures.</h3>
            </div>
          </div>

          <LayoutGroup>
            <div className="flex flex-col lg:flex-row gap-2 w-full min-h-[500px] lg:h-[450px]">
              {VENTURES_DATA.map((venture, index) => {
                const isActive = activeVenture === index;

                return (
                  <motion.div
                    key={venture.id}
                    layout
                    onClick={() => setActiveVenture(index)}
                    onMouseEnter={() => setActiveVenture(index)}
                    className={`relative overflow-hidden rounded-sm border flex flex-col transition-all duration-500 cursor-pointer group
                      ${venture.color}
                      ${isActive ? "lg:w-[60%] flex-[3] lg:flex-none border-white/30 bg-neutral-800/50" : "lg:w-[20%] flex-[1] lg:flex-none opacity-60 hover:opacity-100"}
                    `}
                    transition={{ layout: { duration: 0.5, type: "spring", bounce: 0.15 } }}
                  >
                    <motion.div layout="position" className="p-6 md:p-8 flex justify-between items-start">
                      <div>
                        <span className="text-white/30 font-mono text-xs tracking-widest">{venture.id}</span>
                        <h4 className="text-2xl md:text-4xl font-black text-white mt-2 tracking-tighter">{venture.name}</h4>
                      </div>
                      <motion.div 
                         animate={{ rotate: isActive ? 0 : 45, opacity: isActive ? 1 : 0 }}
                         className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center ${venture.accent} bg-white/5`}
                      >
                         <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>

                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="p-6 md:p-8 pt-0 mt-auto flex flex-col gap-6"
                        >
                          <div>
                            <p className={`${venture.accent} text-xs font-bold tracking-[0.2em] uppercase mb-2`}>
                              {venture.category}
                            </p>
                            <p className="text-neutral-300 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                              {venture.detail}
                            </p>
                          </div>
                          
                          <Link 
                            href={venture.link} target="_blank"
                            className="inline-flex w-fit items-center gap-3 border-b border-white/20 pb-1 text-xs uppercase tracking-widest font-bold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                          >
                            Explore Platform <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                       <motion.div layout="position" className="hidden lg:block p-8 pt-0 mt-auto opacity-50 group-hover:opacity-100 transition-opacity">
                         <p className="text-xs uppercase tracking-widest text-white/50">{venture.short}</p>
                       </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </LayoutGroup>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-12 border-t border-white/10 text-center flex flex-col items-center justify-center relative z-20">
           <h2 className="text-[10vw] font-black text-[#0f0f0f] leading-none select-none tracking-tighter">ANUGERAH</h2>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <p className="text-xs text-neutral-500 tracking-[0.3em] uppercase mix-blend-difference">© 2026 Anugerah Ventures. Execution Over Excuses.</p>
           </div>
        </footer>

      </motion.div>
    </main>
  );
}