import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardCheck, Dumbbell, Flame, Trophy, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const stepIcons = [ClipboardCheck, Dumbbell, Flame, Trophy];

export const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-slate-900/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coaching Framework</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            How I Coach
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A 4-step progressive framework to take you from your initial assessment to peak physical strength and fitness.
          </p>
        </div>

        {/* 4 Steps Flow with Connecting Line */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-brand-600 via-cyan-500 to-indigo-600 -translate-y-12 -z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComp = stepIcons[index] || Dumbbell;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group relative p-7 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-brand-500 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      {step.subtitle}
                    </span>

                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-1">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center text-xs font-semibold text-slate-500 group-hover:text-cyan-500 transition-colors">
                    <span>Stage {index + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
