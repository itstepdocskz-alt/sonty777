import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types/project';
import { getAdjacentProjects } from '../data/projects';
import { ImageViewerModal } from './ImageViewerModal';

interface ProjectDetailProps {
  project: Project;
  onBackToWork: () => void;
  onNavigateProject: (slug: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBackToWork,
  onNavigateProject,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { prev, next } = getAdjacentProjects(project.slug, true);

  const displayImages: Array<{ url: string; alt: string }> =
    project.images && project.images.length > 0
      ? project.images.map((img, i) => ({
          url: img,
          alt: `${project.title} — Photo ${i + 1}`,
        }))
      : project.coverImage
      ? [{ url: project.coverImage, alt: project.title }]
      : [{ url: '', alt: `${project.title} Photo` }];

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevLightbox = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + displayImages.length) % displayImages.length);
    }
  };

  const handleNextLightbox = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % displayImages.length);
    }
  };

  return (
    <article className="pt-24 pb-16 md:pt-28 md:pb-20 min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Navigation Bar */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onBackToWork}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#898989] hover:text-[#F2F2F2] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2] py-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#EF3E42]" />
            <span>Back to Selected Work</span>
          </button>
        </div>

        {/* Project Header */}
        <header className="mb-8 pb-4 border-b border-[#303033] flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F2F2F2]">
            {project.title}
          </h1>
          {project.category && (
            <span className="text-xs font-mono text-[#898989] uppercase tracking-widest">
              {project.category}
            </span>
          )}
        </header>

        {/* Project Photo Space */}
        <section aria-label="Project photo" className="space-y-8 mb-12">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-zoom-in"
              onClick={() => handleOpenLightbox(index)}
            >
              {image.url ? (
                <div className="w-full bg-[#131315] border border-[#303033] overflow-hidden flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-[#131315] border border-[#303033] flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:border-[#EF3E42] relative">
                  <ImageIcon className="w-8 h-8 text-[#898989] mb-3 group-hover:text-[#F2F2F2] transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#898989] group-hover:text-[#F2F2F2] transition-colors">
                    {project.title} Photo Space
                  </span>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Previous / Next Project Navigation */}
        <nav
          className="pt-6 border-t border-[#303033] flex items-center justify-between"
          aria-label="Project pagination"
        >
          {prev ? (
            <button
              type="button"
              onClick={() => onNavigateProject(prev.slug)}
              className="group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2] py-1"
            >
              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#898989] mb-0.5">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Previous
              </span>
              <span className="block text-sm sm:text-base font-medium text-[#F2F2F2] group-hover:text-[#EF3E42] transition-colors">
                {prev.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {next ? (
            <button
              type="button"
              onClick={() => onNavigateProject(next.slug)}
              className="group text-right focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F2F2F2] py-1"
            >
              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#898989] mb-0.5">
                Next <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="block text-sm sm:text-base font-medium text-[#F2F2F2] group-hover:text-[#EF3E42] transition-colors">
                {next.title}
              </span>
            </button>
          ) : (
            <div />
          )}
        </nav>
      </div>

      {/* Lightbox / Fullscreen Viewer */}
      <ImageViewerModal
        isOpen={selectedImageIndex !== null}
        onClose={handleCloseLightbox}
        imageUrl={selectedImageIndex !== null ? displayImages[selectedImageIndex]?.url : ''}
        imageAlt={selectedImageIndex !== null ? displayImages[selectedImageIndex]?.alt : ''}
        currentIndex={selectedImageIndex ?? 0}
        totalImages={displayImages.length}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </article>
  );
};
