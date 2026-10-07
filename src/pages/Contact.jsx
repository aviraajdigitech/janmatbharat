import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, Smartphone, ShieldCheck, Megaphone, Briefcase } from 'lucide-react';

const supportCategories = [
  {
    id: 'App Support',
    title: 'App Support',
    desc: 'Problems with login, voting, or your account',
    icon: <Smartphone size={24} />
  },
  {
    id: 'Privacy & Data',
    title: 'Privacy & Data',
    desc: 'Privacy questions or data deletion requests',
    icon: <ShieldCheck size={24} />
  },
  {
    id: 'Press & Media',
    title: 'Press & Media',
    desc: 'Media enquiries, interviews, and press kits',
    icon: <Megaphone size={24} />
  },
  {
    id: 'Business / Partnerships',
    title: 'Business & Partnerships',
    desc: 'General enquiries and B2B collaborations',
    icon: <Briefcase size={24} />
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'App Support',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (categoryId) => {
    setFormData({ ...formData, category: categoryId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '56633a5d-3c5c-4bfc-a5ba-fcbb4324c074', 
          subject: `Janmat Bharat Support: ${formData.category}`,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', category: 'App Support', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <SEO 
        title="Support Center | Janmat Bharat"
        description="Professional support center for Janmat Bharat. Get help with app issues, privacy requests, press enquiries, or business partnerships."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <div className="text-center px-4 mb-14">
        <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          <MessageSquare size={16} /> Support Center
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">How can we help you?</h1>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Choose a category below to route your message to the correct department for faster resolution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              
              {status === 'success' ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-slate-600 font-medium mb-8 max-w-sm mx-auto">
                    Thank you for contacting our {formData.category} team. We will get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-10">
                  
                  {/* Step 1: Category Selection */}
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">1. Select a Topic</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {supportCategories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-300 \${
                            formData.category === cat.id 
                              ? 'border-blue-600 bg-blue-50/50 shadow-md ring-4 ring-blue-600/10' 
                              : 'border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`mt-1 p-2 rounded-xl \${formData.category === cat.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                            {cat.icon}
                          </div>
                          <div>
                            <div className={`font-bold \${formData.category === cat.id ? 'text-blue-900' : 'text-slate-700'}`}>
                              {cat.title}
                            </div>
                            <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                              {cat.desc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Details */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">2. Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-8">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none font-medium"
                        placeholder="Please describe your issue or enquiry in detail..."
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3 font-medium text-sm">
                        <AlertCircle size={20} className="shrink-0" />
                        There was an error sending your message. Please try again later.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-lg transition-all \${
                        status === 'loading' 
                          ? 'bg-slate-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.99]'
                      }`}
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Submit Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Mail size={24} className="text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
              <p className="text-slate-400 mb-6 text-sm font-medium leading-relaxed">
                Prefer to email us directly? You can reach our central inbox for immediate routing.
              </p>
              <a href="mailto:official@aviraajdigitech.com" className="text-blue-400 font-bold hover:text-blue-300 text-lg transition-colors flex items-center gap-2">
                official@aviraajdigitech.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-saffron-50 text-saffron-500 flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-1">
                Aviraaj Digitech
              </p>
              <p className="text-slate-400 text-sm font-medium">
                India
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
