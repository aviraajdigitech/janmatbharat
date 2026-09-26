import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Vote, ShieldCheck, BarChart3, Users, Landmark, Smartphone, Lock, Globe, ChevronRight, Activity, TrendingUp, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import { pmHistory } from '../data/historyData';

export const Home = () => {
  // Reverse the history to show newest first
  const reversedHistory = [...pmHistory].reverse();

  // Simple state for FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "क्या मेरा वोट सच में गुप्त (Anonymous) है?",
      a: "बिल्कुल! हम 256-bit बैंक-ग्रेड एन्क्रिप्शन (Encryption) और ज़ीरो-नॉलेज (Zero-Knowledge) आर्किटेक्चर का इस्तेमाल करते हैं। आपका वोट आपके व्यक्तिगत पहचान (नाम या नंबर) से कभी नहीं जोड़ा जाता। यहाँ तक कि हमारे डेवलपर्स भी नहीं जान सकते कि आपने किसे वोट दिया है।"
    },
    {
      q: "क्या कोई फर्जी अकाउंट (Fake Account) बनाकर कई बार वोट कर सकता है?",
      a: "नहीं।"
    },
    {
      q: "क्या जनमत भारत किसी राजनीतिक पार्टी (Political Party) से जुड़ा है?",
      a: "बिल्कुल नहीं। जनमत भारत एक 100% स्वतंत्र (Independent) और तटस्थ (Neutral) तकनीकी प्लेटफॉर्म है। हमारा एकमात्र उद्देश्य भारतीय लोकतंत्र में पारदर्शिता लाना और जनता के असली मिजाज को सामने रखना है।"
    },
    {
      q: "क्या मैं अपना दिया हुआ वोट बाद में बदल सकता हूँ?",
      a: "हाँ! राजनीति समय के साथ बदलती है, और हमारी ऐप भी। अगर किसी नेता या सरकार के काम से आपका विचार बदलता है, तो आप ऐप में जाकर अपना वोट अपडेट कर सकते हैं। लाइव चार्ट्स तुरंत आपके नए फैसले को दर्शाने लगेंगे।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Helmet>
        <title>Janmat Bharat | The Future of Democratic Polling</title>
        <meta name="description" content="India's most secure and comprehensive political polling application." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/majestic_flag.jpg')" }}
        />
        <div className="absolute inset-0 z-10 bg-blue-900/30" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl">
            <Activity size={18} className="text-saffron-400" />
            <span className="text-sm uppercase tracking-wider">India's #1 Digital Polling Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
            Awaaz Aapki. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-white to-green-400">
              Faisla Desh Ka.
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg mb-10">
            Janmat Bharat is not just an app; it's a digital revolution. Experience 100% secure, transparent, and deep political polling right from your smartphone. Before the EVM decides, let the nation know your choice.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-full font-extrabold text-lg transition-all shadow-lg hover:shadow-saffron-500/30 flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
              <Smartphone size={24} />
              Download App Now
            </button>
            <Link to="/history" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Landmark size={24} />
              Read Political History
            </Link>
          </div>
        </div>
      </section>

      {/* Live Trust Metrics Section */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-blue-600 mb-1">543</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider">Lok Sabha Seats Covered</p>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-saffron-500 mb-1">100%</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider">Verified Authentic Users</p>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold text-green-500 mb-1">256-bit</h4>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-wider">Bank-Grade Encryption</p>
          </div>
        </div>
      </section>

      {/* NEW: Live Trend Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 text-saffron-600 font-bold tracking-widest uppercase mb-4 bg-saffron-100 px-4 py-1.5 rounded-full">
              <TrendingUp size={18} /> Live Sneak Peek
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Current National Mood</h3>
            <p className="text-lg text-slate-600">Get a glimpse of the powerful data analytics available inside the Janmat Bharat app. Real-time updates driven by verified citizens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Chart 1: Election Projection */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5"><BarChart3 size={100} /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Projected Lok Sabha Sentiment (Simulated)</h4>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-saffron-500"></div> NDA (Alliance)</span>
                    <span>42%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-saffron-500 h-3 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> I.N.D.I.A (Alliance)</span>
                    <span>38%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-400"></div> Others / Undecided</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-slate-400 h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart 2: Top Issues */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5"><Users size={100} /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Top Issues Impacting Youth Vote</h4>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span>1. Employment & Job Creation</span>
                    <span className="text-indigo-600">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-indigo-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span>2. Inflation & Cost of Living</span>
                    <span className="text-red-500">52%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span>3. Infrastructure & Development</span>
                    <span className="text-green-500">45%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM History Showcase Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-saffron-600 tracking-widest uppercase mb-2">The Digital Encyclopedia</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Explore India's Leadership</h3>
            <p className="text-lg text-slate-600">
              We don't just predict the future; we archive the past. Click on any Prime Minister below to read an unbiased, highly-researched history of their exact term in office.
            </p>
          </div>

          {/* Horizontal Scrolling Avatar List */}
          <div className="flex overflow-x-auto pb-10 pt-4 gap-6 snap-x flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {reversedHistory.map((pm) => (
              <Link 
                to={`/history/${pm.id}`} 
                key={pm.id} 
                className="snap-start shrink-0 w-64 bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                  <img 
                    src={pm.image} 
                    alt={pm.pm_name_en} 
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }}
                  />
                </div>
                <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs uppercase mb-3 border border-blue-200">
                  {pm.period_en}
                </div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {pm.pm_name_en}
                </h4>
                <p className="text-sm text-slate-500 font-medium line-clamp-2">
                  {pm.term_en}
                </p>
                <div className="mt-4 text-saffron-500 font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Read History <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/history" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
              <Landmark size={18} />
              View Full Political History
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Overview (Expanded 6 Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Inside The App</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Everything You Need to Understand Indian Politics</h3>
            <p className="text-lg text-slate-600">Janmat Bharat equips every citizen with deep analytics, historical data, and a secure platform to cast mock votes ahead of the real elections.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Vote size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3-Tier Voting System</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Express your political choice at every level of governance. Vote for your local MLA, your regional MP, and ultimately, your choice for the Next Prime Minister of India.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-saffron-50 rounded-2xl flex items-center justify-center text-saffron-500 mb-6 group-hover:scale-110 transition-transform">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Deep Political Encyclopedia</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Dive into our highly researched, Wikipedia-grade history section. Read unbiased, term-by-term analyses of every Indian Prime Minister from 1947 to the present day.</p>
              <Link to="/history" className="text-saffron-600 font-bold flex items-center gap-1 hover:text-saffron-700">Explore History <ChevronRight size={16}/></Link>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Live Polling Analytics</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Watch democracy in action with our stunning real-time charts. Filter data by state, constituency, and demographics to see exactly what the nation is thinking.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Anonymous & Safe</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Your political opinion is strictly yours. We use advanced zero-knowledge architecture to ensure your mock vote cannot be traced back to your personal identity.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Anti-Fraud Technology</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Our strict "One Device, One Vote" policy and mobile OTP verification ensure that our polling data is free from bots, IT cell manipulation, and fake accounts.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Youth Empowerment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">We actively educate first-time voters on EVM security, the importance of VVPAT, and their constitutional rights to ensure a stronger, more aware electorate.</p>
              <Link to="/voter-awareness" className="text-indigo-600 font-bold flex items-center gap-1 hover:text-indigo-700">Learn More <ChevronRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">How Janmat Bharat Works</h2>
              <p className="text-lg text-slate-600 mb-10">We have designed the app to be as simple as sending a message, yet as secure as a bank vault. Join millions of Indians in 4 simple steps.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-extrabold flex items-center justify-center flex-shrink-0 text-xl border-2 border-blue-200 shadow-sm">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Download & Register</h4>
                    <p className="text-slate-600">Get the app from the Play Store. Verify your mobile number securely via OTP to prevent duplicate voting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-extrabold flex items-center justify-center flex-shrink-0 text-xl border-2 border-blue-200 shadow-sm">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Select Your Constituency</h4>
                    <p className="text-slate-600">Choose your state and local constituency. This allows us to build hyper-local, highly accurate polling charts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron-100 text-saffron-600 font-extrabold flex items-center justify-center flex-shrink-0 text-xl border-2 border-saffron-200 shadow-sm">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Cast Your Mock Vote</h4>
                    <p className="text-slate-600">Tap on your preferred party or candidate. Your choice is encrypted and sent to our secure Firebase servers instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-extrabold flex items-center justify-center flex-shrink-0 text-xl border-2 border-green-200 shadow-sm">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">View Live Results</h4>
                    <p className="text-slate-600">Unlock access to our massive database of live charts, showing exactly which party is trending in real-time across India.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl relative">
                <div className="absolute top-0 right-10 w-24 h-24 bg-saffron-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
                <div className="bg-slate-800 rounded-[2.5rem] p-8 relative z-10 border border-slate-700 aspect-[4/5] flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Vote size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-4">India's Pulse</h3>
                  <p className="text-slate-400 text-lg mb-8">The most intuitive and beautiful polling interface ever designed for the Indian electorate.</p>
                  <div className="w-full bg-slate-700/50 rounded-full h-4 mb-4 overflow-hidden">
                    <div className="bg-saffron-500 h-full w-2/3"></div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-4 mb-4 overflow-hidden">
                    <div className="bg-green-500 h-full w-1/3"></div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Voices of India (Testimonials) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MessageSquare size={48} className="mx-auto text-blue-300 mb-6" />
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Voices of India</h3>
            <p className="text-lg text-slate-600">See what early users and politically aware citizens are saying about the Janmat Bharat platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex text-saffron-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-slate-700 text-lg font-medium italic mb-6 leading-relaxed">
                "This is exactly the digital revolution India needed! The depth of the political encyclopedia and the live analytics feature are completely mind-blowing."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">A</div>
                <div>
                  <h5 className="font-bold text-slate-900">Aman Kumar</h5>
                  <p className="text-sm text-slate-500 flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Verified Voter, Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex text-saffron-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-slate-700 text-lg font-medium italic mb-6 leading-relaxed">
                "As a political science student, the History encyclopedia feature is unmatched. I love how I can read about every PM's term completely unbiased. Great initiative!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-700 font-bold text-xl">A</div>
                <div>
                  <h5 className="font-bold text-slate-900">Ananya Patel</h5>
                  <p className="text-sm text-slate-500 flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> First-Time Voter, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex text-saffron-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-slate-700 text-lg font-medium italic mb-6 leading-relaxed">
                "Bhai, ye app toh sach me kamaal hai! IT cell wale fake vote nahi daal sakte kyunki OTP mandatory hai. Yahan UP ka asli mood dikh raha hai."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">P</div>
                <div>
                  <h5 className="font-bold text-slate-900">Pawan</h5>
                  <p className="text-sm text-slate-500 flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Verified Voter, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle size={48} className="mx-auto text-saffron-500 mb-6" />
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-slate-600">Got questions about your security and privacy? We value full transparency.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-bold text-lg text-slate-900">{faq.q}</span>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe size={800} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Make Your Voice Heard?</h2>
          <p className="text-xl text-blue-100 mb-10">Join the thousands of citizens already using Janmat Bharat to predict the next government.</p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-slate-50 transition-colors shadow-2xl flex items-center gap-3 mx-auto transform hover:scale-105">
            <Smartphone size={28} />
            Download Janmat Bharat App
          </button>
          <p className="mt-6 text-blue-200 text-sm font-medium tracking-wide uppercase">Available soon on Google Play Store & Apple App Store</p>
        </div>
      </section>
    </div>
  );
};
