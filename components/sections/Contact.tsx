"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("nsatyasaicharan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    { icon: "📧", label: "Email", value: "nsatyasaicharan@gmail.com", action: copy, isCopy: true },
    { icon: "📱", label: "Phone", value: "+91-7731973469", href: "tel:+917731973469" },
    { icon: "💻", label: "GitHub", value: "github.com/Charan-place", href: "https://github.com/Charan-place" },
    { icon: "🏆", label: "LeetCode", value: "leetcode.com/NeverGiveUp07/", href: "https://leetcode.com/NeverGiveUp07/" },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* BG orbs */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.05] bg-violet-600 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.05] bg-cyan-500 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] text-violet-400 uppercase border border-violet-500/20 bg-violet-500/8 px-4 py-1.5 rounded-full mb-5">
            Contact
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tight text-white leading-tight mb-4">
            Let's Build Something<br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Extraordinary
            </span>
          </h2>
          <p className="text-white/35 text-base max-w-md mx-auto leading-relaxed">
            Whether it's a production AI system, agentic workflow, or just a conversation about the future of AI — I'm always up for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Contact list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {contacts.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 border border-white/[0.07] hover:border-white/[0.15] rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-white/30 font-mono mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-white/80 truncate">{item.value}</div>
                </div>
                {item.isCopy ? (
                  <button
                    onClick={copy}
                    className="text-xs px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:bg-violet-500/20 transition-all font-semibold flex-shrink-0"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-xs px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all flex-shrink-0"
                  >
                    Open ↗
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
            style={{ background: "linear-gradient(145deg, #0f0f1f 0%, #0a0a16 100%)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(124,58,237,0.06), transparent)" }} />

            <div className="relative z-10 p-8">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/[0.06]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-black text-white text-lg flex-shrink-0">
                  SSC
                </div>
                <div>
                  <div className="font-black text-white text-lg leading-tight">Satya Sai Charan Narra</div>
                  <div className="text-cyan-400 text-sm font-medium mt-0.5">AI Engineer</div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-8">
                {[
                  { k: "Status", v: "● Open to Opportunities", highlight: true },
                  { k: "Location", v: "Hyderabad, India" },
                  { k: "Focus", v: "Agentic AI · Production ML" },
                  { k: "Stack", v: "LangGraph · FastAPI · Python" },
                  { k: "Response", v: "Within 24 hours" },
                ].map(row => (
                  <div key={row.k} className="flex justify-between items-center">
                    <span className="text-xs text-white/30 font-mono">{row.k}</span>
                    <span className={`text-sm font-semibold ${row.highlight ? "text-emerald-400" : "text-white/65"}`}>
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="mailto:nsatyasaicharan@gmail.com"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(124,58,237,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
              >
                Send a Message →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
