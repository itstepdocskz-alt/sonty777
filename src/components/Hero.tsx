import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#303033] overflow-hidden"
      aria-label="Introduction"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Hero Headline Block */}
        <div className="mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#F2F2F2] leading-[0.9] select-none">
              {siteConfig.brandName}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-wrap items-baseline gap-3"
          >
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F2F2F2]">
              Graphic Designer
            </h2>
            <span className="text-[#898989] font-light hidden sm:inline">/</span>
            <span className="text-sm sm:text-base text-[#898989]">
              Visual Identity &amp; Typography
            </span>
          </motion.div>
        </div>

        {/* Narrative & Explore Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#303033]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#F2F2F2] leading-relaxed max-w-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onExploreClick}
              className="group inline-flex items-center gap-2 bg-[#131315] text-[#F2F2F2] hover:bg-[#EF3E42] hover:border-[#EF3E42] transition-colors text-xs font-mono uppercase tracking-widest px-4 py-2.5 border border-[#303033]"
            >
              <span>Selected Work</span>
              <ArrowDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
