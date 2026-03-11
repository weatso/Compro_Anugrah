"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- DATA: 5 ACTIVE VENTURES ---
const VENTURES_DATA = [
  {
    name: "WEATSO",
    category: "Premium IT Consulting",
    detail: "Membangun arsitektur perangkat lunak custom berskala enterprise. Kami mengaudit dan mengeksekusi infrastruktur B2B dengan presisi.",
    link: "https://weatso.com",
    logo: "/logos/weatso.png"
  },
  {
    name: "EVORY",
    category: "Event Management Tech",
    detail: "Ekosistem digitalisasi hospitalitas. Registrasi pintar, QR check-in, dan analitik kehadiran real-time untuk penyelenggara acara elit.",
    link: "https://evory.com",
    logo: "/logos/evory.png"
  },
  {
    name: "COLABZ",
    category: "Creative Digital Studio",
    detail: "Menerjemahkan visi bisnis menjadi identitas visual yang mematikan untuk dominasi pasar digital.",
    link: "#",
    logo: "/logos/colabz.png"
  },
  {
    name: "ANUGERAH GROWTH",
    category: "Performance Agency",
    detail: "Where Aesthetics Meet Analytics. Agensi penggerak pertumbuhan berbasis data yang mengoptimalkan konversi dan penetrasi pasar.",
    link: "#",
    logo: "/logos/growth.png"
  },
  {
    name: "MASS IT / POS",
    category: "Distributed Retail Systems",
    detail: "Infrastruktur Point-of-Sale dan solusi IT skalabel untuk digitalisasi sektor UMKM dan ekosistem ritel terdistribusi.",
    link: "#",
    logo: "/logos/massit.png"
  }
];

// --- COMPONENT: SPOTLIGHT CARD ---
function SpotlightCard({ venture }: { venture: typeof VENTURES_DATA[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] px-8 py-10 transition-all hover:border-white/30 h-[320px]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(212,175,55,0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex justify-between items-start gap-6">
        <div>
          <h4 className="text-3xl font-black text-white tracking-tighter mb-2">{venture.name}</h4>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase">
            {venture.category}
          </p>
        </div>
        
        <div className="relative w-14 h-14 shrink-0 mt-1 mr-2 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
           <Image 
             src={venture.logo} 
             alt={`${venture.name} Logo`} 
             fill 
             className="object-contain object-center"
             onError={(e) => {
               (e.target as HTMLElement).style.display = 'none';
             }}
           />
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {venture.detail}
        </p>
        <Link 
          href={venture.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 group-hover:text-white transition-colors"
        >
          Explore <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    // Mempercepat timeline untuk mengurangi waktu tunggu render
    const t1 = setTimeout(() => setIntroPhase(1), 1200); 
    const t2 = setTimeout(() => setIntroPhase(2), 1800); 
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-[#ededed] selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* INTRO OVERLAY */}
      <AnimatePresence>
        {introPhase < 2 && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
            exit={{ backgroundColor: "rgba(5,5,5,0)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div 
              layoutId="brand-logo"
              className="relative w-40 h-40 md:w-64 md:h-64 mb-8"
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
            >
               <Image src="/Logo.png" alt="Anugerah Logo" fill className="object-contain" priority />
            </motion.div>

            <AnimatePresence>
              {introPhase === 0 && (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.5 }}
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
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

      {/* NAVBAR: Tetap di-render agar target layoutId ada */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-center pointer-events-auto">
        <div className="group flex items-center gap-4 cursor-pointer relative">
          {introPhase === 2 && (
            <motion.div 
              layoutId="brand-logo" 
              className="relative w-16 h-16 md:w-20 md:h-20"
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
               <Image src="/Logo.png" alt="Anugerah Logo" fill className="object-contain object-left" priority />
            </motion.div>
          )}
          <div className="hidden md:block overflow-hidden w-0 group-hover:w-auto transition-all duration-500 ease-out">
            <span className="whitespace-nowrap text-white font-bold text-sm tracking-[0.3em] pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase">
              Anugerah Ventures
            </span>
          </div>
        </div>

      </nav>

      {/* OPTIMASI KRUSIAL: 
        Konten utama tidak akan di-render ke DOM sampai introPhase >= 1 
        Ini membebaskan 90% CPU di detik pertama loading.
      */}
      {introPhase >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase === 2 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
            <div className="max-w-5xl">
               <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-[#D4AF37] font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
               >
                  Strategic Venture Builder
               </motion.p>
               <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter uppercase mb-8"
               >
                  VISION.<br/>VELOCITY.<br/><span className="text-[#D4AF37]">VENTURES.</span>
               </motion.h1>
               
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="max-w-2xl text-neutral-400 text-sm md:text-base leading-relaxed mb-12"
               >
                  Anugerah bertindak sebagai arsitek strategis untuk seluruh ekosistem portofolio kami. Kami tidak sekadar merancang produk; kami menanamkan tata kelola teknologi, arah operasional, dan arsitektur bisnis untuk memastikan dominasi pasar yang terukur.
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-2xl"
               >
                  <div>
                     <span className="text-3xl font-bold text-white block">05</span>
                     <span className="text-xs text-neutral-500 uppercase tracking-widest">Active Portfolios</span>
                  </div>
                  <div>
                     <span className="text-3xl font-bold text-white block">100%</span>
                     <span className="text-xs text-neutral-500 uppercase tracking-widest">In-House Execution</span>
                  </div>
               </motion.div>
            </div>
          </section>

          <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] relative border-t border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-4 block">01 / The Capital Fallacy</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Eksekusi Mengalahkan Alasan Modal.</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Kami muak dengan narasi bahwa modal adalah satu-satunya penghalang inovasi. Banyak yang mengklaim memiliki keahlian, tetapi bersembunyi di balik alasan "kurang dana". Jika Anda benar-benar memiliki eksekusi dan visi yang tajam, buktikan. Kami akan menyediakan sisanya.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase mb-4 block">02 / Relentless Resourcefulness</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Determinasi Tanpa Kompromi.</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Ketika seseorang memiliki obsesi absolut terhadap sebuah tujuan, tidak ada kata "mepet" atau "menunda". Segala cara yang rasional dan strategis akan ditempuh. Itulah DNA kami. Kami tidak mengenal jalan buntu. Apa yang kami targetkan untuk kami bangun, pasti akan kami wujudkan, apa pun harganya.
                </p>
              </div>
            </div>
          </section>

          <section className="py-32 px-6 md:px-20 bg-[#050505] relative border-t border-white/5">
            <div className="mb-20">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold block mb-4">Portfolio Ecosystem</span>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Visi yang Dieksekusi.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VENTURES_DATA.map((venture, index) => (
                <SpotlightCard key={index} venture={venture} />
              ))}
            </div>
          </section>

          <footer className="py-12 border-t border-white/10 text-center flex flex-col items-center justify-center relative z-20">
             <h2 className="text-[10vw] font-black text-[#0f0f0f] leading-none select-none tracking-tighter">ANUGERAH</h2>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <p className="text-xs text-neutral-500 tracking-[0.3em] uppercase mix-blend-difference">© 2026 Anugerah Ventures. Execution Over Excuses.</p>
             </div>
          </footer>
        </motion.div>
      )}
    </main>
  );
}