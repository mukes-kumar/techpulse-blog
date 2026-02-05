
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-50 rounded-full mb-6">
            Technology & Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Exploring the <span className="text-brand-600">Frontiers</span> of Modern Web Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Stay ahead of the curve with deep dives into React, TypeScript, and the evolving ecosystem of high-performance web applications.
          </p>
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-brand-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default Hero;
