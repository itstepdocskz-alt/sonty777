import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getVisibleProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from './projects';
import { Project } from '../types/project';

test('getVisibleProjects returns placeholders when no real projects exist and showPlaceholders is true', () => {
  const visible = getVisibleProjects(true);
  assert.equal(visible.length, 2);
  assert.equal(visible[0].slug, 'project-01');
  assert.equal(visible[0].isPlaceholder, true);
});

test('getVisibleProjects returns empty array when showPlaceholders is false and zero real projects exist', () => {
  const visible = getVisibleProjects(false);
  assert.equal(visible.length, 0);
});

test('getVisibleProjects prioritizes real published projects and ignores placeholders once added', () => {
  const mockProjects: Project[] = [
    {
      id: 'p-placeholder',
      slug: 'placeholder-slot',
      title: 'PROJECT 01',
      coverImage: '',
      images: [],
      published: true,
      order: 1,
      isPlaceholder: true,
    },
    {
      id: 'p-real-2',
      slug: 'brand-identity-xyz',
      title: 'Brand Identity XYZ',
      coverImage: '/projects/brand-identity-xyz/cover.webp',
      images: ['/projects/brand-identity-xyz/image-01.webp'],
      published: true,
      order: 2,
    },
    {
      id: 'p-real-1',
      slug: 'minimalist-posters',
      title: 'Minimalist Posters',
      coverImage: '/projects/minimalist-posters/cover.webp',
      images: ['/projects/minimalist-posters/cover.webp'],
      published: true,
      order: 1,
    },
    {
      id: 'p-draft',
      slug: 'unreleased-project',
      title: 'Draft Project',
      coverImage: '',
      images: [],
      published: false,
      order: 3,
    },
  ];

  const visible = getVisibleProjects(true, mockProjects);
  assert.equal(visible.length, 2);
  assert.equal(visible[0].slug, 'minimalist-posters');
  assert.equal(visible[1].slug, 'brand-identity-xyz');
  // Unpublished project is excluded
  assert.equal(visible.some((p) => p.slug === 'unreleased-project'), false);
  // Placeholder is superseded
  assert.equal(visible.some((p) => p.isPlaceholder), false);
});

test('getProjectBySlug finds project correctly', () => {
  const p = getProjectBySlug('project-02', true);
  assert.ok(p);
  assert.equal(p.slug, 'project-02');


  const notFound = getProjectBySlug('non-existent-project', true);
  assert.equal(notFound, undefined);
});

test('getAdjacentProjects calculates next and prev with seamless circular navigation', () => {
  const mockList: Project[] = [
    {
      id: '1',
      slug: 'work-a',
      title: 'Work A',
      coverImage: '',
      images: [],
      published: true,
      order: 1,
    },
    {
      id: '2',
      slug: 'work-b',
      title: 'Work B',
      coverImage: '',
      images: [],
      published: true,
      order: 2,
    },
    {
      id: '3',
      slug: 'work-c',
      title: 'Work C',
      coverImage: '',
      images: [],
      published: true,
      order: 3,
    },
  ];

  // Middle item
  const middle = getAdjacentProjects('work-b', true, mockList);
  assert.equal(middle.prev?.slug, 'work-a');
  assert.equal(middle.next?.slug, 'work-c');

  // First item wraps to last
  const first = getAdjacentProjects('work-a', true, mockList);
  assert.equal(first.prev?.slug, 'work-c');
  assert.equal(first.next?.slug, 'work-b');

  // Last item wraps to first
  const last = getAdjacentProjects('work-c', true, mockList);
  assert.equal(last.prev?.slug, 'work-b');
  assert.equal(last.next?.slug, 'work-a');
});
