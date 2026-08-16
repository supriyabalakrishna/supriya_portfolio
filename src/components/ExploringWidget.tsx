import React, { useState, useEffect } from 'react';

export const ExploringWidget: React.FC = () => {
  const [dots, setDots] = useState('');

  // Loading dots animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[280px] bg-retro-secondary border-4 border-retro-cyan shadow-pixel-cyan pixel-corners flex flex-col select-none">
      
      {/* Title Bar */}
      <div className="bg-retro-cyan text-retro-darker px-3 py-1.5 font-pixel text-[9px] flex justify-between items-center">
        <span className="font-bold">exploring.exe</span>
        <div className="flex space-x-1">
          {/* Minimize, Maximize, Close boxes */}
          <span className="w-3 h-3 bg-retro-secondary border border-retro-darker inline-block text-center text-[7px] leading-none cursor-pointer hover:bg-retro-lavender">-</span>
          <span className="w-3 h-3 bg-retro-secondary border border-retro-darker inline-block text-center text-[7px] leading-none cursor-pointer hover:bg-retro-lavender">□</span>
          <span className="w-3 h-3 bg-retro-pink border border-retro-darker inline-block text-center text-[7px] leading-none cursor-pointer hover:bg-red-400">×</span>
        </div>
      </div>

      {/* OS Menu bar */}
      <div className="border-b-2 border-retro-border bg-retro-darker/40 px-3 py-1 text-[8px] font-mono text-retro-muted flex space-x-3">
        <span>File</span>
        <span>Edit</span>
        <span>Search</span>
        <span>Help</span>
      </div>

      {/* Window Body */}
      <div className="p-4 bg-retro-dark font-pixel text-[8px] leading-relaxed text-white space-y-3">
        <div className="text-retro-cyan text-[7px] font-mono">
          SCANNING PASSIVE CHANNELS{dots}
        </div>
        
        <ul className="space-y-2 pt-1">
          <li className="flex items-center gap-2">
            <span className="text-retro-pink">✦</span>
            <span>AI</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-retro-cyan">✦</span>
            <span>Computer Vision</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-retro-yellow">✦</span>
            <span>Machine Learning</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-retro-mint">✦</span>
            <span>AI Agents</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-retro-lavender">✦</span>
            <span>Automation</span>
          </li>
        </ul>
      </div>

      {/* Footer Info bar */}
      <div className="bg-retro-darker/60 border-t border-retro-border px-3 py-1 text-[7px] font-mono text-retro-muted flex justify-between">
        <span>5 OBJECTS FOUND</span>
        <span className="text-retro-mint">ONLINE</span>
      </div>

    </div>
  );
};

export default ExploringWidget;
