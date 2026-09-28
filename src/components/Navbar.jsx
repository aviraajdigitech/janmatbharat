import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Premium scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
        : 'bg-white/95 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}>
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100">
              <img src="/logo.webp" alt="Janmat Bharat" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
            </div>
            <Link to="/" className="text-[1.2rem] md:text-[1.3rem] font-black text-slate-900 tracking-tighter leading-none">
              Janmat<span className="text-saffron-500">Bharat</span><span className="text-blue-600 text-2xl leading-[0]">.</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', path: '/' },
              { name: 'Political History', path: '/history' },
              { name: 'EVM Security', path: '/evm-security' },
              { name: 'Voter Awareness', path: '/voter-awareness' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-3 py-1.5 rounded-full text-[12px] uppercase tracking-wider font-bold transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.indian.vote.machine" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 text-[13px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Smartphone size={14} className="relative z-10" />
              <span className="relative z-10 tracking-wide">Download App</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Political History', path: '/history' },
            { name: 'EVM Security', path: '/evm-security' },
            { name: 'Voter Awareness', path: '/voter-awareness' },
            { name: 'Contact', path: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`flex items-center justify-between px-5 py-4 rounded-2xl text-[15px] font-extrabold tracking-wide transition-all ${
                location.pathname === link.path 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
              <ChevronRight size={18} className={location.pathname === link.path ? 'text-white/70' : 'text-slate-300'} />
            </Link>
          ))}
          <div className="pt-6 pb-2">
            <a 
              href="https://play.google.com/store/apps/details?id=com.indian.vote.machine" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full px-6 py-4 text-[15px] tracking-wide font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-blue-900/20 transition-transform active:scale-95"
            >
              <Smartphone size={20} />
              Download Janmat Bharat App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
