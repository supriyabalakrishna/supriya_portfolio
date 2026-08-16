import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [modules, setModules] = useState({
    ai: false,
    projects: false,
    pixels: false,
    ready: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10; // steady, fast progress
        const current = next >= 100 ? 100 : next;

        if (current >= 30) {
          setModules(m => ({ ...m, ai: true }));
        }
        if (current >= 60) {
          setModules(m => ({ ...m, projects: true }));
        }
        if (current >= 85) {
          setModules(m => ({ ...m, pixels: true }));
        }
        
        if (current === 100) {
          setModules(m => ({ ...m, ready: true }));
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 700); // Small delay to let the user see "READY ✦"
        }

        return current;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Construct block progress bar (20 characters total)
  const totalChars = 16;
  const activeChars = Math.floor((progress / 100) * totalChars);
  const barString = '█'.repeat(activeChars) + '░'.repeat(totalChars - activeChars);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-[#0a0a12] z-50 flex items-center justify-center font-pixel text-xs text-retro-lavender crt-monitor select-none"
    >
      {/* Terminal Window Box */}
      <div className="w-[320px] md:w-[380px] p-6 bg-retro-darker border-4 border-retro-lavender shadow-pixel-lavender pixel-corners flex flex-col space-y-4">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center border-b-2 border-retro-muted/40 pb-2">
          <span className="text-retro-pink font-bold">SUPRIYA.EXE</span>
          <div className="flex space-x-1">
            <span className="w-2.5 h-2.5 bg-retro-pink pixel-corners-sm inline-block" />
            <span className="w-2.5 h-2.5 bg-retro-lavender pixel-corners-sm inline-block" />
            <span className="w-2.5 h-2.5 bg-retro-cyan pixel-corners-sm inline-block" />
          </div>
        </div>

        {/* Console Text Output */}
        <div className="font-mono space-y-3 leading-relaxed text-[11px] md:text-xs">
          <div className="text-retro-muted">loading portfolio...</div>
          
          {/* Progress Bar Row */}
          <div className="text-retro-yellow font-pixel tracking-tighter text-sm">
            {barString}
          </div>

          {/* Module checklist */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between items-center">
              <span>AI MODULE ........</span>
              <span className={modules.ai ? 'text-retro-mint font-bold' : 'text-retro-muted'}>
                {modules.ai ? '✓' : '..'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>PROJECTS ..........</span>
              <span className={modules.projects ? 'text-retro-mint font-bold' : 'text-retro-muted'}>
                {modules.projects ? '✓' : '..'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>PIXELS ............</span>
              <span className={modules.pixels ? 'text-retro-mint font-bold' : 'text-retro-muted'}>
                {modules.pixels ? '✓' : '..'}
              </span>
            </div>
          </div>

          {/* Final Ready message */}
          <div className="h-6 flex items-center pt-2">
            {modules.ready && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-retro-pink font-bold text-sm tracking-widest animate-pulse-glow"
              >
                READY ✦
              </motion.span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
