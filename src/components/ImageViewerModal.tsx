import React, { useEffect } from 'react';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt?: string;
  currentIndex?: number;
  totalImages?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image fullscreen viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-md p-4 sm:p-8 text-[#F2F2F2]"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="absolute top-0 inset-x-0 p-6 flex items-center justify-between text-sm z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs font-mono text-[#898989]">
          {currentIndex !== undefined && totalImages !== undefined && (
            <span>
              {currentIndex + 1} / {totalImages}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-[#898989] hover:text-[#EF3E42] transition-colors p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#898989]"
          aria-label="Close fullscreen image viewer"
        >
          <span className="text-xs font-mono uppercase tracking-widest">CLOSE [ESC]</span>
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className="relative max-w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt || 'Artwork full size view'}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[85vh] object-contain select-none"
          />
        ) : (
          <div className="w-[80vw] max-w-4xl h-[60vh] bg-[#131315] border border-[#303033] flex flex-col items-center justify-center p-8 text-center">
            <span className="text-xs font-mono text-[#898989] tracking-widest mb-4">
              Project Preview
            </span>
            <p className="text-[#F2F2F2] text-sm font-mono">
              Full resolution image viewer active.
            </p>
          </div>
        )}
      </div>

      {/* Previous / Next Controls (if multiple images) */}
      {totalImages && totalImages > 1 && onPrev && onNext && (
        <div
          className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onPrev}
            className="text-xs font-mono text-[#898989] hover:text-[#F2F2F2] transition-colors px-3 py-1.5 bg-[#131315] border border-[#303033] hover:border-[#EF3E42]"
            aria-label="Previous image"
          >
            ← PREV
          </button>
          <button
            type="button"
            onClick={onNext}
            className="text-xs font-mono text-[#898989] hover:text-[#F2F2F2] transition-colors px-3 py-1.5 bg-[#131315] border border-[#303033] hover:border-[#EF3E42]"
            aria-label="Next image"
          >
            NEXT →
          </button>
        </div>
      )}
    </div>
  );
};
