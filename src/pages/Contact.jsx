import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // WEB3FORMS INTEGRATION
      // The user needs to replace this key with their actual Web3Forms access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '56633a5d-3c5c-4bfc-a5ba-fcbb4324c074', 
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
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
      <Helmet>
        <title>Contact Us | Janmat Bharat</title>
        <meta name="description" content="Get in touch with the Janmat Bharat team for support, press inquiries, or business partnerships." />
      </Helmet>

      {/* Hero Header */}
      <div className="text-center px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Have questions about our polling data, need app support, or want to partner with us? We're here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-500 mb-4 text-sm font-medium">For press, partnerships, and general support inquiries.</p>
              <a href="mailto:official@aviraajdigitech.com" className="text-blue-600 font-bold hover:text-blue-700">official@aviraajdigitech.com</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:border-saffron-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-saffron-50 text-saffron-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
              <p className="text-slate-500 mb-4 text-sm font-medium">Aviraaj Digitech<br/>India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600 font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="How can we help?" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" 
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                      <AlertCircle size={20} />
                      <span className="font-medium text-sm">Failed to send message. Please ensure you have added your Web3Forms Access Key in the code.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed text-white' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/25 active:scale-[0.98]'}`}
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
