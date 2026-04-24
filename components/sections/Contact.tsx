"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("nsatyasaicharan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* BG orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-8 bg-violet-600" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-8 bg-cyan-500" />
      </div>

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase border border-violet-500/20 bg-violet-500/8 px-3 py-1 rounded-full">Contact</span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4 tracking-tight">
            <span className="text-white">Let's Build Something</span>
            <br />
            <span className="grad">Extraordinary</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Whether it's a production AI system, agentic workflow, or just a conversation about the future of AI — I'm always up for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { icon: "📧", label: "Email", value: "nsatyasaicharan@gmail.com", action: copy, copied },
              { icon: "📱", label: "Phone", value: "+91-7731973469", href: "tel:+917731973469" },
              { icon: "💻", label: "GitHub", value: "github.com/Charan-place", href: "https://github.com/Charan-place" },
              { icon: "🏆", label: "LeetCode", value: "leetcode.com/NeverGiveUp07/", href: "https://leetcode.com/NeverGiveUp07/" },
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ x: 4 }}
                className="flex items-center gap-4 border border-white/[0.07] rounded-xl p-4 hover:border-white/15 hover:bg-white/[0.02] transition-all group"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/30 mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-white/80 truncate">{item.value}</div>
                </div>
                {item.action ? (
                  <button onClick={item.action}
                    className="text-xs px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:bg-violet-500/20 transition-all font-medium">
                    {item.copied ? "Copied!" : "Copy"}
                  </button>
                ) : (
                  <a href={item.href} target={item.href?.startsWith("http") ? "_blank" : undefined}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all">
                    Open ↗
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-glow rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-black text-white text-lg">SSC</div>
                <div>
                  <div className="font-black text-white text-lg">Satya Sai Charan Narra</div>
                  <div className="text-cyan-400 text-sm font-medium">AI Engineer</div>
                </div>
              </div>

              <div className="space-y-3 mb-6 border-t border-white/[0.06] pt-6">
                {[
                  { k: "Status", v: "● Open to Opportunities", highlight: true },
                  { k: "Location", v: "Hyderabad, India" },
                  { k: "Focus", v: "Agentic AI · Production ML" },
                  { k: "Stack", v: "LangGraph · FastAPI · Python" },
                  { k: "Response", v: "Within 24 hours" },
                ].map(row => (
                  <div key={row.k} className="flex justify-between items-center text-sm">
                    <span className="text-white/35">{row.k}</span>
                    <span className={row.highlight ? "text-emerald-400 font-semibold" : "text-white/65 font-medium"}>{row.v}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="mailto:nsatyasaicharan@gmail.com"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(124,58,237,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-sm"
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
