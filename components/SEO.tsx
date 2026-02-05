import React from 'react';
import { BlogPost } from '../types';

interface SEOProps {
  post?: BlogPost | null;
}

const SEO: React.FC<SEOProps> = ({ post }) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TechPulse",
    "url": "https://techpulse-blog.vercel.app/",
    "description": "Explore expert insights on modern software engineering, scalable architecture, and the latest tech trends.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techpulse-blog.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.photo_url || `https://picsum.photos/seed/${post.id}/1200/800`,
    "datePublished": post.created_at,
    "dateModified": post.updated_at,
    "author": {
      "@type": "Person",
      "name": `Author #${post.user_id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "TechPulse",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techpulse-blog.vercel.app/logo.png"
      }
    }
  } : null;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </>
  );
};

export default SEO;