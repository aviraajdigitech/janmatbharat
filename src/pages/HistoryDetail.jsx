import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { pmHistory } from '../data/historyData';
import { CheckCircle2, XCircle, Clock, Landmark, Users, Languages, ArrowLeft } from 'lucide-react';

export const HistoryDetail = () => {
  const { termId } = useParams();
  const [lang, setLang] = useState('hi');
  
  const termData = pmHistory.find(t => t.id === termId);
  
  if (!termData) {
    return <Navigate to="/history" replace />;
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>{termData.pm_name_en} - {termData.period_en} | Janmat Bharat</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation and Lang Toggle */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/history" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
            <ArrowLeft size={20} />
            {lang === 'en' ? 'Back to All Terms' : 'सभी कार्यकालों पर लौटें'}
          </Link>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Languages size={18} />
            {lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English'}
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Profile Sidebar */}
          <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Landmark size={120} />
            </div>
            <div className="relative z-10 w-full">
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-white/20 overflow-hidden mb-6 shadow-2xl bg-slate-800">
                <img src={termData.image} alt={termData.pm_name_en} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }} />
              </div>
              
              <div className="bg-blue-600/20 text-blue-300 font-bold px-4 py-1.5 rounded-full inline-block mb-4 text-sm border border-blue-500/30">
                {lang === 'en' ? termData.period_en : termData.period_hi}
              </div>
              
              <h1 className="text-3xl font-extrabold mb-2">{lang === 'en' ? termData.pm_name_en : termData.pm_name_hi}</h1>
              
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-2xl">{termData.symbol}</span>
                <p className="text-saffron-400 font-bold text-lg">{lang === 'en' ? termData.party_en : termData.party_hi}</p>
              </div>
              
              <div className="space-y-4 w-full text-left">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 text-blue-300 text-sm font-bold uppercase mb-1">
                    <Clock size={16} /> {lang === 'en' ? 'Term Duration' : 'कार्यकाल'}
                  </div>
                  <p className="font-semibold">{lang === 'en' ? termData.term_en : termData.term_hi}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 text-blue-300 text-sm font-bold uppercase mb-1">
                    <Users size={16} /> {lang === 'en' ? 'Government Type' : 'सरकार का स्वरूप'}
                  </div>
                  <p className="font-semibold">{lang === 'en' ? termData.coalition_en : termData.coalition_hi}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:w-2/3 p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-12">
              {/* Achievements */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm border border-green-200">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    {lang === 'en' ? 'Major Achievements' : 'सबसे शानदार काम'}
                  </h3>
                </div>
                <ul className="space-y-4 bg-green-50/50 p-6 rounded-3xl border border-green-100">
                  {(lang === 'en' ? termData.achievements_en : termData.achievements_hi).map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm">{i+1}</span>
                      <span className="text-slate-800 font-medium leading-relaxed text-lg pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Criticisms */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm border border-red-200">
                    <XCircle size={28} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    {lang === 'en' ? 'Controversies & Failures' : 'विवाद और कमियां'}
                  </h3>
                </div>
                <ul className="space-y-4 bg-red-50/50 p-6 rounded-3xl border border-red-100">
                  {(lang === 'en' ? termData.criticisms_en : termData.criticisms_hi).map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm">!</span>
                      <span className="text-slate-800 font-medium leading-relaxed text-lg pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
