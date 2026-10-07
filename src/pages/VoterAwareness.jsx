import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { voterData } from '../data/voterData';
import { BookOpen, UserCheck, UserPlus, Globe, Link as LinkIcon, Trash2, FileEdit, Files, Search, ShieldAlert, ArrowRight, HelpCircle } from 'lucide-react';

export const VoterAwareness = () => {
  const [lang, setLang] = useState('hi');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = voterData[lang];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="text-blue-500 w-6 h-6" />;
      case 'UserPlus': return <UserPlus className="text-green-500 w-6 h-6" />;
      case 'Globe': return <Globe className="text-deepNavy-500 w-6 h-6" />;
      case 'Link': return <LinkIcon className="text-cyan-500 w-6 h-6" />;
      case 'Trash2': return <Trash2 className="text-rose-500 w-6 h-6" />;
      case 'FileEdit': return <FileEdit className="text-amber-500 w-6 h-6" />;
      case 'Files': return <Files className="text-slate-500 w-6 h-6" />;
      default: return <BookOpen className="text-blue-500 w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <SEO 
        title="Voter Awareness & Education | Janmat Bharat"
        description="Essential information for Indian voters. Learn how to register, verify your name in the voter list, and understand your democratic rights."
        canonicalPath="/voter-awareness"
      />
      
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
        
        {/* Paper Container */}
        <article className="bg-white rounded-xl shadow-institutional border border-slate-100 shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* Hero Header */}
          <div className="px-8 pt-12 pb-10 border-b border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-deepNavy-900"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
               <BookOpen size={32} strokeWidth={2} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-deepNavy-900 tracking-tight leading-tight mb-4">
              {content.title}
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction Section */}
            <section className="bg-orange-50/50 rounded-xl p-6 md:p-8 border border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                 <ShieldAlert className="text-orange-500 w-6 h-6" />
                 <h2 className="text-2xl font-extrabold text-deepNavy-900">Attention</h2>
              </div>
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed font-medium">
                {content.introText}
              </div>
            </section>

            {/* Sections */}
            <section className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {getIcon(section.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deepNavy-900 mb-3 leading-snug">{section.title}</h3>
                    <div className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Quick Guide Grid */}
            <section className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="text-deepNavy-600 w-7 h-7" />
                <h2 className="text-2xl font-black text-deepNavy-900">{content.quickGuide.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.quickGuide.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
                    <span className="text-slate-600 font-medium text-sm">{item.q}</span>
                    <div className="flex items-center gap-2 text-blue-600 font-bold">
                      <ArrowRight size={16} />
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Forms Table */}
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-6 border-b border-blue-100">
                <h2 className="text-2xl font-black text-deepNavy-900">{content.formsTable.title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-4 px-6 font-bold text-slate-800 border-b border-slate-200">{content.formsTable.headers[0]}</th>
                      <th className="py-4 px-6 font-bold text-slate-700 border-b border-slate-200">{content.formsTable.headers[1]}</th>
                      <th className="py-4 px-6 font-bold text-slate-600 border-b border-slate-200">{content.formsTable.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.formsTable.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 border-b border-slate-100 font-bold text-blue-700 whitespace-nowrap">{row[0]}</td>
                        <td className="py-4 px-6 border-b border-slate-100 font-semibold text-slate-700">{row[1]}</td>
                        <td className="py-4 px-6 border-b border-slate-100 text-slate-600 font-medium">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to check name */}
            <section className="flex flex-col md:flex-row gap-6 bg-deepNavy-900 text-white rounded-xl p-8 shadow-institutional-md border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full hidden -mr-20 -mt-20"></div>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Search size={28} className="text-blue-300" />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 text-white leading-tight">
                  {content.howToCheck.title}
                </h3>
                <div className="text-slate-300 text-lg font-medium leading-relaxed whitespace-pre-wrap">
                  {content.howToCheck.content}
                </div>
              </div>
            </section>

            {/* Conclusion / Summary */}
            <section className="text-center pt-8 border-t border-slate-200">
               <h3 className="text-2xl font-bold text-deepNavy-900 mb-4">{content.conclusion.title}</h3>
               <p className="text-lg text-slate-600 font-medium whitespace-pre-wrap max-w-2xl mx-auto">
                 {content.conclusion.text}
               </p>
               <a 
                 href="https://voters.eci.gov.in" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-institutional border border-slate-100 shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all"
               >
                 Visit ECI Voters' Portal <ArrowRight size={18} />
               </a>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};
