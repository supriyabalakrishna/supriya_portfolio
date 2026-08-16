import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number; // horizontal percentage
  size: number; // width/height in px
  color: string;
  delay: number; // animation delay in seconds
  duration: number; // animation duration in seconds
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      '#c3b4fc', // soft lavender
      '#fbcfe8', // pastel pink
      '#22d3ee', // retro cyan
      '#facc15', // warm yellow
      '#fb7185'  // coral accent
    ];
    
    const list: Particle[] = [];
    const count = 25; // Keep DOM size small for high performance

    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        x: Math.random() * 100,
        size: Math.floor(Math.random() * 6) + 4, // 4px to 9px (needs to look pixel-like)
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * -15, // Negative delay so they are pre-spawned and don't all rise from bottom at start
        duration: Math.random() * 15 + 15 // 15s to 30s
      });
    }
    setParticles(list);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute opacity-40 bg-current transition-opacity duration-300"
          style={{
            left: `${p.x}%`,
            bottom: `-20px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            color: p.color,
            backgroundColor: p.color,
            clipPath: 'polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)', // cute 8-bit star
            animation: `driftUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes driftUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-105vh) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingParticles;
