import React from 'react';
import usePortfolio from '../hooks/usePortfolio';

export const AboutSection: React.FC = () => {
  const { personalInfo } = usePortfolio();

  return (
    <section
      id="about"
      className="relative py-20 border-t-4 border-retro-border bg-retro-darker/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink tracking-widest uppercase inline-block border-b-4 border-retro-pink pb-2">
            A LITTLE ABOUT ME ✦
          </h2>
        </div>

        {/* Two-Column Grid: Player Card & Speech Bubble */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: RPG Player Card (Left 5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] bg-retro-secondary border-4 border-retro-lavender shadow-pixel-lavender pixel-corners p-6 font-pixel text-xs text-white">
              
              {/* Header Box */}
              <div className="border-4 border-double border-retro-pink p-2 text-center mb-6 bg-retro-dark">
                <span className="text-retro-pink text-sm tracking-widest font-bold">PLAYER PROFILE</span>
              </div>

              {/* Character Details List */}
              <div className="space-y-4 font-mono leading-relaxed">
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">NAME:</span>
                  <span className="text-retro-yellow font-bold text-[10px]">{personalInfo.name.toUpperCase()}</span>
                </div>
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">CLASS:</span>
                  <span className="text-retro-cyan font-bold text-[10px]">AI / ML EXPLORER</span>
                </div>
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">LOCATION:</span>
                  <span className="text-retro-mint font-bold text-[10px]">{personalInfo.location.toUpperCase()}</span>
                </div>
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">EDUCATION:</span>
                  <span className="text-retro-lavender font-bold text-[9px] text-right">ALLIANCE UNIVERSITY<br />B.TECH CSE — AI & ML</span>
                </div>
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">LEVEL:</span>
                  <span className="text-retro-pink font-bold text-[10px]">3RD YEAR (2023-2027)</span>
                </div>
                <div className="flex justify-between border-b-2 border-retro-border pb-1.5">
                  <span className="text-retro-muted uppercase text-[10px]">CGPA:</span>
                  <span className="text-retro-yellow font-bold text-[10px]">9.1 / 10</span>
                </div>
              </div>

              {/* Decorative mini sprite */}
              <div className="mt-6 flex justify-center pt-2 border-t-2 border-retro-border">
                <div className="animate-idle-float flex gap-1 items-center">
                  <span className="text-[10px] text-retro-muted">STATUS: ACTIVE</span>
                  <span className="w-2.5 h-2.5 bg-retro-mint pixel-corners-sm inline-block animate-pulse" />
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Bio Speech Bubble & Quick Cards (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Speech Bubble Container */}
            <div className="relative bg-retro-secondary border-4 border-retro-lavender p-6 md:p-8 pixel-corners shadow-pixel">
              
              {/* Floating tech decorations around bio */}
              <div className="absolute -top-3 -right-3 text-lg text-retro-yellow animate-pulse">✦</div>
              <div className="absolute -bottom-3 -right-3 text-sm text-retro-cyan animate-pulse">★</div>
              <div className="absolute -top-4 left-1/3 text-xs text-retro-pink/40 font-mono select-none">&lt;code&gt;</div>
              
              {/* Bio summary Text */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-white">
                "{personalInfo.summary}"
              </p>

              {/* Speech bubble tail (bottom left pointing at player card) */}
              <div className="absolute -left-3.5 top-12 w-3.5 h-6 bg-retro-secondary border-l-4 border-b-4 border-retro-lavender transform rotate-[135deg]" />
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Sub-card 1: Core AI Focus */}
              <div className="bg-retro-secondary/60 border-2 border-retro-cyan p-5 pixel-corners shadow-pixel-cyan">
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className="text-retro-cyan text-sm">🤖</span>
                  <h3 className="font-pixel text-[10px] text-retro-cyan uppercase">AI & ML Core</h3>
                </div>
                <ul className="space-y-1.5 font-sans text-xs text-retro-muted">
                  <li>• Machine Learning Algorithms</li>
                  <li>• Deep Learning & Neural Nets (CNN)</li>
                  <li>• Computer Vision Systems</li>
                  <li>• LLM Prompt Engineering</li>
                </ul>
              </div>

              {/* Sub-card 2: Engineering Focus */}
              <div className="bg-retro-secondary/60 border-2 border-retro-pink p-5 pixel-corners shadow-pixel-pink">
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className="text-retro-pink text-sm">🛠️</span>
                  <h3 className="font-pixel text-[10px] text-retro-pink uppercase">Building Focus</h3>
                </div>
                <ul className="space-y-1.5 font-sans text-xs text-retro-muted">
                  <li>• Full-Stack Web Platforms</li>
                  <li>• OpenCV Defect Inspectors</li>
                  <li>• AI agent workflows & integrations</li>
                  <li>• Script automation</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
