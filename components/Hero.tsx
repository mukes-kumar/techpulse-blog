import React from 'react';

interface HeroProps {
  onTagClick?: (tag: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onTagClick }) => {
  const trendingTags = ['Next.js', 'TypeScript', 'Tailwind', 'AI', 'Architecture'];

  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-50 rounded-full mb-8 border border-brand-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-brand-700 uppercase">
              Trending Topics in 2024
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Your Gateway to <br />
            Modern <span className="text-gradient">Software Engineering</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-light">
            Discover expert insights, deep dives into scalable architecture, and the latest trends in the software engineering landscape.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Featured Topics:</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick?.(tag)}
                className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-semibold rounded-xl hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 border border-transparent transition-all shadow-sm"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-brand-50 rounded-full opacity-40 blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 w-96 h-96 border border-brand-100 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-40 transform -translate-y-1/2 w-64 h-64 border border-brand-200 rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-[80px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
};

export default Hero;