import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Training Background & Practice</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Professional Journey
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A timeline of fitness coaching, combat boxing conditioning, and disciplined athletic development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-brand-500 group-hover:scale-125 group-hover:bg-brand-500 transition-all duration-300 shadow-md shadow-brand-500/30" />

              {/* Date pill on left for desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {item.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800/80 group-hover:border-brand-500/40 transition-all duration-300">
                
                {/* Mobile Date Header */}
                <div className="sm:hidden flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-1">
                      <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                        <Dumbbell className="w-3.5 h-3.5 text-brand-500" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
