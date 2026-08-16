import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'ACHIEVEMENTS', id: 'achievements' },
    { label: 'CONTACT', id: 'contact' },
  ];

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-retro-dark/95 border-b-4 border-retro-darker font-pixel text-[10px] md:text-xs select-none backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Monogram */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="border-4 border-retro-lavender p-1 bg-retro-dark group-hover:border-retro-pink transition-colors duration-200 pixel-corners-sm shadow-pixel-lavender group-hover:shadow-pixel-pink">
              <span className="text-retro-lavender group-hover:text-retro-pink font-bold text-sm tracking-tighter">SB</span>
            </div>
            <span className="font-sans font-bold text-sm tracking-wide text-white group-hover:text-retro-cyan transition-colors hidden sm:inline-block">
              SUPRIYA.SYS
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 border-4 border-transparent transition-all duration-150 pixel-corners-sm ${
                    isActive 
                      ? 'border-retro-lavender bg-retro-dark shadow-pixel-lavender text-retro-lavender' 
                      : 'text-white hover:text-retro-cyan hover:border-retro-cyan/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 text-[8px] text-retro-pink animate-pulse-glow">✦</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-4 border-retro-lavender bg-retro-dark text-retro-lavender active:scale-95 transition-transform duration-100 pixel-corners-sm shadow-pixel-lavender"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[3px]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[3px]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Retro inventory styling) */}
      {isOpen && (
        <div className="lg:hidden border-b-4 border-retro-darker bg-retro-darker/95 px-4 pt-2 pb-6 space-y-2 crt-monitor">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 border-4 block transition-all duration-150 pixel-corners-sm ${
                  isActive 
                    ? 'border-retro-pink bg-retro-dark text-retro-pink shadow-pixel-pink font-bold' 
                    : 'border-transparent text-white hover:text-retro-lavender'
                }`}
              >
                <span className="mr-2">{isActive ? '▶' : '▷'}</span>
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
