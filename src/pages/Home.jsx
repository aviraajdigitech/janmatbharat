import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart2, Users, Star, Vote, Image as ImageIcon, Award, Smartphone } from 'lucide-react';

export const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Janmat Bharat",
    "operatingSystem": "ANDROID",
    "applicationCategory": "SocialNetworkingApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12500"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "author": {
      "@type": "Organization",
      "name": "Aviraaj Digitech",
      "alternateName": "Aviraj Digitech",
      "url": "https://aviraajdigitech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aviraaj Digitech",
      "url": "https://aviraajdigitech.com"
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Janmat Bharat - India's Best Election Opinion Poll App</title>
        <meta name="description" content="Download Janmat Bharat (Janmat App) by Aviraaj Digitech. The best VoteBharat app for live opinion polls, surveys, and political insights in India." />
        <meta name="keywords" content="janmat, janmat bharat, janmat app, votebharat, vote bharat, aviraj, aviraaj, aviraj digitech, aviraaj digitech, voting app, election result app, voting poll, opinion poll" />
        <meta property="og:title" content="Janmat Bharat - India's Voice" />
        <meta property="og:description" content="Join millions of Indians for live election polling and surveys." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://janmatbharat.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://janmatbharat.com" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-32">
        {/* Majestic Flag Background */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/pms/majestic_flag.jpg" alt="Indian Flag" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-blue-900/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-8 shadow-sm">
                <ShieldCheck size={16} className="text-green-400" />
                India's Most Secure Voting Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
                The Pulse of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 via-white to-tirangaGreen-500">
                  New India
                </span>
              </h1>
              
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Participate in national opinion polls, rate your local politicians, and download custom political posters. The ultimate democratic toolkit in your pocket.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-8" />
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm font-semibold text-white/80">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center text-xs">👨</div>
                  <div className="w-10 h-10 rounded-full bg-saffron-500 border-2 border-slate-900 flex items-center justify-center text-xs">👩</div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center text-xs">🧑</div>
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span>Trusted by 1 Million+ Voters</span>
                </div>
              </div>
            </motion.div>
            
            {/* High-End App Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="hidden lg:block relative mx-auto"
            >
               <div className="relative w-[340px] h-[680px] bg-slate-100 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden ring-4 ring-white/10">
                  <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl mx-20 z-20"></div>
                  
                  <div className="h-full w-full bg-slate-50 flex flex-col relative">
                    <div className="bg-white px-6 pt-12 pb-4 shadow-sm z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="/logo.png" className="w-8 h-8 rounded-lg shadow-sm" alt="Logo" />
                        <span className="font-bold text-slate-800 text-lg">Janmat Bharat</span>
                      </div>
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center"><Smartphone size={16} className="text-blue-600" /></div>
                    </div>
                    
                    <div className="p-4 flex-1 bg-slate-50 space-y-4 overflow-hidden relative">
                      {/* Fake App Cards */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-5 text-white shadow-md">
                        <h4 className="font-bold mb-1">Daily Survey</h4>
                        <p className="text-xs text-blue-100 mb-4">Who is your choice for PM 2029?</p>
                        <div className="space-y-2">
                          <div className="h-10 bg-white/20 rounded-lg border border-white/30 flex items-center px-4"><div className="w-full h-2 bg-white/40 rounded-full"></div></div>
                          <div className="h-10 bg-white/10 rounded-lg border border-white/20 flex items-center px-4"><div className="w-2/3 h-2 bg-white/30 rounded-full"></div></div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <h4 className="font-bold text-slate-800 mb-3">Rate Your MP</h4>
                        <div className="flex gap-2 mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={20} className={i <=4 ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />)}
                        </div>
                        <div className="h-8 w-24 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center justify-center">Submit Rating</div>
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Floating Stats */}
               <motion.div animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-40 -left-16 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-30">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Vote size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Live Polling</p>
                    <p className="text-sm font-extrabold text-slate-900">100% Real Voters</p>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Features Section (Detailed) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Inside the App</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Everything you need to <br/> participate in democracy.</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Janmat Bharat is not just a voting app; it's a complete ecosystem for political awareness, surveys, and digital campaigning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Vote size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Live Elections</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Participate in dummy elections for Lok Sabha and Vidhan Sabha. See real-time trends and public sentiment before the actual elections.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-saffron-50 rounded-2xl flex items-center justify-center mb-6 text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors">
                <BarChart2 size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Daily Opinion Polls</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Answer burning questions every day. From national policies to local issues, make your opinion count in our daily aggregated surveys.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Award size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Leader Report Cards</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Review the performance of your local MP, MLA, and Corporator. Give them a 5-star rating based on their actual work in your constituency.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ImageIcon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Poster Maker</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                Create stunning political posters with your photo and favorite leader instantly. Download and share on WhatsApp and Facebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Your Data, <br/><span className="text-blue-400">Your Privacy.</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                At Aviraaj Digitech, we believe that political opinions are highly personal. Janmat Bharat is built on military-grade encryption and strict privacy protocols.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><ShieldCheck className="text-green-400" size={24}/> <span className="font-semibold">We NEVER sell your data.</span></li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-green-400" size={24}/> <span className="font-semibold">Strict 72-Hour Data Deletion Policy.</span></li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-green-400" size={24}/> <span className="font-semibold">Verified Google Authentication (No Bots).</span></li>
              </ul>
              <div className="mt-10">
                <a href="/privacy" className="text-blue-400 hover:text-white font-bold underline transition-colors">Read our full Privacy Policy</a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700">
                 <h4 className="text-4xl font-extrabold text-white mb-2">100%</h4>
                 <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Anonymous Voting</p>
               </div>
               <div className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700">
                 <h4 className="text-4xl font-extrabold text-white mb-2">0</h4>
                 <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Data Leaks</p>
               </div>
               <div className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700 col-span-2">
                 <h4 className="text-4xl font-extrabold text-white mb-2">256-bit</h4>
                 <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">End-to-End Encryption</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
