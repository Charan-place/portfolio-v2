"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Docs-Analyzer-AI",
    date: "July 2024",
    emoji: "📄",
    desc: "Multi-document Q&A system using RAG with FAISS vector retrieval and Google AI embeddings. Integrated LangChain with Gemma-7b-it LLM for a seamless multi-PDF conversational experience.",
    metrics: ["90%+ accuracy", "30% faster queries"],
    stack: ["Streamlit", "Python", "FAISS", "LangChain", "Google AI Embeddings", "GROQ API"],
    color: "violet",
    github: "https://github.com/Charan-place",
  },
  {
    title: "GardenScape Solutions",
    date: "August 2024",
    emoji: "🌿",
    desc: "Full-stack platform with real-time order management and booking via RESTful microservice architecture. JWT-based authentication with role-based access control ensuring 100% data privacy.",
    metrics: ["75% faster response", "30% ops efficiency"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    color: "cyan",
    github: "https://github.com/Charan-place",
  },
  {
    title: "VisionDreamer",
    date: "Apr – May 2024",
    emoji: "🎨",
    desc: "Full-stack AI web app for artistic image generation via DeepDream algorithm. Optimized image processing pipelines with improved security and 40% faster load times.",
    metrics: ["85%+ visual quality", "40% faster loads"],
    stack: ["Flask", "TensorFlow", "Deep Learning", "PIL", "MongoDB"],
    color: "amber",
    github: "https://github.com/Charan-place",
  },
  {
    title: "Garuda Drone Setup",
    date: "Oct 2023 – Jan 2024",
    emoji: "🚁",
    desc: "Drone-based video conferencing system with Tenda routers and Tp-Link antennas. Real-time flight indicators with jQuery and Socket Communication in a 6-member agile team.",
    metrics: ["90% data accuracy", "40% lower latency"],
    stack: ["Python", "JavaScript", "Raspberry Pi", "jQuery", "Socket.IO"],
    color: "fuchsia",
    github: "https://github.com/Charan-place",
  },
];

const colorMap: Record<string, string> = {
  violet: "from-violet-600 to-violet-400",
  cyan: "from-cyan-600 to-cyan-400",
  amber: "from-amber-500 to-orange-400",
  fuchsia: "from-fuchsia-600 to-pink-400",
};

const glowMap: Record<string, string> = {
  violet: "rgba(124,58,237,0.12)",
  cyan: "rgba(6,182,212,0.12)",
  amber: "rgba(245,158,11,0.12)",
  fuchsia: "rgba(217,70,239,0.12)",
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Ambient bg blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-violet-600 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-cyan-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase border border-cyan-500/20 bg-cyan-500/8 px-3 py-1 rounded-full">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-white">Projects</h2>
          <p className="text-white/40 text-base max-w-md mx-auto">Side projects and personal builds that showcase engineering depth</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border border-white/[0.07] rounded-2xl p-7 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-white/15"
              style={{
                background: hovered === i
                  ? `radial-gradient(ellipse at top left, ${glowMap[p.color]}, #0d0d1a 60%)`
                  : "#0d0d1a",
              }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${colorMap[p.color]} transition-all duration-300 ${hovered === i ? "opacity-100" : "opacity-40"}`} />

              {/* Shimmer sweep on hover */}
              <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${hovered === i ? "opacity-100" : "opacity-0"}`}
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)" }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[p.color]} flex items-center justify-center text-2xl`}>
                      {p.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                      <div className="font-mono text-xs text-white/30 mt-0.5">{p.date}</div>
                    </div>
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/30 hover:text-white hover:border-white/25 transition-all bg-white/[0.03]"
                    onClick={e => e.stopPropagation()}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Metrics */}
                <div className="flex gap-2 flex-wrap mb-5">
                  {p.metrics.map(m => (
                    <span key={m} className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${colorMap[p.color]} bg-clip-text text-transparent border border-white/10`}>
                      ↑ {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-white/40 font-mono">
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
