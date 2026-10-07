import React, { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { FileEdit, CheckCircle2, AlertCircle, History, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Corrections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <SEO 
        title="Corrections & Updates Policy | Janmat Bharat"
        description="Our policy for correcting and updating historical and election-related information on Janmat Bharat. Report errors for review."
        canonicalPath="/corrections"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-deepNavy-900 text-white rounded-xl p-10 md:p-14 mb-10 shadow-institutional border border-slate-100 border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full hidden -mr-20 -mt-20 pointer-events-none"></div>
          <FileEdit size={48} className="mx-auto mb-6 text-amber-400" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Corrections & Updates</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Our commitment to factual accuracy in political history and election data.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={24} /> Our Commitment
            </h2>
            <p className="text-amber-800 font-medium leading-relaxed">
              Because Janmat Bharat publishes political history, prime ministerial terms, and election awareness information, we hold ourselves to a high standard of factual accuracy. If an error is identified, we are committed to correcting it transparently and promptly.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold text-deepNavy-900 mb-6">How to Report an Error</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              If you identify a factual error regarding historical data (e.g., Prime Minister terms, dates, or constituency details), please let us know.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
              <h3 className="font-bold text-deepNavy-900 mb-3">When reporting, please include:</h3>
              <ul className="space-y-3 text-slate-600 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  The exact URL (page) where the error appears.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  The specific text that is incorrect.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  A credible, verifiable source (such as official government archives or recognized historical records) backing your correction.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                <Send size={18} /> Submit via Support Center
              </Link>
              <a href="mailto:official@aviraajdigitech.com?subject=Fact Correction Report" className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-colors">
                Email Us Directly
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold text-deepNavy-900 mb-4 flex items-center gap-3">
              <History size={24} className="text-blue-500" /> Verification & Update Log
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              All reported corrections are reviewed by our editorial team against official sources. Once verified, the page will be updated. Significant factual corrections to historical data will be logged below for transparency.
            </p>

            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100 border-dashed">
              <p className="text-slate-500 font-medium italic">
                No major historical corrections have been logged at this time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
