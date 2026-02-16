"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, Move3d, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ConnectPage() {
  const [isDragging, setIsDragging] = useState(false);
  
  // Deteksi Mobile untuk menyesuaikan sensitivitas
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // --- SETTING FISIKA ---
  const physics = { stiffness: 90, damping: 25, mass: 0.8 };
  
  const mouseXSpring = useSpring(x, physics);
  const mouseYSpring = useSpring(y, physics);

  // --- LOGIKA ROTASI (RESPONSIVE) ---
  // Di HP (Mobile), range putaran diperkecil (250px) agar user tidak perlu swipe jauh-jauh
  // Di Desktop, range lebih luas (450px) agar lebih presisi
  const dragRange = isMobile ? [-250, 250] : [-450, 450];
  
  const rotateY = useTransform(mouseXSpring, dragRange, ["-180deg", "180deg"]); 
  const rotateX = useTransform(mouseYSpring, dragRange, ["180deg", "-180deg"]);

  const sheenOpacity = useTransform(mouseXSpring, [-200, 0, 200], [0.5, 0, 0.5]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] p-4 relative overflow-hidden perspective-1000 select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/25 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-[120px]" />

      {/* Tombol Kembali */}
      <Link href="/" className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors flex items-center gap-2 z-50 cursor-pointer">
        <ArrowLeft className="w-5 h-5" /> Kembali
      </Link>

      {/* --- AREA GESER 3D --- */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.6} 
        
        style={{ x, y, cursor: isDragging ? "grabbing" : "grab" }}
        
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        
        // --- KUNCI RESPONSIVE DI SINI ---
        // 1. w-[85vw]: Di HP, lebar kartu hanya 85% dari layar. Sisa 15% adalah ruang aman untuk putaran.
        // 2. md:w-full: Di Desktop, kembali ke ukuran penuh container.
        // 3. md:max-w-[680px]: Batas maksimal di desktop.
        className="relative w-[85vw] md:w-full md:max-w-[680px] aspect-[1.586/1] group touch-none perspective-1000 z-10"
      >
        
        {/* --- ROTATING WRAPPER --- */}
        <motion.div 
          className="w-full h-full relative"
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d", 
          }}
        >
          {/* === SISI DEPAN === */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "translateZ(1px)"
            }}
          >
            <Image 
              src="/card.png" 
              alt="Kartu Depan"
              fill
              className="object-cover pointer-events-none"
              priority
            />
            <motion.div 
              style={{ opacity: sheenOpacity, background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)" }}
              className="absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
            />
          </div>

          {/* === SISI BELAKANG === */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)"
            }}
          >
            <Image 
              src="/card-back.png" 
              alt="Kartu Belakang"
              fill
              className="object-cover pointer-events-none"
              priority
            />
            <motion.div 
              style={{ opacity: sheenOpacity, background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)" }}
              className="absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
            />
          </div>

        </motion.div>

        {/* --- BAYANGAN 3D --- */}
        <motion.div 
          className="absolute -bottom-16 md:-bottom-24 left-4 right-4 h-12 md:h-16 bg-black/80 blur-2xl md:blur-3xl rounded-[100%] z-[-1]"
          style={{ 
            transform: "translateZ(-120px) rotateX(90deg)", 
            scale: useTransform(mouseYSpring, [-300, 300], [0.85, 0.85]),
            opacity: 0.5
          }} 
        />
      </motion.div>
      
      {/* --- INSTRUKS & DOWNLOAD SECTION --- */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-6 z-50 pointer-events-none">
        
        <div className="flex flex-col items-center gap-2 animate-pulse text-center">
          <Move3d className="w-6 h-6 text-white/30" />
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            {isDragging ? "Memutar..." : "Tahan & Geser"}
          </p>
        </div>

        {/* Tombol Download */}
        <div className="pointer-events-auto">
            <a href="/card.png" download="Anugrah-Group-Card.png">
              <Button variant="outline" size="lg" className="bg-black/40 border-white/10 hover:bg-white/10 text-white hover:text-accent backdrop-blur-md gap-3 pl-6 pr-8 h-12 rounded-full shadow-lg shadow-black/50">
                <Download className="w-5 h-5" />
                <span className="font-medium tracking-wide">Simpan Kartu Nama</span>
              </Button>
            </a>
        </div>

      </div>
    </div>
  );
}