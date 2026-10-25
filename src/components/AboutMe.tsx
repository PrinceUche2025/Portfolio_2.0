import { motion } from 'framer-motion';
import { User, GraduationCap, Award, MapPin, Briefcase } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
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
              <User className="w-4 h-4" /> Background & Profile
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
            >
              About Me
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm max-w-md"
          >
            A glimpse into my professional journey, academic foundation, and passion for AI-integrated web architecture.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl p-8 bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                Frontend Developer & CS Scholar
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Hello! I'm <strong className="text-cyan-300">Onyemachukwu Uche</strong>, a Frontend Developer and Computer Science undergraduate based in Nigeria. I specialize in building responsive, high-performance web applications using React, TypeScript, Vite, and Tailwind CSS.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Alongside my hands-on industry experience building production features at Dechukify Technologies, FlyRank AI, and Decode Labs, I actively expand my expertise into cloud infrastructure (AWS) and AI-driven development workflows through Anthropic Claude certifications. My goal is to craft intuitive digital products while preparing for postgraduate studies in Computer Science in Germany.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-slate-200">Remote</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Education</div>
                  <div className="text-sm font-semibold text-slate-200">B.Sc. Computer Science</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Experience</div>
                  <div className="text-sm font-semibold text-slate-200">Dechukify, FlyRank AI & DecodeLabs</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights & Milestones Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-8 bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" /> Key Milestones
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>Dechukify & FlyRank AI:</strong> Building production features in React, TypeScript, and modern AI/cloud environments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>AWS Certified:</strong> Cloud Practitioner Essentials & Amazon API Gateway certified.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>AI Integration:</strong> Certified in Anthropic Claude Code, Platform, Cowork, and Model Context Protocol (MCP).</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-xs hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;