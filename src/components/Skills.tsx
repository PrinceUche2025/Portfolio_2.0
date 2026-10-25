import { motion } from 'framer-motion';
import { Cpu, Code2, Cloud, Wrench, Sparkles } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI Engineering',
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    description: 'Modern component architectures, type-safe interfaces, and responsive layouts.',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    title: 'AI Integration & Workflows',
    icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    description: 'Advanced AI tooling, prompt engineering, and Model Context Protocol integrations.',
    skills: ['Anthropic Claude Code', 'Claude Platform', 'Claude Cowork', 'Model Context Protocol (MCP)', 'AI-Integrated Interfaces'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5 text-indigo-400" />,
    description: 'Cloud services, serverless routing, and scalable object storage solutions.',
    skills: ['AWS Cloud Practitioner', 'Amazon S3', 'Amazon API Gateway', 'Amazon CloudFront'],
  },
  {
    title: 'Tools & Deployment',
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    description: 'Version control workflows, CI/CD pipelines, and high-performance hosting.',
    skills: ['Git', 'GitHub Workflows', 'Vercel', 'Responsive UI/UX', 'Clean Code Architecture'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
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
              <Cpu className="w-4 h-4 animate-pulse" /> Technical Proficiency
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
            >
              Skills & Tooling Matrix
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm max-w-md"
          >
            A comprehensive overview of the languages, frameworks, cloud services, and AI developer workflows I utilize.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-7 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-cyan-950/20 backdrop-blur-md transition-all group flex flex-col justify-between"
            >
              {/* Glowing Top Border Accent */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/50 group-hover:bg-slate-800 rounded-lg border border-slate-700/60 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;