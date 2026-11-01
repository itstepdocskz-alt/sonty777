import { Project } from '../types/project';

/**
 * Sonty — Project Data Repository
 *
 * TO ADD A NEW PROJECT:
 * 1. Add image files to /public/projects/<project-slug>/ (e.g., cover.webp, image-01.webp)
 * 2. Add an object to the `projects` array below with `published: true`
 * 3. The new project will automatically appear in the gallery, sorted by `order`
 *
 * TO UNPUBLISH A PROJECT:
 * Set `published: false`
 */

export const projects: Project[] = [
  {
    id: 'placeholder-01',
    slug: 'project-01',
    title: 'Project 01',
    category: 'Graphic Design',
    coverImage: '',
    images: [],
    published: true,
    order: 1,
    alt: 'Project 01 photo',
    isPlaceholder: true,
    aspectRatio: '4/3',
  },
  {
    id: 'placeholder-02',
    slug: 'project-02',
    title: 'Project 02',
    category: 'Visual Identity',
    coverImage: '',
    images: [],
    published: true,
    order: 2,
    alt: 'Project 02 photo',
    isPlaceholder: true,
    aspectRatio: '4/3',
  },
];

/**
 * Returns projects that should be displayed in the public gallery.
 */
export function getVisibleProjects(
  showPlaceholders = true,
  projectList: Project[] = projects
): Project[] {
  const realPublished = projectList.filter(
    (p) => p.published && !p.isPlaceholder
  );

  if (realPublished.length > 0) {
    return [...realPublished].sort((a, b) => a.order - b.order);
  }

  if (showPlaceholders) {
    return projectList
      .filter((p) => p.published && p.isPlaceholder)
      .sort((a, b) => a.order - b.order);
  }

  return [];
}

/**
 * Look up a project by slug.
 */
export function getProjectBySlug(
  slug: string,
  showPlaceholders = true,
  projectList: Project[] = projects
): Project | undefined {
  const visible = getVisibleProjects(showPlaceholders, projectList);
  return visible.find((p) => p.slug === slug);
}

/**
 * Get previous and next project for navigation on individual project pages.
 */
export function getAdjacentProjects(
  currentSlug: string,
  showPlaceholders = true,
  projectList: Project[] = projects
): { prev: Project | null; next: Project | null } {
  const visible = getVisibleProjects(showPlaceholders, projectList);
  const currentIndex = visible.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1 || visible.length <= 1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? visible[currentIndex - 1] : visible[visible.length - 1];
  const next = currentIndex < visible.length - 1 ? visible[currentIndex + 1] : visible[0];

  return { prev, next };
}
