import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PixelCompanion from './components/PixelCompanion';
import BackgroundLayers from './components/BackgroundLayers';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import EducationSection from './components/EducationSection';
import QuestSection from './components/QuestSection';
import TerminalSection from './components/TerminalSection';
import ExploringWidget from './components/ExploringWidget';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Ensure page starts at top when loading is complete
  useEffect(() => {
    if (!isLoading) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
      })
    }
  }, [isLoading])

  return (
    <div className="relative min-h-screen bg-retro-dark text-white select-none">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen relative z-10">
          <BackgroundLayers />
          <PixelCompanion />
          <Navbar />

          <main className="flex-grow relative z-10">
            <HeroSection />

            <div className="fixed right-4 bottom-24 z-30 hidden xl:block">
              <ExploringWidget />
            </div>

            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <EducationSection />
            <QuestSection />
            <TerminalSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
