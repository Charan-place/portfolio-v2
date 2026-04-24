"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Docs-Analyzer-AI",
    date: "July 2024",
    emoji: "📄",
    desc: "Multi-document Q&A system using RAG with FAISS vector retrieval and Google AI embeddings. Integrated LangChain with Gemma-7b-it LLM for seamless multi-PDF conversational retrieval.",
    metrics: ["90%+ accuracy", "30% faster queries"],
    stack: ["Streamlit", "Python", "FAISS", "LangChain", "Google AI Embeddings", "GROQ API"],
    gradient: "from-violet-600 to-purple-400",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.25)",
    github: "https://github.com/Charan-place",
  },
  {
    title: "GardenScape Solutions",
    date: "August 2024",
    emoji: "🌿",
    desc: "Full-stack platform with real-time order management and booking system using RESTful microservice architecture. JWT-based authentication with role-based access control.",
    metrics: ["75% faster response", "30% ops efficiency"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    gradient: "from-cyan-500 to-sky-400",
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.25)",
    github: "https://github.com/Charan-place",
  },
  {
    title: "VisionDreamer",
    date: "Apr – May 2024",
    emoji: "🎨",
    desc: "Full-stack AI web app for artistic image generation via DeepDream algorithm. Optimized image processing pipelines and user authentication with improved security.",
    metrics: ["85%+ visual quality", "40% faster loads"],
    stack: ["Flask", "TensorFlow", "Deep Learning", "PIL", "MongoDB"],
    gradient: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.25)",
    github: "https://github.com/Charan-place",
  },
  {
    title: "Garuda Drone Setup",
    date: "Oct 2023 – Jan 2024",
    emoji: "🚁",
    desc: "Drone-based video conferencing system using Tenda routers and Tp-Link antennas. Real-time flight indicators with jQuery and Socket Communication in a 6-member agile team.",
    metrics: ["90% data accuracy", "40% lower latency"],
    stack: ["Python", "JavaScript", "Raspberry Pi", "jQuery", "Socket.IO"],
    gradient: "from-fuchsia-600 to-pink-400",
    glow: "rgba(217,70,239,0.15)",
    border: "rgba(217,70,239,0.25)",
    github: "https://github.com/Charan-place",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[160px] opacity-[0.06] bg-violet-500 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[160px] opacity-[0.06] bg-cyan-500 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/20 bg-cyan-500/8 px-4 py-1.5 rounded-full mb-5">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
            Projects
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto leading-relaxed">
            Side projects and personal builds that showcase engineering depth
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden border flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "linear-gradient(145deg, #0f0f1f 0%, #0a0a16 100%)",
                borderColor: hovered === i ? p.border : "rgba(255,255,255,0.07)",
                boxShadow: hovered === i ? `0 20px 60px ${p.glow}` : "none",
              }}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.gradient} transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-50"}`} />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 50% at 10% 10%, ${p.glow}, transparent)` }} />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {p.emoji}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-white/25 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md">
                      {p.date}
                    </span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/30 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{p.title}</h3>

                {/* Desc */}
                <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                {/* Metrics */}
                <div className="flex gap-2 flex-wrap mb-5">
                  {p.metrics.map(m => (
                    <span
                      key={m}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                      style={{ background: p.glow, border: `1px solid ${p.border}`, color: "#fff" }}
                    >
                      ↑ {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                  {p.stack.map(s => (
                    <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/35">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
