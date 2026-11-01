# Sonty — Graphic Designer Portfolio

A minimalist, editorial-inspired digital portfolio built with React, TypeScript, and Tailwind CSS.

---

## 1. Project Overview & Identity

- **Designer**: Sonty
- **Profession**: Independent Graphic Designer
- **Aesthetic**: Swiss International Typographic Style & Editorial Design Archive
- **Palette**: Warm archival paper (`#EAE8E2`), primary text (`#151515`), secondary text (`#777570`), borders (`#C9C7C1`), strategic dark sections (`#151515`), inverse text (`#F0EEE8`)
- **Central Site Config**: `src/config/site.ts`
- **Projects Data Repository**: `src/data/projects.ts`

---

## 2. Managing Portfolio Projects

All portfolio projects are managed through `src/data/projects.ts`. No database, external CMS, or authentication is required.

### How to Add a New Project

1. **Upload or place artwork images** in the public folder:
   ```
   public/projects/<project-slug>/cover.webp
   public/projects/<project-slug>/image-01.webp
   public/projects/<project-slug>/image-02.webp
   ```
   *(Supports `.webp`, `.png`, `.jpg`, `.svg`)*

2. **Add an entry to `src/data/projects.ts`**:
   ```typescript
   {
     id: 'editorial-brand-identity',
     slug: 'editorial-brand-identity',
     title: 'Aura Studio Identity',
     coverImage: '/projects/editorial-brand-identity/cover.webp',
     images: [
       '/projects/editorial-brand-identity/cover.webp',
       '/projects/editorial-brand-identity/image-01.webp',
       '/projects/editorial-brand-identity/image-02.webp',
     ],
     published: true,
     order: 1,
     alt: 'Aura Studio visual identity and typography system',
     aspectRatio: '4/3', // '16/9' | '4/3' | '3/4' | '1/1'
   }
   ```

3. The project will **automatically appear** in the `Selected Work` gallery and generate its dedicated project page at `/work/editorial-brand-identity`.

---

### How to Reorder Projects

Change the `order` property in `src/data/projects.ts`:
- Lower numbers appear first in the gallery (e.g., `order: 1` is displayed before `order: 2`).

---

### How to Publish / Unpublish a Project

- Set `published: true` to display in the public gallery and enable navigation.
- Set `published: false` to keep the project as a hidden draft without removing its data.

---

### How to Remove a Project

Delete or comment out the project object in `src/data/projects.ts`.

---

### Toggling Placeholder Slots vs. Minimal Empty State

In `src/config/site.ts`:
- `showPlaceholdersInPreview: true`: Displays two neutral, elegant archival placeholder containers (`PROJECT 01`–`PROJECT 02`) during layout testing in a 2-column responsive grid.
- `showPlaceholdersInPreview: false`: When zero real projects exist, displays the minimal message:
  *"Selected work is being prepared."*
- As soon as at least one real project has `published: true`, the gallery **automatically switches** to displaying only real projects.

---

## 3. Global Text & Identity Customization

Edit `src/config/site.ts` to replace the brand name, headline, services list, about text, or education overview globally.
