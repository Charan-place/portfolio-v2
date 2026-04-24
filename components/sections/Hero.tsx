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

      {/* Three.js galaxy — full background, behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Dark vignette so text is readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 60% 50%, transparent 10%, #04040a 75%)" }}
      />
      {/* Extra left-side darken so text is always legible */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(90deg, #04040a 30%, transparent 70%)" }}
      />

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ───────────────────────────── */}
          <div className="flex flex-col">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-5"
            >
              <span className="text-white block">Satya Sai</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 60%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Charan Narra
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-lg font-semibold mb-6"
            >
              <span className="text-white/40">I build</span>
              <span className="text-cyan-400" style={{ minWidth: "260px" }}>
                {displayed}
                <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/55 text-sm leading-relaxed max-w-md mb-8"
            >
              AI Engineer at SLRI Solutions, shipping production-grade agentic systems with LangGraph, RAG architectures, and Voice AI pipelines that drive real business impact.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mb-9"
            >
              {[
                { n: "90%+", l: "SQL Agent Accuracy" },
                { n: "40%", l: "Efficiency Boost" },
                { n: "25%", l: "Cost Reduction" },
              ].map(s => (
                <div key={s.n}>
                  <div
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[11px] text-white/35 mt-0.5 font-medium tracking-wide">{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 flex-wrap mb-8"
            >
              <motion.button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors text-sm"
              >
                View My Work ↓
              </motion.button>
              <motion.a
                href="mailto:nsatyasaicharan@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-bold rounded-xl transition-all text-sm bg-white/[0.03]"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex gap-5 flex-wrap"
            >
              {[
                { label: "GitHub", href: "https://github.com/Charan-place" },
                { label: "LeetCode", href: "https://leetcode.com/NeverGiveUp07/" },
                { label: "nsatyasaicharan@gmail.com", href: "mailto:nsatyasaicharan@gmail.com" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D orb ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px]">

              {/* Ambient glow behind the orb */}
              <div className="absolute inset-[20%] rounded-full blur-3xl bg-violet-600/20 pointer-events-none" />
              <div className="absolute inset-[30%] rounded-full blur-2xl bg-cyan-500/15 pointer-events-none" />

              {/* Spinning decoration rings (CSS only, no canvas) */}
              <div
                className="absolute inset-[-50px] rounded-full border border-violet-500/12 pointer-events-none"
                style={{ animation: "spin-slow 28s linear infinite" }}
              />
              <div
                className="absolute inset-[-25px] rounded-full border border-cyan-500/10 pointer-events-none"
                style={{ animation: "spin-slow 18s linear infinite reverse" }}
              />

              {/* Orb canvas — clipped inside container */}
              <div className="absolute inset-0 overflow-hidden rounded-full" style={{ animation: "float 7s ease-in-out infinite" }}>
                <FloatingOrb />
              </div>

              {/* Floating skill chips */}
              {[
                { label: "LangGraph", top: "8%",  left: "-14%", delay: 0.9 },
                { label: "RAG",       top: "22%",  right: "-12%", delay: 1.1 },
                { label: "FastAPI",   bottom: "28%", right: "-16%", delay: 1.3 },
                { label: "Voice AI",  bottom: "8%",  left: "-8%",  delay: 1.5 },
                { label: "LangChain", top: "55%",   left: "-18%",  delay: 1.7 },
              ].map(c => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: c.delay, type: "spring", stiffness: 180 }}
                  className="absolute px-3 py-1.5 text-[11px] font-bold rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-white/75 whitespace-nowrap pointer-events-none"
                  style={{ top: c.top, left: (c as any).left, right: (c as any).right, bottom: (c as any).bottom }}
                >
                  {c.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-white/25 font-mono uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-violet-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
