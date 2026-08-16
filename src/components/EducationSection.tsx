import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import usePortfolio from '../hooks/usePortfolio';

export const EducationSection: React.FC = () => {
  const { education } = usePortfolio();
  const mapRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this container
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start center', 'end center'],
  });

  // Calculate the walking character position along the winding pathway
  // Winding pattern:
  // Node 1 (Surana Vidyalaya, Left):   x=20%, y=10%
  // Midpoint 1:                        x=50%, y=30%
  // Node 2 (Narayana PU, Right):       x=80%, y=50%
  // Midpoint 2:                        x=50%, y=70%
  // Node 3 (Alliance Univ, Left):      x=20%, y=90%
  const charX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['20%', '50%', '80%', '50%', '20%']);
  const charY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['6%', '28%', '50%', '72%', '94%']);

  // Rotate character slightly while walking (bobbing effect)
  const charRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 8, 0, -8, 0]);

  return (
    <section
      id="education"
      ref={mapRef}
      className="relative py-20 border-t-4 border-retro-border bg-retro-darker/20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-mint tracking-widest uppercase inline-block border-b-4 border-retro-mint pb-2">
            EDUCATION MAP 🗺️
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Follow the winding road of academic accomplishments.
          </p>
        </div>

        {/* The Map Arena */}
        <div className="relative w-full min-h-[750px] border-4 border-retro-border bg-[#100f1c]/45 p-6 pixel-corners-lg shadow-pixel overflow-hidden">
          
          {/* Parallax trees & castle icons to populate the "Magical World" */}
          <div className="absolute top-[20%] right-[25%] font-pixel text-lg opacity-40 select-none animate-idle-float">🌲</div>
          <div className="absolute top-[60%] left-[30%] font-pixel text-lg opacity-40 select-none animate-idle-float" style={{ animationDelay: '1.2s' }}>🌲</div>
          <div className="absolute top-[40%] left-[10%] font-pixel text-lg opacity-40 select-none">🏡</div>
          <div className="absolute bottom-[20%] right-[15%] font-pixel text-2xl opacity-60 select-none animate-pulse-glow">🏰</div>

          {/* Dotted Connecting Road (SVG Draw) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
            {/* Draw curve path connecting: (20%,8%) -> (50%,30%) -> (80%,52%) -> (50%,74%) -> (20%,94%) */}
            <path
              d="M 180 80 Q 450 250 800 400 T 180 720"
              fill="none"
              stroke="#B9A7FF"
              strokeWidth="4"
              strokeDasharray="10, 8"
              className="w-full h-full"
              style={{
                // Approximate mapping for SVG coordinates depending on size
                transform: 'scale(1)',
              }}
            />
          </svg>

          {/* 1. Walking Character Sprite (Scroll Driven) */}
          <motion.div
            style={{
              left: charX,
              top: charY,
              rotate: charRotate,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition-all duration-75"
          >
            {/* Cute 8-bit Waving Student character SVG */}
            <svg viewBox="0 0 16 16" width="36" height="36" className="fill-retro-pink">
              <rect x="5" y="1" width="6" height="5" fill="#ffe5d9" stroke="#000" strokeWidth="1" />
              {/* Mortarboard cap */}
              <polygon points="8,0 13,2 8,4 3,2" fill="#18152A" stroke="#000" strokeWidth="0.8" />
              <rect x="8" y="2" width="1" height="3" fill="#FFE58A" />
              {/* Eyes */}
              <rect x="6" y="2.5" width="1.5" height="1" fill="#000" />
              <rect x="8.5" y="2.5" width="1.5" height="1" fill="#000" />
              {/* Graduation Robe */}
              <rect x="4" y="6" width="8" height="7" fill="#18152A" stroke="#000" strokeWidth="1" />
              {/* Scroll in hand */}
              <rect x="2" y="8" width="2" height="4" fill="#ffffff" stroke="#000" strokeWidth="0.8" />
              {/* Shoes */}
              <rect x="5" y="13" width="2" height="2.5" fill="#B9A7FF" />
              <rect x="9" y="13" width="2" height="2.5" fill="#B9A7FF" />
            </svg>
          </motion.div>

          {/* 2. Destination Cards along the winding road */}
          <div className="relative z-10 flex flex-col justify-between min-h-[700px] h-full">
            
            {/* DESTINATION 1: Class 10 (Surana Vidyalaya, Left Aligned) */}
            <div className="flex justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[280px] bg-retro-secondary border-2 border-retro-pink p-4 pixel-corners shadow-pixel-pink"
              >
                <div className="flex justify-between items-center border-b border-retro-border pb-2 mb-2 font-pixel text-[8px]">
                  <span className="text-retro-pink font-bold">DESTINATION #1</span>
                  <span className="text-retro-muted">{education[2].duration}</span>
                </div>
                <h3 className="font-pixel text-[10px] text-white uppercase">{education[2].school}</h3>
                <h4 className="font-mono text-retro-cyan text-xs font-semibold mt-1">{education[2].degree}</h4>
                <div className="mt-3 border-t border-retro-border/40 pt-2 flex justify-between items-center font-pixel text-[8px]">
                  <span className="text-retro-muted">RESULT:</span>
                  <span className="text-retro-yellow font-bold text-xs">{education[2].metric}</span>
                </div>
              </motion.div>
            </div>

            {/* DESTINATION 2: PUC (Narayana PU College, Right Aligned) */}
            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[280px] bg-retro-secondary border-2 border-retro-cyan p-4 pixel-corners shadow-pixel-cyan"
              >
                <div className="flex justify-between items-center border-b border-retro-border pb-2 mb-2 font-pixel text-[8px]">
                  <span className="text-retro-cyan font-bold">DESTINATION #2</span>
                  <span className="text-retro-muted">{education[1].duration}</span>
                </div>
                <h3 className="font-pixel text-[10px] text-white uppercase">{education[1].school}</h3>
                <h4 className="font-mono text-retro-pink text-xs font-semibold mt-1">{education[1].degree}</h4>
                <div className="mt-3 border-t border-retro-border/40 pt-2 flex justify-between items-center font-pixel text-[8px]">
                  <span className="text-retro-muted">RESULT:</span>
                  <span className="text-retro-yellow font-bold text-xs">{education[1].metric}</span>
                </div>
              </motion.div>
            </div>

            {/* DESTINATION 3: B.Tech (Alliance University, Left Aligned) */}
            <div className="flex justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[280px] bg-retro-secondary border-2 border-retro-mint p-4 pixel-corners shadow-pixel-mint"
              >
                <div className="flex justify-between items-center border-b border-retro-border pb-2 mb-2 font-pixel text-[8px]">
                  <span className="text-retro-mint font-bold">GRADUATION GATE</span>
                  <span className="text-retro-muted">{education[0].duration}</span>
                </div>
                <h3 className="font-pixel text-[10px] text-white uppercase">{education[0].school}</h3>
                <h4 className="font-mono text-retro-lavender text-xs font-semibold mt-1">{education[0].degree}</h4>
                <div className="mt-3 border-t border-retro-border/40 pt-2 flex justify-between items-center font-pixel text-[8px]">
                  <span className="text-retro-muted">GPA ATTAINED:</span>
                  <span className="text-retro-yellow font-bold text-xs">{education[0].metric}</span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;
