import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, Cpu, Lock, CheckCircle, Database, ServerOff, Search } from 'lucide-react';

export const EVMSecurity = () => {
  const [lang, setLang] = useState('hi');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can Indian EVMs be hacked remotely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Indian EVMs are standalone machines. They do not have internet connectivity, Wi-Fi, Bluetooth, or any wireless communication module, making remote hacking technically impossible."
        }
      },
      {
        "@type": "Question",
        "name": "Is it possible to change the code inside an EVM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The microchip used in Indian EVMs is One-Time Programmable (OTP). Once the software is burnt into the chip at the manufacturing facility (BEL or ECIL), it cannot be rewritten, altered, or read by any external device."
        }
      },
      {
        "@type": "Question",
        "name": "What is VVPAT and how does it prevent EVM tampering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VVPAT stands for Voter Verifiable Paper Audit Trail. It prints a physical slip showing the candidate's serial number, name, and symbol for 7 seconds behind a glass window. This allows voters to verify their vote, and the slips can be counted in case of a dispute."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Can Indian EVMs Be Hacked? The Ultimate Reality Check | Janmat Bharat</title>
        <meta name="description" content="An in-depth analysis of Indian EVM machine security. Understand why EVM hacking is impossible, VVPAT verification, OTP chips, and standalone architecture. Read the complete guide." />
        <meta name="keywords" content="evm hack, evm hack possible, evm security, indian evm machine, election result app, voting poll, opinion poll, election tracking, Janmat Bharat" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Language Toggle */}
        <div className="flex justify-end mb-8 sticky top-24 z-40">
          <div className="bg-white/90 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-gray-200 flex gap-1">
            <button 
              onClick={() => setLang('hi')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${lang === 'hi' ? 'bg-saffron-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              हिंदी (Hindi)
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              English
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100">
          <header className="mb-12 border-b border-gray-100 pb-12 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
              <ShieldAlert size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              {lang === 'hi' ? 'क्या भारतीय EVM हैक हो सकती है? (EVM Hack Reality Check)' : 'Can Indian EVMs Be Hacked? Complete Reality Check'}
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              {lang === 'hi' 
                ? 'भारत के चुनाव आयोग (ECI) की EVM मशीनों की तकनीकी, प्रशासनिक और न्यायिक सच्चाई। जानिए क्यों दुनिया का सबसे बड़ा लोकतंत्र इन मशीनों पर भरोसा करता है।' 
                : 'The technical, administrative, and judicial truth behind the Election Commission of India\'s EVMs. Discover why the world\'s largest democracy trusts these machines.'}
            </p>
          </header>

          <article className="prose prose-lg prose-slate max-w-4xl mx-auto prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
            
            {/* Section 1: Introduction */}
            <section className="mb-16">
              <h2>{lang === 'hi' ? 'प्रस्तावना (Introduction)' : 'Introduction'}</h2>
              <p>
                {lang === 'hi'
                  ? 'हर चुनाव के बाद भारत में EVM (Electronic Voting Machine) हैक होने की खबरें सोशल मीडिया पर वायरल होती हैं। "EVM Hack", "EVM Tampering", और "EVM Hacking Possible" जैसे कीवर्ड्स (keywords) इंटरनेट पर ट्रेंड करने लगते हैं। लेकिन क्या सच में भारतीय EVM को हैक किया जा सकता है? क्या किसी पेन-ड्राइव, ब्लूटूथ, या वाई-फाई के ज़रिये वोट्स बदले जा सकते हैं? जनमत भारत (Janmat Bharat - India\'s Best Polling Opinion App) की इस विस्तृत रिपोर्ट में हम तकनीकी सबूतों के साथ इसका विश्लेषण करेंगे।'
                  : 'After every election in India, rumors about EVM (Electronic Voting Machine) hacking go viral on social media. Keywords like "EVM Hack", "EVM Tampering", and "EVM Hacking Possible" start trending across the internet. But can Indian EVMs truly be hacked? Can votes be altered using a pen drive, Bluetooth, or Wi-Fi? In this comprehensive report by Janmat Bharat (India\'s Best Polling Opinion App), we analyze the technical evidence to find the truth.'}
              </p>
            </section>

            {/* Section 2: Technical Architecture */}
            <section className="mb-16">
              <div className="bg-blue-50 p-8 rounded-3xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <ServerOff className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-blue-900 m-0">{lang === 'hi' ? '1. स्टैंडअलोन आर्किटेक्चर (No Internet / No Network)' : '1. Standalone Architecture (No Internet / No Network)'}</h3>
                </div>
                <p className="text-blue-800">
                  {lang === 'hi'
                    ? 'भारतीय EVM की सबसे बड़ी ढाल इसका "स्टैंडअलोन" होना है। दुनिया के कई देशों (जैसे अमेरिका) में वोटिंग मशीनें इंटरनेट से जुड़ी होती हैं, जिससे उन पर साइबर अटैक (Cyber Attack) का ख़तरा होता है। लेकिन भारत की मशीनें कैलकुलेटर की तरह होती हैं।'
                    : 'The biggest shield of the Indian EVM is its "standalone" nature. In many countries (like the USA), voting machines are connected to the internet, making them vulnerable to cyber attacks. However, Indian EVMs are effectively secure calculators.'}
                </p>
                <ul className="text-blue-800 mt-4 font-semibold">
                  <li>{lang === 'hi' ? 'कोई वाई-फाई (Wi-Fi) रिसीवर नहीं।' : 'No Wi-Fi receivers.'}</li>
                  <li>{lang === 'hi' ? 'कोई ब्लूटूथ (Bluetooth) चिप नहीं।' : 'No Bluetooth chips.'}</li>
                  <li>{lang === 'hi' ? 'कोई इंटरनेट या सिम-कार्ड (SIM) सपोर्ट नहीं।' : 'No Internet or SIM-card support.'}</li>
                  <li>{lang === 'hi' ? 'कोई USB पोर्ट नहीं जहाँ पेन-ड्राइव लगाई जा सके।' : 'No USB ports for external pen-drives.'}</li>
                </ul>
              </div>

              <div className="bg-saffron-50 p-8 rounded-3xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className="text-saffron-600" size={32} />
                  <h3 className="text-2xl font-bold text-saffron-900 m-0">{lang === 'hi' ? '2. वन-टाइम प्रोग्रामेबल चिप (OTP Microcontroller)' : '2. One-Time Programmable (OTP) Microcontroller'}</h3>
                </div>
                <p className="text-saffron-800">
                  {lang === 'hi'
                    ? 'EVM का दिमाग उसका माइक्रो-कंट्रोलर (Micro-controller) होता है। इसे BEL (Bharat Electronics Limited) और ECIL (Electronics Corporation of India Limited) जैसी उच्च सुरक्षा वाली सरकारी संस्थाओं में बनाया जाता है। यह चिप One-Time Programmable (OTP) होती है। इसका मतलब है कि इसमें सॉफ़्टवेयर सिर्फ एक बार डाला जा सकता है। एक बार सॉफ़्टवेयर लोड होने के बाद, दुनिया का कोई भी हैकर या इंजीनियर इसके कोड को ना तो पढ़ सकता है, ना बदल सकता है, और ना ही नया कोड डाल सकता है।'
                    : 'The brain of the EVM is its micro-controller. It is manufactured in high-security government facilities like BEL and ECIL. This chip is One-Time Programmable (OTP). This means the software is burnt into it only once. Once loaded, no hacker or engineer in the world can read, alter, or rewrite the code.'}
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-3xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="text-green-600" size={32} />
                  <h3 className="text-2xl font-bold text-green-900 m-0">{lang === 'hi' ? '3. डायनामिक एलोकेशन (मशीन को पार्टी का नाम नहीं पता)' : '3. Dynamic Allocation (The Machine Doesn\'t Know Parties)'}</h3>
                </div>
                <p className="text-green-800">
                  {lang === 'hi'
                    ? 'अक्सर सवाल उठता है कि क्या मशीन में पहले से ऐसा कोड डाला जा सकता है कि "हर तीसरा वोट पार्टी X को जाए"? यह नामुमकिन है। मशीन को नहीं पता होता कि कौन सी पार्टी चुनाव लड़ रही है। मशीन सिर्फ "बटन नंबर 1", "बटन नंबर 2" के रूप में वोट सेव करती है। चुनाव से कुछ दिन पहले तय होता है कि किस उम्मीदवार का नाम किस नंबर पर आएगा (जो कि एल्फाबेटिकल ऑर्डर में होता है)।'
                    : 'A common question is: Can a Trojan code be written so that "every 3rd vote goes to Party X"? This is impossible. The machine has no awareness of political parties. It only records votes against "Button 1", "Button 2", etc. The button allocation happens just days before the election based on alphabetical candidate names.'}
                </p>
              </div>
            </section>

            {/* Section 3: VVPAT */}
            <section className="mb-16 border-t border-gray-200 pt-16">
              <h2>{lang === 'hi' ? 'VVPAT: सच्चाई का आइना' : 'VVPAT: The Mirror of Truth'}</h2>
              <p>
                {lang === 'hi'
                  ? 'सुप्रीम कोर्ट के आदेश के बाद अब भारत में हर EVM के साथ VVPAT (Voter Verifiable Paper Audit Trail) जोड़ा गया है। जब आप EVM का बटन दबाते हैं, तो VVPAT की मशीन के शीशे में एक पर्ची छपती है जो 7 सेकंड तक दिखाई देती है। इसमें उम्मीदवार का नाम, सीरियल नंबर और चुनाव चिह्न होता है।'
                  : 'Following Supreme Court orders, every EVM in India is now paired with a VVPAT (Voter Verifiable Paper Audit Trail). When you press the EVM button, a printed slip appears behind a glass window for 7 seconds, showing the candidate\'s serial number, name, and symbol.'}
              </p>
              <blockquote>
                {lang === 'hi'
                  ? 'यदि ईवीएम (EVM) मशीन में गड़बड़ी होती है, तो VVPAT पर्ची में गलत नाम छपेगा, जिसे वोटर तुरंत देखकर चुनाव अधिकारी से शिकायत कर सकता है। आज तक करोड़ों वोटों में एक भी ऐसा साबित मामला नहीं आया जहाँ बटन दबाने पर VVPAT ने गलत पर्ची छापी हो।'
                  : 'If the EVM was hacked, the VVPAT slip would print the wrong symbol, and the voter could immediately complain to the presiding officer. Out of billions of votes, there hasn\'t been a single proven case where a pressed button resulted in a completely mismatched VVPAT slip.'}
              </blockquote>
            </section>

            {/* Section 4: Administrative Security */}
            <section className="mb-16 border-t border-gray-200 pt-16">
              <h2>{lang === 'hi' ? 'प्रशासनिक सुरक्षा (Administrative Protocol)' : 'Administrative Protocols'}</h2>
              <p>
                {lang === 'hi'
                  ? 'सिर्फ तकनीक ही नहीं, बल्कि प्रशासनिक स्तर पर भी EVM को सील किया जाता है:'
                  : 'Not just technical, the EVM is protected by extreme administrative protocols:'}
              </p>
              <ul>
                <li><strong>{lang === 'hi' ? 'प्रथम स्तरीय जाँच (FLC)' : 'First Level Checking (FLC)'}:</strong> {lang === 'hi' ? 'सभी राजनीतिक दलों के प्रतिनिधियों के सामने मशीनों की जाँच की जाती है।' : 'Machines are checked in front of representatives from all political parties.'}</li>
                <li><strong>{lang === 'hi' ? 'मॉक पोल (Mock Poll)' : 'Mock Poll'}:</strong> {lang === 'hi' ? 'वोटिंग के दिन सुबह 1000 वोटों का मॉक पोल होता है। पार्टियों के एजेंट खुद वोट डालकर VVPAT से मिलान करते हैं।' : 'On voting day, a 1000-vote mock poll is conducted. Party agents cast votes and match them manually with VVPAT slips.'}</li>
                <li><strong>{lang === 'hi' ? 'डबल रैंडमाइजेशन (Double Randomization)' : 'Double Randomization'}:</strong> {lang === 'hi' ? 'किसी को नहीं पता होता कि कौन सी मशीन किस राज्य, किस शहर और किस पोलिंग बूथ पर जाएगी। यह कंप्यूटर द्वारा आखिरी समय पर रैंडमली तय होता है।' : 'No one knows which machine will go to which state, city, or booth. It is decided randomly by a computer at the last minute.'}</li>
              </ul>
            </section>

            {/* Final Conclusion */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {lang === 'hi' ? 'निष्कर्ष (The Verdict)' : 'Conclusion (The Verdict)'}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {lang === 'hi'
                  ? 'जनमत भारत (Janmat Bharat) का यह रिसर्च यह साफ करता है कि तकनीकी और वैज्ञानिक दृष्टिकोण से भारतीय EVM को हैक करना या उसके नतीजों को रिमोट से बदलना 100% असंभव है। भारत की चुनाव प्रक्रिया दुनिया में सबसे सुरक्षित प्रक्रियाओं में से एक है। आप बेझिझक अपने मताधिकार का प्रयोग करें और अफवाहों से बचें।'
                  : 'This extensive research by Janmat Bharat clarifies that from a technical, scientific, and administrative standpoint, remotely hacking or altering the results of an Indian EVM is 100% impossible. India\'s electoral process is among the safest in the world. Exercise your franchise without hesitation and avoid falling prey to rumors.'}
              </p>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
};
