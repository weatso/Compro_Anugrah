"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Zap, 
  Briefcase, 
  Quote, 
  MapPin, 
  Mail, 
  Clock 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground overflow-hidden selection:bg-accent/30">
      <Navbar />

      {/* --- HEADER HERO --- */}
      <section className="relative pt-32 pb-20 px-4 container mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Architecting <span className="text-gradient-gold">Digital Legacies</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Anugrah Group is a strategic venture builder and financial holding company. We bridge the gap between complex technology architecture and sustainable business growth.
        </motion.p>
      </section>

      {/* --- FOUNDER SPOTLIGHT (Natan) --- */}
      <section className="py-12 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
          
          <div className="flex flex-col md:flex-row items-center">
            {/* Bagian Foto */}
            <div className="w-full md:w-1/3 relative aspect-[3/4] md:aspect-auto md:h-[500px]">
              <Image 
                src="/natan.png" // Pastikan file natan.png ada di folder public
                alt="Natanael Alexander Gani"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0A0A0A]" />
            </div>

            {/* Bagian Konten Teks */}
            <div className="w-full md:w-2/3 p-8 md:p-12 space-y-6 bg-[#0A0A0A]">
              <div>
                <h3 className="text-accent font-bold tracking-widest text-sm uppercase mb-2">Leadership & Vision</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">Natanael Alexander Gani</h2>
                <p className="text-muted-foreground text-lg">Founder & Principal Architect</p>
              </div>

              <div className="relative pl-6 border-l-2 border-accent/30">
                <Quote className="absolute -top-2 -left-3 w-6 h-6 text-accent bg-[#0A0A0A] p-1" />
                <p className="text-lg text-white/90 italic leading-relaxed">
                  &quot;Teknologi bukan hanya tentang kode, melainkan tentang arsitektur masa depan. Di Anugrah Group, kami tidak sekadar membangun aplikasi, kami membangun ekosistem bisnis yang tahan uji dan berkelanjutan secara finansial.&quot;
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Sebagai visioner di balik Anugrah Group, Natanael menggabungkan keahlian teknis dalam <strong>Enterprise Architecture</strong> dengan strategi finansial yang solid. Fokus utamanya adalah menciptakan nilai jangka panjang melalui inovasi digital yang terukur.
              </p>
              
              {/* Tombol Hubungi Founder dihapus sesuai permintaan */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- OUR FRAMEWORK --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic Framework</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kami bekerja dengan metodologi terstruktur untuk menjamin keberhasilan setiap venture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "1. Discovery & Audit",
              desc: "Menganalisis kebutuhan bisnis, gap teknologi, dan potensi risiko finansial sebelum eksekusi."
            },
            {
              icon: Briefcase,
              title: "2. Strategic Architecture",
              desc: "Merancang blueprint sistem yang scalable menggunakan standar Enterprise Architecture."
            },
            {
              icon: Zap,
              title: "3. Execution & Scaling",
              desc: "Pengembangan produk agile dengan fokus pada market-fit dan efisiensi operasional."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-16 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity First", desc: "Transparansi adalah fondasi bisnis kami.", icon: ShieldCheck },
              { title: "Innovation", desc: "Selalu beradaptasi dengan teknologi terkini.", icon: Lightbulb },
              { title: "Financial Synergy", desc: "Keseimbangan antara tech & profitabilitas.", icon: Briefcase },
              { title: "Excellence", desc: "Standar kualitas tinggi tanpa kompromi.", icon: Zap },
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <val.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPERATIONAL HOURS & LOCATION --- */}
      <section className="py-16 container mx-auto px-4">
        <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden relative group">
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent/10 transition-colors duration-500" />
          
          <div className="grid md:grid-cols-2">
            
            {/* KOLOM KIRI: ALAMAT & KONTAK */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                Headquarters
              </h3>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-accent group-hover/item:border-accent/30 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Office Location</h4>
                    <p className="text-muted-foreground leading-relaxed mt-1">
                      Jl. Kaba Raya no 111 RT 1 RW 13,<br />
                      Kelurahan Tandang, Kec. Tembalang,<br />
                      Semarang, Jawa Tengah
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-primary group-hover/item:border-primary/30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Email Inquiries</h4>
                    <p className="text-muted-foreground mt-1">contact@anugrahgroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: JAM OPERASIONAL (UPDATED) */}
            <div className="p-8 md:p-12 bg-white/[0.02] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-accent animate-pulse" />
                Operational Hours
              </h3>
              
              <div className="space-y-6">
                {/* Senin - Sabtu */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-muted-foreground font-medium">Senin - Sabtu</span>
                  <div className="text-right">
                    <span className="block text-white font-bold text-xl">10:00 - 21:00 WIB</span>
                    <span className="text-xs text-green-500 font-medium">Open for Consultation</span>
                  </div>
                </div>

                {/* Minggu */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-muted-foreground font-medium">Minggu</span>
                  <div className="text-right">
                    <span className="block text-accent font-bold text-xl">12:00 - 21:00 WIB</span>
                    <span className="text-xs text-accent/80 font-medium">Weekend Service Available</span>
                  </div>
                </div>
              </div>

              {/* Note Tambahan */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent">
                <p className="text-sm text-white/80 italic">
                  &quot;Kami memahami kesibukan Anda. Tim kami siap melayani diskusi strategis hingga malam hari, termasuk di akhir pekan.&quot;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Jadwalkan diskusi strategis langsung dengan tim kepemimpinan kami.
        </p>
        <Link href="https://wa.me/6281234567890">
           <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8 h-12 text-base">
             Schedule Consultation
           </Button>
        </Link>
      </section>

    </main>
  );
}