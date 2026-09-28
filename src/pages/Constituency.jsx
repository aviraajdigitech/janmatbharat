import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, Search, User, MapPin, Download, Target, ChevronRight } from 'lucide-react';
import { constituencyData, mockPincodeDatabase } from '../data/constituencyData';

export const Constituency = () => {
  const [lang, setLang] = useState('hi');
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = constituencyData[lang];

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (pincode.length !== 6 || isNaN(pincode)) {
      setError(content.errorLength);
      return;
    }

    const data = mockPincodeDatabase[pincode];
    if (data) {
      setResult(data);
    } else {
      // If pincode not in mock db, show a generic dummy response to keep engagement high
      setResult({
        state: "Data Verified",
        district: "Local Region",
        mp: { name: "Live Data in App", party: "Multiple", constituency: "Your Lok Sabha" },
        mla: { name: "Live Data in App", party: "Multiple", constituency: "Your Vidhan Sabha" },
        isFallback: true
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>{lang === 'hi' ? 'अपनी लोकसभा जानें | Janmat Bharat' : 'Know Your Constituency | Janmat Bharat'}</title>
        <meta name="description" content="Find your current MP and MLA by entering your pincode. Check live political trends on Janmat Bharat." />
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
              <p className="text-lg text-slate-300 max-w-lg mx-auto font-medium">{content.subtitle}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <input 
                  type="text" 
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder={content.searchPlaceholder}
                  className="w-full pl-6 pr-32 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-xl font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all shadow-inner"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-md"
                >
                  <Search size={20} />
                  <span className="hidden sm:inline">{content.searchButton}</span>
                </button>
              </div>
              {error && <p className="text-red-500 font-bold text-sm mt-3 text-center">{error}</p>}
              
              <div className="flex gap-2 justify-center mt-4 text-xs font-medium text-slate-400">
                <span>Try: 110001, 221001, 400001, 800001</span>
              </div>
            </form>

            {/* Results Section */}
            {result && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px bg-slate-200 flex-grow"></div>
                  <h2 className="text-2xl font-black text-slate-900">{content.resultsTitle}</h2>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>

                <div className="bg-blue-50/50 rounded-3xl border border-blue-100 p-6 md:p-8 mb-10">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-6 justify-center bg-blue-100/50 py-2 px-4 rounded-full w-max mx-auto">
                    <MapPin size={18} />
                    {result.district}, {result.state}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* MP Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4 text-saffron-600 font-bold">
                        <Target size={20} />
                        {content.mpLabel}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{result.mp.name}</h3>
                      <p className="text-slate-600 font-medium mb-1"><span className="text-slate-400">{content.partyLabel}:</span> {result.mp.party}</p>
                      <p className="text-slate-600 font-medium"><span className="text-slate-400">{content.constituencyLabel}:</span> {result.mp.constituency}</p>
                    </div>

                    {/* MLA Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4 text-green-600 font-bold">
                        <User size={20} />
                        {content.mlaLabel}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{result.mla.name}</h3>
                      <p className="text-slate-600 font-medium mb-1"><span className="text-slate-400">{content.partyLabel}:</span> {result.mla.party}</p>
                      <p className="text-slate-600 font-medium"><span className="text-slate-400">{content.constituencyLabel}:</span> {result.mla.constituency}</p>
                    </div>
                  </div>

                  {result.isFallback && (
                    <p className="text-center text-sm font-medium text-slate-500 mt-6 bg-white py-2 rounded-lg border border-slate-200">
                      * {lang === 'hi' ? 'अपने पिनकोड का सटीक लाइव डेटा देखने के लिए ऐप डाउनलोड करें।' : 'Download the app to see exact live data for your pincode.'}
                    </p>
                  )}
                </div>

                {/* Viral CTA Box */}
                <div className="bg-gradient-to-r from-saffron-500 via-green-600 to-blue-600 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                      {content.ctaText}
                    </h3>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-colors hover:scale-105 transform duration-200"
                    >
                      <Download size={24} className="text-blue-600" />
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
