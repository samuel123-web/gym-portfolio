import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950 text-white border-y border-slate-800/80">
      
      {/* Background Glows & Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-tr from-brand-600 to-cyan-500 text-white mb-8 shadow-xl shadow-brand-500/25"
        >
          <QuoteIcon className="w-8 h-8" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight max-w-4xl mx-auto text-slate-100"
        >
          {personalInfo.brandStatement}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-500" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
              Personal Core Philosophy
            </span>
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-500" />
          </div>
          <p className="mt-2 text-sm font-semibold text-slate-300">
            {personalInfo.name} — {personalInfo.location}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
