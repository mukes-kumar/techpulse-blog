
# TechPulse Blog - Frontend Technical Assessment

TechPulse is a high-performance, SEO-optimized tech blog built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in modern web development, accessibility, and search engine optimization.

## 🚀 Live Demo
[https://techpulse-blog.vercel.app/](https://techpulse-blog.vercel.app/)

## 🛠 Technologies Used
- **Framework:** React 18+ (SPA with SEO management)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Mobile-first approach)
- **Icons/Graphics:** SVG, Heroicons
- **Image Hosting:** Picsum Photos (placeholder fallback)
- **API:** Custom Blogs API

## 🔍 Search and Filter Implementation
The application uses a unified filtering logic implemented with React's `useMemo` hook for optimal performance.
- **Combined Logic:** Search and category filters work together. You can search within a specific category or across all categories.
- **Search Depth:** The search query is matched against the `title`, `description`, AND `content_text` of each blog post to ensure comprehensive results.
- **Dynamic Categories:** Categories are derived dynamically from the unique categories present in the fetched data.

## 🛡 SEO Strategy

### 1. Meta Tags & Open Graph
- Implemented comprehensive meta tags in `index.html` including `<title>`, `<meta description>`, and Open Graph (`og:`) tags.
- Twitter Cards are configured to ensure rich media previews when links are shared on social platforms.
- Strategic use of a 160-character description for optimal search engine snippet display.

### 2. Semantic HTML
- Used HTML5 semantic tags strictly:
  - `<header>` for navigation.
  - `<main>` for the primary page content.
  - `<article>` for each blog post in the grid.
  - `<section>` for logical grouping (Hero, Filters, Blog List).
  - `<footer>` for site-wide information.
  - `<time>` tags for formatted dates to assist search crawlers.
  - **Heading Hierarchy:** One `<h1>` per page, followed by sequential `<h2>` and `<h3>` tags.

### 3. Structured Data (JSON-LD)
- Integrated `WebSite` schema to provide search engines with site-wide context.
- Prepared for `Article` schema integration within the modal/post view to improve Rich Results visibility.

### 4. Image Optimization
- All images use `loading="lazy"` to improve initial page load performance.
- Descriptive `alt` text is provided for every image based on the post title.
- Used responsive image containers with `object-cover` to ensure visual consistency across devices.

### 5. Performance Optimizations
- **Mobile-First Design:** Optimized layouts for mobile before scaling up to tablet and desktop.
- **Memoization:** Utilized `useMemo` to prevent expensive re-computations of filter logic on every render.
- **Loading States:** Implemented skeleton-like pulse animations to improve perceived performance during data fetching.

## ♿ Accessibility & UX
- **Keyboard Navigation:** Full support for `ESC` key to close modals, and `TAB` navigation for interactive elements.
- **Contrast:** Colors meet WCAG AA standards with a focus on legibility (Dark text on light background).
- **Responsive Grid:** 1 column (Mobile), 2 columns (Tablet), 3 columns (Desktop).
- **State Management:** Handles "No Results" and "API Error" states gracefully with actionable buttons.

## 📊 Lighthouse Scores (Targets)
- **Performance:** 90+
- **SEO:** 95+
- **Accessibility:** 85+
- **Best Practices:** 90+
