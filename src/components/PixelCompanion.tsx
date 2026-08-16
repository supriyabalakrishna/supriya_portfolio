import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CompanionState = 'idle' | 'jump' | 'wave' | 'sleep' | 'excited';

export const PixelCompanion: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const [animState, setAnimState] = useState<CompanionState>('idle');

  // Motion values for actual cursor coordinate
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics for delayed tracking effect
  const springConfig = { stiffness: 60, damping: 16, mass: 0.5 };
  const companionX = useSpring(cursorX, springConfig);
  const companionY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset companion slightly to the bottom-right of cursor
      cursorX.set(e.clientX + 20);
      cursorY.set(e.clientY + 20);
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Periodic animations and speech bubbles
  useEffect(() => {
    if (prefersReducedMotion) return;

    const speechBubbles = [
      "hi ✦",
      "welcome!",
      "look at the projects!",
      "you found me!",
      "let's build!",
      "model training... 💻",
      "stars look pretty! ✨"
    ];

    const states: CompanionState[] = ['idle', 'jump', 'wave', 'sleep', 'excited'];

    const interval = setInterval(() => {
      // 40% chance to talk
      if (Math.random() < 0.4) {
        const text = speechBubbles[Math.floor(Math.random() * speechBubbles.length)];
        setBubbleText(text);
        // Hide speech bubble after 2.5 seconds
        setTimeout(() => setBubbleText(null), 2500);
      }

      // Pick a random behavior state
      const newState = states[Math.floor(Math.random() * states.length)];
      setAnimState(newState);
      
      // Revert to idle after state action finishes (2 seconds)
      if (newState !== 'idle') {
        setTimeout(() => setAnimState('idle'), 2000);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Disable completely on reduced motion or on touchscreens
  if (prefersReducedMotion || !isVisible) {
    return null;
  }

  // Get active class based on animState
  const getAnimationClass = () => {
    switch (animState) {
      case 'jump':
        return 'animate-bounce'; // standard Tailwind bounce
      case 'wave':
        return 'animate-pulse';
      case 'sleep':
        return 'rotate-12 opacity-80';
      case 'excited':
        return 'scale-125';
      default:
        return 'animate-idle-float';
    }
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: companionX,
        y: companionY,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      className="hidden md:block select-none"
    >
      <div className="relative">
        
        {/* Pixel Speech Bubble */}
        {bubbleText && (
          <div className="absolute bottom-10 -left-6 bg-retro-secondary border-2 border-retro-lavender text-retro-lavender font-pixel text-[8px] px-2 py-1.5 whitespace-nowrap pixel-corners-sm shadow-pixel z-50">
            {bubbleText}
            {/* Tiny arrow */}
            <div className="absolute -bottom-1 left-8 w-2 h-2 bg-retro-secondary border-r-2 border-b-2 border-retro-lavender transform rotate-45" />
          </div>
        )}

        {/* Zzz text for sleeping companion */}
        {animState === 'sleep' && (
          <div className="absolute -top-3 left-4 font-pixel text-[7px] text-retro-pink animate-pulse">
            Zzz...
          </div>
        )}

        {/* Companion SVG (Lavender Fox / Cat) */}
        <div className={`relative transition-all duration-300 w-8 h-8 ${getAnimationClass()}`}>
          <svg
            viewBox="0 0 16 16"
            width="32"
            height="32"
            className="fill-retro-lavender stroke-retro-darker stroke-[0.5px]"
          >
            {/* Cute Custom SVG Pixel Fox/Cat */}
            {/* Tail */}
            <rect x="13" y="9" width="3" height="3" fill="#B9A7FF" />
            <rect x="14" y="8" width="2" height="1" fill="#FF8FC7" /> {/* Tail pink tip */}

            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#B9A7FF" />
            <rect x="3" y="3" width="1" height="1" fill="#FF8FC7" /> {/* Inner ear */}
            <rect x="12" y="2" width="2" height="2" fill="#B9A7FF" />
            <rect x="12" y="3" width="1" height="1" fill="#FF8FC7" /> {/* Inner ear */}

            {/* Head + Face */}
            <rect x="3" y="4" width="10" height="7" fill="#B9A7FF" />
            <rect x="4" y="5" width="8" height="6" fill="#B9A7FF" />

            {/* Snout (fox muzzle) */}
            <rect x="6" y="8" width="4" height="3" fill="#ffffff" />

            {/* Nose */}
            <rect x="7" y="8" width="2" height="1" fill="#FF8FC7" />

            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#18152A" />
            <rect x="5" y="6" width="1" height="1" fill="#ffffff" /> {/* Eye reflection */}
            <rect x="10" y="6" width="2" height="2" fill="#18152A" />
            <rect x="10" y="6" width="1" height="1" fill="#ffffff" /> {/* Eye reflection */}

            {/* Blush cheeks */}
            <rect x="3" y="8" width="1" height="1" fill="#FF8FC7" opacity="0.8" />
            <rect x="12" y="8" width="1" height="1" fill="#FF8FC7" opacity="0.8" />

            {/* Feet */}
            <rect x="4" y="11" width="2" height="2" fill="#18152A" />
            <rect x="10" y="11" width="2" height="2" fill="#18152A" />
            
            {/* Excited accessories */}
            {animState === 'excited' && (
              <rect x="7" y="0" width="2" height="2" fill="#FFE58A" className="animate-ping" />
            )}
          </svg>
        </div>

      </div>
    </motion.div>
  );
};

export default PixelCompanion;
