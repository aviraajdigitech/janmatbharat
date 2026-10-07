import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Info, Shield, CheckCircle2, XCircle, Building2, Smartphone, Globe } from 'lucide-react';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <SEO 
        title="About Janmat Bharat | Independence & Mission"
        description="Learn about Janmat Bharat, an independent digital opinion polling platform created by Aviraaj Digitech. Discover our mission, structure, and commitment to transparency."
        canonicalPath="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-14 mb-10 shadow-xl border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <Info size={48} className="mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">About Janmat Bharat</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            An independent, technology-driven platform for digital opinion polling and political awareness in India.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          {/* Independence Statement (Crucial) */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Shield size={24} /> Independence Statement
            </h2>
            <p className="text-blue-800 font-medium leading-relaxed">
              Janmat Bharat is a strictly independent, private technology platform. <strong>We are NOT a government entity, NOT affiliated with the Election Commission of India (ECI), and NOT associated with any political party.</strong> Our polling data represents unscientific digital public opinion and does not constitute official election results or exit polls.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Janmat Bharat?</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Janmat Bharat serves as a digital town square where Indian citizens can express their political preferences through mock polls, view real-time public mood trends, and access educational content regarding India's political history and election infrastructure.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">Why was it created?</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              The platform was created to bridge the gap between traditional election cycles by providing a continuous, transparent, and technology-driven space for measuring public sentiment. It aims to foster political awareness while testing modern, secure digital polling architectures.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Building2 size={24} className="text-saffron-500" /> Who Operates It?
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-4">
              Janmat Bharat is wholly owned, developed, and operated by <strong>Aviraaj Digitech</strong>, an independent technology company based in India. Aviraaj Digitech oversees all technical infrastructure, data privacy protocols, and app maintenance.
            </p>
          </div>

          {/* Do's and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" /> What We Do
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                  Conduct independent digital opinion polls.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                  Provide historical data on past Prime Ministers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                  Offer educational awareness regarding voting technology.
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <XCircle size={20} className="text-red-500" /> What We Don't Do
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                  We do not facilitate official governmental voting.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                  We do not claim our polls guarantee election outcomes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                  We do not share your individual vote with third parties.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-800">
            <h2 className="text-2xl font-bold mb-6">App vs. Website</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Smartphone size={32} className="text-blue-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Mobile App</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    The exclusive platform where you can cast or update your vote. Device verification ensures "1 Phone = 1 Vote" integrity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe size={32} className="text-saffron-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Website</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    An educational hub to explore real-time poll results, read political history, and understand our methodology and policies.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
