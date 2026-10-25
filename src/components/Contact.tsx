import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3"
          >
            <MessageSquare className="w-4 h-4" /> Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Let's build something remarkable together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base leading-relaxed"
          >
            Whether you have an inquiry, a project offer, or simply want to connect, feel free to reach out across any of these channels!
          </motion.p>

          {/* Mail CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="mailto:contact@uche.dev"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20 inline-flex items-center gap-2 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Send Direct Email
            </a>
          </motion.div>

          {/* Large Circular Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/PrinceUche2025"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
              title="GitHub"
            >
              <svg className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/uchechukwu-prince/"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
              title="LinkedIn"
            >
              <svg className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="mailto:contact@uche.dev"
              className="p-5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
              title="Email"
            >
              <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Bottom Copyright */}
          <div className="mt-16 pt-8 border-t border-slate-800/60 w-full text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Onyemachukwu Uche. All rights reserved.</p>
            <p className="text-slate-600">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;