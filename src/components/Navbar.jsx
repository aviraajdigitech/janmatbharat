import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, ChevronRight, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Premium scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setExploreOpen(false);
  }, [location]);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobile accessibility: Focus trap, Escape key, and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          toggleBtnRef.current?.focus();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Political History', path: '/history' },
    { name: 'Voter Awareness', path: '/voter-awareness' },
    { name: 'About', path: '/contact' }
  ];

  const exploreLinks = [
    { name: 'Upcoming Elections', path: '/upcoming-elections' },
    { name: 'Know Your Constituency', path: '/constituency' },
    { name: 'Political History', path: '/history' },
    { name: 'How Polls Work', path: '/how-it-works' },
    { name: 'EVM & Election Technology', path: '/evm-security' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
            : 'bg-white/95 backdrop-blur-md border-b border-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                <img src="/assets/images/logo.webp" alt="Janmat Bharat Logo" className="w-6 h-6 md:w-7 md:h-7 object-contain" onError={(e) => { e.target.src = '/logo.webp' }} />
              </div>
              <Link to="/" className="text-[1.2rem] md:text-[1.3rem] font-black text-slate-900 tracking-tighter leading-none shrink-0" aria-label="Janmat Bharat Home">
                Janmat<span className="text-saffron-500">Bharat</span><span className="text-blue-600 text-2xl leading-[0]">.</span>
              </Link>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-1 ml-4 xl:ml-8 flex-1 justify-center">
              {/* First two links */}
              {navLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`px-3 xl:px-4 py-2 rounded-full text-[13px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Explore Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setExploreOpen(!exploreOpen)}
                  onMouseEnter={() => setExploreOpen(true)}
                  aria-expanded={exploreOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-full text-[13px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    exploreOpen ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Explore <ChevronDown size={14} className={`transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {exploreOpen && (
                  <div 
                    onMouseLeave={() => setExploreOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2"
                  >
                    <div className="py-2">
                      {exploreLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setExploreOpen(false)}
                          className={`block px-5 py-3 text-sm font-bold transition-colors ${
                            location.pathname === link.path 
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining links */}
              {navLinks.slice(2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`px-3 xl:px-4 py-2 rounded-full text-[13px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button (Always Right) */}
            <div className="hidden lg:flex items-center justify-end shrink-0 ml-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.indian.vote.machine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Smartphone size={16} className="relative z-10" />
                <span className="relative z-10 tracking-wide">Download App</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center shrink-0">
              <button 
                ref={toggleBtnRef}
                onClick={() => setIsOpen(!isOpen)} 
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                className="p-3 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mobile Menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`lg:hidden fixed left-0 right-0 top-[60px] z-[60] bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-60px)] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center justify-between px-5 py-4 min-h-[48px] rounded-2xl text-[15px] font-bold transition-all ${
                location.pathname === link.path 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name}
              <ChevronRight size={18} className={location.pathname === link.path ? 'text-white/50' : 'text-slate-400'} />
            </Link>
          ))}
          
          <div className="pt-4 mt-4 border-t border-slate-100">
            <p className="px-5 text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Explore More</p>
            {exploreLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between px-5 py-4 min-h-[48px] rounded-2xl text-[14px] font-bold transition-all mb-2 ${
                  location.pathname === link.path 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 pb-2">
            <a 
              href="https://play.google.com/store/apps/details?id=com.indian.vote.machine" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full px-5 py-4 min-h-[52px] text-[15px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform"
            >
              <Smartphone size={18} />
              Download Janmat Bharat App
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
