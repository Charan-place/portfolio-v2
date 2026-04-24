"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    role: "AI Engineer",
    company: "SLRI Solutions",
    period: "Aug 2025 – Present",
    current: true,
    gradient: "from-violet-500 via-purple-500 to-cyan-500",
    accentColor: "#7c3aed",
    bullets: [
      { icon: "⚡", text: "Designed and deployed a **SQL Agent using RAG architecture** over PostgreSQL with omnichannel connector integrations (Slack, Google Drive, REST APIs), enabling natural language querying at scale with **90%+ accuracy**." },
      { icon: "🎙️", text: "Built and shipped to production a **multilingual Voice-based Conversational AI Agent** with end-to-end STT → LLM → TTS pipelines using Smallest.ai and Murf.ai, improving real-time interaction efficiency by **40%**." },
      { icon: "🔧", text: "Developed and exposed **microservice APIs** for authentication, session management, and agent orchestration, enabling modular, production-ready deployments across multiple internal services." },
      { icon: "📊", text: "Engineered a robust **evaluation and telemetry framework** tracking token usage, cost metrics, input/output traces, and model performance; cut AI operational costs by **25%**." },
    ],
    tags: ["RAG", "PostgreSQL", "Voice AI", "Microservices", "LLM Evaluation", "LangSmith"],
    metrics: [{ n: "90%+", l: "Accuracy" }, { n: "40%", l: "Efficiency" }, { n: "25%", l: "Cost Saved" }],
  },
  {
    role: "AI Developer Intern",
    company: "DevDolphins Software Solutions Pvt. Ltd.",
    period: "Feb 2025 – Jul 2025",
    current: false,
    gradient: "from-cyan-500 via-sky-500 to-fuchsia-500",
    accentColor: "#06b6d4",
    bullets: [
      { icon: "🤖", text: "Built a scalable **AI-driven QA platform** using Vue.js, FastAPI, and LangGraph, achieving **95%+ answer accuracy** and reducing manual QA workload by **60%** through intelligent multi-agent automation." },
      { icon: "🔍", text: "Integrated **LangSmith observability** with LangGraph workflows (Human-in-the-Loop, checkpointing, modular agents), enabling **70% faster debugging** and reliable deployment of 10+ production workflows." },
      { icon: "📐", text: "Automated **LaTeX image generation** with MiKTeX for 1,000+ STEM questions, boosting content creation efficiency by **3x**." },
    ],
    tags: ["LangGraph", "FastAPI", "Vue.js", "LangSmith", "Human-in-the-Loop"],
    metrics: [{ n: "95%+", l: "Accuracy" }, { n: "70%", l: "Faster Debug" }, { n: "3×", l: "Efficiency" }],
  },
];

function Bold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <strong key={i} className="text-white font-semibold">{p}</strong>
          : <span key={i} className="text-white/55">{p}</span>
      )}
    </span>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Subtle BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.04] bg-violet-500 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] text-violet-400 uppercase border border-violet-500/20 bg-violet-500/8 px-4 py-1.5 rounded-full mb-5">
            Career
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
            Experience
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto leading-relaxed">
            Building AI systems that ship to production and drive real business value
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent hidden md:block" />

          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:pl-20 relative"
            >
              {/* Timeline dot */}
              <div className={`hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-gradient-to-br ${job.gradient} items-center justify-center text-xl z-10`}>
                {i === 0 ? "⚡" : "🤖"}
                {job.current && (
                  <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                )}
              </div>

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden group border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
                style={{ background: "linear-gradient(135deg, #0f0f1f 0%, #0a0a16 100%)" }}>

                {/* Animated top border */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${job.gradient}`} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 50% at 20% 20%, ${job.accentColor}12, transparent)` }} />

                <div className="relative z-10 p-8 md:p-10">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-black text-white tracking-tight">{job.role}</h3>
                        {job.current && (
                          <span className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className={`text-sm font-bold bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                        {job.company}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/25 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg">
                      {job.period}
                    </span>
                  </div>

                  {/* Metrics mini-row */}
                  <div className="flex gap-6 mb-8 pb-8 border-b border-white/[0.06]">
                    {job.metrics.map(m => (
                      <div key={m.l}>
                        <div className={`text-xl font-black bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>{m.n}</div>
                        <div className="text-[11px] text-white/30 font-medium mt-0.5">{m.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <div className="space-y-5 mb-8">
                    {job.bullets.map((b, j) => (
                      <div key={j} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                          {b.icon}
                        </div>
                        <p className="text-sm leading-relaxed pt-1">
                          <Bold text={b.text} />
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(t => (
                      <span key={t}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition-colors"
                        style={{
                          background: `${job.accentColor}12`,
                          borderColor: `${job.accentColor}30`,
                          color: `${job.accentColor}dd`,
                        }}>
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
