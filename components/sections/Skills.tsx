"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    icon: "🧠", title: "AI / Agentic", color: "#7c3aed",
    skills: ["LangGraph", "LangChain", "AutoGen", "RAG", "Prompt Engineering", "LLM Evaluation", "Voice AI (STT/LLM/TTS)", "Multilingual AI", "Conversational AI", "Multi-Agent Orchestration", "Human-in-the-Loop"],
    featured: ["LangGraph", "LangChain", "RAG", "Voice AI (STT/LLM/TTS)"],
    span: "md:col-span-2",
  },
  {
    icon: "💻", title: "Languages", color: "#06b6d4",
    skills: ["Python", "Java", "JavaScript", "C++"],
    featured: ["Python", "Java"],
    note: "Proficient: Python, Java · Familiar: JavaScript, C++",
    span: "",
  },
  {
    icon: "⚙️", title: "Frameworks", color: "#a855f7",
    skills: ["FastAPI", "Flask", "React.js", "Node.js", "Express.js", "Vue.js"],
    featured: ["FastAPI"],
    span: "",
  },
  {
    icon: "🗄️", title: "Databases", color: "#f59e0b",
    skills: ["PostgreSQL", "MongoDB", "SQL", "FAISS", "Pinecone (VectorDB)"],
    featured: ["PostgreSQL", "FAISS"],
    span: "",
  },
  {
    icon: "🔬", title: "Tools & Observability", color: "#10b981",
    skills: ["LangSmith", "TensorFlow", "PyTorch", "Git/GitHub", "Evaluation Frameworks", "Cost & Token Tracking"],
    featured: ["LangSmith"],
    span: "",
  },
  {
    icon: "☁️", title: "Cloud & Infra", color: "#38bdf8",
    skills: ["AWS", "Microservices", "REST APIs"],
    featured: ["AWS"],
    span: "",
  },
  {
    icon: "📚", title: "Libraries", color: "#f472b6",
    skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "Scikit-learn", "Hugging Face"],
    featured: [],
    span: "",
  },
  {
    icon: "🤖", title: "AI Coding Tools", color: "#818cf8",
    skills: ["Claude Code", "GitHub Copilot", "Cursor", "Antigravity"],
    featured: ["Claude Code"],
    span: "",
  },
];

const allSkills = categories.flatMap(c => c.skills);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] text-amber-400 uppercase border border-amber-500/20 bg-amber-500/8 px-4 py-1.5 rounded-full mb-5">
            Expertise
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
            Skills
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto leading-relaxed">
            A toolkit built for shipping AI systems from prototype to production
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative mb-12 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#04040a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#04040a] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 w-max marquee-track py-3">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i} className="text-xs font-mono text-white/20 whitespace-nowrap flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-violet-500/50 inline-block" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl border border-white/[0.07] hover:border-white/[0.14] p-6 overflow-hidden transition-all duration-400 hover:-translate-y-1 ${cat.span}`}
              style={{ background: "linear-gradient(145deg, #0f0f1f 0%, #0a0a16 100%)" }}
            >
              {/* Hover inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 60% at 10% 10%, ${cat.color}10, transparent)` }} />

              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ background: cat.color }} />

              <div className="relative z-10 pl-3">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-bold text-white/90">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span
                      key={s}
                      className="text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all duration-200"
                      style={
                        cat.featured.includes(s)
                          ? { background: `${cat.color}18`, borderColor: `${cat.color}35`, color: cat.color }
                          : { background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }
                      }
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {cat.note && (
                  <p className="text-[10px] text-white/20 mt-4 font-mono leading-relaxed">{cat.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
