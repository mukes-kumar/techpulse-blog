import React from 'react';

const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <div className="relative">
                {/* Outer glowing ring */}
                <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-xl animate-pulse"></div>

                {/* Spinning gradient ring */}
                <div className="w-20 h-20 rounded-full border-4 border-gray-100 border-t-brand-600 animate-spin relative"></div>

                {/* Inner pulsing logo/dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-brand-600 rounded-lg transform rotate-45 animate-pulse shadow-lg shadow-brand-500/50"></div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Loading Blogs</h2>
                <div className="flex gap-1 justify-center mt-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-brand-600 rounded-full animate-bounce"></div>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default PageLoader;
