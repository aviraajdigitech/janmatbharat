import React, { useEffect } from 'react';
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
