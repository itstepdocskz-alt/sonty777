import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Education: React.FC = () => {
  const { education } = siteConfig;

  return (
    <section
      id="education"
      className="py-12 md:py-16 bg-[#131315] text-[#F2F2F2] scroll-mt-14"
      aria-labelledby="education-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pb-3 mb-8 border-b border-[#303033] flex items-baseline justify-between gap-4"
        >
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F2F2F2]"
          >
            {siteConfig.sectionTitles.education}
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-[#898989]">
            <GraduationCap className="w-4 h-4 text-[#EF3E42]" />
            <span>{education.institution}</span>
          </div>
        </motion.div>

        {/* Compact 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Large Typographic "05" Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-7xl sm:text-8xl font-light leading-none tracking-tighter text-[#F2F2F2] select-none font-sans">
                05
              </span>
              <span className="text-xs font-mono text-[#EF3E42] tracking-widest uppercase font-semibold">
                Years of Study
              </span>
            </div>
            <p className="text-xs font-mono text-[#898989] leading-relaxed mt-3">
              Five continuous years of foundational design studies and software fluency at {education.institution}.
            </p>
          </motion.div>

          {/* Right Column: IT STEP Academy Description & Metadata */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#F2F2F2] mb-1">
                {education.heading}
              </h3>
              <p className="text-xs font-mono text-[#898989]">
                {education.institution} · {education.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 text-sm text-[#898989] leading-relaxed mb-6"
            >
              {education.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Compact Metadata Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#303033]"
            >
              {education.metadata.map((item, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-[#303033] p-2.5 text-xs font-mono">
                  <span className="block text-[#898989] text-[10px] uppercase mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-[#F2F2F2] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
