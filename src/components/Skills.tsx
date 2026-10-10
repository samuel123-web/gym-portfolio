import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Sparkles,
  Check,
  CheckCircle,
} from 'lucide-react';
import { skillsList, skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'strength' | 'combat' | 'mobility' | 'coaching'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'strength':
        return <Dumbbell className="w-4 h-4 text-cyan-500" />;
      case 'combat':
        return <Flame className="w-4 h-4 text-rose-500" />;
      case 'mobility':
        return <Activity className="w-4 h-4 text-emerald-500" />;
      case 'coaching':
        return <HeartPulse className="w-4 h-4 text-brand-500" />;
      default:
        return <Dumbbell className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Training Disciplines & Competencies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Fitness & Training Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive coaching skillset combining progressive resistance, boxing stamina, and functional movement.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  isActive
                    ? 'text-white shadow-md shadow-brand-500/25 scale-105'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white glass-card'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-cyan-600 rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="group relative p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      <Check className="w-2.5 h-2.5" />
                      {skill.tag || 'Specialty'}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 capitalize">
                  <span className="text-[11px] font-medium">{skill.category}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500/70" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
