"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [skillText, setSkillText] = useState("");
  const skills = ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"];
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && skillText === currentSkill) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && skillText === "") {
      setIsDeleting(false);
      setSkillIndex((prev) => (prev + 1) % skills.length);
    } else {
      timeout = setTimeout(() => {
        setSkillText(currentSkill.substring(0, skillText.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [skillText, isDeleting, skillIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-900/20 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-purple-500/30"
        >
          <Terminal size={16} className="text-purple-400" />
          <span className="text-sm text-gray-300">Welcome to my universe</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Shyaam Pragaash R
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 h-[40px] flex items-center justify-center gap-2"
        >
          I build with <span className="text-white font-semibold min-w-[140px] text-left">{skillText}<span className="animate-pulse">|</span></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Frontend Developer building scalable, high-performance web and mobile applications with a focus on stunning UI/UX and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-[250ms] ease-out group-hover:w-full -z-10" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 glass-card rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
