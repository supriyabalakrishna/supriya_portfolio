import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface CodeSymbol {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export const BackgroundLayers: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [codeSymbols, setCodeSymbols] = useState<CodeSymbol[]>([]);

  useEffect(() => {
    // Generate twinkling stars
    const starCount = 35;
    const tempStars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      tempStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 80, // Keep in upper section
        size: Math.random() * 3 + 1, // 1px to 4px
        delay: Math.random() * 5,
      });
    }
    setStars(tempStars);

    // Generate floating code symbols
    const symbols = ['< />', 'AI', 'ML', '0101', '{ }', '✦', '♥', '★'];
    const symbolCount = 15;
    const tempSymbols: CodeSymbol[] = [];
    for (let i = 0; i < symbolCount; i++) {
      tempSymbols.push({
        id: i,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        x: Math.random() * 95,
        y: Math.random() * 90 + 5,
        delay: Math.random() * -10,
        duration: Math.random() * 6 + 8, // 8s to 14s
      });
    }
    setCodeSymbols(tempSymbols);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Layer 1: Dark Gradient Night Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100F1C] via-[#121122] to-[#18152A] w-full h-full" />

      {/* Layer 2: Twinkling 8-bit Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white opacity-85"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: `starTwinkle 3s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Layer 3: Slow-Moving Pixel Clouds */}
      <div className="absolute top-12 left-0 right-0 h-40 opacity-[0.08] overflow-hidden">
        {/* Cloud 1 */}
        <div className="absolute top-4 w-40 h-16 animate-cloud-drift">
          <svg viewBox="0 0 32 16" width="120" height="60" fill="#B9A7FF" shapeRendering="crispEdges">
            <rect x="8" y="10" width="16" height="4" />
            <rect x="4" y="6" width="24" height="4" />
            <rect x="8" y="2" width="16" height="4" />
            <rect x="12" y="0" width="8" height="2" />
          </svg>
        </div>
        {/* Cloud 2 */}
        <div className="absolute top-20 w-48 h-16 animate-cloud-drift-slow" style={{ animationDelay: '-20s' }}>
          <svg viewBox="0 0 32 16" width="160" height="80" fill="#FF8FC7" shapeRendering="crispEdges">
            <rect x="6" y="8" width="20" height="4" />
            <rect x="2" y="4" width="28" height="4" />
            <rect x="8" y="0" width="16" height="4" />
          </svg>
        </div>
      </div>

      {/* Layer 4: Occasional Shooting Stars */}
      <div className="absolute top-0 right-0 w-full h-1/2 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[2px] h-[80px] bg-gradient-to-b from-white to-transparent opacity-0 animate-shooting-star" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[40%] w-[2px] h-[60px] bg-gradient-to-b from-[#8FE7FF] to-transparent opacity-0 animate-shooting-star" style={{ animationDelay: '9s' }} />
        <div className="absolute top-[5%] right-[70%] w-[2px] h-[100px] bg-gradient-to-b from-[#FF8FC7] to-transparent opacity-0 animate-shooting-star" style={{ animationDelay: '14s' }} />
      </div>

      {/* Layer 5: Floating Code & Tech Symbols */}
      {codeSymbols.map((sym) => (
        <div
          key={sym.id}
          className="absolute font-pixel text-[8px] md:text-[10px] text-retro-lavender/10 select-none animate-code-float"
          style={{
            left: `${sym.x}%`,
            top: `${sym.y}%`,
            animationDelay: `${sym.delay}s`,
            animationDuration: `${sym.duration}s`,
          }}
        >
          {sym.text}
        </div>
      ))}

      {/* Global CSS Inject for Twinkles & Shooting Stars */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes animate-shooting-star {
          0% {
            transform: translate(0, 0) rotate(-45deg) scaleX(0);
            opacity: 0;
          }
          1% {
            opacity: 0.8;
            transform: translate(0, 0) rotate(-45deg) scaleX(1);
          }
          8% {
            transform: translate(-200px, 200px) rotate(-45deg) scaleX(1);
            opacity: 0;
          }
          100% {
            transform: translate(-200px, 200px) rotate(-45deg) scaleX(0);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: animate-shooting-star 8s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default BackgroundLayers;
