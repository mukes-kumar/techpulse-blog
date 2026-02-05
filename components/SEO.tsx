
import React from 'react';

const SEO: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TechPulse",
    "url": "https://techpulse-blog.vercel.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techpulse-blog.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(websiteSchema)}
    </script>
  );
};

export default SEO;
