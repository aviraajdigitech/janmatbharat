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
              href="https://play.google.com/store/apps/details?id=com.aviraajdigitech.janmatbharat"
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

      {/* ── LIVE TREND PREVIEW ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-saffron-600 font-bold tracking-widest uppercase mb-4 bg-saffron-100 px-4 py-1.5 rounded-full text-sm">
              <TrendingUp size={16} /> Live Sneak Peek
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Current National Mood</h3>
            <p className="text-slate-600">A glimpse of the powerful analytics inside the Janmat Bharat app.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Projected Lok Sabha Sentiment</h4>
              <div className="space-y-5">
                {[
                  { label: 'NDA (Alliance)', pct: '42%', w: '42%', color: 'bg-saffron-500' },
                  { label: 'I.N.D.I.A (Alliance)', pct: '38%', w: '38%', color: 'bg-blue-500' },
                  { label: 'Others / Undecided', pct: '20%', w: '20%', color: 'bg-slate-400' },
                ].map(r => (
                  <div key={r.label}>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1"><span>{r.label}</span><span>{r.pct}</span></div>
                    <div className="w-full bg-slate-100 rounded-full h-3"><div className={`${r.color} h-3 rounded-full`} style={{ width: r.w }} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Top Issues Impacting Youth Vote</h4>
              <div className="space-y-5">
                {[
                  { label: '1. Employment & Job Creation', pct: '65%', w: '65%', color: 'bg-indigo-500' },
                  { label: '2. Inflation & Cost of Living', pct: '52%', w: '52%', color: 'bg-red-500' },
                  { label: '3. Infrastructure & Development', pct: '45%', w: '45%', color: 'bg-green-500' },
                ].map(r => (
                  <div key={r.label}>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1"><span>{r.label}</span><span>{r.pct}</span></div>
                    <div className="w-full bg-slate-100 rounded-full h-3"><div className={`${r.color} h-3 rounded-full`} style={{ width: r.w }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PM HISTORY SHOWCASE ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-saffron-600 tracking-widest uppercase mb-2">The Digital Encyclopedia</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Explore India's Leadership</h3>
            <p className="text-slate-600 text-lg">Click any Prime Minister to read their full unbiased term-wise history.</p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-5 snap-x flex-nowrap [&::-webkit-scrollbar]:hidden">
            {reversedHistory.map((pm) => (
              <Link
                to={`/history/${pm.id}`}
                key={pm.id}
                className="snap-start shrink-0 w-56 sm:w-64 bg-slate-50 rounded-3xl p-5 border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                  <img
                    src={pm.image}
                    alt={pm.pm_name_en}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs uppercase mb-2 border border-blue-200">
                  {pm.period_en}
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                  {pm.pm_name_en}
                </h4>
                <p className="text-xs text-slate-500 font-medium line-clamp-2">{pm.term_en}</p>
                <div className="mt-3 text-saffron-500 font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read History <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/history" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-700 transition-colors shadow-lg">
              <Landmark size={18} /> View Full Political History
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSIDE THE APP (6 FEATURES) ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Inside The App</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Everything You Need to Understand Indian Politics</h3>
            <p className="text-slate-600 text-lg">Deep analytics, historical data, and a secure platform to cast your mock vote.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Vote, color: 'text-blue-600', bg: 'bg-blue-50', title: '3-Tier Voting System', desc: 'Vote for your local MLA, your MP, and your choice for the Next Prime Minister of India.' },
              { icon: Landmark, color: 'text-saffron-500', bg: 'bg-saffron-50', title: 'Deep Political Encyclopedia', desc: 'Wikipedia-grade, unbiased, term-by-term analysis of every Indian PM from 1947 to today.', link: '/history' },
              { icon: BarChart3, color: 'text-green-600', bg: 'bg-green-50', title: 'In-App Polling Analytics', desc: 'Explore political trends inside the app. Charts filtered by state, constituency & demographics.' },
              { icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50', title: '100% Anonymous & Safe', desc: 'Zero-knowledge architecture ensures your mock vote can never be traced to your identity.' },
              { icon: Lock, color: 'text-red-600', bg: 'bg-red-50', title: 'Anti-Fraud Technology', desc: 'One Device, One Vote. OTP verification blocks bots and IT cell manipulation.' },
              { icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', title: 'Youth Empowerment', desc: 'We educate first-time voters on EVM security, VVPAT, and their constitutional rights.', link: '/voter-awareness' },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
                <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center ${f.color} mb-5 group-hover:scale-110 transition-transform`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
                {f.link && (
                  <Link to={f.link} className={`mt-3 ${f.color} font-bold flex items-center gap-1 text-sm`}>
                    Explore <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm tracking-wide mb-6">
                Simple & Secure
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">How Janmat Bharat Works</h2>
              <p className="text-slate-500 text-[17px] mb-12 leading-relaxed">
                We've built a platform that is as simple as sending a message, yet as secure as a bank vault. Your voice matters, and making it heard has never been easier.
              </p>
              
              <div className="relative space-y-10">
                {/* Timeline connecting line */}
                <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100"></div>
                
                {[
                  { n: '1', color: 'bg-white text-blue-600 border-blue-200 shadow-blue-100', title: 'Download & Join', desc: 'Get the app from the Play Store and set up your secure profile instantly.' },
                  { n: '2', color: 'bg-white text-blue-600 border-blue-200 shadow-blue-100', title: 'Select Constituency', desc: 'Choose your state and local area for hyper-local, accurate polling data.' },
                  { n: '3', color: 'bg-white text-saffron-600 border-saffron-200 shadow-saffron-100', title: 'Cast Your Mock Vote', desc: 'Tap your preferred party. Your choice is fully encrypted and 100% anonymous.' },
                  { n: '4', color: 'bg-white text-green-600 border-green-200 shadow-green-100', title: 'View App Results', desc: 'Unlock stunning charts inside the app showing national and state political trends.' },
                ].map((s) => (
                  <div key={s.n} className="group relative flex gap-6 z-10">
                    <div className={`w-12 h-12 rounded-2xl ${s.color} font-black flex items-center justify-center flex-shrink-0 text-xl border-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                      {s.n}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-[19px] font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                      <p className="text-slate-500 text-[15px] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl relative">
                <div className="absolute top-0 right-10 w-24 h-24 bg-saffron-500 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30" />
                <div className="bg-slate-800 rounded-[2.5rem] p-8 relative z-10 border border-slate-700 aspect-[4/5] flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"><Vote size={40} className="text-blue-600" /></div>
                  <h3 className="text-3xl font-extrabold text-white mb-3">India's Pulse</h3>
                  <p className="text-slate-400 text-sm mb-8">The most intuitive polling interface designed for Indian voters.</p>
                  {[{ color: 'bg-saffron-500', w: 'w-2/3' }, { color: 'bg-green-500', w: 'w-1/3' }, { color: 'bg-blue-500', w: 'w-1/2' }].map((b, i) => (
                    <div key={i} className="w-full bg-slate-700/50 rounded-full h-4 mb-3 overflow-hidden"><div className={`${b.color} ${b.w} h-full rounded-full`} /></div>
                  ))}
                </div>
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
            href="https://play.google.com/store/apps/details?id=com.aviraajdigitech.janmatbharat"
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
