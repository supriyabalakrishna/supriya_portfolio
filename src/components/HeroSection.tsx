import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GitBranch, Link2, Mail, Code2 } from 'lucide-react';
import usePortfolio from '../hooks/usePortfolio';
import PixelAvatar from './PixelAvatar';

export const HeroSection: React.FC = () => {
  const { personalInfo } = usePortfolio();
  const [consoleLines, setConsoleLines] = useState<string[]>([]);

  // 1. CRT Workspace Terminal Typewriter Simulator
  useEffect(() => {
    const logTimeline = [
      { text: 'supriya@ai-lab:~$ whoami', delay: 0 },
      { text: 'CS Undergrad specializing in AI/ML', delay: 800 },
      { text: 'supriya@ai-lab:~$ train_model.sh --cv', delay: 1800 },
      { text: 'Epoch 1/10... Loss: 0.941', delay: 2400 },
      { text: 'Epoch 10/10... Loss: 0.012', delay: 3200 },
      { text: 'model trained ✓ (Acc: 98.6%)', delay: 3800 },
      { text: 'supriya@ai-lab:~$ start portfolio.exe', delay: 4600 },
      { text: 'assembling visual blocks...', delay: 5200 },
      { text: 'portfolio loaded ✓', delay: 5800 },
    ];

    let timers: ReturnType<typeof setTimeout>[] = [];

    const startSequence = () => {
      setConsoleLines([]);
      logTimeline.forEach((line) => {
        const timer = setTimeout(() => {
          setConsoleLines((prev) => [...prev, line.text].slice(-4)); // Keep last 4 logs
        }, line.delay);
        timers.push(timer);
      });

      // Loop restart timer
      const loopTimer = setTimeout(() => {
        startSequence();
      }, 9500);
      timers.push(loopTimer);
    };

    startSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialButtons = [
    {
      href: 'https://github.com/supriyabalakrishna',
      label: 'GITHUB',
      description: 'explore my code',
      icon: GitBranch,
      accent: 'border-retro-pink text-retro-pink shadow-pixel-pink',
      bg: 'bg-retro-dark/80',
      aria: "Visit Supriya's GitHub"
    },
    {
      href: 'https://www.linkedin.com/in/supriya-balakrishna-158a6134a/',
      label: 'LINKEDIN',
      description: "let's connect",
      icon: Link2,
      accent: 'border-retro-cyan text-retro-cyan shadow-pixel-cyan',
      bg: 'bg-retro-dark/80',
      aria: "Visit Supriya's LinkedIn"
    },
    {
      href: 'https://leetcode.com/u/OZ2I5nKKYS/',
      label: 'LEETCODE',
      description: 'solve, learn, repeat ✦',
      icon: Code2,
      accent: 'border-retro-orange text-retro-orange shadow-pixel-orange',
      bg: 'bg-retro-dark/80',
      aria: "Visit Supriya's LeetCode"
    },
    {
      href: 'mailto:supriyabalakrishna598@gmail.com',
      label: 'EMAIL',
      description: 'say hello ✦',
      icon: Mail,
      accent: 'border-retro-yellow text-retro-yellow shadow-pixel-yellow',
      bg: 'bg-retro-dark/80',
      aria: 'Email Supriya'
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden retro-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        {/* Main Grid: Text and Stats (Left) & Workspace Room (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* 1. Header & Text Content (Left 7 Cols on Desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Pronoun badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="font-pixel text-[9px] px-2 py-1 border-2 border-retro-lavender bg-retro-secondary/80 text-retro-lavender pixel-corners-sm shadow-pixel">
                {personalInfo.pronouns}
              </span>
              <span className="font-mono text-xs text-retro-muted">{personalInfo.location}</span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              variants={itemVariants}
              className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white tracking-wide uppercase"
            >
              HI, I'M <br />
              <span className="text-retro-pink animate-pulse-glow">SUPRIYA ✦</span>
            </motion.h1>

            {/* Sub-role Banner */}
            <motion.h2
              variants={itemVariants}
              className="font-pixel text-[11px] sm:text-xs text-retro-cyan tracking-wider bg-retro-secondary border-2 border-retro-cyan/45 px-3 py-1.5 pixel-corners-sm"
            >
              AI/ML DEVELOPER IN PROGRESS
            </motion.h2>

            {/* Description from Resume */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-retro-muted max-w-lg leading-relaxed"
            >
              I build AI-powered applications, computer vision systems and full-stack solutions.
            </motion.p>

            {/* Game RPG Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 w-full"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="font-pixel text-[11px] px-5 py-3 bg-retro-cyan border-4 border-black text-black font-bold pixel-corners transition-all duration-75 shadow-pixel active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                START QUEST ▶
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="font-pixel text-[11px] px-5 py-3 bg-retro-dark border-4 border-retro-pink text-retro-pink font-bold pixel-corners transition-all duration-75 shadow-pixel-pink active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-retro-pink hover:text-retro-dark"
              >
                TALK TO ME ✉
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <div className="mb-3 text-center lg:text-left font-pixel text-[9px] uppercase tracking-[0.25em] text-retro-lavender">
                ✦ CONNECT WITH ME ✦
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                {socialButtons.map(({ href, label, description, icon: Icon, accent, bg, aria }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={aria}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex min-h-[96px] flex-col justify-between rounded-none border-4 ${bg} ${accent} p-3 text-left pixel-corners shadow-pixel transition-all duration-200`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-pixel text-[9px] uppercase tracking-wide">{label}</span>
                      <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex h-7 w-7 items-center justify-center border-2 border-current bg-retro-dark/60"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </motion.span>
                    </div>
                    <div className="font-sans text-[11px] text-white/80 tracking-wide">{description}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-xl rounded-none border-4 border-retro-cyan bg-retro-secondary/80 p-3 shadow-pixel-cyan">
              <div className="mb-2 flex items-center justify-between border-b-2 border-retro-border pb-2 font-pixel text-[8px] text-retro-cyan uppercase">
                <span>connect.exe</span>
                <span className="text-retro-muted">online</span>
              </div>
              <div className="space-y-1.5 font-mono text-[10px] text-retro-cyan/90">
                <div className="text-white">supriya@portfolio:~$ links</div>
                <div className="pl-3 text-retro-cyan">github → <a href="https://github.com/supriyabalakrishna" target="_blank" rel="noopener noreferrer" className="text-retro-pink underline decoration-dotted">github.com/supriyabalakrishna</a></div>
                <div className="pl-3 text-retro-cyan">linkedin → <a href="https://www.linkedin.com/in/supriya-balakrishna-158a6134a/" target="_blank" rel="noopener noreferrer" className="text-retro-pink underline decoration-dotted">linkedin.com/in/supriya-balakrishna...</a></div>
                <div className="pl-3 text-retro-cyan">email → <a href="mailto:supriyabalakrishna598@gmail.com" className="text-retro-pink underline decoration-dotted">supriyabalakrishna598@gmail.com</a></div>
                <div className="pt-2 text-retro-yellow">status: OPEN TO OPPORTUNITIES ✦</div>
              </div>
            </motion.div>

            {/* Floating Stats Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4"
            >
              {[
                { title: 'CGPA', value: '9.1', color: 'border-retro-lavender text-retro-lavender shadow-pixel-lavender' },
                { title: 'SPECIALIZATION', value: 'AI / ML', color: 'border-retro-cyan text-retro-cyan shadow-pixel-cyan' },
                { title: 'B.TECH DEGREE', value: '23 → 27', color: 'border-retro-pink text-retro-pink shadow-pixel-pink' },
                { title: 'PROJECTS', value: '5+', color: 'border-retro-yellow text-retro-yellow shadow-pixel-yellow' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5, ease: "easeInOut" }}
                  className={`bg-retro-secondary/90 border-2 p-2 text-center pixel-corners flex flex-col justify-center items-center ${badge.color}`}
                >
                  <span className="font-pixel text-xs font-bold leading-none mb-1">{badge.value}</span>
                  <span className="font-pixel text-[6px] text-white tracking-widest">{badge.title}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* 2. Workspace Pixel Room Scene (Right 5 Cols on Desktop) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative pt-8 lg:pt-0">
            
            {/* The Room Container */}
            <div className="relative w-full max-w-[400px] h-[340px] md:h-[380px] bg-retro-secondary/40 border-4 border-retro-border pixel-corners p-4 flex flex-col justify-end items-center shadow-pixel-lavender">
              
              {/* Ceiling light source */}
              <div className="absolute top-0 w-24 h-2 bg-retro-border pixel-corners" />

              {/* Desk Lamp Glowing Cone overlay */}
              <div 
                className="absolute top-10 left-6 w-32 h-[220px] pointer-events-none opacity-30 z-10"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                  background: 'linear-gradient(to bottom, #FFE58A, transparent)'
                }}
              />

              {/* Desk Lamp (Left) */}
              <div className="absolute bottom-16 left-6 w-8 h-20 pointer-events-none z-20 flex flex-col items-center justify-end">
                {/* Lamp Shade */}
                <div className="w-6 h-4 bg-retro-yellow border-2 border-black pixel-corners-sm animate-pulse-glow" />
                {/* Neck */}
                <div className="w-1 h-12 bg-retro-border border-r border-black" />
                {/* Base */}
                <div className="w-5 h-2 bg-retro-border border-2 border-black pixel-corners-sm" />
              </div>

              {/* Desktop CRT Monitor (Left-Center) */}
              <div className="absolute bottom-16 left-20 w-32 h-24 bg-[#374151] border-2 border-black pixel-corners flex flex-col p-1.5 shadow-pixel z-10">
                {/* Glowing CRT Screen */}
                <div className="flex-grow bg-[#0c0d13] border border-black p-1 text-[7px] text-retro-cyan font-mono overflow-hidden leading-tight flex flex-col justify-end select-none crt-monitor">
                  {consoleLines.map((line, idx) => (
                    <div key={idx} className="truncate">{line}</div>
                  ))}
                  {/* blinking cursor */}
                  <div className="flex items-center">
                    <span className="w-1 h-2.5 bg-retro-cyan animate-blink inline-block" />
                  </div>
                </div>
                {/* Stand */}
                <div className="w-8 h-2 bg-retro-border border-x-2 border-b-2 border-black mx-auto mt-0.5" />
              </div>

              {/* Stack of Pixel Books (Right-Center) */}
              <div className="absolute bottom-16 right-12 w-10 h-12 pointer-events-none z-10 flex flex-col justify-end items-center">
                {/* Book 1 (Mint) */}
                <div className="w-9 h-3.5 bg-retro-mint border-2 border-black pixel-corners-sm -mb-0.5 flex items-center justify-center font-pixel text-[5px] text-black">AI</div>
                {/* Book 2 (Lavender) */}
                <div className="w-8 h-3.5 bg-retro-lavender border-2 border-black pixel-corners-sm -mb-0.5" />
                {/* Book 3 (Pink) */}
                <div className="w-9 h-3.5 bg-retro-pink border-2 border-black pixel-corners-sm" />
              </div>

              {/* Small Potted Plant (Far Right) */}
              <div className="absolute bottom-16 right-4 w-8 h-10 pointer-events-none z-10 flex flex-col items-center justify-end">
                {/* Leaf sprout */}
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 8 8" className="fill-retro-mint">
                    <rect x="3" y="1" width="2" height="7" />
                    <rect x="1" y="2" width="2" height="2" />
                    <rect x="5" y="3" width="2" height="2" />
                  </svg>
                </div>
                {/* Brown pot */}
                <div className="w-6 h-4 bg-amber-700 border-2 border-black pixel-corners-sm" />
              </div>

              {/* Coffee Cup (with steam, between monitor and books) */}
              <div className="absolute bottom-16 right-24 w-6 h-6 z-10 flex flex-col items-center justify-end">
                {/* Steam Wave */}
                <motion.div
                  animate={{ y: [0, -4, 0], opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 text-white font-pixel text-[8px] -mb-1 leading-none select-none"
                >
                  ~
                </motion.div>
                {/* Cup */}
                <div className="w-4 h-3 bg-white border-2 border-black pixel-corners-sm relative">
                  {/* Handle */}
                  <div className="absolute -right-2 top-0.5 w-1.5 h-1.5 border-t-2 border-r-2 border-b-2 border-black bg-white" />
                </div>
              </div>

              {/* Character Avatar (Centered behind table desk) */}
              <div className="relative z-10 mb-4 scale-90 md:scale-95">
                <PixelAvatar />
              </div>

              {/* The Wooden Desk Table Board */}
              <div className="w-full h-4 bg-amber-800 border-t-4 border-b-4 border-black relative z-10 pixel-corners-sm">
                <div className="absolute top-0.5 left-2 right-2 h-0.5 bg-amber-600/35" />
              </div>

              {/* Desk Legs */}
              <div className="w-full flex justify-between px-10 relative z-0 h-12">
                <div className="w-3 h-full bg-[#18152A] border-x-2 border-black" />
                <div className="w-3 h-full bg-[#18152A] border-x-2 border-black" />
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer animate-idle-float select-none text-[8px] font-pixel text-retro-muted hover:text-retro-cyan transition-colors"
      >
        <span>MISSION 01: ABOUT ME</span>
        <span>▼</span>
      </div>
    </section>
  );
};

export default HeroSection;
