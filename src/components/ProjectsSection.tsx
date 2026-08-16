import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import usePortfolio from '../hooks/usePortfolio';
import type { Project } from '../types/portfolio';

import urbanGuardianImage from '../assets/projects/urban-guardian.png';
import healthSyncImage from '../assets/projects/healthsync.png';
import pneumoniaImage from '../assets/projects/pneumonia.png';
import prescriptionImage from '../assets/projects/prescription.png';
import medicareImage from '../assets/projects/medicare.png';

const projectArtMap: Record<string, string> = {
  'urban-guardian-ai': urbanGuardianImage,
  'healthsync': healthSyncImage,
  'pneumonia-detection-system': pneumoniaImage,
  'prescription-system': prescriptionImage,
  'medicare-portal': medicareImage,
};

export const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-20 border-t-4 border-retro-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 select-none">
            <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink tracking-widest uppercase inline-block border-b-4 border-retro-pink pb-2">
              PROJECT ARCADE 🕹️
            </h2>
            <p className="font-sans text-sm text-retro-muted mt-4">
              Insert coin and hover over cabinets to play/inspect project simulations.
            </p>
          </div>

          {/* Arcade Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
            {projects.map((project, idx) => (
              <ArcadeCabinet key={project.id} project={project} index={idx} onExplore={() => setSelectedProject(project)} />
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#100F1C]/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl border-4 border-retro-lavender bg-retro-secondary p-5 shadow-pixel-lavender pixel-corners"
            >
              <div className="mb-4 flex items-center justify-between border-b-2 border-retro-border pb-3">
                <div>
                  <div className="font-pixel text-[8px] text-retro-muted uppercase tracking-wide">PROJECT PROFILE</div>
                  <h3 className="font-pixel text-base text-retro-pink uppercase pt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-retro-border bg-retro-dark px-2 py-1 font-pixel text-[8px] text-retro-pink"
                  aria-label="Close project details"
                >
                  X
                </button>
              </div>

              <div className="space-y-4 text-white">
                <p className="font-sans text-sm text-retro-muted">{selectedProject.subtitle || selectedProject.description}</p>

                <div className="grid gap-3">
                  <div className="border-2 border-retro-border bg-retro-dark/70 p-3">
                    <div className="font-pixel text-[8px] uppercase text-retro-cyan pb-2">WHAT I BUILT</div>
                    <p className="font-sans text-sm text-white/90">{selectedProject.description}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="border-2 border-retro-border bg-retro-dark/70 p-3">
                      <div className="font-pixel text-[8px] uppercase text-retro-yellow pb-2">PROJECT TYPE</div>
                      <div className="font-sans text-sm text-white/90">{selectedProject.type || 'AI / ML'}</div>
                    </div>
                    <div className="border-2 border-retro-border bg-retro-dark/70 p-3">
                      <div className="font-pixel text-[8px] uppercase text-retro-mint pb-2">STACK</div>
                      <div className="flex flex-wrap gap-1">
                        {(selectedProject.stack || selectedProject.technologies || []).map((tech) => (
                          <span key={tech} className="font-pixel text-[6px] border border-retro-border bg-retro-darker px-1.5 py-1 text-retro-lavender">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.github ? (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="font-pixel text-[8px] border-2 border-retro-pink bg-retro-pink px-3 py-2 text-retro-darker hover:-translate-y-0.5 transition-transform">
                      GITHUB ↗
                    </a>
                  ) : null}

                  {selectedProject.demo ? (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="font-pixel text-[8px] border-2 border-retro-cyan bg-retro-cyan px-3 py-2 text-retro-darker hover:-translate-y-0.5 transition-transform">
                      LIVE DEMO ↗
                    </a>
                  ) : null}

                  {selectedProject.caseStudy ? (
                    <a href={selectedProject.caseStudy} target="_blank" rel="noopener noreferrer" className="font-pixel text-[8px] border-2 border-retro-yellow bg-retro-yellow px-3 py-2 text-retro-darker hover:-translate-y-0.5 transition-transform">
                      CASE STUDY ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Interactive Arcade Cabinet Card Component
interface CabinetProps {
  project: Project;
  index: number;
  onExplore: () => void;
}

const ArcadeCabinet: React.FC<CabinetProps> = ({ project, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const getProjectArtSource = (projectItem: Project) => {
    const mappedAsset = projectArtMap[projectItem.id];

    if (mappedAsset) {
      return mappedAsset;
    }

    if (projectItem.image && /^https?:\/\//.test(projectItem.image)) {
      return projectItem.image;
    }

    return '';
  };

  const projectArtSource = getProjectArtSource(project);

  // Render specific animated pixel scene for each project screen on hover
  const renderScreenSimulation = () => {
    switch (project.id) {
      case 'urban-guardian-ai':
        return (
          <div className="relative w-full h-full bg-[#1b102b] flex flex-col justify-end overflow-hidden p-2">
            {/* Flashing grid beacons */}
            <div className="absolute top-1 left-1 right-1 flex justify-between">
              <span className={`w-2.5 h-2.5 rounded-none border border-black ${isHovered ? 'bg-red-500 animate-ping' : 'bg-red-900'}`} />
              <span className={`w-2.5 h-2.5 rounded-none border border-black ${isHovered ? 'bg-[#8FE7FF] animate-ping' : 'bg-blue-900'}`} style={{ animationDelay: '0.4s' }} />
            </div>
            
            {/* Map lines (retro background vector grid) */}
            <div className="absolute inset-0 opacity-25 flex flex-col justify-between p-4">
              <div className="h-[2px] bg-red-400 w-full" />
              <div className="h-full w-[2px] bg-red-400 mx-auto" />
            </div>

            {/* Ambulance slide animation */}
            <div 
              className={`flex items-center gap-1.5 transition-all duration-[3000ms] ease-linear`}
              style={{
                transform: isHovered ? 'translateX(100px)' : 'translateX(-20px)',
              }}
            >
              <svg viewBox="0 0 16 10" width="30" height="20" className="fill-white">
                {/* Body */}
                <rect x="0" y="2" width="12" height="6" fill="#fff" />
                <rect x="12" y="4" width="4" height="4" fill="#eee" />
                {/* Red cross */}
                <rect x="4" y="4" width="4" height="2" fill="red" />
                <rect x="5" y="3" width="2" height="4" fill="red" />
                {/* Wheels */}
                <rect x="2" y="8" width="2" height="2" fill="#000" />
                <rect x="10" y="8" width="2" height="2" fill="#000" />
                {/* Siren */}
                <rect x="1" y="0" width="2" height="2" fill={isHovered ? 'red' : 'blue'} className="animate-pulse" />
              </svg>
            </div>
            
            <div className="font-pixel text-[6px] text-red-400 text-center uppercase tracking-widest mt-1">
              EMERGENCY BROADCAST
            </div>
          </div>
        );

      case 'healthsync':
        return (
          <div className="relative w-full h-full bg-[#10241b] flex flex-col justify-center items-center overflow-hidden p-2 select-none">
            {/* Health-tech patient performing movement */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 16 16" width="36" height="36" className="fill-retro-mint">
                {/* Head */}
                <circle cx="8" cy="3" r="2" fill="#fff" />
                {/* Spine */}
                <rect x="7.5" y="5" width="1" height="6" fill="#fff" />
                {/* Dynamic arms (raising up/down on hover) */}
                {isHovered ? (
                  <>
                    <line x1="8" y1="6" x2="4" y2="2" stroke="#fff" strokeWidth="1.5" />
                    <line x1="8" y1="6" x2="12" y2="2" stroke="#fff" strokeWidth="1.5" />
                  </>
                ) : (
                  <>
                    <line x1="8" y1="6" x2="4" y2="8" stroke="#fff" strokeWidth="1.5" />
                    <line x1="8" y1="6" x2="12" y2="8" stroke="#fff" strokeWidth="1.5" />
                  </>
                )}
                {/* Legs */}
                <line x1="8" y1="11" x2="5" y2="15" stroke="#fff" strokeWidth="1.5" />
                <line x1="8" y1="11" x2="11" y2="15" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="font-pixel text-[6px] text-retro-mint uppercase mt-1 tracking-wider text-center">
              {isHovered ? 'CALIBRATING AR STATE...' : 'STABLE EXERCISE IDLE'}
            </div>
          </div>
        );

      case 'pneumonia-detection-system':
        return (
          <div className="relative w-full h-full bg-[#1f0d1a] flex flex-col justify-center items-center overflow-hidden p-2">
            {/* Pulsing heart block */}
            <div className={`transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-90 animate-pulse'}`}>
              <svg viewBox="0 0 16 16" width="40" height="40" className="fill-retro-pink">
                <path d="M8 15s-7-4.3-7-9c0-2.5 2-4.5 4.5-4.5c1.4 0 2.7.7 3.5 1.8c.8-1.1 2.1-1.8 3.5-1.8c2.5 0 4.5 2 4.5 4.5c0 4.7-7 9-7 9z" />
              </svg>
            </div>
            
            {/* EKG wave moving left to right */}
            <div className="w-full h-6 border-t border-dashed border-retro-pink/25 mt-2 overflow-hidden relative">
              <div 
                className="absolute inset-y-0 w-24 h-full bg-gradient-to-r from-transparent via-retro-pink/40 to-transparent flex items-center justify-center transition-all duration-[2000ms] ease-in-out"
                style={{
                  transform: isHovered ? 'translateX(100px)' : 'translateX(-60px)',
                }}
              >
                /\_/\_
              </div>
            </div>
          </div>
        );

      case 'prescription-system':
        return (
          <div className="relative w-full h-full bg-[#182012] flex flex-col justify-end items-center overflow-hidden p-2">
            {/* Plant Sprout Growing */}
            <div className="relative w-12 h-14 flex flex-col justify-end items-center">
              {/* Sprout body */}
              <div 
                className="w-1 bg-[#A8F0C6] transition-all duration-[1500ms] ease-out border border-black"
                style={{
                  height: isHovered ? '28px' : '10px',
                }}
              />
              {/* Leaves */}
              {isHovered && (
                <div className="flex gap-2 -mb-2 z-10 animate-pulse">
                  <span className="w-3.5 h-2 bg-[#8FE7FF] rounded-none border border-black transform -rotate-45" />
                  <span className="w-3.5 h-2 bg-[#8FE7FF] rounded-none border border-black transform rotate-45" />
                </div>
              )}
              {/* Dirt base */}
              <div className="w-10 h-3 bg-[#4b3c2a] border-2 border-black pixel-corners-sm" />
            </div>
            
            <div className="font-pixel text-[6px] text-[#A8F0C6] uppercase mt-1 tracking-wider text-center">
              {isHovered ? 'QUALITY: GRADE A' : 'LAB SCANNER READY'}
            </div>
          </div>
        );

      case 'medicare-portal':
        return (
          <div className="relative w-full h-full bg-[#0a1824] flex flex-col justify-center items-center overflow-hidden p-2 select-none">
            {/* Skeleton chest representation */}
            <div className="w-14 h-12 border-2 border-dashed border-retro-cyan/40 p-1 flex flex-col justify-between rounded-none relative">
              <div className="h-1 bg-white/20 w-full" />
              <div className="flex justify-between w-full h-4">
                <span className="w-2.5 bg-white/30 h-full inline-block" />
                <span className="w-2.5 bg-white/30 h-full inline-block" />
              </div>
              <div className="h-1 bg-white/20 w-full" />

              {/* Scanning Green laser bar moving top to bottom */}
              <div 
                className="absolute left-0 right-0 h-[3px] bg-retro-cyan shadow-[0_0_8px_#8FE7FF] transition-all duration-[1200ms] ease-in-out"
                style={{
                  top: isHovered ? '90%' : '10%',
                }}
              />
            </div>
            
            <div className="font-pixel text-[6px] text-retro-cyan uppercase mt-2 tracking-wider text-center">
              {isHovered ? 'CNN SCANNING IN PROGRESS' : 'READY FOR IMAGING'}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col select-none"
    >
      
      {/* 1. Arcade Cabinet Frame */}
      <div 
        className={`bg-retro-secondary border-4 p-4 pixel-corners flex flex-col transition-all duration-200 shadow-pixel ${
          isHovered 
            ? 'border-retro-pink -translate-y-2 shadow-pixel-pink' 
            : 'border-retro-border'
        } ${project.highlighted ? 'relative' : ''}`}
      >
        
        {/* Featured Tag */}
        {project.highlighted && (
          <div className="absolute -top-3.5 left-6 bg-retro-pink border-2 border-black text-black font-pixel text-[6.5px] px-2 py-0.5 z-10 pixel-corners-sm uppercase tracking-widest font-bold">
            ★ FEATURED
          </div>
        )}

        {/* Cabinet Marquee Header */}
        <div className="bg-retro-darker border-2 border-black p-2 mb-3 text-center pixel-corners flex items-center justify-center min-h-[44px]">
          <h3 className="font-pixel text-[10px] md:text-[11px] text-white tracking-widest uppercase truncate max-w-full">
            {project.title}
          </h3>
        </div>

        {/* 2. CRT Screen Frame */}
        <div className="border-4 border-black bg-black p-1.5 pixel-corners shadow-pixel-in relative">
          <div className="project-image relative border border-retro-border overflow-hidden crt-monitor">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none z-10" />
            {projectArtSource && !hasImageError ? (
              <img
                src={projectArtSource}
                alt={`${project.title} project illustration`}
                className="relative z-10 h-full w-full object-cover object-center"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <div className="project-image-fallback relative z-10 flex h-full w-full items-center justify-center">
                {renderScreenSimulation()}
              </div>
            )}
          </div>
        </div>

        {/* Joystick & Dashboard Section (Arcade controller panel) */}
        <div className="bg-retro-darker border-t-2 border-black border-2 mt-3 p-2.5 pixel-corners flex items-center justify-between">
          
          {/* 8-bit Red Joystick */}
          <div className="flex items-center gap-1.5">
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Base socket */}
              <div className="w-5 h-2 bg-retro-border border border-black rounded-none" />
              {/* Stick */}
              <div 
                className={`absolute bottom-2 w-1.5 h-5 bg-zinc-500 border border-black origin-bottom transition-transform duration-100 ${
                  isHovered ? 'rotate-12 scale-y-95' : 'rotate-0'
                }`}
              />
              {/* Red ball */}
              <div 
                className={`absolute w-3.5 h-3.5 bg-red-600 border border-black rounded-full transition-transform duration-100 ${
                  isHovered ? 'translate-x-1.5 -translate-y-0.5' : 'translate-y-[-12px]'
                }`}
              />
            </div>
            <span className="font-pixel text-[6px] text-retro-muted uppercase">MOVE</span>
          </div>

          {/* Action Arcade Buttons */}
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <span className={`w-3.5 h-3.5 rounded-full border-2 border-black ${isHovered ? 'bg-retro-cyan shadow-none translate-y-[1px]' : 'bg-retro-cyan/40'} pixel-corners-sm`} />
              <span className="font-pixel text-[5px] text-retro-muted mt-1">A</span>
            </div>
            <div className="flex flex-col items-center">
              <span className={`w-3.5 h-3.5 rounded-full border-2 border-black ${isHovered ? 'bg-retro-pink shadow-none translate-y-[1px]' : 'bg-retro-pink/40'} pixel-corners-sm`} />
              <span className="font-pixel text-[5px] text-retro-muted mt-1">B</span>
            </div>
          </div>

        </div>

        {/* 3. Project description & tech stats (Cabinet coin door) */}
        <div className="mt-4 space-y-3 font-sans text-xs flex-grow flex flex-col justify-between">
          
          <p className="text-retro-muted leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-retro-border/40">
            <span className="font-pixel text-[7px] text-retro-muted uppercase tracking-wider block">TECH LOADOUT:</span>
            <div className="flex flex-wrap gap-1">
              {(project.technologies ?? []).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="font-pixel text-[6.5px] px-1.5 py-0.5 bg-retro-darker border border-retro-border text-retro-lavender pixel-corners-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Details / Insert Coin Button */}
          <div className="pt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onExplore}
              className={`flex-1 min-w-[120px] text-center font-pixel text-[8px] py-2 px-3 border-2 transition-all duration-75 uppercase tracking-wider ${
                isHovered
                  ? 'border-retro-pink bg-retro-pink text-retro-darker font-bold shadow-none'
                  : 'border-retro-border bg-retro-dark text-retro-muted'
              } pixel-corners-sm`}
              aria-label={`Explore ${project.title}`}
            >
              {isHovered ? 'EXPLORE PROJECT →' : 'EXPLORE'}
            </button>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} GitHub repository`}
                className="flex-1 min-w-[110px] text-center font-pixel text-[8px] py-2 px-3 border-2 border-retro-lavender bg-retro-dark text-retro-lavender hover:bg-retro-lavender hover:text-retro-darker transition-all duration-75 pixel-corners-sm"
              >
                GITHUB ↗
              </a>
            ) : null}
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectsSection;
