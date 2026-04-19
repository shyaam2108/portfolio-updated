"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-24 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] group-hover:scale-150 transition-transform duration-300" />

            <div className="glass-card p-8 rounded-2xl border border-white/5 group-hover:border-pink-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Frontend Developer</h3>
                  <div className="flex items-center gap-2 text-purple-400 font-medium">
                    <Briefcase size={16} />
                    <span>Pirai Infotech Private Limited</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full w-fit">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">2024 – Present</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Built scalable web and mobile applications from scratch.",
                  "Developed highly reusable and performant UI components.",
                  "Integrated complex REST APIs and payment gateways.",
                  "Optimized application performance and significantly reduced load time.",
                  "Collaborated in Agile teams utilizing Git workflows."
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-pink-500 mt-1.5 leading-none">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
