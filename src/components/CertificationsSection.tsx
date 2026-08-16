import React, { useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';
import type { Certification } from '../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const { certifications } = usePortfolio();
  const [hoveredCert, setHoveredCert] = useState<Certification | null>(certifications[3]); // Default to NPTEL highlighted ML

  return (
    <section id="certifications" className="relative py-20 border-t-4 border-retro-border bg-retro-darker/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-lavender tracking-widest uppercase inline-block border-b-4 border-retro-lavender pb-2">
            CERTIFICATION SHELF 📜
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Inspect inventory scrolls for completed academic training pipelines.
          </p>
        </div>

        {/* Shelf Case */}
        <div className="bg-[#241a12] border-6 border-[#18110b] p-6 pixel-corners shadow-pixel flex flex-col items-center">
          
          {/* Scrolls Alignment */}
          <div className="flex flex-wrap justify-around items-end w-full py-6 gap-6 relative z-10">
            {certifications.map((cert) => {
              const isHovered = hoveredCert?.id === cert.id;
              
              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCert(cert)}
                  onClick={() => setHoveredCert(cert)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  
                  {/* Rolled Scroll Sprite Container */}
                  <div 
                    className={`relative w-14 h-16 flex items-center justify-center transition-all duration-150 ${
                      isHovered ? '-translate-y-2 scale-110' : ''
                    }`}
                  >
                    
                    {/* Top 2% Ribbon overlay */}
                    {cert.badge && (
                      <div className="absolute -top-3.5 bg-retro-yellow text-black border border-black font-pixel text-[5px] px-1.5 py-0.5 rounded-none z-20 animate-pulse-glow">
                        {cert.badge}
                      </div>
                    )}

                    {/* SVG Scroll Drawing */}
                    <svg 
                      viewBox="0 0 16 16" 
                      width="48" 
                      height="48" 
                      className={`fill-amber-100 stroke-black stroke-[0.8px] transition-all duration-150 ${
                        cert.highlighted ? 'fill-yellow-100 filter drop-shadow-[0_0_4px_#FFE58A]' : ''
                      }`}
                    >
                      {/* Left Scroll Roll */}
                      <rect x="2" y="1" width="3" height="14" fill={cert.highlighted ? '#FFE58A' : '#fcf5e3'} />
                      {/* Main Scroll Sheet */}
                      <rect x="5" y="2" width="7" height="12" fill="#fff" />
                      {/* Right Scroll Roll */}
                      <rect x="11" y="1" width="3" height="14" fill={cert.highlighted ? '#FFE58A' : '#fcf5e3'} />
                      {/* Ribbon Tie */}
                      <rect x="7" y="7" width="3" height="2" fill={cert.highlighted ? '#fb7185' : '#8FE7FF'} />
                    </svg>

                  </div>

                  {/* Wood plank block below scrolls */}
                  <div className="w-16 h-2 bg-[#18110b] border-t border-black mt-2" />
                  
                  <span className="font-pixel text-[5.5px] text-retro-muted mt-2 uppercase tracking-wide truncate max-w-[80px]">
                    {cert.issuer}
                  </span>

                </div>
              );
            })}
          </div>

          {/* Wooden Shelf Plate */}
          <div className="w-full h-4 bg-[#3d2719] border-t-2 border-b-2 border-black pixel-corners-sm shadow-pixel" />

        </div>

        {/* Scroll Unroller Inspector Card */}
        <div className="mt-8">
          <div className="bg-[#fcf7e8] text-retro-darker border-4 border-amber-900/60 p-6 pixel-corners shadow-pixel relative">
            
            {/* Ink drop stain background decoration */}
            <div className="absolute top-2 right-4 font-retro text-2xl opacity-10 select-none">
              📜 COMPLETED
            </div>

            {hoveredCert ? (
              <div className="space-y-3">
                
                {/* Header info */}
                <div className="flex justify-between items-start border-b border-amber-900/20 pb-2">
                  <div>
                    <span className="font-pixel text-[6px] text-amber-900/60 block uppercase">CREDENTIAL PLAQUE</span>
                    <h3 className="font-pixel text-xs text-amber-900 uppercase mt-0.5">{hoveredCert.name}</h3>
                  </div>
                  <span className="font-pixel text-[8px] px-2 py-0.5 bg-amber-900/10 border border-amber-900/30 text-amber-900 pixel-corners-sm select-none">
                    {hoveredCert.issuer}
                  </span>
                </div>

                {/* Body details */}
                <div className="space-y-2 font-sans text-xs text-amber-950">
                  <p>
                    This inventory scroll confirms that Supriya Balakrishna has successfully passed and unlocked the certification standard in <b>{hoveredCert.name}</b>.
                  </p>
                  
                  {hoveredCert.highlighted && (
                    <div className="border border-yellow-600/30 bg-yellow-100/50 p-2 text-[11px] font-pixel text-yellow-800 flex items-center gap-2 pixel-corners-sm select-none">
                      <span>🏆 SPECIAL ACHIEVER:</span>
                      <span>Graduated in the TOP 2% bracket of candidates nationwide (Silver Certificate).</span>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="text-center py-6 font-pixel text-[9px] text-amber-900/40">
                UNROLL A SCROLL FROM THE SHELF TO REVIEW LICENSE
              </div>
            )}

            {/* Scroll tie handles (Left/Right) */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-amber-900/60 border border-black" />
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-amber-900/60 border border-black" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
