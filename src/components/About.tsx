import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Dumbbell, HeartPulse, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, brandPillars } from '../data/portfolioData';

const iconMap = {
  Flame: Flame,
  Target: Target,
  Dumbbell: Dumbbell,
  HeartPulse: HeartPulse,
};

export const About: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const photos = [
    { src: personalInfo.avatarUrl, label: "Coach Profile" },
    { src: personalInfo.gymPhotoUrl, label: "Gym & Strength" },
    { src: personalInfo.boxingPhotoUrl, label: "Combat & Boxing" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coaching Philosophy & Background</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            About Ephrem Getachew
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Empowering clients through structured resistance training, combat conditioning, and disciplined lifestyle habits.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-80 -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border border-white/10 shadow-xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={photos[activePhoto].src}
                    alt={photos[activePhoto].label}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Location badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-brand-400" />
                      {personalInfo.location}
                    </span>
                    <span className="font-mono text-[11px] bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 text-slate-300">
                      {photos[activePhoto].label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Selector */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {photos.map((p, idx) => (
                  <button
                    key={p.label}
                    onClick={() => setActivePhoto(idx)}
                    className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      activePhoto === idx
                        ? 'border-brand-500 scale-105 shadow-md shadow-brand-500/30'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Bio Copy & Coaching Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Bio Copy */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-white">
                {personalInfo.bioParagraph1}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {personalInfo.bioParagraph2}
              </p>
            </div>

            {/* Quick Highlights Bar */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Addis Ababa Personal Trainer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Strength & Boxing Conditioning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Fitness Evaluation
              </span>
            </div>

            {/* 4 Brand Descriptors Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandPillars.map((pillar) => {
                const IconComponent = iconMap[pillar.iconName as keyof typeof iconMap] || Dumbbell;
                return (
                  <motion.div
                    key={pillar.number}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800/90 relative group"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
