import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import ClientOnly from "@/components/ui/ClientOnly";

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono font-bold text-lg">
          <span className="text-violet-500">&lt;</span>
          <span className="text-white">SSC</span>
          <span className="text-violet-500">/&gt;</span>
        </div>
        <p className="text-xs text-white/25 font-mono">Satya Sai Charan Narra © 2025 · Next.js + Three.js</p>
        <div className="flex gap-5">
          {[
            { label: "GitHub", href: "https://github.com/Charan-place" },
            { label: "LeetCode", href: "https://leetcode.com/NeverGiveUp07/" },
            { label: "Email", href: "mailto:nsatyasaicharan@gmail.com" },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
              className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ClientOnly />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
