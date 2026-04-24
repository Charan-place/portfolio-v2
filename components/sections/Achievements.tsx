"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  { icon: "🥇", title: "Meta AI Hackathon Finalist", desc: "Recognized for innovative AI application development at Meta's competitive hackathon" },
  { icon: "🥈", title: "NPTEL Silver Badge", desc: "Awarded Silver Badge in NPTEL Certification for Data Structures and Algorithms using Java" },
  { icon: "🏅", title: "Top 10 Teams", desc: "Shortlisted in top 10 teams at the Open Group Enterprise Architecture Hackathon" },
  { icon: "💯", title: "Walmart Sparkathon – Top 100", desc: "Ranked in Top 100 teams in the Walmart Sparkathon for innovative tech solutions" },
  { icon: "🎖️", title: "Flipkart Grid 6.0", desc: "Awarded Certificate of Recognition in Flipkart Grid 6.0 Hackathon for innovative problem-solving" },
];

const certs = [
  { icon: "🏆", title: "Generative AI with LLMs", org: "AWS · DeepLearning.ai · Coursera" },
  { icon: "📊", title: "Python for ML & Data Science", org: "Udemy" },
  { icon: "🐍", title: "Python for Data Science", org: "NPTEL" },
  { icon: "☕", title: "DSA using Java", org: "NPTEL – Silver Badge" },
  { icon: "🗃️", title: "The Ultimate MySQL Bootcamp", org: "Udemy" },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest text-amber-400 uppercase border border-amber-500/20 bg-amber-500/8 px-3 py-1 rounded-full">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-white">Achievements & Certs</h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative border border-amber-500/15 rounded-2xl p-5 text-center overflow-hidden group cursor-default"
              style={{ background: "#0d0d1a" }}
            >
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl mb-3 inline-block"
              >
                {a.icon}
              </motion.div>
              <h4 className="text-sm font-bold text-white mb-2 leading-tight">{a.title}</h4>
              <p className="text-[11px] text-white/35 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-glow rounded-2xl p-7 mb-8 flex flex-wrap gap-6 items-start"
        >
          <div className="text-5xl">🎓</div>
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-xl font-black text-white mb-1">B.Tech – CSE (AIML)</h3>
            <div className="text-cyan-400 font-semibold text-sm mb-2">Keshav Memorial Institute of Technology, Hyderabad</div>
            <div className="flex flex-wrap gap-3 text-xs text-white/35 mb-3">
              <span>2021 – 2025</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">CGPA: 8.2</span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed">
              <strong className="text-white/50">Coursework:</strong> Data Structures & Algorithms, OOP, AI & Machine Learning, Software Engineering, DBMS, Data Analysis
            </p>
          </div>
        </motion.div>

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
              className="flex items-center gap-4 border border-white/[0.06] rounded-xl p-4 hover:border-white/15 hover:bg-white/[0.02] transition-all"
            >
              <span className="text-2xl flex-shrink-0">{c.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white">{c.title}</div>
                <div className="text-xs text-white/35 mt-0.5">{c.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
