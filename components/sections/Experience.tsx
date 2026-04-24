"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    role: "AI Engineer",
    company: "SLRI Solutions",
    period: "Aug 2025 – Present",
    current: true,
    color: "from-violet-600 to-cyan-500",
    bullets: [
      { icon: "⚡", text: "Designed and deployed a **SQL Agent using RAG architecture** over PostgreSQL with omnichannel connector integrations (Slack, Google Drive, REST APIs), enabling natural language querying at scale with **90%+ accuracy**." },
      { icon: "🎙️", text: "Built and shipped to production a **multilingual Voice-based Conversational AI Agent** with end-to-end STT → LLM → TTS pipelines using Smallest.ai and Murf.ai, improving real-time interaction efficiency by **40%**." },
      { icon: "🔧", text: "Developed and exposed **microservice APIs** for authentication, session management, and agent orchestration, enabling modular, production-ready deployments consumed across multiple internal services." },
      { icon: "📊", text: "Engineered a robust **evaluation and telemetry framework** tracking token usage, cost metrics, input/output traces, and model performance; cut AI operational costs by **25%**." },
    ],
    tags: ["RAG", "PostgreSQL", "Voice AI", "Microservices", "LLM Evaluation", "LangSmith"],
  },
  {
    role: "AI Developer Intern",
    company: "DevDolphins Software Solutions Pvt. Ltd.",
    period: "Feb 2025 – Jul 2025",
    current: false,
    color: "from-cyan-500 to-fuchsia-500",
    bullets: [
      { icon: "🤖", text: "Built a scalable **AI-driven QA platform** using Vue.js, FastAPI, and LangGraph, achieving **95%+ answer accuracy** and reducing manual QA workload by 60% through intelligent multi-agent automation." },
      { icon: "🔍", text: "Integrated **LangSmith observability** with LangGraph workflows (Human-in-the-Loop, checkpointing, modular agents), enabling **70% faster debugging** and reliable deployment of 10+ production workflows." },
      { icon: "📐", text: "Automated **LaTeX image generation** with MiKTeX for 1,000+ STEM questions, boosting content creation efficiency by **3x**." },
    ],
    tags: ["LangGraph", "FastAPI", "Vue.js", "LangSmith", "Human-in-the-Loop"],
  },
];

function Bold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{p}</strong> : p
      )}
    </span>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase border border-violet-500/20 bg-violet-500/8 px-3 py-1 rounded-full">Career</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-white">Experience</h2>
          <p className="text-white/40 text-base max-w-md mx-auto">Building AI systems that ship to production and drive real business value</p>
        </motion.div>

        <div className="space-y-8 relative">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-br ${job.color} hidden md:flex items-center justify-center`}
                style={{ left: "-1.5rem" }}>
                {job.current && (
                  <span className="absolute w-10 h-10 rounded-full border-2 border-violet-400/30 animate-ping" />
                )}
              </div>

              <div className={`border-glow rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}>
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${job.color}`} />

                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(124,58,237,0.06), transparent 60%)" }} />

                <div className="relative z-10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{job.role}</h3>
                      <div className={`text-sm font-semibold mt-1 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>{job.company}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/30">{job.period}</span>
                      {job.current && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                          ● Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {job.bullets.map((b, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span className="text-lg flex-shrink-0 mt-0.5">{b.icon}</span>
                        <p className="text-white/55 text-sm leading-relaxed">
                          <Bold text={b.text} />
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
