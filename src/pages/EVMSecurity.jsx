import React, { useState, useEffect } from 'react';
import { evmData } from '../data/evmData';
import { Network, Bluetooth, Monitor, Cpu, UserX, Printer, Scale, Search, Shield, FileCheck, ShieldCheck, FileText, CheckCircle2, XCircle } from 'lucide-react';

export const EVMSecurity = () => {
  const [lang, setLang] = useState('hi');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = evmData[lang];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Network': return <Network className="text-blue-500 w-6 h-6" />;
      case 'Bluetooth': return <Bluetooth className="text-indigo-500 w-6 h-6" />;
      case 'Monitor': return <Monitor className="text-purple-500 w-6 h-6" />;
      case 'Cpu': return <Cpu className="text-rose-500 w-6 h-6" />;
      case 'UserX': return <UserX className="text-amber-500 w-6 h-6" />;
      case 'Printer': return <Printer className="text-emerald-500 w-6 h-6" />;
      case 'Scale': return <Scale className="text-cyan-500 w-6 h-6" />;
      case 'Search': return <Search className="text-orange-500 w-6 h-6" />;
      case 'Shield': return <Shield className="text-green-500 w-6 h-6" />;
      case 'FileCheck': return <FileCheck className="text-teal-500 w-6 h-6" />;
      default: return <ShieldCheck className="text-blue-500 w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      
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
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* Hero Header */}
          <div className="px-8 pt-12 pb-10 border-b border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-500 via-white to-green-500"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6 border border-red-100 shadow-sm">
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

            {/* Disclaimer Section */}
            {content.importantDisclaimer && (
              <section className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-orange-600 w-8 h-8 shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-orange-900">
                    {content.importantDisclaimer.title}
                  </h3>
                </div>
                <p className="text-orange-800 font-medium text-[16px] md:text-lg leading-relaxed">
                  {content.importantDisclaimer.text}
                </p>
              </section>
            )}

            
            {/* Introduction Section */}
            <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{content.introTitle}</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed font-medium">
                {content.introText}
              </div>
            </section>

            {/* Visual Break (Image) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/assets/images/evm.jpg" alt="Electronic Voting Machine" className="w-full h-64 md:h-80 object-cover object-center" width="800" height="400" loading="lazy" decoding="async" />
              <div className="bg-slate-100 py-2 px-4 text-xs text-center text-slate-500 font-medium">Representative Image: Electronic Voting Machine</div>
            </div>

            {/* 10 Analysis Points */}
            <section className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {getIcon(section.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{section.title}</h3>
                    <div className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Supreme Court Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-12 mb-12">
              <img src="/assets/images/sc.jpg" alt="Supreme Court of India" className="w-full h-64 md:h-80 object-cover object-center" width="800" height="400" loading="lazy" decoding="async" />
              <div className="bg-slate-100 py-2 px-4 text-xs text-center text-slate-500 font-medium">Supreme Court of India</div>
            </div>

            {/* Paper Ballot vs EVM Comparison */}
            <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-50 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="text-blue-600" />
                  <h2 className="text-2xl font-black text-slate-900">{content.paperBallotComparison.title}</h2>
                </div>
                <p className="text-slate-600 font-medium">{content.paperBallotComparison.intro}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/50">
                      <th className="py-4 px-6 font-bold text-slate-800 border-b border-slate-200">{content.paperBallotComparison.headers[0]}</th>
                      <th className="py-4 px-6 font-bold text-blue-700 border-b border-slate-200 bg-blue-50/50">{content.paperBallotComparison.headers[1]}</th>
                      <th className="py-4 px-6 font-bold text-slate-600 border-b border-slate-200">{content.paperBallotComparison.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.paperBallotComparison.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 border-b border-slate-100 font-semibold text-slate-700">{row[0]}</td>
                        <td className="py-4 px-6 border-b border-slate-100 bg-blue-50/30 text-slate-800 font-medium">
                           <div className="flex items-start gap-2">
                             <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                             {row[1]}
                           </div>
                        </td>
                        <td className="py-4 px-6 border-b border-slate-100 text-slate-600">
                           <div className="flex items-start gap-2">
                             {row[2].includes('Historical') || row[2].includes('High') || row[2].includes('Slow') || row[2].includes('धीमी') || row[2].includes('ज्यादा') || row[2].includes('risk') ? <XCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" /> : <div className="w-4 h-4 mt-0.5" />}
                             {row[2]}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white leading-tight">
                  {content.conclusion.title}
                </h3>
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
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
