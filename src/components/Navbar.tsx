import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Sparkles, Dumbbell } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-slate-950/85 dark:bg-[#090a0f]/90 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-800/80 shadow-lg shadow-black/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-xl p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-red-600 to-amber-500 text-white font-display font-extrabold text-base shadow-md shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <span>EG</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Dumbbell className="w-3 h-3 text-brand-500 inline" />
                Strength Coach
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/40 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-brand-600 to-red-600 rounded-full -z-10 shadow-sm shadow-brand-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-brand-600 to-red-600 hover:from-brand-500 hover:to-red-500 text-white shadow-md shadow-brand-600/30 hover:shadow-lg hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-slate-900 text-white p-6 shadow-2xl flex flex-col justify-between border-l border-slate-800 lg:hidden overflow-y-auto"
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-red-500 flex items-center justify-center font-bold text-sm">
                      EG
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight text-white">{personalInfo.name}</h3>
                      <p className="text-xs text-brand-400 font-medium">Gym Trainer & Coach</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link, idx) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-600/20 text-brand-400 font-semibold border border-brand-500/30'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <Sparkles className="w-4 h-4 text-brand-400" />}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Info */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 hover:text-white text-xs transition-colors"
                >
                  <div className="p-2 rounded-lg bg-brand-600/20 text-brand-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-400">Call Coach Ephrem</div>
                    <div className="font-semibold text-white tracking-wider font-mono">{personalInfo.phone}</div>
                  </div>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-red-600 text-white shadow-lg shadow-brand-500/30 active:scale-95 transition-transform"
                >
                  <span>Book Training Session</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
