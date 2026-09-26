import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Lock, Eye, Trash2 } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Privacy Policy | Janmat Bharat</title>
        <meta name="description" content="Janmat Bharat Privacy Policy. We comply with Google Play Developer Policies. Learn how we protect your data." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100">
          <header className="mb-12 border-b border-gray-100 pb-10">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500 font-medium">Last Updated: September 2026 | Effective Date: September 2026</p>
          </header>

          <article className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-700 font-medium mb-8">
              Aviraaj Digitech ("we", "our", or "us") operates the Janmat Bharat mobile application (the "App"). We are deeply committed to protecting your privacy and ensuring that your personal data is handled securely and transparently, in strict compliance with Google Play Developer Policies and applicable Indian Data Protection laws.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mt-10 mb-4"><FileText className="text-blue-600" /> 1. Information We Collect</h2>
            <p>To provide you with a seamless and authentic voting experience, we collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> When you sign in using Google Authentication, we collect your Name, Email Address, and Profile Picture. This ensures the authenticity of voters and prevents bot voting.</li>
              <li><strong>Usage & Voting Data:</strong> We securely store your state, constituency, and your voting preferences (e.g., your participation in Daily Polls, Lok Sabha, and Vidhan Sabha elections).</li>
              <li><strong>Device Information:</strong> We collect non-identifiable device metrics (OS version, device model) for crash reporting and app optimization.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mt-10 mb-4"><Eye className="text-blue-600" /> 2. How We Use Your Information</h2>
            <p>Your data is used strictly for core app functionalities. We DO NOT sell, rent, or trade your personal data to any third-party marketing agencies, political parties, or data brokers.</p>
            <ul>
              <li>To authenticate your identity and ensure "One Citizen, One Vote".</li>
              <li>To display demographic-based aggregate election results (e.g., State-wise polling trends). Your individual vote is aggregated and completely anonymized in public reports.</li>
              <li>To provide personalized local election content based on your constituency.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mt-10 mb-4"><Lock className="text-blue-600" /> 3. Data Security & Encryption</h2>
            <p>
              We implement state-of-the-art security measures to protect your data. All data transmitted between your app and our servers is encrypted using industry-standard TLS/SSL protocols. We utilize Google Firebase's highly secure infrastructure to store user data.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mt-10 mb-4"><Trash2 className="text-blue-600" /> 4. Data Deletion & User Rights (Play Store Compliance)</h2>
            <p>
              Under Google Play's Data Safety policy, you have the absolute right to request the deletion of your account and all associated data.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4">
              <p className="font-bold mb-2">How to Request Deletion:</p>
              <p className="mb-0">You can request data deletion by sending an email from your registered email address to <strong>official@aviraajdigitech.com</strong> with the subject "Account Deletion Request". We guarantee that all your personal records, voting history, and profile data will be permanently wiped from our active servers within 72 hours.</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Third-Party Services</h2>
            <p>We may use third-party services that collect information used to identify you, specifically for essential infrastructure:</p>
            <ul>
              <li>Google Play Services (for App delivery and security)</li>
              <li>Google Firebase Authentication & Realtime Database</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Children's Privacy</h2>
            <p>
              Janmat Bharat is a political polling application intended for citizens of voting age (18+). We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-slate-900 mb-2">Contact Us</h3>
              <p className="text-slate-600">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>official@aviraajdigitech.com</strong>.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
