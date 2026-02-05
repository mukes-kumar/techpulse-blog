# TechPulse Blog - Frontend Technical Assessment

TechPulse is a high-performance, SEO-optimized tech blog built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo
[https://techpulse-blog.vercel.app/](https://techpulse-blog.vercel.app/)

## 🔍 SEO Strategy Implementation

### 1. Meta Tags & Open Graph
- **Title Tags:** Optimized to < 60 characters for maximum CTR.
- **Descriptions:** Precisely under 160 characters to ensure full visibility in SERPs.
- **Rich Previews:** Full Open Graph and Twitter Card support for social sharing.

### 2. Semantic HTML & Structure
- **Heading Hierarchy:** Strictly one `<h1>` per page. `<h2>` used for the article grid and section headers. `<h3>` used for footer sections and modal sub-headings.
- **HTML5 Tags:** Systematic use of `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, and `<time>`.

### 3. Structured Data (JSON-LD)
- **WebSite Schema:** Site-wide schema on the homepage for sitelink search box eligibility.
- **Article Schema:** Dynamic injection of Article structured data when an article modal is opened, including `headline`, `author`, `publisher`, and `datePublished`.

### 4. Technical SEO
- **Robots.txt:** Configured to allow full indexing and point to the sitemap.
- **Sitemap.xml:** Provided for efficient search engine crawling.
- **Image Optimization:** Strict descriptive `alt` text for every image and `loading="lazy"` on all cards to boost performance scores.

## ♿ Accessibility (WCAG AA)
- **Keyboard Navigation:** 
  - `ESC` to close modals.
  - `TAB` and `ENTER/SPACE` support for all article cards.
  - Visible focus states for interactive elements.
- **Color Contrast:** High-contrast color palette (Brand Blue 600 vs White) ensures readability.
- **Screen Readers:** Semantic labels and `sr-only` headings provided for non-visual navigation.

## 📊 Lighthouse Target Scores
- Performance: 90+
- Accessibility: 85+ (Aiming for 100)
- Best Practices: 90+
- SEO: 100
