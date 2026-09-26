import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Janmat Bharat Logo" className="w-8 h-8 object-contain rounded-lg shadow-sm bg-white" />
              <span className="text-xl font-bold text-white tracking-tight">Janmat Bharat</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              India's most trusted polling and opinion platform. Empowering voters with real-time election surveys and political insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal & Privacy</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/data-deletion" className="hover:text-white transition-colors flex items-center gap-2"><ShieldCheck size={16} className="text-green-400" /> Data Deletion Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Aviraaj Digitech</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:official@aviraajdigitech.com" className="hover:text-white">official@aviraajdigitech.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p className="mb-2">
            Built with ❤️ in India by <a href="https://aviraajdigitech.com" target="_blank" rel="noopener noreferrer" className="text-saffron-500 hover:text-saffron-400 font-bold transition-colors">Aviraaj Digitech</a>
          </p>
          <p className="text-xs text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Janmat Bharat (Janmat App) is a flagship product of Aviraaj Digitech (also searched as Aviraj Digitech). Whether you search for Janmat, VoteBharat, or Aviraj, you are at the right place for India's most authentic polling platform. We do not sell your personal data.
          </p>
          <p>&copy; {new Date().getFullYear()} Aviraaj Digitech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
