import React, { useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';

interface SkillItemDetails {
  name: string;
  category: string;
  description: string;
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
  power: string;
  emoji: string;
}

export const SkillsSection: React.FC = () => {
  const { skills: skillCategories } = usePortfolio();
  
  // Custom metadata for inventory descriptions
  const skillMetadataMap: Record<string, Omit<SkillItemDetails, 'name' | 'category'>> = {
    'Python': { description: 'Primary scripting weapon. Highly efficient for AI systems, ML pipelines, and data analysis.', rarity: 'LEGENDARY', power: '98%', emoji: '🐍' },
    'C++': { description: 'Object-oriented performance language. Used for low-latency coding and logic puzzles.', rarity: 'RARE', power: '80%', emoji: '⚡' },
    'C': { description: 'Core system level programming. Understanding memory, pointers, and CPU instructions.', rarity: 'UNCOMMON', power: '70%', emoji: '💾' },
    'HTML': { description: 'Semantic structure of all web application structures.', rarity: 'COMMON', power: '95%', emoji: '🌐' },
    'CSS': { description: 'Vanilla layouts, animations, and custom pixel-art interfaces.', rarity: 'UNCOMMON', power: '90%', emoji: '🎨' },
    'JavaScript': { description: 'Async runtime scripting for modern web engines and front-end states.', rarity: 'RARE', power: '92%', emoji: '💛' },
    'SQL': { description: 'Relational data query language. Query optimization and structure management.', rarity: 'RARE', power: '88%', emoji: '📊' },
    'MongoDB': { description: 'Document storage NoSQL database engine. Flexible JSON schema collections.', rarity: 'RARE', power: '82%', emoji: '🍃' },
    'Machine Learning': { description: 'Regression, classification, decision trees, and training architectures.', rarity: 'EPIC', power: '94%', emoji: '🧠' },
    'Deep Learning': { description: 'Multi-layered neural network modeling and optimization patterns.', rarity: 'EPIC', power: '90%', emoji: '🕸️' },
    'CNN': { description: 'Convolutional neural nets for processing grid-based data like images.', rarity: 'EPIC', power: '92%', emoji: '👁️' },
    'Computer Vision': { description: 'Real-time object detection, defect inspection, and spatial tracking.', rarity: 'LEGENDARY', power: '95%', emoji: '📸' },
    'Prompt Engineering': { description: 'Structuring precise LLM contexts and reasoning triggers for agentic loops.', rarity: 'RARE', power: '90%', emoji: '✍️' },
    'OpenCV': { description: 'Computer vision framework. Image manipulation, filtering, and video processing.', rarity: 'EPIC', power: '94%', emoji: '🎥' },
    'Pandas': { description: 'Structured tabular data parsing and vector analytics.', rarity: 'UNCOMMON', power: '90%', emoji: '🐼' },
    'NumPy': { description: 'Multi-dimensional numerical matrices computations.', rarity: 'UNCOMMON', power: '88%', emoji: '🔢' },
    'Git': { description: 'Version control engine. Repository branch merging and local checkout tags.', rarity: 'COMMON', power: '92%', emoji: '🌿' },
    'GitHub': { description: 'Remote cloud hosting for team branches, pull reviews, and issue commits.', rarity: 'COMMON', power: '94%', emoji: '🐙' },
    'Docker': { description: 'Container execution environments for standard microservice packaging.', rarity: 'RARE', power: '80%', emoji: '🐳' },
    'ChatGPT': { description: 'Conversational LLM assistant for workflow ideation and debugging code.', rarity: 'COMMON', power: '95%', emoji: '💬' },
    'Claude': { description: 'Anthropic language model. Advanced logic synthesis and deep text writing.', rarity: 'UNCOMMON', power: '95%', emoji: '🎭' },
    'Gemini': { description: 'Google multimodal agent foundation. Deep computer vision and code parsing.', rarity: 'RARE', power: '95%', emoji: '♊' },
    'Antigravity': { description: 'Custom workspace automation orchestrator and agent plugins.', rarity: 'LEGENDARY', power: '98%', emoji: '🛸' },
    'Cursor': { description: 'Next-gen IDE for streamlined code drafting with inline AI generation.', rarity: 'UNCOMMON', power: '96%', emoji: '🖱️' },
    'Qoder': { description: 'Specialized assistant for logic compilation and review checkouts.', rarity: 'RARE', power: '90%', emoji: '🔑' },
    'DSA': { description: 'Data Structures and Algorithms. Efficient logic synthesis (lists, trees, maps).', rarity: 'EPIC', power: '85%', emoji: '🗂️' },
    'OOP': { description: 'Object-Oriented Programming (Inheritance, Polymorphism, Encapsulation).', rarity: 'RARE', power: '90%', emoji: '🧱' },
    'Problem solving': { description: 'Algorithmic reasoning, troubleshooting, and custom scripting.', rarity: 'EPIC', power: '94%', emoji: '💡' }
  };

  // Convert array of categories to flat item list
  const allItems: SkillItemDetails[] = [];
  skillCategories.forEach(cat => {
    cat.skills.forEach(skill => {
      const meta = skillMetadataMap[skill] || {
        description: 'Technical capability listed in developer portfolio.',
        rarity: 'COMMON',
        power: '75%',
        emoji: '⭐'
      };
      allItems.push({
        name: skill,
        category: cat.category,
        ...meta
      });
    });
  });

  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [hoveredItem, setHoveredItem] = useState<SkillItemDetails | null>(allItems[0]);

  // Filters items based on chosen active category tab
  const filteredItems = activeTab === 'ALL' 
    ? allItems 
    : allItems.filter(item => item.category.toUpperCase() === activeTab.toUpperCase());

  // Rarity color utility
  const getRarityColor = (rarity: SkillItemDetails['rarity']) => {
    switch (rarity) {
      case 'LEGENDARY': return 'text-retro-yellow border-retro-yellow';
      case 'EPIC': return 'text-retro-pink border-retro-pink';
      case 'RARE': return 'text-retro-cyan border-retro-cyan';
      case 'UNCOMMON': return 'text-retro-lavender border-retro-lavender';
      default: return 'text-white border-retro-muted';
    }
  };

  return (
    <section id="skills" className="relative py-20 border-t-4 border-retro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-cyan tracking-widest uppercase inline-block border-b-4 border-retro-cyan pb-2">
            SKILL INVENTORY 🎒
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Select or hover over abilities to inspect stats & compatibility logs.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 select-none font-pixel text-[8px] sm:text-[9px]">
          {['ALL', 'AI & ML', 'PROGRAMMING', 'DATABASES', 'TOOLS', 'AI TOOLS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 border-2 transition-all duration-100 pixel-corners-sm ${
                activeTab === tab
                  ? 'border-retro-cyan bg-retro-secondary text-retro-cyan shadow-pixel-cyan'
                  : 'border-transparent text-retro-muted hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Redesigned Inventory Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Grid Panel: Backpack Items (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-retro-secondary/40 border-4 border-retro-border p-5 pixel-corners shadow-pixel flex flex-col">
            
            {/* Slot grid container */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-3 justify-center">
              {filteredItems.map((item, idx) => {
                const isHovered = hoveredItem?.name === item.name;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredItem(item)}
                    className={`relative w-14 h-14 md:w-16 md:h-16 border-2 flex flex-col justify-center items-center cursor-pointer transition-all duration-75 pixel-corners-sm ${
                      isHovered
                        ? 'border-retro-cyan bg-retro-dark/80 scale-105 shadow-pixel-cyan'
                        : 'border-retro-border bg-retro-darker/60 hover:border-retro-lavender'
                    }`}
                  >
                    {/* Item Emoji */}
                    <span className="text-xl md:text-2xl select-none">{item.emoji}</span>
                    
                    {/* Tiny item corner label */}
                    <span className="absolute bottom-0.5 right-1 text-[6px] font-pixel text-retro-muted leading-none">
                      x1
                    </span>

                    {/* Active sparkle indicators */}
                    {isHovered && (
                      <span className="absolute -top-1 -right-1 text-[8px] text-retro-yellow animate-pulse">✦</span>
                    )}
                  </div>
                );
              })}
              
              {/* Pad remaining empty inventory slots to maintain consistent layout shape */}
              {Array.from({ length: Math.max(0, 21 - filteredItems.length) }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="w-14 h-14 md:w-16 md:h-16 border-2 border-dashed border-retro-border/20 bg-retro-darker/20 pixel-corners-sm flex items-center justify-center select-none text-[8px] text-retro-muted/10 font-pixel"
                >
                  EMPTY
                </div>
              ))}
            </div>

            {/* Inventory Footer info */}
            <div className="mt-6 border-t-2 border-retro-border pt-4 text-center sm:text-left font-pixel text-[7px] text-retro-muted uppercase tracking-widest">
              背包槽位: {filteredItems.length} / {allItems.length} ITEMS DETECTED
            </div>

          </div>

          {/* Inspect Panel: Item details reader (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-retro-secondary border-4 border-retro-lavender p-6 pixel-corners shadow-pixel-lavender min-h-[280px] flex flex-col justify-between">
              
              {hoveredItem ? (
                <div className="space-y-4">
                  
                  {/* Item Header (Emoji + Title + Rarity) */}
                  <div className="flex items-center gap-3 border-b-2 border-retro-border pb-3 select-none">
                    <span className="text-3xl p-2 bg-retro-dark border-2 border-retro-border pixel-corners-sm">
                      {hoveredItem.emoji}
                    </span>
                    <div>
                      <h4 className="font-pixel text-xs text-white uppercase">{hoveredItem.name}</h4>
                      <span className={`font-pixel text-[7px] border px-1.5 py-0.5 rounded-none inline-block mt-1 pixel-corners-sm ${getRarityColor(hoveredItem.rarity)}`}>
                        {hoveredItem.rarity} ITEM
                      </span>
                    </div>
                  </div>

                  {/* Item stats */}
                  <div className="grid grid-cols-2 gap-2 text-[9px] font-pixel bg-retro-dark/50 p-2.5 border border-retro-border pixel-corners-sm select-none">
                    <div className="flex flex-col">
                      <span className="text-retro-muted">TYPE:</span>
                      <span className="text-retro-cyan uppercase truncate mt-0.5">{hoveredItem.category}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-retro-muted">POWER LEVEL:</span>
                      <span className="text-retro-yellow mt-0.5">{hoveredItem.power}</span>
                    </div>
                  </div>

                  {/* Item description */}
                  <div className="space-y-2">
                    <span className="font-pixel text-[8px] text-retro-muted block select-none">DESCRIPTION:</span>
                    <p className="font-sans text-xs text-white leading-relaxed">
                      {hoveredItem.description}
                    </p>
                  </div>

                </div>
              ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-8 select-none">
                  <span className="text-3xl animate-bounce mb-3">🎒</span>
                  <span className="font-pixel text-[9px] text-retro-muted">
                    SELECT AN INVENTORY SLOT <br /> TO DECODE STATS LOGS
                  </span>
                </div>
              )}

              {/* Status footer button inside card */}
              <div className="border-t-2 border-retro-border pt-4 mt-6 flex justify-between items-center font-pixel text-[8px] text-retro-muted select-none">
                <span>COMPATIBLE: YES</span>
                <span className="text-retro-pink">SUPRIYA.EXE v2</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
