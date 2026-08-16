import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import usePortfolio from '../hooks/usePortfolio';

export const ExperienceSection: React.FC = () => {
  const { experience } = usePortfolio();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scrolling progression across this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  // Map scroll progress (0 to 1) to vertical position of train (0% to 92%)
  const trainY = useTransform(scrollYProgress, [0, 1], ['0%', '94%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 border-t-4 border-retro-border bg-retro-darker/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-yellow tracking-widest uppercase inline-block border-b-4 border-retro-yellow pb-2">
            INTERNSHIP JOURNEY 🚉
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Scroll down to drive the internship train along the track!
          </p>
        </div>

        {/* Timeline Track Container */}
        <div className="relative min-h-[700px] md:min-h-[800px] mt-12">
          
          {/* 1. Wood Sleeper Train Track (Vertical) */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-6 -translate-x-1/2 border-x-4 border-black z-0"
            style={{
              backgroundColor: '#5c4033', // dark wooden brown background
              backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 16px, #000 16px, #000 22px)',
            }}
          >
            {/* Inner steel rails */}
            <div className="absolute inset-y-0 left-1 w-0.5 bg-zinc-400" />
            <div className="absolute inset-y-0 right-1 w-0.5 bg-zinc-400" />
          </div>

          {/* 2. Scroll-Tracked Pixel Train Carriage */}
          <motion.div
            style={{
              top: trainY,
            }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center pointer-events-none select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-all duration-100"
          >
            {/* Cute 8-bit Locomotive Carriage SVG */}
            <svg viewBox="0 0 16 16" width="48" height="48" className="fill-retro-pink">
              {/* Train Head shape */}
              <rect x="2" y="6" width="12" height="8" fill="#FF8FC7" stroke="#000" strokeWidth="1" />
              <rect x="4" y="2" width="6" height="5" fill="#FF8FC7" stroke="#000" strokeWidth="1" />
              {/* Cabin windows */}
              <rect x="5" y="3" width="4" height="2" fill="#8FE7FF" />
              {/* Train wheels */}
              <circle cx="5" cy="14" r="2" fill="#18152A" stroke="#000" strokeWidth="1" />
              <circle cx="11" cy="14" r="2" fill="#18152A" stroke="#000" strokeWidth="1" />
              {/* Smokestack */}
              <rect x="11" y="1" width="2" height="3" fill="#FFE58A" stroke="#000" strokeWidth="1" />
              {/* Puffing Steam Cloud */}
              <rect x="10" y="-1" width="4" height="2" fill="#ffffff" className="animate-pulse" opacity="0.8" />
            </svg>
          </motion.div>

          {/* 3. Station Stop Cards */}
          <div className="space-y-24 md:space-y-36 relative z-10">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left or Right spacing block on desktop */}
                  <div className="w-full md:w-1/2" />
                  
                  {/* Station Sign Connector Pin (Dot indicator) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-black bg-retro-yellow pixel-corners-sm z-10" />

                  {/* Visual Content Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 80, damping: 14 }}
                    className="w-full md:w-[45%] pl-16 md:pl-0 md:px-6"
                  >
                    {/* The Station sign styled card */}
                    <div className="bg-retro-secondary border-4 border-retro-yellow p-5 pixel-corners shadow-pixel-yellow relative hover:-translate-y-1 transition-transform">
                      
                      {/* Station Header Plate */}
                      <div className="flex justify-between items-center border-b-2 border-retro-border pb-2.5 mb-3 font-pixel">
                        <div>
                          <span className="text-[8px] text-retro-muted block uppercase">STOP #0{idx + 1}</span>
                          <h3 className="text-xs text-retro-yellow uppercase tracking-wider">{exp.company}</h3>
                        </div>
                        <span className="text-[8px] px-2 py-1 bg-retro-dark border-2 border-retro-border text-retro-pink pixel-corners-sm select-none">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Internship Role Title */}
                      <h4 className="font-mono font-bold text-sm text-retro-cyan mb-2">
                        {exp.role}
                      </h4>

                      {/* Internship Description */}
                      <p className="font-sans text-xs text-retro-muted leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Mini Station flag graphic */}
                      <div className="absolute -top-3 -left-3 font-pixel text-xs p-1 select-none">
                        🚉
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
