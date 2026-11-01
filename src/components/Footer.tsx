import React from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0A0A0A] border-t border-[#303033] text-xs font-mono text-[#898989]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[#F2F2F2] tracking-tighter font-bold text-base font-sans">
            {siteConfig.brandName}
          </span>
          <span className="text-[#303033]">·</span>
          <span>Graphic Designer</span>
        </div>

        <button
          type="button"
          onClick={handleBackToTop}
          className="inline-flex items-center gap-1.5 text-[#898989] hover:text-[#EF3E42] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#898989] py-1"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
