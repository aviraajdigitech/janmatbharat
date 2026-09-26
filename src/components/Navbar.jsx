import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Janmat Bharat Logo" className="w-10 h-10 object-contain rounded-xl shadow-sm" />
            <Link to="/" className="text-2xl font-extrabold text-slate-800 tracking-tight">
              Janmat <span className="text-saffron-600">Bharat</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/history" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Political History</Link>
            <Link to="/evm-security" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">EVM Security</Link>
            <Link to="/voter-awareness" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Voter Awareness</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <a href="https://play.google.com/store/apps/details?id=com.aviraajdigitech.janmatbharat" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200 flex items-center gap-2">
              <Smartphone size={18} />
              Download App
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Home</Link>
            <Link to="/history" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Political History</Link>
            <Link to="/evm-security" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">EVM Security</Link>
            <Link to="/voter-awareness" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Voter Awareness</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

