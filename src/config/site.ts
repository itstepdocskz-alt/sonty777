/**
 * Sonty — Global Configuration
 */

export interface EducationMilestone {
  period: string;
  focus: string;
  description: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  level: string;
  iconName: string;
  description: string;
}

export interface SiteConfig {
  brandName: string;
  profession: string;
  tagline: string;
  location: string;
  heroExploreText: string;
  aboutHeading: string;
  aboutText: string;
  designPhilosophy: string;
  sectionTitles: {
    work: string;
    tools: string;
    about: string;
    education: string;
  };
  tools: ToolItem[];
  education: {
    kicker: string;
    heading: string;
    institution: string;
    subtitle: string;
    paragraphs: string[];
    milestones: EducationMilestone[];
    metadata: Array<{
      label: string;
      value: string;
    }>;
  };
  emptyStateText: string;
  showPlaceholdersInPreview: boolean;
}

export const siteConfig: SiteConfig = {
  brandName: 'SONTY',
  profession: 'Graphic Designer.',
  tagline: 'Visual identities, typography systems, and editorial design.',
  location: 'Kazakhstan',
  heroExploreText: 'Explore Selected Work ↓',
  aboutHeading: 'About',
  aboutText:
    "I'm a graphic designer working across visual identity, typographic systems, and digital graphics. My practice is grounded in 5 years of continuous design education at IT STEP Academy, balancing Swiss layout structure with clear visual communication.",
  designPhilosophy:
    "Focused on building enduring visual structures where every typographic choice, grid proportion, and color relationship serves clarity.",
  sectionTitles: {
    work: 'Selected Work',
    tools: 'Creative Software',
    about: 'About',
    education: 'Education',
  },
  tools: [
    {
      name: 'Adobe Photoshop',
      category: 'Raster & Compositing',
      level: 'Advanced',
      iconName: 'Image',
      description: 'Key visual creation, digital photo treatment, textural layering, and print composition.',
    },
    {
      name: 'Adobe Illustrator',
      category: 'Vector & Identity',
      level: 'Advanced',
      iconName: 'PenTool',
      description: 'Precision vector geometry, logomark creation, iconography, and typographic layout.',
    },
    {
      name: 'Adobe InDesign',
      category: 'Editorial & Print',
      level: 'Proficient',
      iconName: 'BookOpen',
      description: 'Multi-page editorial publications, typographic grids, prepress, and master page templates.',
    },
    {
      name: 'Motion & Web Tech',
      category: 'Interactive Media',
      level: 'Core Knowledge',
      iconName: 'Sparkles',
      description: 'Keyframe animation concepts, responsive layout logic, and digital aesthetics.',
    },
  ],
  education: {
    kicker: 'Education',
    heading: '5 Years of Creative Education.',
    institution: 'IT STEP Academy',
    subtitle: 'International IT & Design Education',
    paragraphs: [
      "For the past five years, I've been studying at IT STEP Academy, an international educational network established in 1999 with branches across more than 20 countries.",
      "The academy's curriculum has immersed me in graphic design, visual identity, and digital software mastery, providing a rigorous foundation and hands-on creative discipline.",
    ],
    milestones: [
      {
        period: 'Year 01',
        focus: 'Visual Foundations',
        description: 'Color theory, compositional balance, and raster imaging.',
        skills: ['Color Theory', 'Photoshop'],
      },
      {
        period: 'Year 02',
        focus: 'Vector & Identity',
        description: 'Logomarks, corporate identity essentials, and vector illustration.',
        skills: ['Illustrator', 'Logotypes'],
      },
      {
        period: 'Year 03',
        focus: 'Editorial & Grids',
        description: 'Multi-column layouts, typography, and print production.',
        skills: ['InDesign', 'Typography'],
      },
      {
        period: 'Year 04',
        focus: 'Digital & Web Layouts',
        description: 'Grid systems, responsive web interfaces, and digital design.',
        skills: ['Web Systems', 'Digital Layout'],
      },
      {
        period: 'Year 05',
        focus: 'Creative Direction',
        description: 'Cross-media visual systems, motion graphics, and portfolio curation.',
        skills: ['Art Direction', 'Motion'],
      },
    ],
    metadata: [
      { label: 'Institution', value: 'IT STEP Academy' },
      { label: 'Location', value: 'Kazakhstan' },
      { label: 'Duration', value: '5 Years Continuous' },
      { label: 'Status', value: 'Currently Studying' },
    ],
  },
  emptyStateText: 'Selected work is being prepared.',
  showPlaceholdersInPreview: true,
};
