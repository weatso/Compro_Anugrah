"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Copy, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VipPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-[#ededed] overflow-hidden selection:bg-[#D4AF37] selection:text-black flex flex-col items-center justify-center p-4">
      
      {/* --- LAYER 1: AMBIENT GLOW (Tetap dipertahankan untuk nuansa premium) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* --- LAYER 2: CONTENT (Z-Index 10) --- */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="w-full max-w-sm relative z-10 backdrop-blur-md p-6 rounded-xl border border-white/10 bg-black/40 shadow-2xl ring-1 ring-white/5"
      >
        
        {/* 1. HEADER PROFILE */}
        <motion.div variants={itemVars} className="text-center mb-10">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-30 rounded-full animate-pulse" />
            <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
               <Image 
                 src="/Logo.png" 
                 alt="Anugrah Ventures" 
                 fill 
                 className="object-contain p-4" 
                 priority
               />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Natanael Alexander</h1>
          <div className="inline-block px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm">
             <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase">
               Founder & Managing Director
             </p>
          </div>
        </motion.div>

        {/* 2. PRIMARY ACTIONS */}
        <motion.div variants={itemVars} className="space-y-4 mb-10">
          <Link 
            href="https://wa.me/6281234567890" 
            className="group flex items-center justify-between w-full p-4 bg-[#D4AF37] text-black rounded-sm hover:bg-[#bfa030] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <span className="font-bold text-sm uppercase tracking-wider flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Pribadi
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/" 
            className="group flex items-center justify-between w-full p-4 bg-transparent border border-white/20 text-white rounded-sm hover:bg-white/5 transition-all"
          >
            <span className="font-medium text-sm uppercase tracking-wider flex items-center gap-3">
              <Globe className="w-5 h-5 text-neutral-400" />
              Official Website
            </span>
            <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
          </Link>
        </motion.div>

        {/* 3. VENTURES LIST */}
        <motion.div variants={itemVars} className="space-y-4">
          <div className="flex items-center gap-4 mb-2 opacity-50">
            <div className="h-[1px] bg-white/20 flex-1" />
            <span className="text-[10px] uppercase tracking-[0.3em]">The Ecosystem</span>
            <div className="h-[1px] bg-white/20 flex-1" />
          </div>

          {[
            { name: "WEATSO", tag: "Custom Software", color: "hover:border-blue-500/50" },
            { name: "EVORY", tag: "Event Tech", color: "hover:border-purple-500/50" },
            { name: "COLABZ", tag: "Creative Agency", color: "hover:border-amber-500/50" }
          ].map((v, i) => (
            <Link 
              key={i}
              href="#"
              className={`group relative flex items-center justify-between w-full p-4 bg-[#0a0a0a]/60 border border-white/10 rounded-sm transition-all duration-300 ${v.color}`}
            >
              <div className="flex flex-col">
                <span className="font-bold text-white tracking-wide">{v.name}</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">{v.tag}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </motion.div>

        {/* 4. FOOTER / SHARE */}
        <motion.div variants={itemVars} className="mt-12 text-center">
           <button 
             onClick={handleCopy}
             className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
           >
             {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
             {copied ? "Link Copied" : "Share This Card"}
           </button>
           <p className="mt-4 text-[10px] text-neutral-700">© 2026 Anugrah Ventures</p>
        </motion.div>

      </motion.div>
    </div>
  );
}