"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="relative w-12 h-7 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center px-1"
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        animate={{ x: theme === "light" ? 18 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-[10px]"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
