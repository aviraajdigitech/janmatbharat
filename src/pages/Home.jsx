import React, { useState, useRef, useMemo, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Vote, ShieldCheck, BarChart3, Users, Landmark, Smartphone, Lock, Globe, ChevronRight, Activity, TrendingUp, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import { pmHistory } from '../data/historyData';

/* ────────────────────────────────────────────
   3-D Waving Flag (exact original code)
──────────────────────────────────────────── */
const FlagMesh = () => {
  const mesh = useRef();

  const fallbackTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF9933'; ctx.fillRect(0, 0, 1024, 170);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 170, 1024, 170);
    ctx.fillStyle = '#138808'; ctx.fillRect(0, 340, 1024, 170);
    ctx.beginPath();
    ctx.arc(512, 256, 60, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000080'; ctx.lineWidth = 4; ctx.stroke();
    return new THREE.CanvasTexture(canvas);
  }, []);

  let texture;
  try {
    texture = useLoader(THREE.TextureLoader, '/assets/indian_flag.png');
  } catch (e) {
    texture = fallbackTexture;
  }

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const wave1 = 0.4 * Math.sin(x * 1.2 - time * 4.0);
      const wave2 = 0.15 * Math.sin(x * 2.5 - time * 5.5);
      const wave3 = 0.1 * Math.sin(y * 1.5 - time * 2.0);
      const multiplier = Math.max(0, (x + 8) / 16);
      const wave = (wave1 + wave2 + wave3) * multiplier * 1.5;
      positions.setZ(i, wave);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[0.1, -0.3, 0.05]} position={[2, 0, -3]}>
      <planeGeometry args={[16, 10, 128, 128]} />
      <meshStandardMaterial
        map={texture || fallbackTexture}
        side={THREE.DoubleSide}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
};

const ThreeFlag = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[-5, 10, 5]} intensity={2.5} castShadow />
      <directionalLight position={[5, -5, -5]} intensity={0.5} />
      <Suspense fallback={null}>
        <FlagMesh />
      </Suspense>
    </Canvas>
    {/* 30% light-blue overlay — as requested */}
    <div className="absolute inset-0 bg-blue-900/30" />
  </div>
);



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
        <title>Janmat Bharat | The Future of Democratic Polling</title>
        <meta name="description" content="India's most secure and comprehensive political polling application." />
      </Helmet>

      {/* ── HERO: 3D Waving Flag ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 overflow-hidden">
        <ThreeFlag />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl text-sm uppercase tracking-wider">
            <Activity size={16} />
            India's #1 Digital Polling Platform
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
            Awaaz Aapki.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-white to-green-400">
              Faisla Desh Ka.
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg mb-10">
            Janmat Bharat is not just an app — it's a digital revolution. Experience 100% secure, transparent, and deep political polling right from your smartphone. Before the EVM decides, let the nation know your choice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-full font-extrabold text-lg transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
              <Smartphone size={22} />
              Download App Now
            </button>
            <Link to="/history" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Landmark size={22} />
              Read Political History
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS ── */}
      <section className="relative z-30 -mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 flex flex-wrap justify-around items-center gap-6">
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-blue-600">543</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-1">Lok Sabha Seats</p>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-saffron-500">100%</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-1">Verified Users</p>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-green-500">256-bit</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-1">Bank-Grade Encryption</p>
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
              { icon: BarChart3, color: 'text-green-600', bg: 'bg-green-50', title: 'Live Polling Analytics', desc: 'Real-time charts filtered by state, constituency & demographics. See what India is thinking.' },
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
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">How Janmat Bharat Works</h2>
              <p className="text-slate-600 text-lg mb-10">As simple as sending a message. As secure as a bank vault.</p>
              <div className="space-y-8">
                {[
                  { n: '1', color: 'bg-blue-100 text-blue-600 border-blue-200', title: 'Download & Register', desc: 'Get the app from the Play Store. Verify your mobile via OTP.' },
                  { n: '2', color: 'bg-blue-100 text-blue-600 border-blue-200', title: 'Select Your Constituency', desc: 'Choose your state & local area for hyper-local, accurate polls.' },
                  { n: '3', color: 'bg-saffron-100 text-saffron-600 border-saffron-200', title: 'Cast Your Mock Vote', desc: 'Tap your preferred party. Your choice is encrypted instantly.' },
                  { n: '4', color: 'bg-green-100 text-green-600 border-green-200', title: 'View Live Results', desc: 'Unlock stunning live charts showing real-time national trends.' },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-full ${s.color} font-extrabold flex items-center justify-center flex-shrink-0 text-xl border-2 shadow-sm`}>{s.n}</div>
                    <div><h4 className="text-lg font-bold text-slate-900 mb-1">{s.title}</h4><p className="text-slate-600 text-sm">{s.desc}</p></div>
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
            <p className="text-slate-600">What early users are saying about Janmat Bharat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initial: 'A', bg: 'bg-blue-100', text: 'text-blue-700', name: 'Aman Kumar', loc: 'Delhi', review: "This is exactly the digital revolution India needed! The depth of the political encyclopedia and the live analytics are completely mind-blowing." },
              { initial: 'A', bg: 'bg-saffron-100', text: 'text-saffron-700', name: 'Ananya Patel', loc: 'Gujarat', review: "As a political science student, the History encyclopedia is unmatched. Unbiased, term-by-term analysis of every PM is absolutely brilliant." },
              { initial: 'P', bg: 'bg-green-100', text: 'text-green-700', name: 'Pawan', loc: 'UP', review: "Bhai, ye app toh sach me kamaal hai! IT cell wale fake vote nahi daal sakte kyunki OTP mandatory hai. Yahan UP ka asli mood dikh raha hai." },
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
          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-slate-50 transition-colors shadow-2xl flex items-center gap-3 mx-auto hover:scale-105 transform">
            <Smartphone size={26} /> Download Janmat Bharat App
          </button>
          <p className="mt-5 text-blue-200 text-sm uppercase tracking-wide">Available soon on Google Play & Apple App Store</p>
        </div>
      </section>
    </div>
  );
};
