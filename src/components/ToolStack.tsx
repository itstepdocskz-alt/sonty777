import React from 'react';
import { motion } from 'motion/react';
import { Image, PenTool, BookOpen, Sparkles } from 'lucide-react';
import { siteConfig, ToolItem } from '../config/site';

export const ToolStack: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Image':
        return <Image className="w-4 h-4 text-[#EF3E42]" />;
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-[#EF3E42]" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-[#EF3E42]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#EF3E42]" />;
    }
  };

  return (
    <section
      id="tools"
      className="py-12 md:py-16 border-b border-[#303033] scroll-mt-14"
      aria-labelledby="tools-heading"
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
            id="tools-heading"
            className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F2F2F2]"
          >
            {siteConfig.sectionTitles.tools}
          </h2>
          <span className="text-xs font-mono text-[#898989]">
            04 TOOLS
          </span>
        </motion.div>

        {/* 4-Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteConfig.tools.map((tool: ToolItem, index: number) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#131315] border border-[#303033] p-4 hover:border-[#EF3E42] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#303033]">
                  <div className="flex items-center gap-2">
                    {renderIcon(tool.iconName)}
                    <span className="text-[11px] font-mono font-semibold text-[#F2F2F2]">
                      {tool.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-medium text-[#F2F2F2] mb-1.5">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#898989] leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
