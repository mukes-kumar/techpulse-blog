import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      // Small delay to allow the menu close animation to start
      setIsMenuOpen(false);
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const menuItems = [
    { label: 'Articles', id: 'articles' }, // Fixed typo "artical"
    { label: 'Tutorials', id: 'articles' },
    { label: 'News', id: 'articles' },
    { label: 'About', id: 'articles' },
    { label: 'Contact', id: 'articles' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group relative z-[110]">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center group-hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 group-hover:scale-105">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-brand-600 transition-colors">TechPulse</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-base font-semibold text-gray-600 hover:text-brand-600 transition-all hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4 relative z-[110]">
          <button className="hidden lg:block px-6 py-2.5 text-sm font-bold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-md shadow-brand-500/10 active:scale-95">
            Get Newsletter
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-gray-900 hover:bg-gray-100 rounded-2xl transition-all active:scale-90 border border-gray-100 shadow-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[120] bg-gray-900/60 backdrop-blur-md transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 z-[130] w-[85%] max-w-sm bg-white h-[100dvh] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Mobile Header Inside Sidebar */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">TechPulse</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <nav className="flex-1 overflow-y-auto overscroll-contain py-6 px-6 custom-scrollbar">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 pl-4">Main Menu</p>
          <div className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="group flex items-center justify-between px-4 py-4 text-lg font-bold text-gray-900 hover:bg-brand-50 hover:text-brand-600 rounded-2xl transition-all active:scale-95"
              >
                <span>{item.label}</span>
                <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom Action Area */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/50 flex-shrink-0">
          <button className="w-full py-4 text-center font-bold text-white bg-brand-600 rounded-2xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 active:scale-95">
            Subscribe Newsletter
          </button>
          <p className="mt-4 text-center text-xs text-gray-500 font-medium">
            Join 10k+ engineers staying ahead
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;