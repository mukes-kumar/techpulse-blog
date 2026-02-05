
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-700 transition-colors">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">TechPulse</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Articles</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Tutorials</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">News</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-semibold text-brand-600 bg-brand-50 rounded-full hover:bg-brand-100 transition-all border border-brand-100">
            Newsletter
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
