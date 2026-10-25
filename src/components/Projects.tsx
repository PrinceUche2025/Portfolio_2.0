import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Layers, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: 'Pulse-Core Telemetry App',
    description:
      'A technically challenging telemetry web application featuring exercise categorization, customizable rep/set logging, interactive metrics visualization, and state persistence for fitness tracking.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/PrinceUche2025/Pulse-Core',
    liveUrl: 'https://pulse-core-five.vercel.app/',
    featured: true,
  },
  {
    title: 'Syntax Vault',
    description:
      'A polished developer workspace and code snippet vault for organizing, searching, and managing code patterns with instant copy-paste capabilities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://syntax-vault-eta.vercel.app/',
    featured: true,
  },
  {
    title: 'DevFlow Workspace',
    description:
      'A real-world project workflow and productivity dashboard tailored for software engineers to streamline daily tasks, track builds, and manage dev state effectively.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://devflow-workspace-sandy.vercel.app/',
    featured: true,
  },
];

const moreProjects: Project[] = [
  {
    title: 'Habit Tracker Pro',
    description:
      'Progressive Web Application (PWA) built for daily habit monitoring, completion metrics, and localized data persistence.',
    tags: ['React', 'TypeScript', 'React Router v7', 'PWA'],
    githubUrl: 'https://github.com/PrinceUche2025/Habit-Tracker-Pro',
    featured: false,
  },
  {
    title: 'FluidCore Web Architecture',
    description:
      'A high-performance responsive landing interface demonstrating modern layout algorithms, accessible UI patterns, and optimized CSS architecture.',
    tags: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/PrinceUche2025/FluidCore-Responsive-Webpage',
    liveUrl: 'https://seamwork.vercel.app/',
    featured: false,
  },
  {
    title: 'MedCore Live Monitor',
    description:
      'A real-time telemetry dashboard designed for healthcare environments to track patient vitals, monitor live status metrics, and alert active parameters.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Telemetry UI'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://med-core-live-monitor.vercel.app/',
    featured: false,
  },
  {
    title: 'MedCore Hospital Interface',
    description:
      'A high-performance responsive web portal built for medical institutions, featuring accessible service catalogs, emergency details, and clean UX layout.',
    tags: ['TypeScript', 'HTML5', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://med-core-hospital-static-webpage.vercel.app/',
    featured: false,
  },
  {
    title: 'MedCore Validation Engine',
    description:
      'An interactive patient registration and intake form featuring client-side schema validation, accessible field feedback, and structured payload processing.',
    tags: ['React', 'TypeScript', 'Form Validation', 'Tailwind CSS'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://med-core-hospital-validation-form.vercel.app/',
    featured: false,
  },
  {
    title: 'Seamwork Web Store',
    description:
      'An e-commerce landing and modern interface built for apparel and craft patterns, featuring responsive product showcases and clean micro-interactions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://seamwork.vercel.app/',
    featured: false,
  },
  {
    title: 'Interactive Photo Gallery',
    description:
      'A sleek, responsive media showcase application with dynamic image loading, modal lightboxes, and smooth visual transitions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Grid'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://my-gallery-blush.vercel.app/',
    featured: false,
  },
  {
    title: 'HNG Stage 0 Task Board',
    description:
      'A minimalistic task and profile card application developed according to precise technical specs for instant state interactions and time updates.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/PrinceUche2025',
    liveUrl: 'https://hng-stage0-todo-card-pi.vercel.app/',
    featured: false,
  },
];

export const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2"
            >
              <Activity className="w-4 h-4 animate-pulse" /> Selected Engineering Works
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
            >
              Featured Works
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm max-w-md"
          >
            My flagship applications showcasing polished product UI, technical telemetry, and real-world developer problem solving.
          </motion.p>
        </div>

        {/* Top 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-7 bg-slate-900/70 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-md transition-all group flex flex-col justify-between"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase shadow-sm">
                    Flagship Core
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono text-cyan-300 bg-cyan-500/10 rounded-md border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                    >
                      Live Demo <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button for More Projects */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2 group"
          >
            {showMore ? 'Hide Archive' : `Explore More Projects (${moreProjects.length} additional)`}
            {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />}
          </button>
        </div>

        {/* Collapsible Archive Section */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-slate-800/80 mb-8">
                <h3 className="text-xl font-bold text-slate-200 mb-6 font-mono tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> More Engineering Works & Archives
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moreProjects.map((project, idx) => {
                  const isLastItem = idx === moreProjects.length - 1;
                  const hasOddLastRow = moreProjects.length % 3 === 2;

                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      whileHover={{ y: -5 }}
                      className={`relative rounded-xl p-5 bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 backdrop-blur-md transition-all group flex flex-col justify-between ${
                        isLastItem && hasOddLastRow ? 'md:col-span-2 lg:col-span-2' : ''
                      }`}
                    >
                      <div>
                        <h4 className="text-base font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-800/80">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-slate-800/60 rounded border border-slate-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            Code
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                            >
                              Live Demo <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;