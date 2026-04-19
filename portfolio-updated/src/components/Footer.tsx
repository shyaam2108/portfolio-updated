"use client";

import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030014]/50 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold tracking-wider text-white">
            SHYAAM<span className="text-purple-500">.</span>
          </span>
          <p className="text-gray-400 text-sm text-center md:text-left max-w-sm">
            Building scalable, high-performance web and mobile applications with modern technologies.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/shyaampragaashr" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass-card rounded-full hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/shyaampragaashr" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors p-2 glass-card rounded-full hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:shyaampragaashr@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors p-2 glass-card rounded-full hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shyaam Pragaash R. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors text-sm"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
