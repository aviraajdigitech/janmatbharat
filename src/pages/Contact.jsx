import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, Building } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Contact Us | Janmat Bharat</title>
        <meta name="description" content="Get in touch with the Janmat Bharat team. Contact Aviraaj Digitech for support, business inquiries, and feedback." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-slate-600 font-medium">Have questions, feedback, or need support with the Janmat App? We are here to help. Reach out to the Aviraaj Digitech team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Support</h3>
                <p className="text-slate-500 text-sm mb-2">Our team responds within 24 hours.</p>
                <a href="mailto:official@aviraajdigitech.com" className="text-blue-600 font-semibold hover:underline">official@aviraajdigitech.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-saffron-50 text-saffron-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Headquarters</h3>
                <p className="text-slate-500 text-sm mb-2">Aviraaj Digitech</p>
                <p className="text-slate-700 font-medium">India</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">Are you a media agency, news channel, or political analyst looking for deep polling data insights? Partner with Janmat Bharat for enterprise API access.</p>
              <a href="mailto:official@aviraajdigitech.com" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                Contact Business Team
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
