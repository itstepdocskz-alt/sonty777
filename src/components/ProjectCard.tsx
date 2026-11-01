import React from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelect(project.slug);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer flex flex-col"
    >
      <a
        href={`/work/${project.slug}`}
        onClick={handleClick}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2F2]"
        aria-label={`View ${project.title}`}
      >
        {/* Dedicated Project Photo Frame */}
        {project.coverImage ? (
          <div className="w-full aspect-[4/3] bg-[#131315] border border-[#303033] overflow-hidden relative transition-all duration-300 group-hover:border-[#EF3E42] group-hover:brightness-105">
            <img
              src={project.coverImage}
              alt={project.alt || project.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="w-full aspect-[4/3] bg-[#131315] border border-[#303033] flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-[#EF3E42] relative overflow-hidden">
            {/* Corner Crop Marks for Photo Space */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#303033] group-hover:border-[#EF3E42] transition-colors" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#303033] group-hover:border-[#EF3E42] transition-colors" />
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#303033] group-hover:border-[#EF3E42] transition-colors" />
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#303033] group-hover:border-[#EF3E42] transition-colors" />

            <ImageIcon className="w-6 h-6 text-[#898989] mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F2F2F2]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#898989] group-hover:text-[#F2F2F2] transition-colors">
              Project 0{index + 1} Photo
            </span>
          </div>
        )}

        {/* Minimal Caption */}
        <div className="mt-3 flex items-baseline justify-between">
          <h3 className="text-base font-medium text-[#F2F2F2] group-hover:text-[#EF3E42] transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-[#898989]">
            0{index + 1}
          </span>
        </div>
      </a>
    </motion.article>
  );
};
