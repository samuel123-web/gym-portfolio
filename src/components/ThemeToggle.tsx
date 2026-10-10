import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${
        theme === 'dark'
          ? 'bg-slate-800/80 text-amber-300 hover:bg-slate-700/80 border border-slate-700/60 shadow-inner'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100 text-indigo-600" />
        )}
      </div>
    </button>
  );
};
