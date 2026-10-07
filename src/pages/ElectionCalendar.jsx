import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';

import { Calendar, Clock, MapPin, Users, Download, AlertCircle } from 'lucide-react';
import { upcomingElections } from '../data/electionCalendarData';

export const ElectionCalendar = () => {
  const [lang, setLang] = useState('hi');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const content = upcomingElections[lang];

  // Helper to calculate countdown
  const getCountdown = (targetDateString) => {
    const target = new Date(targetDateString);
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
            <SEO 
        title="Upcoming Elections Calendar | Janmat Bharat"
        description="Track upcoming state and national elections in India. Stay updated with the latest political events and voting dates."
        canonicalPath="/upcoming-elections"
      />

      {/* Language Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-end">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-inner">
            <Calendar size={32} strokeWidth={2} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-deepNavy-900 tracking-tight mb-4">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Elections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.elections.map((election) => {
            const countdown = getCountdown(election.targetDate);
            
            return (
              <div key={election.id} className="bg-white rounded-xl overflow-hidden shadow-institutional border border-slate-100 border border-slate-100 flex flex-col group hover:shadow-institutional-md border border-slate-200 transition-all duration-300">
                
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden bg-deepNavy-900">
                  <img src={election.image} alt={election.state} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" width="400" height="200" loading="lazy" decoding="async" />
                  <div className="absolute top-0 left-0 w-full h-full bg-deepNavy-900"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-saffron-500 text-white text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                      {election.type}
                    </span>
                    <h2 className="text-3xl font-black text-white">{election.state}</h2>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  
                  {/* Countdown Timer */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-200 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-500 font-bold text-sm mb-4 uppercase tracking-widest">
                      <Clock size={16} /> 
                      {lang === 'hi' ? 'अनुमानित समय' : 'Estimated Time Left'}
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                        <div className="text-2xl md:text-3xl font-black text-blue-600">{countdown.days}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{lang === 'hi' ? 'दिन' : 'Days'}</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                        <div className="text-2xl md:text-3xl font-black text-blue-600">{countdown.hours}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{lang === 'hi' ? 'घंटे' : 'Hrs'}</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                        <div className="text-2xl md:text-3xl font-black text-blue-600">{countdown.minutes}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{lang === 'hi' ? 'मिनट' : 'Min'}</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 animate-pulse">
                        <div className="text-2xl md:text-3xl font-black text-red-500">{countdown.seconds}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{lang === 'hi' ? 'सेकंड' : 'Sec'}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-600">
                      {lang === 'hi' ? `संभावित: ${election.expectedDate}` : `Expected: ${election.expectedDate}`}
                    </p>
                  </div>

                  {/* Info List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600"><Users size={18} /></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{lang === 'hi' ? 'कुल सीटें' : 'Total Seats'}</p>
                        <p className="text-lg font-bold text-deepNavy-900">{election.totalSeats}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-saffron-100 p-2 rounded-lg text-saffron-600"><MapPin size={18} /></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{lang === 'hi' ? 'वर्तमान सरकार' : 'Current Govt'}</p>
                        <p className="text-lg font-bold text-deepNavy-900">{election.currentGovt}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-deepNavy-100 p-2 rounded-lg text-deepNavy-600"><AlertCircle size={18} /></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{lang === 'hi' ? 'महत्व' : 'Importance'}</p>
                        <p className="text-sm font-medium text-slate-700 leading-relaxed">{election.importance}</p>
                      </div>
                    </li>
                  </ul>

                  {/* CTA */}
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.indian.vote.machine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-bold text-white bg-deepNavy-900 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-institutional border border-slate-100"
                  >
                    <Download size={20} />
                    {lang === 'hi' ? 'इस चुनाव का ओपिनियन पोल देखें' : 'View Opinion Polls in App'}
                  </a>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
