import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Trash2, ShieldCheck, Mail, Send, CheckCircle2, AlertCircle, Info, Lock, Clock, FileWarning } from 'lucide-react';

export const DataDeletion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: '' });
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
        title="Data Deletion Request | Janmat Bharat"
        description="Submit a request to permanently delete your Janmat Bharat account and all associated personal data from our secure servers."
        canonicalPath="/data-deletion"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6 shadow-sm border border-red-200">
            <Trash2 size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Data Deletion Request</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            You have full control over your data. Submit this form to permanently delete your account and all associated personal data from our servers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Trust & Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-3">
                <ShieldCheck size={24} className="text-green-500" /> Trust & Privacy
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Info size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Why do we need this information?</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      We use these details <strong>only</strong> to accurately identify your account and process the deletion request securely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                    <Clock size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Expected Processing Time</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      All deletion requests are verified and processed within <strong>7 to 14 working days</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                    <Trash2 size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">What gets deleted?</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      Your registered email, personal device bindings, and any identifiable connections to your cast votes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
                    <FileWarning size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">What may be retained?</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      Where legally required, highly anonymized and aggregated statistical data (divorced from your identity) may be retained to maintain historical poll integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Mail size={20} className="text-blue-400" /> Manual Request
              </h3>
              <p className="text-slate-300 text-sm mb-6 font-medium leading-relaxed">
                If you prefer not to use this form, you can directly email our Data Protection Officer with the subject line <strong>"Data Deletion"</strong>.
              </p>
              <a href="mailto:official@aviraajdigitech.com" className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-bold transition-colors text-sm border border-white/10">
                official@aviraajdigitech.com
              </a>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 h-full">
              
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                <Lock className="text-slate-400" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Deletion Form</h2>
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-300 border border-green-200">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Request Submitted</h3>
                  <p className="text-slate-600 font-medium mb-6">
                    We have received your data deletion request. Our team will verify your details and process the deletion within the expected timeframe.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 border border-red-200 text-sm font-medium">
                      <AlertCircle size={20} className="shrink-0 mt-0.5" />
                      <p>Something went wrong submitting your request. Please try again or email us directly.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Registered Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                        placeholder="Email used to create account"
                      />
                      <p className="text-xs text-slate-500 font-medium mt-1">Must match the email used in the app.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">Reason for Deletion (Optional)</label>
                    <textarea 
                      name="reason"
                      rows="4" 
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none font-medium"
                      placeholder="Please tell us why you are leaving (this helps us improve)..."
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-xl flex items-start gap-3 border border-blue-100">
                    <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900 font-medium leading-relaxed">
                      By submitting this form, you acknowledge that account deletion is permanent and cannot be undone. All personal data will be wiped in accordance with our Privacy Policy.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full flex justify-center items-center gap-2 py-4 rounded-xl text-white font-bold text-lg transition-all \${
                      status === 'submitting' 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.99]'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Trash2 size={20} />
                        Permanently Delete My Data
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
