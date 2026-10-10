import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Dumbbell, Sparkles, Clock, Target, Phone } from 'lucide-react';
import { TrainingProgramItem } from '../types';
import { personalInfo } from '../data/portfolioData';

interface ProgramModalProps {
  program: TrainingProgramItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 text-white border border-slate-700/80 shadow-2xl z-10 flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close program details"
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header & Hero Image */}
          <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-80 overflow-hidden bg-slate-950">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-brand-600 text-white">
                    PROGRAM {program.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Addis Ababa Gym Coaching
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {program.title}
                </h2>
                <p className="text-sm text-slate-300 mt-1">{program.tagline}</p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 flex-1">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Program Duration</div>
                  <div className="font-semibold text-sm text-white">{program.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Target Focus</div>
                  <div className="font-semibold text-sm text-white">{program.targetFocus}</div>
                </div>
              </div>
            </div>

            {/* Program Objective */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400 mb-2">
                Program Objective & Goal
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                What's Included in this Program
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Exercises */}
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400 mb-3 flex items-center gap-2">
                <Dumbbell className="w-3.5 h-3.5" />
                Core Exercise Movements
              </h3>
              <div className="flex flex-wrap gap-2">
                {program.keyExercises.map((exercise) => (
                  <span
                    key={exercise}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {exercise}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire / Book This Program</span>
                </a>

                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all font-mono"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {personalInfo.phone}</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
              >
                Close Window
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
