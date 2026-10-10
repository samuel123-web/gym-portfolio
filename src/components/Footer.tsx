import React from 'react';
import { ArrowUp, Phone, MapPin, Dumbbell, Send, Instagram, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, navLinks, socialLinks } from '../data/portfolioData';

const iconMap = {
  Instagram: Instagram,
  Linkedin: Linkedin,
  Send: Send,
  Twitter: Twitter,
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[150px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center font-display font-black text-base text-white shadow-md">
                EG
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-brand-400 font-mono flex items-center gap-1">
                  <Dumbbell className="w-3 h-3 text-cyan-400" />
                  Gym Trainer & Fitness Coach
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering clients in Addis Ababa through structured resistance training, combat boxing conditioning, and disciplined health habits.
            </p>

            {/* Direct Contact Info */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${personalInfo.phoneRaw}`} className="hover:text-brand-400 tracking-wider font-mono">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-white transition-colors py-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top CTA */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">
                Connect With Coach
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((item) => {
                  const IconComp = iconMap[item.icon as keyof typeof iconMap] || Send;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-500/50 hover:bg-slate-800 transition-all"
                      title={item.name}
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-all group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ephrem Getachew. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono">Addis Ababa, Ethiopia</span>
            <span>•</span>
            <span className="font-mono">{personalInfo.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
