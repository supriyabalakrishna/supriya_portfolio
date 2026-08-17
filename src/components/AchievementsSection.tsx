import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
  description?: string;
  image?: string;
  location?: string;
  category: 'featured' | 'hackathon' | 'certification' | 'event';
  type?: string;
}

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  // Featured Achievements - Most important
  const featuredAchievements: Achievement[] = [
    {
      id: 'alliance-best-design',
      title: 'Best Design Engineering',
      issuer: 'AllianceTechX 2025',
      date: '12.12.2025',
      badge: 'AWARD',
      description: 'Certificate of Special Recognition for Best Design Engineering at AllianceTechX 2025 – Engineering Innovation & Prototype Championship',
      image: '/assets/certificates/alliance-novax-best-design.jpg',
      category: 'featured',
      type: 'Award'
    },
    {
      id: 'ai-for-good-3rd',
      title: '3rd Place Winner',
      issuer: 'AI for Good Hackathon',
      badge: '3RD PLACE',
      description: 'Awarded 3rd Place at the AI for Good Hackathon, supported by Microsoft',
      category: 'featured',
      type: 'Award'
    },
  ];

  // Hackathon Participations
  const hackathonAchievements: Achievement[] = [
    {
      id: 'samsung-solve',
      title: 'Samsung Solve for Tomorrow 2026',
      issuer: 'Samsung',
      badge: 'PARTICIPATION',
      description: 'Participated in Samsung Solve for Tomorrow 2026, contributing ideas using design thinking and innovation',
      image: '/assets/certificates/samsung-solve-for-tomorrow.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'hackarena-2-zonals',
      title: 'HackArena 2.0 – Bangalore Zonals',
      issuer: 'HackArena',
      badge: 'PARTICIPATION',
      description: 'Active participation in HackArena 2.0 Zonals Round',
      image: '/assets/certificates/hackarena-2.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'ghci-2025-hackathon',
      title: 'GHCI \'25 Hackathon',
      issuer: 'Grace Hopper Celebration',
      date: '2025',
      badge: 'PARTICIPATION',
      description: 'Participated in GHCI \'25 Hackathon – Unbound with GenAI: Breaking Barriers, Creating Impact',
      image: '/assets/certificates/ghci-2025.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'aurigo-infracode',
      title: 'Aurigo InfraCode of Synergy \'25',
      issuer: 'IIIT Bangalore',
      badge: 'PARTICIPATION',
      description: 'Active participation in Aurigo InfraCode of Synergy \'25, organized by IIIT Bangalore',
      image: '/assets/certificates/aurigo.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'gappy-ai-hackathon',
      title: 'Ship to Get Hired – Gappy AI',
      issuer: 'Gappy AI',
      badge: 'PARTICIPATION',
      description: 'Hackathon submission to Ship to Get Hired - Gappy AI Hackathon',
      image: '/assets/certificates/gappy.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'hack-ula',
      title: 'Hack-Ula',
      issuer: 'RVCE & NITK',
      badge: 'PARTICIPATION',
      description: 'Participation in Hack-Ula, organized by RVCE and NITK',
      image: '/assets/certificates/hackula.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'hp-power-lab',
      title: 'HP Power Lab 2.0 – Round 1',
      issuer: 'HP (Hindustan Petroleum)',
      badge: 'PARTICIPATION',
      description: 'Participation in HP Power Lab 2.0 Round 1 Online Assessment',
      image: '/assets/certificates/hp.jpg',
      category: 'hackathon',
      type: 'Hackathon'
    },
    {
      id: 'ey-techathon',
      title: 'EY Techathon 6.0',
      issuer: 'EY',
      badge: 'PARTICIPATION',
      description: 'Participated in EY Techathon 6.0',
      
      category: 'hackathon',
      type: 'Hackathon'
    },
  ];

  // Certifications
  const certificationAchievements: Achievement[] = [
    {
      id: 'nptel-ml-elite',
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL – IIT Kharagpur',
      date: 'Jul-Sep 2025',
      badge: 'ELITE • TOP 2%',
      description: 'NPTEL Elite Certificate with 81% score, Top 2% distinction',
      image: '/assets/certificates/ml.jpg',
      category: 'certification',
      type: 'NPTEL • Elite Certificate'
    },
    {
      id: 'oracle-ai-foundations',
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'October 29, 2025',
      badge: 'CERTIFIED',
      description: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Credential: 323403275OCI25AICFA) Valid until October 29, 2027',
      image: '/assets/certificates/oracle.jpg',
      category: 'certification',
      type: 'Oracle Certification'
    },
    {
      id: 'nptel-db-elite',
      title: 'Introduction to Database Systems',
      issuer: 'NPTEL – IIT Madras',
      date: 'Jan-Apr 2025',
      badge: 'ELITE',
      description: 'NPTEL Elite Certificate with 61% score',
      image: '/assets/certificates/database.jpg',
      category: 'certification',
      type: 'NPTEL • Elite Certificate'
    },
    {
      id: 'udemy-python-bootcamp',
      title: 'The Complete Python Bootcamp From Zero to Hero in Python',
      issuer: 'Udemy',
      date: 'July 7, 2025',
      badge: 'COMPLETED',
      description: 'Course completion certificate from Udemy (22 hours) by Jose Portilla, Pierian Training',
      image: '/assets/certificates/udemy.jpg',
      category: 'certification',
      type: 'Udemy Course'
    },
    {
      id: 'nptel-compiler-elite',
      title: 'Compiler Design',
      issuer: 'NPTEL – IIT Kharagpur',
      date: 'Jan-Apr 2026',
      badge: 'ELITE',
      description: 'NPTEL Elite Certificate with 69% score',
      image: '/assets/certificates/compiler.jpg',
      category: 'certification',
      type: 'NPTEL • Elite Certificate'
    },
    {
      id: 'python-30-days-ai',
      title: '30 Days of Python using AI',
      issuer: 'AI for Techies',
      badge: 'COMPLETED',
      description: 'Completed 30 Days of Python using AI from AI for Techies',
      image: '/assets/certificates/compiler.jpg',
      category: 'certification',
      type: 'Course'
    },
  ];

  // Events & Summits
  const eventAchievements: Achievement[] = [
    {
      id: 'india-ai-summit-2026',
      title: 'AICTE - HEIs Engagement AI Pre-Summit',
      issuer: 'AICTE / Ministry of Education',
      date: '10 February 2026',
      location: 'Presidency University, Bangalore',
      badge: 'ATTENDANCE',
      description: 'Participated in India AI Impact Summit 2026 – HEI Pre-Summit, organized under AICTE and MoE\'s Innovation Cell',
      image: '/assets/certificates/ai.jpg',
      category: 'event',
      type: 'Tech Summit'
    },
  ];

  return (
    <>
      <section id="achievements" className="relative py-20 border-t-4 border-retro-border bg-retro-darker/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 select-none">
            <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink tracking-widest uppercase inline-block border-b-4 border-retro-pink pb-2">
              ACHIEVEMENTS UNLOCKED 🏆
            </h2>
            <p className="font-sans text-sm text-retro-muted mt-4">
              Awards, hackathon participation, and certifications earned through dedication and continuous learning.
            </p>
          </div>

          {/* Featured Achievements */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="font-pixel text-sm text-retro-yellow tracking-widest uppercase border-b-2 border-retro-yellow pb-2">
                ⭐ FEATURED ACHIEVEMENTS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() => setSelectedAchievement(achievement)}
                />
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="font-pixel text-sm text-retro-cyan tracking-widest uppercase border-b-2 border-retro-cyan pb-2">
                🚀 HACKATHONS & EVENTS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hackathonAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() => setSelectedAchievement(achievement)}
                  compact
                />
              ))}
              {eventAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() => setSelectedAchievement(achievement)}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6">
              <h3 className="font-pixel text-sm text-retro-lavender tracking-widest uppercase border-b-2 border-retro-lavender pb-2">
                📜 CERTIFICATIONS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificationAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  onClick={() => setSelectedAchievement(achievement)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#100F1C]/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-retro-secondary border-4 border-retro-lavender p-6 shadow-pixel-lavender pixel-corners"
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between border-b-2 border-retro-border pb-4">
                <div>
                  <div className="font-pixel text-[8px] text-retro-muted uppercase tracking-wide">
                    {selectedAchievement.type}
                  </div>
                  <h3 className="font-pixel text-lg text-retro-pink uppercase pt-2">
                    {selectedAchievement.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="border-2 border-retro-border bg-retro-dark px-3 py-2 font-pixel text-xs text-retro-pink hover:bg-retro-lavender hover:text-retro-dark transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Certificate Image or Badge */}
                {selectedAchievement.image && !imageError ? (
                  <div className="border-2 border-retro-border bg-retro-dark p-2">
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      className="w-full max-h-96 object-contain"
                      onError={() => setImageError(selectedAchievement.id)}
                    />
                  </div>
                ) : (
                  <div className="border-2 border-retro-border bg-retro-dark p-8 text-center">
                    <div className="text-4xl mb-3">{selectedAchievement.category === 'featured' ? '🏆' : selectedAchievement.category === 'certification' ? '📜' : '🎯'}</div>
                    <p className="font-sans text-sm text-retro-muted">Certificate image not yet available</p>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3">
                  <div className="border-2 border-retro-border bg-retro-dark p-3">
                    <div className="font-pixel text-[8px] uppercase text-retro-cyan pb-2">ISSUER</div>
                    <p className="font-sans text-sm text-white">{selectedAchievement.issuer}</p>
                  </div>

                  {selectedAchievement.date && (
                    <div className="border-2 border-retro-border bg-retro-dark p-3">
                      <div className="font-pixel text-[8px] uppercase text-retro-yellow pb-2">DATE</div>
                      <p className="font-sans text-sm text-white">{selectedAchievement.date}</p>
                    </div>
                  )}

                  {selectedAchievement.description && (
                    <div className="border-2 border-retro-border bg-retro-dark p-3">
                      <div className="font-pixel text-[8px] uppercase text-retro-mint pb-2">DESCRIPTION</div>
                      <p className="font-sans text-sm text-white/90">{selectedAchievement.description}</p>
                    </div>
                  )}

                  {selectedAchievement.badge && (
                    <div className="flex flex-wrap gap-2">
                      {selectedAchievement.badge.split('•').map((badge) => (
                        <span
                          key={badge}
                          className="font-pixel text-[7px] border border-retro-border bg-retro-dark px-2 py-1 text-retro-pink"
                        >
                          {badge.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Close hint */}
              <div className="mt-6 text-center">
                <p className="font-pixel text-[7px] text-retro-muted uppercase">
                  press ESC or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Achievement Card Component
interface AchievementCardProps {
  achievement: Achievement;
  onClick: () => void;
  compact?: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, onClick, compact = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const badgeColors: Record<string, string> = {
    'AWARD': 'border-retro-yellow text-retro-yellow bg-retro-yellow/10',
    'ELITE': 'border-retro-cyan text-retro-cyan bg-retro-cyan/10',
    'ELITE • TOP 2%': 'border-retro-pink text-retro-pink bg-retro-pink/10',
    'PARTICIPATION': 'border-retro-mint text-retro-mint bg-retro-mint/10',
    'CERTIFIED': 'border-retro-orange text-retro-orange bg-retro-orange/10',
    'COMPLETED': 'border-retro-lavender text-retro-lavender bg-retro-lavender/10',
    'ATTENDANCE': 'border-retro-cyan text-retro-cyan bg-retro-cyan/10',
  };

  const badgeClass = badgeColors[achievement.badge?.split('•')[0].trim() || ''] || 'border-retro-border text-white';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group cursor-pointer border-4 border-retro-border bg-retro-secondary/80 p-4 pixel-corners shadow-pixel transition-all ${
        isHovered ? 'border-retro-pink shadow-pixel-pink' : ''
      } ${compact ? 'h-full' : ''}`}
    >
      {/* Badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className={`font-pixel text-[6px] border px-2 py-1 pixel-corners-sm ${badgeClass}`}>
          {achievement.badge}
        </span>
        {isHovered && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-retro-pink">
            <ExternalLink className="w-4 h-4" />
          </motion.span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-pixel text-[9px] text-retro-pink uppercase leading-tight mb-2 line-clamp-2">
        {achievement.title}
      </h3>

      {/* Issuer */}
      <p className="font-sans text-[11px] text-retro-muted mb-2">{achievement.issuer}</p>

      {/* Date if available */}
      {achievement.date && (
        <p className="font-pixel text-[7px] text-retro-cyan uppercase tracking-wide">{achievement.date}</p>
      )}

      {/* Floating sparkle on hover */}
      {isHovered && (
        <motion.span className="absolute top-2 right-2 text-retro-yellow animate-pulse">✦</motion.span>
      )}
    </motion.div>
  );
};

export default AchievementsSection;
