const fs = require('fs');
const path = require('path');

const privacyContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, AlertTriangle } from 'lucide-react';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>Privacy Policy | Janmat Bharat</title>
        <meta name="description" content="Read our comprehensive Privacy Policy to understand how Janmat Bharat protects your data, ensures anonymous voting, and complies with legal guidelines." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-blue-600 text-white p-10 md:p-14 text-center">
            <ShieldCheck size={56} className="mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
            <p className="text-lg text-blue-100 font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="p-8 md:p-14 prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-a:text-blue-600">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10">
              <h3 className="text-xl font-bold text-blue-900 mt-0 flex items-center gap-2">
                <Lock size={20} /> Our Core Commitment
              </h3>
              <p className="text-blue-800 mb-0 font-medium">
                Janmat Bharat acts solely as an independent digital opinion polling platform (survey platform) operated by Aviraaj Digitech. We are fundamentally committed to protecting your privacy. We do not sell your personal data, and your voting preferences are strictly anonymized.
              </p>
            </div>

            <h2>1. Information We Collect</h2>
            <p>To ensure a secure, "1 Mobile = 1 Vote" environment and prevent electoral fraud on our platform, we collect the following:</p>
            <ul>
              <li><strong>Device Information:</strong> We securely hash your Device ID (e.g., Android ID / Advertising ID) to prevent duplicate accounts and multiple votes from the same physical device.</li>
              <li><strong>Account Information:</strong> Name, phone number, or email address provided during login (via Firebase Authentication or similar secure providers).</li>
              <li><strong>Demographic Data:</strong> State and Constituency information to accurately map opinion polls to respective regions.</li>
              <li><strong>Polling Data:</strong> Your submitted votes and survey responses, which are completely decoupled from your personal identity before public analytics are generated.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your data is used strictly for the following purposes:</p>
            <ul>
              <li>To maintain the integrity of our digital opinion polls (Anti-Fraud & Anti-Spam).</li>
              <li>To display aggregated, anonymous national and state-level political trends.</li>
              <li>To improve user experience and platform security.</li>
            </ul>
            <p><strong>Strict Adherence to Google Play Policies:</strong> We explicitly comply with the Google Play Store's policies regarding Deceptive Behavior and Misrepresentation. We do not use your data to manipulate actual government elections, nor do we claim to influence them.</p>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>We <strong>do not sell, rent, or trade</strong> your personal information to third parties, political parties, or marketing agencies. We may share anonymized, aggregated statistical data (e.g., "45% of voters in State X prefer Party Y") publicly, which cannot be traced back to any individual user.</p>

            <h2>4. Security Measures</h2>
            <p>All data transmitted between the Janmat Bharat app/website and our servers is encrypted using industry-standard protocols (SSL/TLS). Your voting data is stored in secure, cloud-based databases with strict access controls.</p>

            <h2>5. Your Rights (Data Deletion)</h2>
            <p>You have the absolute right to request the complete deletion of your account and associated data. If you choose to delete your account, your data will be permanently erased from our active databases within 30 days. Please visit our <a href="/data-deletion">Data Deletion page</a> to submit a request.</p>

            <div className="bg-saffron-50 border border-saffron-200 p-6 rounded-xl mt-10">
              <h3 className="text-lg font-bold text-saffron-900 mt-0 flex items-center gap-2">
                <AlertTriangle size={20} /> Disclaimer Regarding Opinion Polls
              </h3>
              <p className="text-saffron-800 mb-0 text-sm leading-relaxed">
                Janmat Bharat conducts digital surveys and opinion polls. In accordance with the Election Commission of India (ECI) guidelines and Section 126A of the Representation of the People Act, 1951, we may suspend the publication of live polling results during mandated "blackout periods" (usually 48 hours before the conclusion of actual polling).
              </p>
            </div>

            <h2>6. Contact Us</h2>
            <p>For any privacy-related queries, please contact our Grievance Officer at:<br/>
            <strong>Email:</strong> official@aviraajdigitech.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const termsContent = `import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertOctagon } from 'lucide-react';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <Helmet>
        <title>Terms & Conditions | Janmat Bharat</title>
        <meta name="description" content="Read the Terms and Conditions for using Janmat Bharat, an independent public opinion polling platform." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 text-white p-10 md:p-14 text-center">
            <FileText size={56} className="mx-auto mb-6 text-slate-400" />
            <h1 className="text-4xl md:text-5xl font-black mb-4">Terms & Conditions</h1>
            <p className="text-lg text-slate-400 font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="p-8 md:p-14 prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900">
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10">
              <h3 className="text-xl font-bold text-red-900 mt-0 flex items-center gap-2">
                <AlertOctagon size={20} /> Crucial Disclaimer
              </h3>
              <p className="text-red-800 font-medium mb-0 leading-relaxed">
                <strong>Janmat Bharat is NOT a Government Application.</strong> We are an independent, private digital opinion polling and survey platform operated by Aviraaj Digitech. We are not affiliated with, endorsed by, or connected to the Election Commission of India (ECI) or any state/central government entity. Participating in polls on this platform does NOT constitute casting an official vote in any actual election.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing the Janmat Bharat website or downloading our mobile application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use immediately.</p>

            <h2>2. Purpose of the Platform</h2>
            <p>Janmat Bharat is a platform for citizens to express their political opinions through mock polls and surveys. The analytics and results displayed are for informational and research purposes only, reflecting the sentiment of our user base, and are not official election outcomes.</p>

            <h2>3. User Conduct and Anti-Fraud Policy</h2>
            <p>To maintain the integrity of our surveys, you agree to the following:</p>
            <ul>
              <li>You will only create one account per individual and use one device to cast your vote (1 Mobile = 1 Vote).</li>
              <li>You will not use emulators, bots, automated scripts, or VPNs to manipulate polling numbers.</li>
              <li>You will not engage in hate speech, harassment, or abusive behavior in any interactive sections of the platform.</li>
            </ul>
            <p>Violation of these rules will result in immediate permanent suspension of your account and invalidation of your data.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content, designs, logos, and analytics generated by the platform are the exclusive intellectual property of Aviraaj Digitech. You may not scrape, copy, or redistribute our proprietary data without explicit written permission.</p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>While we strive for high accuracy in our demographic mapping and data representation, the platform is provided "AS IS". We make no guarantees regarding the absolute accuracy, reliability, or completeness of the opinion polls. Political sentiment is fluid and the data represents a specific sample size.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Under no circumstances shall Aviraaj Digitech be held liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform, or your reliance on the survey data provided.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the platform following any changes indicates your acceptance of the new terms.</p>

            <h2>8. Contact Information</h2>
            <p>For legal inquiries or questions regarding these terms, please contact:<br/>
            <strong>Email:</strong> official@aviraajdigitech.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const dataDeletionContent = `import React, { useState, useEffect } from 'react';
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
`;

// Write the files
fs.writeFileSync(path.join(__dirname, 'src/pages/PrivacyPolicy.jsx'), privacyContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/Terms.jsx'), termsContent);
fs.writeFileSync(path.join(__dirname, 'src/pages/DataDeletion.jsx'), dataDeletionContent);

// Update App.jsx to include Terms route
let appContent = fs.readFileSync(path.join(__dirname, 'src/App.jsx'), 'utf8');
if (!appContent.includes('Terms')) {
    appContent = appContent.replace("import { PrivacyPolicy } from './pages/PrivacyPolicy';", "import { PrivacyPolicy } from './pages/PrivacyPolicy';\nimport { Terms } from './pages/Terms';");
    appContent = appContent.replace('<Route path="/privacy" element={<PrivacyPolicy />} />', '<Route path="/privacy" element={<PrivacyPolicy />} />\n            <Route path="/terms" element={<Terms />} />');
    fs.writeFileSync(path.join(__dirname, 'src/App.jsx'), appContent);
}

// Update Footer.jsx to include Terms link
let footerContent = fs.readFileSync(path.join(__dirname, 'src/components/Footer.jsx'), 'utf8');
if (!footerContent.includes('to="/terms"')) {
    footerContent = footerContent.replace(
        '<Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>',
        '<Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>\n              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>'
    );
    fs.writeFileSync(path.join(__dirname, 'src/components/Footer.jsx'), footerContent);
}

console.log("Success! Updated Privacy Policy, Data Deletion, and created Terms & Conditions.");
