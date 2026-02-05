import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
            <div className="relative mb-12">
                {/* Large 404 text with background decoration */}
                <h1 className="text-[12rem] font-black text-gray-100 leading-none select-none">
                    404
                </h1>

                {/* Floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 bg-brand-600 rounded-3xl transform -rotate-12 animate-float shadow-2xl flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lost in the Cloud?</h2>
            <p className="text-xl text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
                The page you're looking for has vanished into thin air. Let's get you back on track to the latest tech insights.
            </p>

            <button
                onClick={() => window.location.href = '/'}
                className="group relative px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-500/25 flex items-center gap-2"
            >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to TechPulse
            </button>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default NotFound;
