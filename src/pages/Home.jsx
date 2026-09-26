import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Vote, ShieldCheck, BarChart3, Users, Landmark, Smartphone, Lock, Globe, ChevronRight, Activity } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Helmet>
        <title>Janmat Bharat | The Future of Democratic Polling</title>
        <meta name="description" content="India's most secure and comprehensive political polling application." />
      </Helmet>

      {/* Hero Section with 30% Blue Overlay on Majestic Flag */}
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
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
