import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Quote } from './components/Quote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ToastContainer, ToastMessage } from './components/Toast';

export const App: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const notify = useCallback(
    (title: string, message?: string, type: 'success' | 'error' | 'info' = 'info') => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, title, message, type };

      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-light-bg text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onNotify={notify} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Process />
        <Quote />
        <Contact onNotify={notify} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Global Toast Notification System */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default App;
