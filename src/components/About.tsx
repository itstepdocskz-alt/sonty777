import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 border-b border-[#303033] scroll-mt-14"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F2F2F2] mb-4"
            >
              {siteConfig.sectionTitles.about}
            </h2>

            <div className="bg-[#131315] border border-[#303033] p-4 space-y-2.5 text-xs font-mono">
              <div className="flex justify-between pb-2 border-b border-[#303033]">
                <span className="text-[#898989]">DESIGNER</span>
                <span className="text-[#F2F2F2] font-semibold">{siteConfig.brandName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#303033]">
                <span className="text-[#898989]">LOCATION</span>
                <span className="text-[#F2F2F2]">{siteConfig.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#898989]">EDUCATION</span>
                <span className="text-[#F2F2F2]">IT STEP Academy (5 Yrs)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement & Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-4"
          >
            <p className="text-lg sm:text-xl font-normal text-[#F2F2F2] leading-relaxed">
              {siteConfig.aboutText}
            </p>
            <p className="text-sm sm:text-base text-[#898989] leading-relaxed pt-4 border-t border-[#303033]">
              {siteConfig.designPhilosophy}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
