"use client";

import { ArrowRight, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image wajib ada

export default function VipPage() {
  return (
    <div className="min-h-screen w-full bg-luxury-pattern luxury-vignette flex flex-col items-center justify-center p-6 text-foreground selection:bg-[#D4AF37] selection:text-black">
      
      <div className="w-full max-w-md space-y-10 relative z-10">
        
        {/* HEADER: LOGO DISPLAY */}
        <div className="text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
             
             {/* LOGO IMPLEMENTATION */}
             <div className="relative w-full h-full">
               <Image 
                 src="/Logo.png" 
                 alt="Anugrah Ventures" 
                 fill 
                 className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
               />
             </div>

          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Natanael Alexander</h1>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mt-2 font-medium">
              Founder & Managing Director
            </p>
          </div>
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="space-y-3 pt-4">
          <Link 
            href="https://wa.me/6281234567890" // GANTI NOMOR ANDA
            className="flex items-center justify-center w-full py-4 bg-[#D4AF37] text-black font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#c4a030] transition-all transform active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 mr-3" />
            WhatsApp Pribadi
          </Link>
          
          <Link 
            href="/" 
            className="flex items-center justify-center w-full py-4 bg-transparent border border-white/20 text-white font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-all"
          >
            <Globe className="w-4 h-4 mr-3 text-neutral-400" />
            Visit Anugrah Ventures
          </Link>
        </div>

        {/* SEPARATOR */}
        <div className="flex items-center gap-4 py-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
          <span className="text-[10px] text-neutral-600 uppercase tracking-[0.3em]">Ventures</span>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
        </div>

        {/* VENTURES LIST */}
        <div className="space-y-3">
          {[
            { name: "WEATSO", tag: "Custom Software", url: "#" },
            { name: "EVORY", tag: "Event Tech", url: "#" },
            { name: "COLABZ", tag: "Creative Agency", url: "#" }
          ].map((v) => (
            <Link 
              key={v.name}
              href={v.url}
              className="group flex items-center justify-between w-full p-4 bg-neutral-900/40 border border-white/5 rounded-sm hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-sm">{v.name}</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">{v.tag}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:text-[#D4AF37] transition-colors -translate-x-2 group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
        
        <div className="pt-8 text-center">
            <p className="text-[10px] text-neutral-700 uppercase tracking-widest">Private Access Only</p>
        </div>

      </div>
    </div>
  );
}