import React, { useState, useRef, useMemo, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Vote, ShieldCheck, BarChart3, Users, Landmark, Smartphone, Lock, Globe, ChevronRight, Activity, TrendingUp, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import { pmHistory } from '../data/historyData';
import { ThreeFlag } from '../components/ThreeFlag';



/* ────────────────────────────────────────────
   HOME PAGE
──────────────────────────────────────────── */
export const Home = () => {
  const reversedHistory = [...pmHistory].reverse();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "क्या मेरा वोट सच में गुप्त (Anonymous) है?",
      a: "बिल्कुल! हम 256-bit बैंक-ग्रेड एन्क्रिप्शन और ज़ीरो-नॉलेज आर्किटेक्चर का इस्तेमाल करते हैं। आपका वोट आपकी व्यक्तिगत पहचान से कभी नहीं जोड़ा जाता।"
    },
    {
      q: "क्या कोई फर्जी अकाउंट (Fake Account) बनाकर कई बार वोट कर सकता है?",
      a: "नहीं।"
    },
    {
      q: "क्या जनमत भारत किसी राजनीतिक पार्टी से जुड़ा है?",
      a: "बिल्कुल नहीं। जनमत भारत एक 100% स्वतंत्र और तटस्थ तकनीकी प्लेटफॉर्म है।"
    },
    {
      q: "क्या मैं अपना दिया हुआ वोट बाद में बदल सकता हूँ?",
      a: "हाँ! अगर किसी नेता के काम से आपका विचार बदलता है, तो आप ऐप में जाकर अपना वोट अपडेट कर सकते हैं।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Helmet>
        <title>Janmat Bharat | Vote for Next PM & Track India's Political Mood</title>
        <meta name="description" content="Cast your mock vote for the Next PM! Explore real public opinion trends, check the current political mood of India, and read unbiased election research." />
      </Helmet>

      {/* ── HERO: 3D Waving Flag ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden">
        <ThreeFlag />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 10 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl text-sm uppercase tracking-wider">
            <Activity size={16} />
            A Digital Public Opinion Platform for India
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
            The True Voice of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 via-white to-green-500">
              Indian Voters.
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg mb-10">
            Experience India’s premier digital polling network. Step into the future of democracy with a <span className="text-white font-bold">100% unbiased</span> and secure platform. Janmat Bharat empowers you to cast mock votes, explore <span className="text-white font-bold">political trends</span> inside the app, and discover <span className="text-white font-bold">honest</span> political history. Your voice, your platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-full font-extrabold text-lg transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Smartphone size={22} />
              Download App Now
            </a>
            <Link to="/history" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Landmark size={22} />
              Read Political History
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS ── */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 border border-white/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
            
            <div className="text-center px-4 flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-black text-blue-600 tracking-tight">National & Local</h4>
              <p className="text-slate-500 font-extrabold uppercase text-[11px] tracking-[0.2em] mt-3">Lok Sabha & All States</p>
            </div>
            
            <div className="text-center px-4 border-l border-slate-100 flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-black text-saffron-500 tracking-tight">100% Authentic</h4>
              <p className="text-slate-500 font-extrabold uppercase text-[11px] tracking-[0.2em] mt-3">Verified Indians Only</p>
            </div>
            
            <div className="text-center px-4 lg:border-l border-slate-100 pt-8 lg:pt-0 border-t lg:border-t-0 flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-black text-purple-600 tracking-tight">Live Mood</h4>
              <p className="text-slate-500 font-extrabold uppercase text-[11px] tracking-[0.2em] mt-3">Change Vote on Current Mudde</p>
            </div>
            
            <div className="text-center px-4 border-l border-slate-100 pt-8 lg:pt-0 border-t lg:border-t-0 flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-black text-green-500 tracking-tight">256-bit</h4>
              <p className="text-slate-500 font-extrabold uppercase text-[11px] tracking-[0.2em] mt-3">Bank-Grade Encryption</p>
            </div>
            
          </div>
        </div>
      </section>

      
      {/* 🛑 NEW: LIVE PM RACE TEASER */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase mb-4 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full text-sm animate-pulse">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              Live Polling Data
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              2029 PM Race: कौन चल रहा है सबसे आगे?
            </h3>
            <p className="text-xl text-slate-300 font-medium">
              देश भर के लाखों वोटर्स अपना फैसला दे चुके हैं। जानिए रियल-टाइम में भारत की जनता किसे अगला प्रधानमंत्री देखना चाहती है।
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-1 border border-slate-700 shadow-2xl relative overflow-hidden group">
            {/* Locked Content overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Lock size={40} className="text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-4">असली और रियल-टाइम आँकड़े लॉक हैं</h4>
              <p className="text-slate-300 max-w-md mx-auto mb-8 font-medium">
                यह जानने के लिए कि कौन सी पार्टी या उम्मीदवार PM रेस में सबसे आगे है, अभी प्ले स्टोर से ऐप डाउनलोड करें।
              </p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-full font-black text-lg transition-all shadow-xl flex items-center gap-3 transform hover:scale-105 inline-flex"
              >
                <Download size={24} className="text-blue-600" />
                Unlock Live Results
              </a>
            </div>

            {/* Fake Blurred Graph underneath */}
            <div className="bg-slate-800 rounded-[22px] p-8 md:p-12 opacity-40 pointer-events-none select-none">
              <div className="flex items-end justify-between gap-4 h-64 border-b border-slate-700 pb-4">
                {[
                  { label: "NDA", height: "80%", color: "bg-saffron-500" },
                  { label: "I.N.D.I.A", height: "65%", color: "bg-blue-500" },
                  { label: "Others", height: "30%", color: "bg-slate-500" }
                ].map((bar, i) => (
                  <div key={i} className="w-full flex flex-col justify-end items-center h-full gap-4">
                    <div className="font-black text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity">??%</div>
                    <div className={"w-full max-w-[120px] rounded-t-xl transition-all duration-1000 " + bar.color} style={{ height: bar.height }}></div>
                    <div className="text-slate-400 font-bold text-lg">{bar.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛑 NEW: YOUR VOTE MATTERS SECTION */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full text-sm">
                <Target size={16} /> The Power of One Vote
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                आपका एक वोट देश को सही दिशा और सच्चे आँकड़े देगा!
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                जब आप Janmat Bharat App पर वोट डालते हैं, तो आप देश को यह बताते हैं कि असल में जनता किसे पसंद करती है। हमारा सिस्टम इतना सुरक्षित है कि यहाँ कोई आपके फैसले को बदल नहीं सकता।
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <ShieldCheck size={28} className="text-green-500" />, 
                    title: "कोई वोट चोरी नहीं (Zero Vote Theft)", 
                    desc: "हमारा सिस्टम 100% सुरक्षित है। कोई हैकर या पार्टी आपका फैसला बदल नहीं सकती।" 
                  },
                  { 
                    icon: <Fingerprint size={28} className="text-blue-500" />, 
                    title: "1 फ़ोन = 1 वोट (Anti-Fraud Tech)", 
                    desc: "फर्जी वोटिंग पूरी तरह से असंभव। डिवाइस फिंगरप्रिंटिंग से हर व्यक्ति सिर्फ एक ही वोट डाल सकता है।" 
                  },
                  { 
                    icon: <BarChart3 size={28} className="text-saffron-500" />, 
                    title: "असली ओपिनियन पोल (True Analytics)", 
                    desc: "मीडिया के झूठे सर्वर को भूल जाइए। यहाँ देश की जनता रियल-टाइम में खुद अपना ओपिनियन पोल तय करती है।" 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-saffron-500 rounded-[3rem] blur-2xl opacity-20 transform rotate-3"></div>
              <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 relative z-10 text-center shadow-2xl border border-slate-800">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
                  <Vote size={48} className="text-white drop-shadow-md" />
                </div>
                <h4 className="text-3xl font-black text-white mb-6 leading-tight">देश को एक अच्छे राजनेता की जरूरत है।</h4>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  अपना वोट डालें और साबित करें कि देश की असली ताकत जनता के हाथ में है।
                </p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-saffron-500 via-white to-green-500 p-1 rounded-full block w-full transform hover:scale-105 transition-transform shadow-xl"
                >
                  <div className="bg-slate-900 rounded-full py-4 text-white font-black text-xl flex items-center justify-center gap-3">
                    <Smartphone size={24} className="text-saffron-400" />
                    Vote Now on App
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ── VOICES OF INDIA ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <MessageSquare size={44} className="mx-auto text-blue-300 mb-5" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Voices of India</h3>
            <p className="text-slate-600">What citizens are saying about Janmat Bharat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { initial: 'A', bg: 'bg-blue-100', text: 'text-blue-700', name: 'Aman Kumar', loc: 'Delhi', review: "This is exactly the digital revolution India needed! The depth of the political encyclopedia and the live analytics are completely mind-blowing." },
              { initial: 'A', bg: 'bg-saffron-100', text: 'text-saffron-700', name: 'Ananya Patel', loc: 'Gujarat', review: "As a political science student, the History encyclopedia is unmatched. Unbiased, term-by-term analysis of every PM is absolutely brilliant." },
              { initial: 'P', bg: 'bg-green-100', text: 'text-green-700', name: 'Pawan', loc: 'UP', review: "Bhai, ye app sach me kamaal hai! Yahan koi fake vote nahi hota. UP ka asli mood pehli baar itne sahi tarike se dikh raha hai." },
              { initial: 'R', bg: 'bg-red-100', text: 'text-red-700', name: 'Rakesh Yadav', loc: 'Bihar', review: "Youth trends dekhna bahut accha lagta hai. Pata chalta hai ki sach me mudde kya hain—jobs ya education. 10/10 app!" },
              { initial: 'P', bg: 'bg-purple-100', text: 'text-purple-700', name: 'Priya Sharma', loc: 'Maharashtra', review: "Very transparent platform. I love the EVM security breakdown. It gave me a lot of confidence in how modern voting can be secured digitally." },
              { initial: 'S', bg: 'bg-teal-100', text: 'text-teal-700', name: 'Sneha Reddy', loc: 'Telangana', review: "The mock voting interface is incredibly smooth. I feel like I'm actually participating in shaping the nation's future before elections even begin." },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex text-saffron-500 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-slate-700 font-medium italic mb-6 leading-relaxed">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${t.bg} rounded-full flex items-center justify-center ${t.text} font-bold text-lg`}>{t.initial}</div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500 flex items-center gap-1"><CheckCircle2 size={13} className="text-green-500" /> Verified Voter, {t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <HelpCircle size={44} className="mx-auto text-saffron-500 mb-5" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h3>
            <p className="text-slate-600">Full transparency — your questions answered.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-7 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronRight size={18} className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ml-2 ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <div className={`px-7 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><Globe size={700} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready to Make Your Voice Heard?</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of citizens already using Janmat Bharat.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.indian.vote.machine"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-slate-50 transition-colors shadow-2xl inline-flex items-center gap-3 hover:scale-105 transform"
          >
            <Smartphone size={26} /> Download Janmat Bharat App
          </a>
          <p className="mt-5 text-blue-200 text-sm uppercase tracking-wide">Available on Google Play Store</p>
        </div>
      </section>
    </div>
  );
};
