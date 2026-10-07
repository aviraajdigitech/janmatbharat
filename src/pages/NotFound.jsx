import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { MapPinOff, Home, Download, Compass } from 'lucide-react';

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="404 - Page Not Found | Janmat Bharat"
        description="The page you are looking for does not exist on Janmat Bharat. Return to the home page or download our app."
      />

      <div className="max-w-3xl w-full text-center">
        {/* Animated Icon / Illustration Area */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-saffron-500/20 hidden rounded-full scale-150 animate-pulse"></div>
          <div className="bg-white p-6 rounded-xl shadow-institutional border border-slate-100 border border-slate-100 relative z-10">
            <MapPinOff size={80} className="text-saffron-500" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-6xl sm:text-7xl font-black text-deepNavy-900 tracking-tight mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
          The political page or data you're searching for seems to have moved or doesn't exist. Don't worry, there's still plenty to explore.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-deepNavy-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-institutional border border-slate-100"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link 
            to="/history" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow"
          >
            <Compass size={18} className="text-blue-500" />
            Explore Janmat Bharat
          </Link>

          <a 
            href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-institutional border border-slate-100"
          >
            <Download size={18} />
            Download App
          </a>
        </div>
        
      </div>
    </div>
  );
};
