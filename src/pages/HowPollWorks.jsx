import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { pollWorksData } from '../data/pollWorksData';
import { ShieldCheck, Users, Calculator, ShieldAlert, RefreshCw, Clock, BarChart3, MapPin, Lock, EyeOff, UserMinus, HelpCircle } from 'lucide-react';

export const HowPollWorks = () => {
  const [lang, setLang] = useState('hi');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = pollWorksData[lang];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users className="text-blue-500 w-6 h-6" />;
      case 'Calculator': return <Calculator className="text-emerald-500 w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="text-rose-500 w-6 h-6" />;
      case 'RefreshCw': return <RefreshCw className="text-indigo-500 w-6 h-6" />;
      case 'Clock': return <Clock className="text-amber-500 w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="text-purple-500 w-6 h-6" />;
      case 'MapPin': return <MapPin className="text-cyan-500 w-6 h-6" />;
      case 'Lock': return <Lock className="text-red-600 w-6 h-6" />;
      case 'EyeOff': return <EyeOff className="text-slate-500 w-6 h-6" />;
      case 'UserMinus': return <UserMinus className="text-orange-500 w-6 h-6" />;
      default: return <HelpCircle className="text-blue-500 w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>How Our Poll Works | Janmat Bharat</title>
        <meta name="description" content="Understand the complete methodology, transparency, and security mechanisms behind Janmat Bharat's public opinion polls." />
      </Helmet>

      {/* Top Language Toggle */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-end">
        <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
          <button 
            onClick={() => setLang('hi')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'hi' ? 'bg-saffron-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            हिंदी (Hindi)
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* Hero Header */}
          <div className="px-8 pt-12 pb-10 border-b border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
               <ShieldCheck size={32} strokeWidth={2} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {content.title}
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction Section */}
            <section className="bg-blue-50/50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed font-medium text-center">
                {content.introText}
              </div>
            </section>

            {/* FAQs / Methodology Sections */}
            <section className="space-y-6">
              {content.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                      {getIcon(faq.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Conclusion */}
            <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl -ml-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 text-white">
                  {content.conclusion.title}
                </h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                  {content.conclusion.text}
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};
