"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Copy, Check, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AccessPage() {
  const [copied, setCopied] = useState(false);
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", agenda: "" });
  const [selectedWaNumber, setSelectedWaNumber] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWa = (number: string) => {
    setSelectedWaNumber(number);
    setFormData({ name: "", company: "", agenda: "" });
    setIsWaModalOpen(true);
  };

  const handleSendWa = () => {
    if (!formData.name.trim() || !formData.agenda.trim()) return;
    
    const formattedMessage = `*[EXECUTIVE INQUIRY]*
*Nama:* ${formData.name}
*Instansi/Entitas:* ${formData.company || '-'}
*Agenda Spesifik:* ${formData.agenda}`;

    const url = `https://wa.me/${selectedWaNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
    setIsWaModalOpen(false);
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
      
      {/* --- LAYER 1: AMBIENT GLOW --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* --- LAYER 2: CONTENT --- */}
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
               <img 
                 src="/LogoDesc.png" 
                 alt="Anugerah Ventures" 
                 className="object-contain p-4 w-full h-full" 
               />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Natanael Alexander</h1>
          <div className="inline-block px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm">
             <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase">
               Founder & CEO
             </p>
          </div>
        </motion.div>

        {/* 2. PRIMARY ACTIONS */}
        <motion.div variants={itemVars} className="space-y-4 mb-10">
          <button 
            onClick={() => handleOpenWa("6288996555999")}
            className="group flex items-center justify-between w-full p-4 bg-[#D4AF37] text-black rounded-sm hover:bg-[#bfa030] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <span className="font-bold text-sm uppercase tracking-wider flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Business <span className="text-[9px] bg-black text-[#D4AF37] px-1.5 py-0.5 rounded-sm ml-1">FAST</span>
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => handleOpenWa("6287779668055")}
            className="group flex items-center justify-between w-full p-4 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] rounded-sm hover:bg-[#D4AF37]/10 transition-all shadow-[0_0_10px_rgba(212,175,55,0.05)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <span className="font-bold text-sm uppercase tracking-wider flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Pribadi
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>

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
            { name: "WEATSO", tag: "Premium IT Consulting", href: "https://www.weatso.id/" },
            { name: "EVORY", tag: "Event Management Tech", href: "https://www.evory.id/" },
            { name: "LADDIFY", tag: "Growth & SMM Agency", href: "https://laddify.my.id" },
            { name: "LOKAL", tag: "Distributed Retail Systems", href: "https://pakailokal.com" }
          ].map((v, i) => (
            <Link 
              key={i}
              href={v.href}
              target="_blank"
              className="group relative flex items-center justify-between w-full p-4 bg-[#0a0a0a]/60 border border-white/10 rounded-sm transition-all duration-300 hover:border-[#D4AF37]/50"
            >
              <div className="flex flex-col">
                <span className="font-bold text-white tracking-wide">{v.name}</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">{v.tag}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all">
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
           <p className="mt-4 text-[10px] text-neutral-700">© 2026 Anugerah Ventures</p>
        </motion.div>

      </motion.div>

      {/* --- LAYER 3: WA MODAL --- */}
      <AnimatePresence>
        {isWaModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl w-full max-w-sm shadow-2xl relative"
            >
              <button 
                onClick={() => setIsWaModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-xl font-bold text-white mb-2">Protokol Komunikasi</h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Demi efisiensi, harap lengkapi detail berikut sebelum sesi diskusi diagendakan.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Nama Lengkap *</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Nama Anda"
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Perusahaan / Instansi</label>
                  <input 
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Opsional"
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Agenda Spesifik *</label>
                  <textarea 
                    value={formData.agenda}
                    onChange={(e) => setFormData({...formData, agenda: e.target.value})}
                    placeholder="Jelaskan secara singkat dan spesifik tujuan Anda..."
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all min-h-[80px] resize-none"
                  />
                </div>
              </div>
              
              <button 
                onClick={handleSendWa}
                disabled={!formData.name.trim() || !formData.agenda.trim()}
                className="w-full p-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-[#bfa030] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                Lanjutkan ke WhatsApp <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}