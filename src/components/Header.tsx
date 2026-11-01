import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeaderProps {
  currentPath?: string;
  onNavigate: (url: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(`/#${targetId}`);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('/');
  };

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'tools', label: 'Software' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#303033] py-3 shadow-xs'
          : 'bg-[#0A0A0A] border-b border-[#303033] py-3.5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Wordmark & Identity Tag */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={handleBrandClick}
            className="text-lg font-bold tracking-tighter text-[#F2F2F2] hover:text-[#EF3E42] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2]"
            aria-label={`${siteConfig.brandName} - Return to Homepage`}
          >
            {siteConfig.brandName}
          </a>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#898989] border-l border-[#303033] pl-3">
            Graphic Designer
          </span>
        </div>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav
            className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="group relative text-[#898989] hover:text-[#F2F2F2] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2]"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EF3E42] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F2F2F2] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2]"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-current transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-current transition-transform duration-200 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#131315] border-b border-[#303033] px-6 py-4"
          >
            <nav className="flex flex-col gap-2 text-xs font-mono uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-[#F2F2F2] hover:text-[#EF3E42] transition-colors py-2 border-b border-[#303033] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#898989]" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
