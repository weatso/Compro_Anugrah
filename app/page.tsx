"use client";

import { motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// --- DATA ---
const MARQUEE_ITEMS = ["RADEVA", "USHER", "STOCK ML", "GUDANG SYS", "EVORY", "COLABZ", "WEATSO"];

// COPYWRITING BARU (NO BULLSHIT VERSION)
const VENTURES = [
  {
    id: "01",
    name: "WEATSO",
    tagline: "IT Consultant Partner",
    desc: "Mitra strategis transformasi digital. Kami merancang arsitektur sistem IT yang kompleks, aman, dan skalabel untuk efisiensi operasional bisnis Anda.",
    link: "#",
    color: "from-blue-900/40 to-blue-600/10"
  },
  {
    id: "02",
    name: "EVORY",
    tagline: "Event & Service Management",
    desc: "Solusi manajemen event terintegrasi. Menggabungkan layanan hospitalitas premium dengan teknologi sistem tamu untuk pengalaman acara yang tanpa celah.",
    link: "#",
    color: "from-purple-900/40 to-purple-600/10"
  },
  {
    id: "03",
    name: "COLABZ",
    tagline: "Creative Digital Studio",
    desc: "Studio kreatif digital. Menerjemahkan visi bisnis menjadi identitas visual yang kuat dan aset digital yang memikat audiens pasar.",
    link: "#",
    color: "from-amber-900/40 to-amber-600/10"
  }
];

// Placeholder Projects (Nanti Anda update sendiri gambarnya)
const PROJECTS = [
  { client: "Radeva App", cat: "Mobile Dev", year: "2024", imgColor: "bg-blue-900" },
  { client: "Usher System", cat: "Web App", year: "2024", imgColor: "bg-purple-900" },
  { client: "Stock ML", cat: "AI & Fintech", year: "2025", imgColor: "bg-emerald-900" },
  { client: "Gudang Sys", cat: "ERP System", year: "2025", imgColor: "bg-neutral-800" },
  { client: "Anugrah Web", cat: "Design", year: "2025", imgColor: "bg-amber-900" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  // --- SCROLL HOOKS ---

  // 1. HERO JACKSCROLL
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const v3Opacity = useTransform(heroProgress, [0.15, 0.35], [1, 0]);
  const v3Scale = useTransform(heroProgress, [0.15, 0.35], [1, 2.5]);
  
  const fullTextOpacity = useTransform(heroProgress, [0.4, 0.6], [0, 1]);
  const fullTextScale = useTransform(heroProgress, [0.4, 0.6], [0.8, 1]);

  // 2. PORTFOLIO JACKSCROLL
  const portfolioRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: portfolioProgress } = useScroll({
    target: portfolioRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(portfolioProgress, [0.1, 0.9], ["0%", "-80%"]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      <main className="bg-[#050505] min-h-screen text-[#ededed] selection:bg-[#D4AF37] selection:text-black">
        
        {/* --- 1. INTRO ANIMATION --- */}
        <AnimatePresence>
          {loading && (
            <motion.div 
              className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
              exit={{ opacity: 0, pointerEvents: "none" }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                layoutId="logo-main"
                className="relative w-40 h-40 md:w-64 md:h-64"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                 <Image src="/Logo.png" alt="Logo" fill className="object-contain" priority />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- NAVBAR --- */}
        {!loading && (
           <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 mix-blend-difference">
             <div className="max-w-[1920px] mx-auto flex justify-between items-center">
               <motion.div 
                  layoutId="logo-main" 
                  className="relative w-16 h-16 md:w-20 md:h-20"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
               >
                  <Image src="/Logo.png" alt="Logo" fill className="object-contain object-left" />
               </motion.div>

               <div className="hidden md:block">
                  <span className="text-xs font-mono text-neutral-500 tracking-widest">EST. 2026</span>
               </div>
             </div>
           </nav>
        )}

        {/* --- 2. HERO JACKSCROLL --- */}
        <div ref={heroRef} className="h-[300vh] relative z-10">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            <motion.div 
              style={{ opacity: v3Opacity, scale: v3Scale }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <h1 className="text-[25vw] font-black text-[#1a1a1a] tracking-tighter select-none leading-none">3V</h1>
            </motion.div>

            <motion.div 
              style={{ opacity: fullTextOpacity, scale: fullTextScale }}
              className="relative z-20 text-center space-y-2 mix-blend-screen"
            >
              <h2 className="text-[6vw] md:text-[5vw] font-black tracking-tighter leading-[0.9] text-white">
                VISION.
              </h2>
              <h2 className="text-[6vw] md:text-[5vw] font-black tracking-tighter leading-[0.9] text-neutral-600">
                VELOCITY.
              </h2>
              <h2 className="text-[6vw] md:text-[5vw] font-black tracking-tighter leading-[0.9] text-[#D4AF37]">
                VENTURES.
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="absolute bottom-12 animate-bounce flex flex-col items-center gap-2"
            >
              <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase">Scroll to Transform</span>
              <div className="w-[1px] h-8 bg-neutral-800" />
            </motion.div>
          </div>
        </div>

        {/* --- 3. MARQUEE --- */}
        <div className="w-full py-20 bg-[#050505] border-y border-white/5 relative z-20 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
             <div className="flex gap-20 px-10">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                  <span key={i} className="text-4xl md:text-6xl font-black text-neutral-800 uppercase tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
                    {item}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* --- 4. VENTURES GRID (EXPANDABLE) --- */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] relative z-20">
          <div className="mb-20 border-l-2 border-[#D4AF37] pl-6">
             <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em]">The Ecosystem</span>
             <h3 className="text-4xl md:text-5xl font-bold mt-2 text-white">Our Ventures</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {VENTURES.map((v) => (
              <motion.div 
                key={v.id}
                layout 
                className="group relative border border-white/10 bg-[#0a0a0a] rounded-sm overflow-hidden cursor-pointer"
                initial={{ minHeight: "300px" }} 
                transition={{ duration: 0.4, type: "spring", bounce: 0 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                   <div>
                     <span className="text-6xl font-black text-white/5 group-hover:text-white/20 transition-colors">{v.id}</span>
                     <h4 className="text-3xl font-bold text-white mt-4">{v.name}</h4>
                     <p className="text-[#D4AF37] text-xs tracking-widest uppercase mt-1">{v.tagline}</p>
                   </div>

                   <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     whileHover={{ height: "auto", opacity: 1 }}
                     transition={{ duration: 0.3 }}
                     className="overflow-hidden"
                   >
                     <div className="pt-8 pb-2">
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                          {v.desc}
                        </p>
                        <Link href={v.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
                          Visit Website ↗
                        </Link>
                     </div>
                   </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 5. PORTFOLIO JACKSCROLL (HORIZONTAL) --- */}
        <div ref={portfolioRef} className="relative h-[400vh] bg-[#050505] z-30">
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
             
             <div className="container mx-auto px-6 md:px-12 mb-8 pl-12 md:pl-20">
                <h3 className="text-white text-3xl font-bold">Selected Works</h3>
                <p className="text-neutral-500 text-sm mt-2">← Drag or Scroll Down →</p>
             </div>

             <motion.div style={{ x }} className="flex gap-8 w-max pl-12 md:pl-20">
                
                {PROJECTS.map((project, i) => (
                  <div 
                    key={i} 
                    className="relative shrink-0 aspect-video w-[80vw] md:w-[60vw] bg-neutral-900 border border-white/5 overflow-hidden group rounded-sm"
                  >
                     <div className={`absolute inset-0 ${project.imgColor} transition-transform duration-700 group-hover:scale-105 opacity-60`} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                     
                     <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-[#D4AF37] uppercase tracking-wider backdrop-blur-md">
                             {project.year}
                           </span>
                           <span className="text-sm text-neutral-400">{project.cat}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.client}</h2>
                     </div>
                  </div>
                ))}

                <div className="shrink-0 aspect-video w-[80vw] md:w-[60vw] bg-[#D4AF37] text-black flex items-center justify-center cursor-pointer hover:bg-white transition-colors rounded-sm">
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">View All Projects</h2>
                </div>

             </motion.div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="relative z-40 bg-black pt-20 pb-10 border-t border-white/10">
           <div className="container mx-auto px-6 text-center">
              <h2 className="text-[12vw] font-black text-[#111] leading-none select-none hover:text-[#222] transition-colors">
                ANUGRAH
              </h2>
              <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-widest gap-4">
                 <p>&copy; 2026 Anugrah Ventures.</p>
                 <div className="flex gap-8">
                   <Link href="#" className="hover:text-[#D4AF37]">Instagram</Link>
                   <Link href="#" className="hover:text-[#D4AF37]">LinkedIn</Link>
                 </div>
              </div>
           </div>
        </footer>

      </main>
    </LayoutGroup>
  );
}