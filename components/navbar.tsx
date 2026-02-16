"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, CreditCard } from "lucide-react"; // Ganti icon QR jadi CreditCard/ID Card
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company Profile", href: "/company-profile" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* --- 1. LOGO UTAMA --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all border border-white/10">
            <span className="text-white font-bold text-2xl">AG</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              Anugrah<span className="text-primary">Group</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
              Venture & Finance
            </span>
          </div>
        </Link>

        {/* --- 2. NAVIGASI TENGAH --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* --- 3. AREA TOMBOL KANAN --- */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* TOMBOL KARTU NAMA (LANGSUNG KE /connect) */}
          {/* Tidak ada lagi Popup QR Code */}
          <Link href="/connect">
            <Button 
              variant="outline" 
              className="border-accent/50 text-accent hover:bg-accent hover:text-black transition-all gap-2 relative overflow-hidden group shadow-[0_0_15px_rgba(245,197,66,0.2)] hover:shadow-[0_0_25px_rgba(245,197,66,0.6)]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shine_1s_infinite]" />
              
              {/* Icon saya ganti jadi CreditCard agar lebih merepresentasikan Kartu Nama */}
              <CreditCard className="w-5 h-5" /> 
              <span className="font-bold tracking-wide">KARTU NAMA</span>
            </Button>
          </Link>

          {/* Tombol WhatsApp */}
          <Button 
            className="bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:text-accent transition-all"
            asChild
          >
            <Link href="https://wa.me/6281234567890">
              Hubungi Kami <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* --- 4. MOBILE HAMBURGER --- */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Tombol Kartu Nama Mobile (Icon Only) */}
          <Link href="/connect">
             <Button variant="ghost" size="icon" className="text-accent hover:bg-white/5">
               <CreditCard className="w-6 h-6" />
             </Button>
          </Link>

          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU LIST */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name} <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              
              {/* Menu Mobile Tambahan untuk Kartu Nama */}
              <Link href="/connect" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-black mt-2">
                  <CreditCard className="w-4 h-4 mr-2" /> Buka Kartu Nama
                </Button>
              </Link>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                Chat WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}