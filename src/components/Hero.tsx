import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, MapPin, Copy, Check, Sparkles, User, Dumbbell, Flame, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onNotify: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const photos = [
    { src: personalInfo.avatarUrl, title: "Personal Trainer", icon: User },
    { src: personalInfo.gymPhotoUrl, title: "Strength & Conditioning", icon: Dumbbell },
    { src: personalInfo.boxingPhotoUrl, title: "Combat & Boxing", icon: Flame },
  ];

  const copyPhoneNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.phoneRaw);
    setCopied(true);
    onNotify('Phone Number Copied!', `${personalInfo.phone} is ready to paste or call.`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows (Red & Crimson) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-600/20 via-red-500/15 to-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Coach Label Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel text-brand-600 dark:text-brand-400 font-mono text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm border border-brand-500/20"
            >
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>CERTIFIED STRENGTH & CONDITIONING COACH</span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              EPHREM <br className="hidden sm:inline" />
              <span className="text-gradient">GETACHEW</span>
            </motion.h1>

            {/* Professional Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 leading-snug"
            >
              “Transforming Lives Through Discipline, Strength & Functional Fitness.”
            </motion.div>

            {/* Secondary Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {personalInfo.subHeadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-red-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm glass-card text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-brand-500" />
                <span>Book a Training Session</span>
              </a>
            </motion.div>

            {/* Hero Details (Location & Phone) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400"
            >
              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-brand-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {personalInfo.location}
                </span>
              </div>

              {/* Phone (Clickable tel + Copy) */}
              <div className="flex items-center gap-2 group">
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  title="Click to call"
                >
                  <div className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-emerald-500 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="tracking-wider font-mono font-semibold">{personalInfo.phone}</span>
                </a>

                <button
                  onClick={copyPhoneNumber}
                  type="button"
                  aria-label="Copy phone number"
                  title="Copy to clipboard"
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-600/30 via-red-500/20 to-orange-600/30 rounded-3xl blur-2xl opacity-75 -z-10 animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-3.5 border border-white/10 shadow-2xl">
                
                {/* Photo Switcher Controls */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                  {photos.map((p, idx) => {
                    const IconComp = p.icon;
                    return (
                      <button
                        key={p.title}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                          activePhotoIdx === idx
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        title={p.title}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                      </button>
                    );
                  })}
                </div>

                {/* Main Photo Canvas */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={photos[activePhotoIdx].src}
                    alt={photos[activePhotoIdx].title}
                    className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Floating Bottom Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <span className="font-medium text-white">Accepting Personal Training Clients</span>
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge 1: IUSCA Certified */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-2xl glass-panel shadow-xl border border-white/10 items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-brand-500/20 text-brand-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">IUSCA Certified</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Strength & Conditioning</div>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2: Direct Line */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute -top-5 -left-5 p-3 rounded-2xl glass-panel shadow-xl border border-white/10 items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Contact</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white font-mono">{personalInfo.phone}</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
