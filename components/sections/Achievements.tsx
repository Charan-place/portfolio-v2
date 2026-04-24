"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  { icon: "🥇", title: "Meta AI Hackathon Finalist", desc: "Recognized for innovative AI application development", color: "#f59e0b" },
  { icon: "🥈", title: "NPTEL Silver Badge", desc: "Data Structures and Algorithms using Java", color: "#94a3b8" },
  { icon: "🏅", title: "Top 10 Teams", desc: "Open Group Enterprise Architecture Hackathon", color: "#f97316" },
  { icon: "💯", title: "Walmart Sparkathon", desc: "Ranked in Top 100 teams for innovative tech solutions", color: "#3b82f6" },
  { icon: "🎖️", title: "Flipkart Grid 6.0", desc: "Certificate of Recognition for innovative problem-solving", color: "#8b5cf6" },
];

const certs = [
  { icon: "🏆", title: "Generative AI with Large Language Models", org: "AWS · DeepLearning.ai · Coursera", color: "#f59e0b" },
  { icon: "📊", title: "Python for Machine Learning and Data Science", org: "Udemy", color: "#3b82f6" },
  { icon: "🐍", title: "Python for Data Science", org: "NPTEL", color: "#10b981" },
  { icon: "☕", title: "Data Structures and Algorithms using Java", org: "NPTEL – Silver Badge", color: "#f97316" },
  { icon: "🗃️", title: "The Ultimate MySQL Bootcamp", org: "Udemy", color: "#6366f1" },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] text-amber-400 uppercase border border-amber-500/20 bg-amber-500/8 px-4 py-1.5 rounded-full mb-5">
            Recognition
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
            Achievements & Certs
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto">
            Competing, winning, and getting recognized on national stages
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl border border-white/[0.07] hover:border-white/[0.15] p-6 text-center overflow-hidden transition-all duration-300 cursor-default"
              style={{ background: "linear-gradient(145deg, #0f0f1f 0%, #0a0a16 100%)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${a.color}10, transparent 70%)` }} />

              <motion.div
                whileHover={{ scale: 1.3, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-4xl mb-4 inline-block"
              >
                {a.icon}
              </motion.div>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">{a.title}</h4>
              <p className="text-[11px] text-white/30 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="rounded-2xl border border-white/[0.08] p-8 mb-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0f1f 0%, #0a0a16 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4, #f59e0b)" }} />
          <div className="flex flex-wrap items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-3xl flex-shrink-0">🎓</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-black text-white mb-1 tracking-tight">B.Tech – Computer Science & Engineering (AIML)</h3>
              <div className="text-cyan-400 font-semibold text-sm mb-3">Keshav Memorial Institute of Technology, Hyderabad</div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/35 mb-4">
                <span className="bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-lg">2021 – 2025</span>
                <span className="bg-amber-500/10 border border-amber-500/25 text-amber-300 font-bold px-3 py-1 rounded-lg">CGPA: 8.2</span>
              </div>
              <p className="text-xs text-white/30 leading-relaxed">
                <span className="text-white/45 font-medium">Coursework: </span>
                Data Structures & Algorithms, OOP, AI & Machine Learning, Software Engineering, DBMS, Data Analysis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
              className="group flex items-center gap-4 border border-white/[0.07] hover:border-white/[0.14] rounded-xl p-4 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                {c.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white leading-snug">{c.title}</div>
                <div className="text-[11px] text-white/30 mt-0.5">{c.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
