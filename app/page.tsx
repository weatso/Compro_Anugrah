"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Layers, TrendingUp, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 container mx-auto flex flex-col items-center text-center z-10">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10" />

        {/* Badge "Venture Builder" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs md:text-sm font-medium tracking-wide mb-6 hover:bg-accent/10 transition-colors cursor-default"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          Modern Venture Builder & Finance Holding
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          Building Ventures, <br />
          <span className="text-gradient-gold">Scaling Value.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Holding & venture builder focused on technology consulting and digital products bridging strategy, finance, and execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 border-0">
            Talk to Us <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
            <Link href="/company-profile">
              View Company Profile
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* --- TRUST METRICS --- */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "12+", label: "Venture Projects" },
            { value: "20+", label: "Tech Partners" },
            { value: "$1M+", label: "Value Created" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MARQUEE HIGHLIGHTS --- */}
      <div className="py-6 bg-background border-b border-white/5">
         <Marquee gradient={false} speed={40} className="overflow-hidden">
           {[
             "Enterprise Website Revamp", "Internal Dashboard System", "Company Profile CMS", 
             "IT Architecture Consulting", "Venture MVP Build", "Cloud Infrastructure Setup",
             "Mobile App Development", "Data Analytics Dashboard"
           ].map((item, i) => (
             <div key={i} className="mx-8 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
               <span className="w-2 h-2 bg-accent rounded-full" />
               <span className="text-lg font-medium text-white tracking-wide">{item}</span>
             </div>
           ))}
         </Marquee>
      </div>

      {/* --- OUR PILLARS (4 KEYWORDS) --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Pillars</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The foundation of Anugrah Group ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Layers, 
              title: "Group", 
              desc: "Multi-unit ecosystem managing diverse tech assets." 
            },
            { 
              icon: Globe, 
              title: "Holding", 
              desc: "Centralized governance and strategic value creation." 
            },
            { 
              icon: Cpu, 
              title: "Venture Builder", 
              desc: "End-to-end incubation, product execution, and scaling." 
            },
            { 
              icon: TrendingUp, 
              title: "Finance", 
              desc: "Structured growth capital and financial efficiency." 
            },
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <pillar.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Anugrah Group. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}