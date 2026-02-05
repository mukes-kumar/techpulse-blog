import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import BlogCard from './components/BlogCard';
import ArticleModal from './components/ArticleModal';
import Footer from './components/Footer';
import SEO from './components/SEO';
import PageLoader from './components/PageLoader';
import NotFound from './components/NotFound';
import { BlogPost } from './types';
import { fetchBlogs } from './services/blogService';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();
        // Brief requires exactly 10 posts
        setBlogs(data.blogs.slice(0, 10));
        setError(null);
      } catch (err) {
        setError('Failed to load articles. Please check your connection and try again.');
      } finally {
        // Stay in loading state for at least 1.5 seconds for visual impact
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };
    loadData();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(blogs.map((b) => b.category));
    return Array.from(unique).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content_text.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory ? blog.category === activeCategory : true;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, activeCategory]);

  const handleHeroTagClick = (tag: string) => {
    setSearchQuery(tag);
    // Smooth scroll to filters/articles section
    const filterSection = document.getElementById('filters-section');
    filterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO post={selectedPost} />

      {loading && <PageLoader />}

      <Header />

      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onTagClick={handleHeroTagClick} />

              <div id="filters-section">
                <Filters
                  categories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  resultsCount={filteredBlogs.length}
                />
              </div>

              <section className="container mx-auto px-4 py-12" aria-labelledby="articles-heading">
                <h2 id="articles-heading" className="sr-only">Latest Tech Articles</h2>

                {error ? (
                  <div className="flex flex-col items-center justify-center py-24 text-center" role="alert">
                    <div className="bg-red-50 p-6 rounded-2xl mb-6">
                      <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">{error}</p>
                      <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                      >
                        Retry Loading
                      </button>
                    </div>
                  </div>
                ) : filteredBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((post) => (
                      <BlogCard
                        key={post.id}
                        post={post}
                        onClick={setSelectedPost}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="bg-gray-100 p-8 rounded-full mb-6">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      We couldn't find any articles matching your search for "{searchQuery}". Try adjusting your filters.
                    </p>
                    <button
                      onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
                      className="mt-6 px-6 py-2 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </section>
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};

export default App;