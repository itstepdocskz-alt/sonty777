/**
 * Project data structures for Alisher portfolio
 */

export interface ProjectImage {
  url: string;
  alt?: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  tags?: string[];
  deliverables?: string[];
  coverImage: string;
  images: string[];
  imageDetails?: ProjectImage[];
  published: boolean;
  order: number;
  alt?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
  isPlaceholder?: boolean;
  concept?: string;
  palette?: string[];
  typography?: string;
  disciplines?: string[];
}
