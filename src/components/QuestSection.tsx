import React, { useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';
import type { Quest } from '../types/portfolio';

export const QuestSection: React.FC = () => {
  const { quests } = usePortfolio();
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(quests[0]);

  return (
    <section id="quests" className="relative py-20 border-t-4 border-retro-border bg-retro-darker/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink tracking-widest uppercase inline-block border-b-4 border-retro-pink pb-2">
            QUEST LOG 📖
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Review Supriya's current development quests and professional explorations.
          </p>
        </div>

        {/* Quest Book Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f4ebd0] text-retro-darker border-8 border-[#3d2719] pixel-corners shadow-pixel min-h-[350px]">
          
          {/* Left Page (Quest List) */}
          <div className="p-6 border-b-4 md:border-b-0 md:border-r-4 border-dashed border-amber-900/20 flex flex-col justify-between">
            
            <div className="space-y-4">
              <h3 className="font-pixel text-xs text-amber-900 border-b border-amber-900/20 pb-2 uppercase select-none">
                Active Quests
              </h3>
              
              <div className="space-y-3">
                {quests.map((quest) => {
                  const isSelected = selectedQuest?.id === quest.id;
                  return (
                    <div
                      key={quest.id}
                      onClick={() => setSelectedQuest(quest)}
                      className={`flex items-center gap-3 cursor-pointer p-2 transition-all duration-75 pixel-corners-sm select-none ${
                        isSelected 
                          ? 'bg-amber-900/10 font-bold border-l-4 border-retro-pink pl-1' 
                          : 'hover:bg-amber-900/5'
                      }`}
                    >
                      {/* Checkbox Box */}
                      <span className="font-pixel text-[11px] text-amber-900 leading-none">
                        {isSelected ? '☑' : '☐'}
                      </span>
                      <span className="font-pixel text-[9px] uppercase tracking-wide text-amber-950">
                        {quest.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="font-pixel text-[6px] text-amber-900/40 uppercase pt-4 select-none">
              Passions validated from resume ✓
            </div>

          </div>

          {/* Right Page (Quest Details) */}
          <div className="p-6 flex flex-col justify-between bg-[#faf5e6]">
            
            {selectedQuest ? (
              <div className="space-y-4">
                
                {/* Header */}
                <div className="border-b border-amber-900/20 pb-2">
                  <span className="font-pixel text-[6px] text-amber-900/60 block uppercase">QUEST DETAILS</span>
                  <h4 className="font-pixel text-[10px] text-amber-950 uppercase mt-0.5">{selectedQuest.name}</h4>
                </div>

                {/* Progress bar (Decorative) */}
                <div className="space-y-1.5 select-none">
                  <span className="font-pixel text-[6.5px] text-amber-900/60 block">PROGRESSION STATS:</span>
                  <div className="flex items-center gap-2">
                    {/* Construct block bar */}
                    <span className="font-pixel text-[9px] text-retro-pink tracking-widest">
                      {'█'.repeat(Math.floor(selectedQuest.progress / 10)) + '░'.repeat(10 - Math.floor(selectedQuest.progress / 10))}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-900">{selectedQuest.progress}%</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <span className="font-pixel text-[6.5px] text-amber-900/60 block">OBJECTIVE LOG:</span>
                  <p className="font-sans text-xs text-amber-900 leading-relaxed">
                    {selectedQuest.description}
                  </p>
                </div>

              </div>
            ) : (
              <div className="flex-grow flex items-center justify-center text-center font-pixel text-[9px] text-amber-900/40 select-none">
                SELECT A QUEST ON THE LEFT PAGE <br /> TO LOG PARAMETERS
              </div>
            )}

            {/* Quest Status Stamp */}
            <div className="border-t border-amber-900/20 pt-4 mt-6 flex justify-between items-center font-pixel text-[7px] text-amber-900/60 select-none">
              <span>STATUS: IN PROGRESS</span>
              <span className="text-retro-pink">MISSION ACTIVE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuestSection;
