import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  scale: number;
  color: string;
}

export const PixelAvatar: React.FC = () => {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isBlinking, setIsBlinking] = useState(false);

  // 1. Mouse/Cursor Eye Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const avatarElement = document.getElementById('pixel-avatar-svg');
      if (!avatarElement) return;

      const rect = avatarElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Max offset in our 32x32 pixel grid coordinate system is 0.7 units
      const maxOffset = 0.7;
      if (distance > 10) {
        setEyeOffset({
          x: (dx / distance) * maxOffset,
          y: (dy / distance) * maxOffset,
        });
      } else {
        setEyeOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Eye Blinking Loop (150ms closed eyes every 4 seconds)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // 3. Random Sparkles Spawning
  useEffect(() => {
    const colors = ['#B9A7FF', '#FF8FC7', '#8FE7FF', '#FFE58A', '#A8F0C6'];
    
    const interval = setInterval(() => {
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: Math.floor(Math.random() * 80) + 10, // Avoid edges
        y: Math.floor(Math.random() * 80) + 10,
        scale: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setSparkles((prev) => [...prev.slice(-3), newSparkle]); // Max 3 sparkles
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="pixel-avatar" className="relative w-64 h-64 md:w-72 md:h-72 mx-auto select-none">
      
      {/* Sparkles Layer */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, sparkle.scale, sparkle.scale, 0] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            color: sparkle.color,
          }}
          className="text-lg md:text-xl font-bold font-pixel pointer-events-none z-10"
        >
          ✦
        </motion.div>
      ))}

      {/* Main Avatar Character */}
      <motion.div
        className="w-full h-full"
        id="pixel-avatar-svg"
      >
        <svg
          viewBox="0 0 32 32"
          width="100%"
          height="100%"
          shapeRendering="crispEdges"
          className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]"
        >
          {/* BACK HAIR */}
          <rect x="9" y="8" width="14" height="12" fill="#211c1d" />
          <rect x="8" y="10" width="16" height="10" fill="#211c1d" />
          <rect x="7" y="12" width="18" height="8" fill="#211c1d" />

          {/* HEADPHONE ARCH (CYBER ACCESSORY) */}
          <rect x="11" y="3" width="10" height="1" fill="#B9A7FF" />
          <rect x="10" y="4" width="12" height="1" fill="#B9A7FF" />
          <rect x="9" y="5" width="2" height="1" fill="#B9A7FF" />
          <rect x="21" y="5" width="2" height="1" fill="#B9A7FF" />
          <rect x="8" y="6" width="2" height="3" fill="#B9A7FF" />
          <rect x="22" y="6" width="2" height="3" fill="#B9A7FF" />

          {/* FACE SKIN */}
          <rect x="10" y="8" width="12" height="10" fill="#ffe5d9" />
          <rect x="9" y="10" width="14" height="7" fill="#ffe5d9" />

          {/* FRONT HAIR & BANGS */}
          <rect x="9" y="7" width="14" height="2" fill="#211c1d" />
          <rect x="10" y="9" width="3" height="2" fill="#211c1d" />
          <rect x="19" y="9" width="3" height="2" fill="#211c1d" />
          <rect x="15" y="9" width="2" height="1" fill="#211c1d" />
          <rect x="9" y="9" width="1" height="4" fill="#211c1d" />
          <rect x="22" y="9" width="1" height="4" fill="#211c1d" />

          {/* HAIR CLIP (Tiny yellow flower) */}
          <rect x="10" y="9" width="1" height="1" fill="#FFE58A" />
          <rect x="11" y="10" width="1" height="1" fill="#FF8FC7" />
          
          {/* EYES LAYER */}
          {isBlinking ? (
            <>
              {/* Closed Eyes */}
              <rect x="11" y="12" width="2" height="1" fill="#211c1d" />
              <rect x="19" y="12" width="2" height="1" fill="#211c1d" />
            </>
          ) : (
            <>
              {/* Eye Whites */}
              <rect x="11" y="12" width="2" height="1" fill="#ffffff" />
              <rect x="19" y="12" width="2" height="1" fill="#ffffff" />
              {/* Eye Pupils (Cursor Tracking Offset) */}
              <rect x={12 + eyeOffset.x} y={12 + eyeOffset.y} width="1" height="1" fill="#211c1d" />
              <rect x={19 + eyeOffset.x} y={12 + eyeOffset.y} width="1" height="1" fill="#211c1d" />
            </>
          )}

          {/* GLASSES (Sleek lavender frame) */}
          <rect x="10" y="11" width="4" height="3" fill="none" stroke="#B9A7FF" strokeWidth="0.5" />
          <rect x="18" y="11" width="4" height="3" fill="none" stroke="#B9A7FF" strokeWidth="0.5" />
          <rect x="14" y="12" width="4" height="1" fill="#B9A7FF" />

          {/* BLUSH CHEEKS */}
          <rect x="10" y="14" width="1" height="1" fill="#FF8FC7" opacity="0.6" />
          <rect x="21" y="14" width="1" height="1" fill="#FF8FC7" opacity="0.6" />

          {/* MOUTH (Friendly Smile) */}
          <rect x="15" y="15" width="2" height="1" fill="#FF8FC7" />

          {/* HEADPHONE EARCUPS */}
          <rect x="7" y="9" width="2" height="4" fill="#FF8FC7" />
          <rect x="23" y="9" width="2" height="4" fill="#FF8FC7" />
          <rect x="8" y="10" width="1" height="2" fill="#18152A" />
          <rect x="23" y="10" width="1" height="2" fill="#18152A" />

          {/* NECK */}
          <rect x="14" y="18" width="4" height="2" fill="#ffe5d9" />

          {/* BODY / HOODIE */}
          <rect x="11" y="20" width="10" height="9" fill="#FF8FC7" />
          <rect x="9" y="21" width="14" height="8" fill="#FF8FC7" />
          <rect x="7" y="22" width="18" height="7" fill="#FF8FC7" />
          <rect x="6" y="24" width="20" height="5" fill="#FF8FC7" />

          {/* INNER COLLAR */}
          <rect x="13" y="20" width="6" height="2" fill="#B9A7FF" />
          <rect x="14" y="22" width="1" height="3" fill="#ffffff" />
          <rect x="17" y="22" width="1" height="3" fill="#ffffff" />

          {/* LAPTOP IN FRONT (Back of screen facing us) */}
          <rect x="10" y="24" width="12" height="5" fill="#374151" /> {/* grey cover */}
          <rect x="9" y="29" width="14" height="1" fill="#1f2937" />  {/* base rim */}
          <rect x="8" y="30" width="16" height="1" fill="#0c0d13" />  {/* bottom slot */}

          {/* GLOWING AI STAR LOGO ON LAPTOP BACK */}
          <rect x="15" y="26" width="2" height="2" fill="#8FE7FF" className="animate-pulse-glow" />
          <rect x="14" y="26" width="1" height="1" fill="#8FE7FF" className="animate-pulse-glow" />
          <rect x="17" y="26" width="1" height="1" fill="#8FE7FF" className="animate-pulse-glow" />
          <rect x="15" y="25" width="1" height="1" fill="#8FE7FF" className="animate-pulse-glow" />
          <rect x="16" y="28" width="1" height="1" fill="#8FE7FF" className="animate-pulse-glow" />
        </svg>
      </motion.div>
    </div>
  );
};

export default PixelAvatar;
