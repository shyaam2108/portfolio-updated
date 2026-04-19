"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Code size={24} className="text-purple-400" />,
    title: "Clean UI",
    desc: "Crafting beautiful, intuitive interfaces.",
  },
  {
    icon: <Zap size={24} className="text-pink-400" />,
    title: "Performance",
    desc: "Optimized for speed and accessibility.",
  },
  {
    icon: <Smartphone size={24} className="text-blue-400" />,
    title: "Responsive",
    desc: "Flawless experience across all devices.",
  },
  {
    icon: <Server size={24} className="text-green-400" />,
    title: "Scalable",
    desc: "Built to handle growth seamlessly.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I am a passionate Frontend Developer with <strong className="text-white">2+ years of experience</strong> building scalable web and mobile applications. 
                I have had the opportunity to work across diverse domains including <span className="text-purple-400">E-commerce, Banking, Insurance, and Accounting</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My strong focus lies in performance optimization, clean UI design, and delivering an exceptional user experience. I thrive in agile environments and enjoy transforming complex problems into elegant, intuitive digital solutions.
              </p>
              
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-sm text-gray-500">Years Exp.</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">4</div>
                  <div className="text-sm text-gray-500">Domains</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl flex flex-col items-start gap-4 border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
