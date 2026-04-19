"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
// import Image from "next/image"; // Removed for standard React

const projects = [
  {
    title: "FinTrack",
    description: "A modern SaaS dashboard for financial tracking, featuring interactive data visualization, real-time analytics, and a secure authentication UI.",
    image: "/projects/fintrack.png",
    tech: ["React", "Recharts", "Node.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ShopEase",
    description: "A premium mobile E-commerce application providing a seamless shopping experience with intuitive product feeds and streamlined checkout.",
    image: "/projects/shopease.png",
    tech: ["React Native", "Redux", "Firebase", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PayFlow",
    description: "A secure, modern payment integration web application built with robust APIs to handle transactions flawlessly.",
    image: "/projects/payflow.png",
    tech: ["Next.js", "TypeScript", "Stripe API", "Razorpay"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] group-hover:scale-[1.02] border border-white/10 glass">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={500} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[80px] -z-10 rounded-full group-hover:bg-purple-500/30 transition-colors" />
              </div>

              {/* Project Info */}
              <div className={`w-full lg:w-1/2 flex flex-col ${idx % 2 === 0 ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <div className="glass-card p-6 rounded-xl mb-6 relative z-10 w-full">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-8 text-sm font-medium text-purple-400 ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  {project.tech.map((item, i) => (
                    <li key={i} className="bg-white/5 px-3 py-1 rounded-full border border-white/5">{item}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 transition-all text-gray-300 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all text-white font-medium shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
