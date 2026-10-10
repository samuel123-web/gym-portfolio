import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Dumbbell, Clock, Target, Calendar } from 'lucide-react';
import { trainingProgramsList } from '../data/portfolioData';
import { TrainingProgramItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgramItem | null>(null);

  const featuredProg = trainingProgramsList[0];
  const secondaryProgs = [trainingProgramsList[1], trainingProgramsList[2]];
  const gridProgs = [trainingProgramsList[3], trainingProgramsList[4], trainingProgramsList[5]];

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-slate-900/30">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Coaching Blueprints</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
              Featured Training Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Structured workout regimens designed for muscle building, combat boxing stamina, and athletic transformation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Dumbbell className="w-4 h-4 text-brand-500" />
            <span>6 Coaching Blueprints</span>
          </div>
        </div>

        {/* 1. Large Hero Featured Program (Program 01) */}
        {featuredProg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 group relative rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 shadow-xl hover:border-brand-500/50 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Featured Program Image */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] overflow-hidden bg-slate-950">
                <img
                  src={featuredProg.image}
                  alt={featuredProg.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-600 text-white shadow-md">
                    PRIMARY PROGRAM
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
                    PROGRAM {featuredProg.number}
                  </span>
                </div>
              </div>

              {/* Featured Program Content */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {featuredProg.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {featuredProg.tagline}
                  </p>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredProg.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-200/60 dark:bg-slate-800/80">
                      <Clock className="w-3.5 h-3.5 text-cyan-500" />
                      {featuredProg.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-200/60 dark:bg-slate-800/80">
                      <Target className="w-3.5 h-3.5 text-brand-500" />
                      {featuredProg.targetFocus}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProgram(featuredProg)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md hover:from-brand-500 hover:to-indigo-500 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full Details</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>Book Session</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* 2. Secondary Row: 2 Medium Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {secondaryProgs.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 shadow-lg hover:border-brand-500/40 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-white border border-white/10 font-bold">
                      PROGRAM {prog.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {prog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {prog.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{prog.duration}</span>
                </div>

                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-600/10 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white transition-all"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Grid Row: 3 Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProgs.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    PROGRAM {prog.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {prog.tags[0]}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {prog.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                  {prog.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {prog.targetFocus}
                </span>

                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="p-2 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-500/10 transition-colors"
                  aria-label={`View ${prog.title}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal Component */}
      <ProjectModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
};
