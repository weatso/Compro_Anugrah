"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // Import Image wajib ada

const CLIENTS = [
  "Radeva App", "WTP Event", "Usher System", 
  "Stock ML", "Gudang Sys", "Finance AI", 
  "Evory Event", "Colabz Creative"
];

const VENTURES = [
  {
    id: "01",
    name: "WEATSO",
    tagline: "Custom Software Mastery",
    desc: "Membangun sistem digital kompleks yang menjadi tulang punggung operasional korporasi besar.",
    status: "COMING SOON"
  },
  {
    id: "02",
    name: "EVORY",
    tagline: "Strategic Event Tech",
    desc: "Platform manajemen event end-to-end yang mengubah chaos menjadi pengalaman seamless.",
    status: "COMING SOON"
  },
  {
    id: "03",
    name: "COLABZ",
    tagline: "Creative & Talent Powerhouse",
    desc: "Menghubungkan visi brand dengan eksekusi kreatif kelas dunia.",
    status: "COMING SOON"
  }
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden bg-luxury-pattern luxury-vignette text-foreground selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. NAVBAR (Updated with Logo) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO IMPLEMENTATION */}
          <div className="relative w-40 h-12">
            <Image 
              src="/Logo.png" 
              alt="Anugrah Ventures" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="h-screen w-full flex flex-col justify-center items-center px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white">
            VISION.<br />
            <span className="text-neutral-500">VELOCITY.</span><br />
            VENTURES.
          </h1>
          <p className="text-[#D4AF37] max-w-lg mx-auto text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
            Building The Engines of Tomorrow
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 64 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </section>

      {/* 3. MARQUEE */}
      <section className="w-full py-20 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee space-x-16 px-8">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-neutral-800 uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VENTURES */}
      <section ref={targetRef} className="w-full max-w-6xl px-6 py-32 space-y-40 z-10">
        <div className="text-left mb-20 border-l-2 border-[#D4AF37] pl-6">
          <h2 className="text-xs text-[#D4AF37] tracking-[0.3em] mb-2 uppercase">The Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Our Vehicles of Growth</h3>
        </div>

        {VENTURES.map((venture) => (
          <motion.div 
            key={venture.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8 }}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 order-2 md:order-1">
              <span className="text-7xl font-black text-neutral-800 group-hover:text-[#D4AF37]/20 transition-colors duration-500">
                {venture.id}
              </span>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">{venture.name}</h4>
                <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4">{venture.tagline}</p>
                <p className="text-neutral-400 leading-relaxed text-lg font-light">{venture.desc}</p>
              </div>
            </div>

            <div className="order-1 md:order-2 h-80 w-full bg-[#0a0a0a] border border-white/5 relative flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              <div className="text-center px-6 py-3 bg-white/5 border border-white/5 backdrop-blur-md">
                 <span className="text-xs tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors">
                   {venture.status}
                 </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full py-12 border-t border-white/5 text-center z-10">
        <p className="text-neutral-600 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Anugrah Ventures.
        </p>
      </footer>
    </main>
  );
}