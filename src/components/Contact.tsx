import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Loader2,
  Dumbbell,
  Calendar,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onNotify: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

interface FormState {
  fullName: string;
  phoneOrEmail: string;
  fitnessGoal: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phoneOrEmail?: string;
  fitnessGoal?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneOrEmail: '',
    fitnessGoal: '1-on-1 Personal Training & Body Transformation',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.phoneRaw);
    setCopiedPhone(true);
    onNotify('Phone Number Copied!', `${personalInfo.phone} is ready to dial.`, 'success');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phoneOrEmail.trim()) {
      newErrors.phoneOrEmail = 'Please provide your phone number or email.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell Ephrem a bit about your fitness targets.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please write a slightly longer note (at least 8 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onNotify('Form Validation Error', 'Please check highlighted fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending time & feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger celebratory confetti in power red & gold
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#dc2626', '#b91c1c', '#f97316', '#f59e0b'],
        });
      } catch (err) {
        // graceful fallback
      }

      onNotify('Training Inquiry Sent!', `Thank you ${formData.fullName}, your session request has been received.`, 'success');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneOrEmail: '',
      fitnessGoal: '1-on-1 Personal Training & Body Transformation',
      preferredTime: 'Morning (6:00 AM - 10:00 AM)',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-wider mb-3 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Transformation</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Ready to Start Training?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Book a 1-on-1 training session, boxing conditioning workout, or custom fitness plan in Addis Ababa.
          </p>
        </div>

        {/* Grid: Direct Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className="p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg shadow-brand-500/25">
                  EG
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-mono font-semibold uppercase tracking-wider">
                    Strength Coach & Gym Trainer
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Accepting new personal training clients and boxing conditioning inquiries in Addis Ababa.
              </p>

              {/* Direct Phone Action Box */}
              <div className="p-5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                      Direct Phone / Call Coach
                    </div>
                    <a
                      href={`tel:${personalInfo.phoneRaw}`}
                      className="font-bold text-base text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 tracking-wider font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  type="button"
                  aria-label="Copy phone number"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    Location & Training Hub
                  </div>
                  <div className="font-bold text-base text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Training Highlights */}
            <div className="p-5 rounded-2xl glass-card border border-brand-500/20 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <Dumbbell className="w-4 h-4 text-brand-500" />
                <span>Training Session Perks</span>
              </div>
              <ul className="space-y-1 pl-6 list-disc text-[11px]">
                <li>IUSCA Certified coaching methodology</li>
                <li>Form-first biomechanics & injury prevention</li>
                <li>Progressive overload & muscle sculpting</li>
                <li>Boxing stamina & heavy bag cardio rounds</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                    Session Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you {formData.fullName}. Coach Ephrem will review your request and get in touch with you directly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-500 transition-all shadow-md"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase font-mono"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Samuel Bekele"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-slate-300 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone / Email */}
                    <div>
                      <label
                        htmlFor="phoneOrEmail"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase font-mono"
                      >
                        Phone / Email *
                      </label>
                      <input
                        type="text"
                        id="phoneOrEmail"
                        value={formData.phoneOrEmail}
                        onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                        placeholder="09... or email@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneOrEmail
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-slate-300 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500/20'
                        }`}
                      />
                      {errors.phoneOrEmail && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneOrEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Primary Fitness Goal Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fitnessGoal"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase font-mono"
                      >
                        Primary Training Goal
                      </label>
                      <select
                        id="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="1-on-1 Personal Training & Body Transformation">1-on-1 Body Transformation</option>
                        <option value="Boxing Conditioning & Combat Stamina">Boxing & Heavy Bag Conditioning</option>
                        <option value="Hypertrophy & Muscle Building">Strength & Muscle Hypertrophy</option>
                        <option value="Functional Movement & Mobility">Functional Mobility & Posture</option>
                        <option value="Fat Loss & HIIT Conditioning">Fat Loss & HIIT Circuits</option>
                        <option value="Custom Workout Plan">Custom Home/Gym Plan</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase font-mono"
                      >
                        Preferred Training Slot
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                        <option value="Midday (11:00 AM - 2:00 PM)">Midday (11:00 AM - 2:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                        <option value="Flexible / Weekend">Flexible / Weekend</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase font-mono"
                    >
                      Brief Message or Fitness Background *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Coach Ephrem about your current fitness experience, past injuries (if any), and what you want to achieve..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300 dark:border-slate-800 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button in Power Red */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-red-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Book Training Session</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
