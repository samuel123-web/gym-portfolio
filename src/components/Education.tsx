import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, Eye, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { EducationItem } from '../types';

export const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<EducationItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-slate-900/30">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-wider mb-3 border border-brand-500/20">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>Verified Fitness Qualifications</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Credentials & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Official strength & conditioning coaching certification (IUSCA Authorized to Train), physical fitness assessments, and health evaluations.
          </p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((item, index) => {
            const isPrimaryCert = index === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-7 rounded-3xl glass-panel border shadow-md flex flex-col justify-between transition-all ${
                  isPrimaryCert
                    ? 'border-brand-500/60 dark:border-brand-500/50 shadow-brand-500/10 ring-1 ring-brand-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-brand-500/40'
                }`}
              >
                <div>
                  {/* Header Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${
                      isPrimaryCert
                        ? 'bg-gradient-to-tr from-brand-600 to-amber-500 text-white shadow-md shadow-brand-500/30'
                        : 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>

                    <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      isPrimaryCert
                        ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30'
                        : 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  {isPrimaryCert && (
                    <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      AUTHORIZED TO TRAIN CLIENTS
                    </div>
                  )}

                  {/* Degree & Institution */}
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <div className="font-medium text-slate-800 dark:text-slate-200">
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Certificate Preview Button (If Certificate Available) */}
                {item.certificateImage && (
                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                    <button
                      onClick={() => setSelectedCert(item)}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all border ${
                        isPrimaryCert
                          ? 'bg-gradient-to-r from-brand-600 to-red-600 hover:from-brand-500 hover:to-red-500 text-white shadow-md border-transparent'
                          : 'bg-brand-600/10 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white border-brand-500/20'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Verified Document</span>
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.certificateImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl z-10 p-4 sm:p-6"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-500/20 text-brand-400 border border-brand-500/30">
                      Official Document
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Authorized to Train
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white">
                    {selectedCert.certificateTitle || selectedCert.degree}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedCert.institution}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800 shadow-inner p-1">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.certificateTitle || "Certificate"}
                  className="w-full h-auto object-contain max-h-[72vh] rounded-xl"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Strength & Conditioning Credential
                </span>
                <span className="font-mono text-slate-400">EFREM GETACHEW</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
