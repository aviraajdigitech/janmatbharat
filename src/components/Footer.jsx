import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ChevronRight, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1.5 rounded-xl shadow-sm">
                <img src="/logo.png" alt="Janmat Bharat Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[1.4rem] font-black text-white tracking-tighter leading-none">
                Janmat<span className="text-saffron-500">Bharat</span><span className="text-blue-500 text-2xl leading-[0]">.</span>
              </span>
            </div>
            <p className="text-[15px] text-slate-400 leading-relaxed max-w-sm mb-6">
              India's most trusted polling and opinion platform. Empowering voters with real-time election surveys and unbiased political insights.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Legal & Privacy</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="group flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="group flex items-center gap-2 hover:text-white transition-colors">
                  <ShieldCheck size={16} className="text-emerald-500" /> 
                  Data Deletion
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Contact Aviraaj Digitech</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:official@aviraajdigitech.com" className="group flex items-center gap-4 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Mail size={18} className="text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <span className="text-[15px]">official@aviraajdigitech.com</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                  <MapPin size={18} className="text-saffron-400" />
                </div>
                <span className="text-[15px]">India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 mt-16 pt-8 flex flex-col items-center text-center">
          <p className="text-[15px] text-slate-300 mb-3 flex items-center justify-center flex-wrap gap-1.5">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> in India by 
            <a href="https://aviraajdigitech.com" target="_blank" rel="noopener noreferrer" className="text-saffron-400 hover:text-white font-bold tracking-wide transition-colors ml-1">
              Aviraaj Digitech
            </a>
          </p>
          <p className="text-sm text-slate-500 mb-6">
            You are at the right place for India's most authentic polling platform
          </p>
          <p className="text-sm text-slate-600 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Aviraaj Digitech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
