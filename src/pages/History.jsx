import React from 'react';
import { Helmet } from 'react-helmet-async';
import { pmHistory } from '../data/historyData';
import { CheckCircle2, XCircle, Clock, Landmark } from 'lucide-react';

export const History = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Political History of India | Janmat Bharat</title>
        <meta name="description" content="Explore the comprehensive political history of India. Deep dive into the terms of every Prime Minister, their achievements, and their failures." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">The Democratic Journey</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            From 1947 to the present day, explore the definitive encyclopedia of India's Prime Ministers. We break down the absolute highs and the critical lows of every government that shaped New India.
          </p>
        </div>

        <div className="space-y-16">
          {pmHistory.map((pm, index) => (
            <div key={pm.id} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
              {/* Profile Sidebar */}
              <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Landmark size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-48 h-48 rounded-full border-4 border-white/20 overflow-hidden mb-6 shadow-2xl bg-white">
                    <img src={pm.image} alt={pm.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }} />
                  </div>
                  <h2 className="text-3xl font-extrabold mb-2">{pm.name}</h2>
                  <p className="text-saffron-400 font-bold text-lg mb-6">{pm.party}</p>
                  
                  <div className="space-y-4 w-full text-left">
                    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-2 text-blue-300 text-sm font-bold uppercase mb-1">
                        <Clock size={16} /> Term
                      </div>
                      <p className="font-semibold">{pm.term}</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-2 text-blue-300 text-sm font-bold uppercase mb-1">
                        <Landmark size={16} /> Lok Sabha
                      </div>
                      <p className="font-semibold">{pm.lokSabha}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Content */}
              <div className="lg:w-2/3 p-10 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Major Achievements</h3>
                    </div>
                    <ul className="space-y-4">
                      {pm.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                          <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Criticisms */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <XCircle size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Controversies & Failures</h3>
                    </div>
                    <ul className="space-y-4">
                      {pm.criticisms.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">•</span>
                          <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
