import React, { useState } from 'react';
import { SEO } from '../components/SEO';

import { Link } from 'react-router-dom';
import { pmHistory } from '../data/historyData';
import { Languages, ArrowRight, Landmark } from 'lucide-react';

export const History = () => {
  const [lang, setLang] = useState('hi');

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
            <SEO 
        title="Political History of India | Janmat Bharat"
        description="Explore the comprehensive political history of India, past Prime Ministers, and key election timelines."
        canonicalPath="/history"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="absolute -top-12 right-0 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Languages size={18} />
            {lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English'}
          </button>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {lang === 'en' ? 'The Democratic Journey' : 'भारत का लोकतांत्रिक सफर'}
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            {lang === 'en' 
              ? "From 1947 to the present day, explore the definitive encyclopedia of India's Prime Ministers term by term. Select a term below to read its complete history."
              : "1947 से लेकर आज तक, भारत के प्रधानमंत्रियों का विस्तृत कार्यकाल (Term by Term) इतिहास। पूरी जानकारी पढ़ने के लिए नीचे किसी भी कार्यकाल पर क्लिक करें।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pmHistory.map((pm) => (
            <Link to={`/history/${pm.id}`} key={pm.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group flex flex-col">
              <div className="h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <Landmark size={80} className="absolute opacity-10 text-white" />
                <img 
                  src={pm.image} 
                  alt={pm.pm_name_en} 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }}
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full text-xs inline-block mb-4 w-max">
                  {lang === 'en' ? pm.period_en : pm.period_hi}
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {lang === 'en' ? pm.pm_name_en : pm.pm_name_hi}
                </h2>
                <p className="text-slate-500 font-medium text-sm mb-6 flex-grow">
                  {lang === 'en' ? pm.term_en : pm.term_hi}
                </p>
                <div className="mt-auto flex items-center justify-between text-blue-600 font-bold group-hover:text-blue-700">
                  <span>{lang === 'en' ? 'Read Full History' : 'पूरा इतिहास पढ़ें'}</span>
                  <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
