import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ThreeFlag } from '../components/ThreeFlag';
import { ShieldCheck, BarChart2, Users, Star } from 'lucide-react';

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
    <div className="min-h-screen pt-20">
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
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <ThreeFlag />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-blue-100 text-blue-800 font-bold text-sm mb-6 shadow-sm"
            >
              <ShieldCheck size={16} className="text-tirangaGreen-500" />
              100% Safe, Secure & Private
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
              The Pulse of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 via-white to-tirangaGreen-500">
                New India
              </span>
            </h1>
            
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-sm">
              Join millions of Indians on the nation's most trusted voting and opinion platform. Participate in daily surveys, track election trends, and make your voice heard safely.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-8" />
              </a>
            </motion.div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 bg-white/60 p-3 rounded-full backdrop-blur-md w-max mx-auto lg:mx-0">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span>4.9/5 Rating from Voters</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
             <div className="relative mx-auto w-[320px] h-[650px] bg-white rounded-[3rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-4 ring-white/50">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl mx-20 z-20"></div>
                
                {/* Mockup Screen */}
                <div className="h-full w-full bg-slate-50 flex flex-col relative">
                  <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900 p-6 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <img src="/logo.png" className="w-12 h-12 mb-2 bg-white p-1 rounded-xl shadow-lg" alt="App Logo" />
                    <h3 className="text-white font-extrabold text-2xl tracking-wide">Janmat Bharat</h3>
                    <p className="text-blue-200 text-sm font-medium">Live Election Polls</p>
                  </div>
                  
                  <div className="p-4 space-y-4 flex-grow bg-slate-100">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                      <div className="h-4 bg-slate-200 rounded-full w-3/4 mb-4"></div>
                      <div className="space-y-3">
                        <div className="h-12 bg-saffron-100 rounded-xl border border-saffron-200 flex items-center px-4"><div className="h-3 w-1/2 bg-saffron-500 rounded-full"></div></div>
                        <div className="h-12 bg-tirangaGreen-100 rounded-xl border border-tirangaGreen-200 flex items-center px-4"><div className="h-3 w-1/3 bg-tirangaGreen-500 rounded-full"></div></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }} 
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="absolute top-32 -left-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-30"
             >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <BarChart2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Live Trends</p>
                  <p className="text-sm font-extrabold text-slate-900">100% Accurate</p>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why India Trusts Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">We've built the most secure and transparent voting application in India, empowering citizens directly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50", title: "Absolute Data Privacy", desc: "We never sell your data. Your political preferences and personal identity are heavily encrypted." },
              { icon: Users, color: "text-saffron-500", bg: "bg-saffron-50", title: "Real Voters, Real Results", desc: "No bots allowed. Our strict OTP and Google verification ensures one citizen, one authentic vote." },
              { icon: BarChart2, color: "text-tirangaGreen-600", bg: "bg-tirangaGreen-50", title: "State & National Polls", desc: "Participate in Vidhan Sabha, Lok Sabha, and daily surveys to express your opinions instantly." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] text-center shadow-xl shadow-slate-100 border border-slate-100 transition-all"
              >
                <div className={`w-20 h-20 ${feature.bg} rounded-3xl flex items-center justify-center mx-auto mb-8 ${feature.color}`}>
                  <feature.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
