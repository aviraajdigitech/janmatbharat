import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trash2, Mail, Clock } from 'lucide-react';

export const DataDeletion = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <Helmet>
        <title>Data Deletion Policy | Janmat Bharat</title>
        <meta name="description" content="Request data deletion for your Janmat Bharat account. We process all deletion requests within 72 hours." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-8">
            <Trash2 size={32} />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Data Deletion Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              At Janmat Bharat, we deeply respect your privacy and data ownership. If you wish to permanently delete your account and all associated voting data from our servers, you can easily request an absolute deletion.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-blue-900 mb-2">
                <Clock size={20} />
                72-Hour Deletion Guarantee
              </h3>
              <p className="text-blue-800">
                Once we receive your email request from your registered email address, our automated systems and data officers will completely wipe your account, preferences, and demographic data from our database within 72 hours.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Request Data Deletion:</h3>
            <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-8">
              <li>Send an email to our official data protection desk at: <strong>official@aviraajdigitech.com</strong></li>
              <li>You <strong>must</strong> send the email from the exact same email address that you used to log into the Janmat Bharat app.</li>
              <li>Use the subject line: <strong>"Account Deletion Request"</strong>.</li>
              <li>We will send you a confirmation email once the deletion is complete.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What Data Gets Deleted?</h3>
            <p className="text-slate-600 mb-4">
              Upon processing your request, the following information is permanently erased and cannot be recovered:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Your Google Authentication UID and Email ID.</li>
              <li>Your state and constituency selections.</li>
              <li>Your voting history (Daily surveys, Lok Sabha, State elections).</li>
              <li>Any profile photos or custom names fetched during login.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
