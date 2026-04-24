import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500","700"] });

export const metadata: Metadata = {
  title: "Satya Sai Charan Narra – AI Engineer",
  description: "AI Engineer specializing in LangGraph, RAG, Voice AI and production-grade agentic systems.",
  keywords: ["AI Engineer", "LangGraph", "RAG", "LangChain", "FastAPI", "Python", "Satya Sai Charan"],
  authors: [{ name: "Satya Sai Charan Narra" }],
  openGraph: {
    title: "Satya Sai Charan Narra – AI Engineer",
    description: "Building intelligent, autonomous AI systems that ship to production.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        {children}
      </body>
    </html>
  );
}
