import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Main Hero Copy */}
          <div className="flex-1 text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-6 shadow-inner shadow-cyan-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-300" /> Frontend Engineer & UI Specialist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-none"
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">scalable</span> web applications.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
            >
              Hi, I'm <strong className="text-cyan-300 font-semibold">Prince</strong>. A Frontend Developer that builds responsive, accessible, and user-focused web experiences with React, TypeScript, and Tailwind CSS.
            </motion.p>

            {/* Action Buttons with Dynamic Glows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-sm transition-all backdrop-blur-md hover:shadow-lg hover:shadow-slate-900/50"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Glowing Glassmorphism Code Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 w-full max-w-lg relative group"
          >
            {/* Soft Ambient Glow under terminal */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            
            <div className="relative rounded-2xl bg-[#0b0f19]/90 border border-slate-800/80 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> developer.ts
                </div>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
                <p className="text-purple-400">
                  <span className="text-cyan-400">const</span> developer = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">'Onyemachukwu Uche'</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">'Frontend Developer'</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TypeScript'</span>, <span className="text-amber-300">'Vite'</span>, <span className="text-amber-300">'Tailwind'</span>],
                </p>
                <p className="pl-4">
                  focus: <span className="text-emerald-400">'Clean architecture & UX performance'</span>,
                </p>
                <p className="pl-4 text-slate-500">
                  status: <span className="text-cyan-400 animate-pulse">'Available for hire'</span>
                </p>
                <p className="text-purple-400">&#125;;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;