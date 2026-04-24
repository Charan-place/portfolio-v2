"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("../three/ParticleField"), { ssr: false });
const FloatingOrb = dynamic(() => import("../three/FloatingOrb"), { ssr: false });

const roles = ["Agentic AI Systems", "Multi-Agent Pipelines", "Voice AI Solutions", "RAG Architectures", "Production AI Apps"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null!);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js galaxy background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 z-[1] bg-radial-gradient pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #04040a 80%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight mb-6"
          >
            <span className="text-white">Satya Sai</span>
            <br />
            <span className="grad">Charan Narra</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 text-xl font-semibold mb-6"
          >
            <span className="text-white/40">I build</span>
            <span className="text-cyan-400 min-w-[280px]">
              {displayed}<span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/55 text-base leading-relaxed max-w-lg mb-10"
          >
            AI Engineer at SLRI Solutions, shipping production-grade agentic systems with LangGraph, RAG architectures, and Voice AI pipelines that drive real business impact.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 mb-10"
          >
            {[
              { n: "90%+", l: "SQL Agent Accuracy" },
              { n: "40%", l: "Efficiency Boost" },
              { n: "25%", l: "Cost Reduction" },
            ].map(s => (
              <div key={s.n}>
                <div className="text-2xl font-black grad">{s.n}</div>
                <div className="text-xs text-white/40 mt-0.5 font-medium tracking-wide">{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 flex-wrap mb-10"
          >
            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors text-sm"
            >
              View My Work ↓
            </motion.button>
            <motion.a
              href="mailto:nsatyasaicharan@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-bold rounded-xl transition-all text-sm bg-white/[0.03]"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="flex gap-5">
            {[
              { label: "GitHub", href: "https://github.com/Charan-place" },
              { label: "LeetCode", href: "https://leetcode.com/NeverGiveUp07/" },
              { label: "nsatyasaicharan@gmail.com", href: "mailto:nsatyasaicharan@gmail.com" },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                className="text-xs text-white/35 hover:text-white/70 transition-colors font-mono">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            {/* Outer glow rings */}
            <div className="absolute inset-[-60px] rounded-full border border-violet-500/10 animate-[spin-slow_25s_linear_infinite]" />
            <div className="absolute inset-[-30px] rounded-full border border-cyan-500/10 animate-[spin-slow_18s_linear_infinite_reverse]" />
            {/* Orb canvas */}
            <div className="absolute inset-0 float">
              <FloatingOrb />
            </div>
            {/* Floating chips */}
            {[
              { label: "LangGraph", pos: "top-4 -left-8", delay: 0 },
              { label: "RAG", pos: "top-1/4 -right-6", delay: 0.3 },
              { label: "FastAPI", pos: "bottom-1/4 -right-10", delay: 0.6 },
              { label: "Voice AI", pos: "bottom-4 -left-6", delay: 0.9 },
              { label: "LangChain", pos: "-left-12 top-1/2", delay: 1.2 },
            ].map(c => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + c.delay, type: "spring", stiffness: 200 }}
                className={`absolute ${c.pos} px-3 py-1.5 text-[11px] font-bold rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white/70 whitespace-nowrap`}
              >
                {c.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-white/30 font-mono uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-violet-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
