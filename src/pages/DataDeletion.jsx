import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Trash2, ShieldCheck, Mail, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const DataDeletion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '56633a5d-3c5c-4bfc-a5ba-fcbb4324c074',
          subject: 'URGENT: Account Data Deletion Request - Janmat Bharat',
          from_name: formData.name,
          ...formData
        })
      });

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', reason: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>Account & Data Deletion | Janmat Bharat</title>
        <meta name="description" content="Request permanent deletion of your Janmat Bharat account and all associated personal data." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6 shadow-sm border border-red-200">
            <Trash2 size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Data Deletion Request</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            You have full control over your data. Follow the instructions below to permanently delete your account and all associated voting data from our secure servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-500" /> What Happens Next?
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex gap-2"><span className="text-slate-400">1.</span> Your request is logged immediately.</li>
                <li className="flex gap-2"><span className="text-slate-400">2.</span> Our automated systems process the deletion within 7-30 days.</li>
                <li className="flex gap-2"><span className="text-slate-400">3.</span> Your mobile number, Device ID hash, and any votes cast are permanently wiped.</li>
              </ul>
            </div>
            
            <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <Mail size={20} className="text-blue-200" /> Manual Request
              </h3>
              <p className="text-blue-100 text-sm mb-4 font-medium leading-relaxed">
                Alternatively, you can email us directly from your registered email address with the subject "Data Deletion".
              </p>
              <a href="mailto:official@aviraajdigitech.com" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm block text-center hover:bg-blue-50 transition-colors">
                official@aviraajdigitech.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Submit Deletion Form</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center animate-fade-in">
                  <CheckCircle2 size={60} className="mx-auto text-green-500 mb-4" />
                  <h4 className="text-2xl font-black text-green-900 mb-2">Request Received</h4>
                  <p className="text-green-800 font-medium">Your data deletion request has been submitted successfully. We will process this and permanently remove your data.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-green-700 font-bold hover:underline">Submit another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Registered Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Reason for Deletion</label>
                    <textarea 
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium resize-none"
                      placeholder="Please tell us why you are leaving..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-bold flex items-center gap-2">
                      <AlertCircle size={18} /> Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Processing...'
                    ) : (
                      <><Send size={20} /> Request Permanent Deletion</>
                    )}
                  </button>
                  
                  <div className="flex items-start gap-2 text-xs text-slate-500 font-medium mt-4">
                    <Info size={14} className="flex-shrink-0 mt-0.5 text-slate-400" />
                    <p>By submitting this form, you confirm that you own the account associated with the provided details. This action is irreversible.</p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
