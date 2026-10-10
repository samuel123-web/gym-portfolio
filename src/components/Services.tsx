import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Activity, Trophy, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesList } from '../data/portfolioData';

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Activity: Activity,
  Trophy: Trophy,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coaching Packages & Offerings</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Training Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Structured fitness solutions built for individual progress, fat loss, muscle growth, and combat stamina.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Dumbbell;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-lg hover:border-brand-500/40 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-600/20 to-cyan-500/20 text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {service.shortDesc}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Included Deliverables
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:text-cyan-500 transition-colors"
                  >
                    <span>Inquire About Package</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
