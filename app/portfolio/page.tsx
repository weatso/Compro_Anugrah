"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code, Server, Layout, Database } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Data Dummy Portfolio (Bisa ditambah nanti)
const projects = [
  {
    title: "E-Commerce Enterprise",
    category: "Web Development",
    desc: "A full-scale e-commerce platform with Next.js and payment gateway integration.",
    icon: Layout,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Finance Dashboard",
    category: "System & Data",
    desc: "Internal dashboard for monitoring cash flow and crypto assets realtime.",
    icon: Database,
    color: "from-emerald-600 to-green-500"
  },
  {
    title: "Venture App MVP",
    category: "Mobile App",
    desc: "Cross-platform mobile application built with Flutter for startup incubation.",
    icon: Code,
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Cloud Migration",
    category: "Infrastructure",
    desc: "Migrating legacy servers to AWS with auto-scaling architecture.",
    icon: Server,
    color: "from-orange-600 to-amber-500"
  },
  {
    title: "Company Profile CMS",
    category: "Web Development",
    desc: "Custom CMS for easy content management for a holding company.",
    icon: Layout,
    color: "from-indigo-600 to-blue-500"
  },
  {
    title: "AI Trading Bot",
    category: "Tech & Finance",
    desc: "Python-based algorithmic trading bot for crypto futures market.",
    icon: Code,
    color: "from-rose-600 to-red-500"
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-12 px-4 container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-gradient-gold">Masterpieces</span>
        </motion.h1>
        <p className="text-muted-foreground">Selected works demonstrating our capabilities in Tech & Finance.</p>
      </section>

      {/* GRID PROJECTS */}
      <section className="pb-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-white/5 hover:border-primary/50 transition-all group h-full flex flex-col overflow-hidden">
                {/* Image Placeholder dengan Gradient */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <project.icon className="text-white w-16 h-16 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <CardHeader>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.desc}
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5 hover:text-white group/btn">
                    View Case Study <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}