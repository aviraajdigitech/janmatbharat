import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, MapPin, Download, Target, ChevronDown } from 'lucide-react';
import { realLokSabhaData, constituencyUI } from '../data/realConstituencyData';

export const Constituency = () => {
  const [lang, setLang] = useState('hi');
  const [selectedState, setSelectedState] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = constituencyUI[lang];
  const states = Object.keys(realLokSabhaData).sort();

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedConstituency('');
    setResult(null);
  };

  const handleConstituencyChange = (e) => {
    const constituencyName = e.target.value;
    setSelectedConstituency(constituencyName);
    
    if (constituencyName && selectedState) {
      const mpData = realLokSabhaData[selectedState].find(c => c.constituency === constituencyName);
      setResult(mpData);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>{lang === 'hi' ? 'अपनी लोकसभा जानें | Janmat Bharat' : 'Know Your Constituency | Janmat Bharat'}</title>
        <meta name="description" content="Select your state and constituency to find your current Lok Sabha MP and cast your vote on Janmat Bharat." />
      </Helmet>

      {/* Language Toggle */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-end">
        <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
          <button 
            onClick={() => setLang('hi')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'hi' ? 'bg-saffron-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            हिंदी
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            English
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20 shadow-lg">
                <Map size={40} className="text-saffron-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{content.title}</h1>
              <p className="text-lg text-slate-300 max-w-xl mx-auto font-medium">{content.subtitle}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            
            {/* Real Selection UI */}
            <div className="max-w-2xl mx-auto mb-12 space-y-6">
              
              {/* State Dropdown */}
              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'hi' ? 'राज्य (State)' : 'State'}</label>
                <div className="relative">
                  <select 
                    value={selectedState} 
                    onChange={handleStateChange}
                    className="w-full pl-6 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg font-bold text-slate-900 appearance-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer"
                  >
                    <option value="">{content.statePlaceholder}</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Constituency Dropdown */}
              <div className={`relative transition-all duration-500 ${selectedState ? 'opacity-100 h-auto' : 'opacity-50 pointer-events-none'}`}>
                <label className="block text-sm font-bold text-slate-700 mb-2">{lang === 'hi' ? 'लोकसभा क्षेत्र (Lok Sabha)' : 'Constituency'}</label>
                <div className="relative">
                  <select 
                    value={selectedConstituency} 
                    onChange={handleConstituencyChange}
                    disabled={!selectedState}
                    className="w-full pl-6 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-lg font-bold text-slate-900 appearance-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer disabled:bg-slate-100 disabled:text-slate-400"
                  >
                    <option value="">{content.constituencyPlaceholder}</option>
                    {selectedState && realLokSabhaData[selectedState].map(c => (
                      <option key={c.constituency} value={c.constituency}>{c.constituency}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Section */}
            {result && (
              <div className="animate-fade-in mt-12">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px bg-slate-200 flex-grow"></div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 whitespace-nowrap px-4 text-center">{content.resultsTitle}</h2>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>

                <div className="bg-blue-50/50 rounded-3xl border border-blue-100 p-6 md:p-8 mb-10 max-w-2xl mx-auto">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-8 justify-center bg-blue-100/50 py-2 px-6 rounded-full w-max mx-auto shadow-sm">
                    <MapPin size={18} />
                    {result.constituency}, {selectedState}
                  </div>

                  {/* High Detail MP Card */}
                  <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    
                    <div className="flex items-center gap-3 mb-4 text-saffron-600 font-black tracking-wide uppercase text-sm">
                      <Target size={20} />
                      {content.mpLabel}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{result.mp}</h3>
                    
                    <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-lg">
                      <p className="text-slate-700 font-bold text-lg">
                        <span className="text-slate-500 font-semibold text-sm mr-2">{content.partyLabel}:</span> 
                        {result.party}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Viral CTA Box */}
                <div className="bg-gradient-to-r from-saffron-500 via-green-600 to-blue-600 p-1.5 rounded-3xl shadow-2xl">
                  <div className="bg-slate-900 rounded-[20px] p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
                      {content.ctaText}
                    </h3>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all hover:scale-105 transform duration-300 shadow-xl"
                    >
                      <Download size={26} className="text-blue-600" />
                      {content.ctaButton}
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
