import React from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { getVisibleProjects } from '../data/projects';
import { siteConfig } from '../config/site';

interface SelectedWorkProps {
  onSelectProject: (slug: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const visibleProjects = getVisibleProjects(true);

  return (
    <section
      id="work"
      className="py-12 md:py-16 border-b border-[#303033] scroll-mt-14"
      aria-labelledby="selected-work-title"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-between mb-8 pb-3 border-b border-[#303033]"
        >
          <h2
            id="selected-work-title"
            className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F2F2F2]"
          >
            {siteConfig.sectionTitles.work}
          </h2>
          <span className="text-xs font-mono text-[#898989]">
            01 — 02
          </span>
        </motion.div>

        {/* Space for 2 Project Photos: Side-by-side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
