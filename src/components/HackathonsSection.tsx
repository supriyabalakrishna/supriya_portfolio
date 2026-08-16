import React, { useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';

interface TrophyDetails {
  id: string;
  name: string;
  result: string;
  description: string;
  icon: string;
  color: string;
  glow: string;
}

export const HackathonsSection: React.FC = () => {
  const { hackathons } = usePortfolio();

  const trophyMetaMap: Record<string, { icon: string; color: string; glow: string }> = {
    'hack-1': { icon: '🏆', color: 'text-retro-yellow', glow: 'shadow-pixel-yellow border-retro-yellow' }, // Microsoft AI for Good
    'hack-2': { icon: '⭐', color: 'text-retro-cyan', glow: 'shadow-pixel-cyan border-retro-cyan' },     // AllianceTechx
    'hack-3': { icon: '⚡', color: 'text-retro-pink', glow: 'shadow-pixel-pink border-retro-pink' },     // EY Techathon
    'hack-4': { icon: '💡', color: 'text-retro-mint', glow: 'shadow-pixel-mint border-retro-mint' },     // GHCI
  };

  const trophies: TrophyDetails[] = hackathons.map(hack => {
    const meta = trophyMetaMap[hack.id] || { icon: '🏆', color: 'text-white', glow: 'border-retro-border' };
    return {
      ...hack,
      ...meta
    };
  });

  const [selectedTrophy, setSelectedTrophy] = useState<TrophyDetails | null>(trophies[0]);

  return (
    <section id="hackathons" className="relative py-20 border-t-4 border-retro-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-yellow tracking-widest uppercase inline-block border-b-4 border-retro-yellow pb-2">
            ACHIEVEMENTS UNLOCKED 🏆
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Inspect Supriya's unlockable trophies from hackathons.
          </p>
        </div>

        {/* Trophy Room Shelf Container */}
        <div className="bg-[#2e1d11] border-8 border-[#1a0f0a] p-6 pixel-corners shadow-pixel-in relative">
          
          {/* Wood trim lines */}
          <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-900/30 pointer-events-none" />

          {/* The Shelf Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-end py-10 relative z-10">
            {trophies.map((trophy) => {
              const isSelected = selectedTrophy?.id === trophy.id;
              return (
                <div
                  key={trophy.id}
                  onMouseEnter={() => setSelectedTrophy(trophy)}
                  onClick={() => setSelectedTrophy(trophy)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  
                  {/* Floating particle sparkle above hovered trophy */}
                  {isSelected && (
                    <span className="text-retro-yellow text-xs font-pixel animate-ping mb-2 block absolute top-2">✦</span>
                  )}

                  {/* Trophy Pedestal */}
                  <div
                    className={`w-16 h-16 border-4 flex items-center justify-center bg-retro-darker/90 transition-all duration-150 pixel-corners-sm ${
                      isSelected
                        ? `${trophy.glow} -translate-y-2 scale-110`
                        : 'border-retro-border group-hover:border-retro-lavender'
                    }`}
                  >
                    <span className={`text-3xl select-none ${isSelected ? 'animate-bounce' : ''}`}>
                      {trophy.icon}
                    </span>
                  </div>

                  {/* Wooden Stand Board */}
                  <div className="w-20 h-3 bg-[#42220f] border-t-2 border-b-2 border-black mt-2 pixel-corners-sm shadow-pixel" />
                  
                  <span className="font-pixel text-[6px] text-[#A8F0C6] mt-2 text-center uppercase tracking-widest">
                    {trophy.result.split(' ')[0]} UNLOCKED
                  </span>

                </div>
              );
            })}
          </div>

          {/* Shelf Plank Base Board */}
          <div className="w-full h-5 bg-[#593117] border-t-4 border-b-4 border-black pixel-corners-sm shadow-pixel" />

        </div>

        {/* Display Plaque Details (Bottom of Shelf Case) */}
        <div className="mt-8">
          <div className="bg-retro-secondary border-4 border-retro-yellow p-5 pixel-corners shadow-pixel-yellow relative">
            
            {selectedTrophy ? (
              <div className="space-y-2">
                
                {/* Plaque Header */}
                <div className="flex justify-between items-center border-b-2 border-retro-border pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{selectedTrophy.icon}</span>
                    <h3 className="font-pixel text-[10px] text-retro-yellow uppercase">{selectedTrophy.name}</h3>
                  </div>
                  <span className={`font-pixel text-[8px] font-bold ${selectedTrophy.color}`}>
                    {selectedTrophy.result.toUpperCase()}
                  </span>
                </div>

                {/* Plaque Description */}
                <p className="font-sans text-xs text-white leading-relaxed pt-1">
                  {selectedTrophy.description}
                </p>

              </div>
            ) : (
              <div className="text-center py-4 font-pixel text-[9px] text-retro-muted">
                SELECT A TROPHY FROM THE CASE TO DISPLAY PLAQUE LOGS
              </div>
            )}

            {/* Brass mounting pins */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full border border-black" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full border border-black" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full border border-black" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full border border-black" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default HackathonsSection;
