import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Megaphone, Download, Image as ImageIcon, FileText, Mail, Smartphone, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PressKit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <SEO 
        title="Press & Media Kit | Janmat Bharat"
        description="Official press and media kit for Janmat Bharat. Download logos, brand assets, app screenshots, and read our company profile for media coverage."
        canonicalPath="/press"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-14 mb-10 shadow-xl border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>
          <Megaphone size={48} className="mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Press & Media Kit</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Everything you need to write about Janmat Bharat. Official brand assets, company profile, and media contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About the Platform */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-500" /> Platform Overview
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>
                  <strong>Janmat Bharat</strong> is an independent digital opinion polling platform built exclusively for Indian citizens. It serves as a continuous barometer of the public mood, bridging the gap between traditional election cycles.
                </p>
                <p>
                  Our ecosystem consists of an educational website (janmatbharat.com) and a secure Android mobile application. The platform ensures polling integrity by employing a strict "1 Phone = 1 Vote" device-binding architecture, eliminating duplicate and bot-driven voting.
                </p>
              </div>
            </div>

            {/* About the Company */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="text-saffron-500" /> Company Profile
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>
                  Janmat Bharat is developed and operated by <strong>Aviraaj Digitech</strong>, an independent technology company based in India. We specialize in building secure, scalable, and socially impactful digital platforms.
                </p>
                <p>
                  <strong>Independence:</strong> We operate completely independently and are not affiliated with the Election Commission of India (ECI), any government body, or any political party.
                </p>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Brand Identity</h2>
              <p className="text-slate-600 font-medium mb-6">When representing Janmat Bharat digitally or in print, please adhere to our core brand colors.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <div className="h-24 bg-blue-600 w-full"></div>
                  <div className="p-4 bg-slate-50">
                    <div className="font-bold text-slate-900 text-sm">Janmat Blue</div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">#2563EB</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <div className="h-24 bg-[#f97316] w-full"></div>
                  <div className="p-4 bg-slate-50">
                    <div className="font-bold text-slate-900 text-sm">Bharat Saffron</div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">#F97316</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <div className="h-24 bg-slate-900 w-full"></div>
                  <div className="p-4 bg-slate-50">
                    <div className="font-bold text-slate-900 text-sm">Dark Slate</div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">#0F172A</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar / Assets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Download Assets */}
            <div className="bg-blue-50 p-8 rounded-3xl shadow-sm border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Download size={20} /> Download Assets
              </h3>
              
              <div className="space-y-3">
                <a 
                  href="/logo.webp" 
                  download="Janmat_Bharat_Logo.webp"
                  className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-blue-100/50 group"
                >
                  <div className="flex items-center gap-3">
                    <ImageIcon size={18} className="text-blue-500" />
                    <span className="font-bold text-slate-700 text-sm">Official Logo</span>
                  </div>
                  <Download size={16} className="text-slate-400 group-hover:text-blue-600" />
                </a>

                <a 
                  href="/favicon.webp" 
                  download="Janmat_Bharat_Icon.webp"
                  className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-blue-100/50 group"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone size={18} className="text-blue-500" />
                    <span className="font-bold text-slate-700 text-sm">App Icon</span>
                  </div>
                  <Download size={16} className="text-slate-400 group-hover:text-blue-600" />
                </a>

                {/* Placeholder for future screenshots kit */}
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-xl border border-slate-200 opacity-60">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-slate-500" />
                    <span className="font-bold text-slate-500 text-sm">Press Screenshots</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded">Soon</span>
                </div>
              </div>
            </div>

            {/* Media Contact */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <Mail size={24} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Media Enquiries</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                For press interviews, comments, or detailed coverage requests, please contact our media team.
              </p>
              <a href="mailto:official@aviraajdigitech.com?subject=Press%20Enquiry" className="inline-block bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold transition-colors text-sm hover:bg-slate-100 w-full text-center">
                Email Media Team
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
