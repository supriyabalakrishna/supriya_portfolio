import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Code2 } from 'lucide-react';
import usePortfolio from '../hooks/usePortfolio';

export const Footer: React.FC = () => {
  const { contact } = usePortfolio();

  const socialCards = [
    {
      href: contact.github,
      label: 'GITHUB',
      description: 'explore my code →',
      icon: GitBranch,
      accent: 'border-retro-pink text-retro-pink',
      aria: "Visit Supriya's GitHub"
    },
    {
      href: contact.linkedin,
      label: 'LINKEDIN',
      description: "let's connect →",
      icon: Link2,
      accent: 'border-retro-cyan text-retro-cyan',
      aria: "Visit Supriya's LinkedIn"
    },
    {
      href: contact.leetcode || 'https://leetcode.com/u/OZ2I5nKKYS/',
      label: 'LEETCODE',
      description: 'solve, learn, repeat ✦',
      icon: Code2,
      accent: 'border-retro-orange text-retro-orange',
      aria: "Visit Supriya's LeetCode"
    },
    {
      href: `mailto:${contact.email}`,
      label: 'EMAIL',
      description: 'say hello →',
      icon: Mail,
      accent: 'border-retro-yellow text-retro-yellow',
      aria: 'Email Supriya'
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t-4 border-retro-border bg-retro-darker py-16 select-none">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-14 h-10 w-10 rounded-full border-2 border-retro-lavender bg-retro-lavender/10" />
        <div className="absolute right-[12%] top-20 h-12 w-12 rounded-full border-2 border-retro-pink bg-retro-pink/10" />
        <div className="absolute left-[18%] bottom-8 h-4 w-4 bg-retro-mint/30" />
        <div className="absolute right-[20%] bottom-12 h-6 w-6 bg-retro-cyan/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink uppercase tracking-widest">LET'S CONNECT ✦</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-retro-muted">
            Have an idea, project, internship opportunity, or something interesting to build?
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {socialCards.map(({ href, label, description, icon: Icon, accent, aria }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={aria}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex min-h-[120px] flex-col justify-between border-4 bg-retro-secondary/80 p-4 pixel-corners shadow-pixel ${accent}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-pixel text-[10px] uppercase tracking-wide">{label}</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-8 w-8 items-center justify-center border-2 border-current bg-retro-dark/60"
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
              </div>
              <div className="font-sans text-sm text-white/80">{description}</div>
            </motion.a>
          ))}
        </div>

        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-none border-4 border-retro-border bg-retro-secondary/80 p-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-pixel text-sm text-retro-pink">Supriya Balakrishna</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-retro-lavender">AI/ML • Computer Vision • Full-Stack</p>
            <p className="font-sans text-xs text-retro-muted">Bengaluru, India • Alliance University</p>
          </div>

          <div className="flex items-center gap-3 font-pixel text-[8px] text-retro-muted">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Supriya's GitHub" className="border-2 border-retro-border bg-retro-dark px-2 py-1.5 hover:border-retro-pink hover:text-retro-pink">GITHUB</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Supriya's LinkedIn" className="border-2 border-retro-border bg-retro-dark px-2 py-1.5 hover:border-retro-cyan hover:text-retro-cyan">LINKEDIN</a>
            <a href={contact.leetcode || 'https://leetcode.com/u/OZ2I5nKKYS/'} target="_blank" rel="noopener noreferrer" aria-label="Visit Supriya's LeetCode" className="border-2 border-retro-border bg-retro-dark px-2 py-1.5 hover:border-retro-orange hover:text-retro-orange">LEETCODE</a>
            <a href={`mailto:${contact.email}`} aria-label="Email Supriya" className="border-2 border-retro-border bg-retro-dark px-2 py-1.5 hover:border-retro-yellow hover:text-retro-yellow">EMAIL</a>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <div className="relative flex w-full max-w-xl items-center justify-center overflow-hidden border-4 border-retro-border bg-retro-secondary/70 p-4 pixel-corners">
            <div className="absolute left-4 top-4 text-2xl text-retro-yellow">✦</div>
            <div className="absolute right-6 top-5 text-xl text-retro-cyan">★</div>
            <div className="absolute bottom-4 left-10 text-lg text-retro-pink">✧</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 110, damping: 14 }}
              className="relative flex items-center gap-4"
            >
              <div className="relative h-18 w-16">
                <svg viewBox="0 0 16 16" width="64" height="72" className="fill-retro-pink">
                  <rect x="5" y="2" width="6" height="5" fill="#ffe5d9" stroke="#000" strokeWidth="0.8" />
                  <rect x="4" y="1" width="8" height="2" fill="#211c1d" />
                  <rect x="4" y="3" width="1.5" height="3" fill="#211c1d" />
                  <rect x="10.5" y="3" width="1.5" height="3" fill="#211c1d" />
                  <rect x="6" y="4" width="1" height="1" fill="#000" />
                  <rect x="9" y="4" width="1" height="1" fill="#000" />
                  <rect x="4" y="7" width="8" height="6" fill="#FF8FC7" stroke="#000" strokeWidth="0.8" />
                  <rect x="2" y="7" width="2" height="4" fill="#FF8FC7" stroke="#000" strokeWidth="0.8" />
                  <rect x="12" y="3.5" width="2.5" height="4.5" fill="#ffe5d9" stroke="#000" strokeWidth="0.8" className="animate-bounce" />
                  <rect x="5" y="13" width="2" height="1" fill="#000" />
                  <rect x="9" y="13" width="2" height="1" fill="#000" />
                </svg>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <div className="font-pixel text-[7px] uppercase text-retro-muted">night scene</div>
                <div className="font-sans text-sm text-white">Thanks for visiting my little corner of the internet ✦</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
