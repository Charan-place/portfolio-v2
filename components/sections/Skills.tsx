"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    icon: "🧠",
    title: "AI / Agentic",
    color: "violet",
    skills: ["LangGraph", "LangChain", "AutoGen", "RAG", "Prompt Engineering", "LLM Evaluation", "Voice AI (STT/LLM/TTS)", "Multilingual AI", "Conversational AI", "Multi-Agent Orchestration", "Human-in-the-Loop"],
    featured: ["LangGraph", "LangChain", "RAG", "Voice AI (STT/LLM/TTS)"],
  },
  {
    icon: "💻",
    title: "Languages",
    color: "cyan",
    skills: ["Python", "Java", "JavaScript", "C++"],
    featured: ["Python", "Java"],
    note: "Proficient: Python, Java · Familiar: JavaScript, C++",
  },
  {
    icon: "⚙️",
    title: "Frameworks",
    color: "fuchsia",
    skills: ["FastAPI", "Flask", "React.js", "Node.js", "Express.js", "Vue.js"],
    featured: ["FastAPI"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    color: "amber",
    skills: ["PostgreSQL", "MongoDB", "SQL", "FAISS", "Pinecone (VectorDB)"],
    featured: ["PostgreSQL", "FAISS"],
  },
  {
    icon: "🔬",
    title: "Tools & Observability",
    color: "emerald",
    skills: ["LangSmith", "TensorFlow", "PyTorch", "Git/GitHub", "Evaluation Frameworks", "Cost & Token Tracking"],
    featured: ["LangSmith"],
  },
  {
    icon: "☁️",
    title: "Cloud & Infra",
    color: "sky",
    skills: ["AWS", "Microservices", "REST APIs"],
    featured: ["AWS"],
  },
  {
    icon: "📚",
    title: "Libraries",
    color: "rose",
    skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "Scikit-learn", "Hugging Face"],
    featured: [],
  },
  {
    icon: "🤖",
    title: "AI Coding Tools",
    color: "indigo",
    skills: ["Claude Code", "GitHub Copilot", "Cursor", "Antigravity"],
    featured: ["Claude Code"],
  },
];

const colorClass: Record<string, { border: string; glow: string; badge: string; dot: string }> = {
  violet: { border: "border-violet-500/25", glow: "bg-violet-500/6", badge: "bg-violet-500/15 border-violet-500/25 text-violet-300", dot: "bg-violet-500" },
  cyan: { border: "border-cyan-500/25", glow: "bg-cyan-500/6", badge: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300", dot: "bg-cyan-500" },
  fuchsia: { border: "border-fuchsia-500/25", glow: "bg-fuchsia-500/6", badge: "bg-fuchsia-500/15 border-fuchsia-500/25 text-fuchsia-300", dot: "bg-fuchsia-500" },
  amber: { border: "border-amber-500/25", glow: "bg-amber-500/6", badge: "bg-amber-500/15 border-amber-500/25 text-amber-300", dot: "bg-amber-500" },
  emerald: { border: "border-emerald-500/25", glow: "bg-emerald-500/6", badge: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300", dot: "bg-emerald-500" },
  sky: { border: "border-sky-500/25", glow: "bg-sky-500/6", badge: "bg-sky-500/15 border-sky-500/25 text-sky-300", dot: "bg-sky-500" },
  rose: { border: "border-rose-500/25", glow: "bg-rose-500/6", badge: "bg-rose-500/15 border-rose-500/25 text-rose-300", dot: "bg-rose-500" },
  indigo: { border: "border-indigo-500/25", glow: "bg-indigo-500/6", badge: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300", dot: "bg-indigo-500" },
};

/* Marquee of all skills */
const allSkills = categories.flatMap(c => c.skills);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest text-amber-400 uppercase border border-amber-500/20 bg-amber-500/8 px-3 py-1 rounded-full">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-white">Skills</h2>
          <p className="text-white/40 text-base max-w-md mx-auto">A toolkit built for shipping AI systems from prototype to production</p>
        </motion.div>

        {/* Marquee */}
        <div className="relative mb-14 overflow-hidden py-3 border-y border-white/[0.06]">
          <div className="flex gap-6 w-max marquee-track">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i} className="text-xs font-mono text-white/25 whitespace-nowrap flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-violet-500/60" />
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const c = colorClass[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl border ${c.border} p-5 overflow-hidden hover:-translate-y-1 transition-all duration-300`}
                style={{ background: "#0d0d1a" }}
              >
                <div className={`absolute inset-0 ${c.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(s => (
                      <span key={s}
                        className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition-all ${
                          cat.featured.includes(s)
                            ? `${c.badge} border`
                            : "bg-white/[0.04] border-white/[0.07] text-white/40"
                        }`}>
                        {s}
                      </span>
                    ))}
                  </div>
                  {cat.note && (
                    <p className="text-[10px] text-white/25 mt-3 leading-relaxed font-mono">{cat.note}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
