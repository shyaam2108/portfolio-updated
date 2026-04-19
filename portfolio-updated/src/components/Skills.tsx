"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Frameworks",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 85 },
    ],
  },
  {
    category: "Languages & Core",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    category: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Material UI", level: 85 },
      { name: "Ant Design", level: 80 },
      { name: "PrimeReact", level: 80 },
    ],
  },
  {
    category: "State Management & Others",
    skills: [
      { name: "Redux", level: 90 },
      { name: "Zustand", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Jest", level: 75 },
    ],
  },
];

const integrations = ["Stripe", "Razorpay", "Git", "Agile"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{group.category}</h3>
              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIdx * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <div className="w-full text-center mb-4">
            <h4 className="text-lg text-gray-400 font-medium">Tools & Integrations</h4>
          </div>
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 glass-card rounded-full border border-white/5 text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
