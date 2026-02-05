import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(post);
    }
  };

  return (
    <article 
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl focus-within:ring-2 focus-within:ring-brand-500 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer outline-none"
      onClick={() => onClick(post)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${post.title}`}
    >
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={post.photo_url || `https://picsum.photos/seed/${post.id}/600/400`}
          alt={`Featured image for the tech article: ${post.title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
          <time dateTime={post.created_at}>{formattedDate}</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-brand-600 text-sm font-bold flex items-center group/btn transition-all">
            Read Full Article
            <svg 
              className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;