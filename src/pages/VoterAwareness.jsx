import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, CheckCircle, ExternalLink, FileText, UserPlus, MapPin } from 'lucide-react';

export const VoterAwareness = () => {
  const [lang, setLang] = useState('hi');

  const voterSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Voter Awareness: How to get Voter ID and Vote in India",
    "description": "Complete guide on how to apply for a new Voter ID in India, check voter list, and understand your voting rights.",
    "publisher": {
      "@type": "Organization",
      "name": "Janmat Bharat"
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      <Helmet>
        <title>Voter Awareness: How to Apply for Voter ID | Janmat Bharat</title>
        <meta name="description" content="Ultimate guide to getting a new Voter ID card in India. Learn about Form 6, checking the voter list, and understanding your constitutional voting rights." />
        <meta name="keywords" content="voter id apply online, voting app, election result app, voter list india, how to vote, election commission of india, Janmat Bharat" />
        <script type="application/ld+json">{JSON.stringify(voterSchema)}</script>
      </Helmet>

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
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              {lang === 'hi' ? 'वोटर जागरूकता (Voter Awareness Guide)' : 'Voter Awareness & Complete Guide'}
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              {lang === 'hi' 
                ? 'नया वोटर कार्ड बनाने से लेकर वोटर लिस्ट में नाम चेक करने तक की पूरी जानकारी। अपने अधिकारों को जानें और एक ज़िम्मेदार नागरिक बनें।' 
                : 'From applying for a new Voter ID to checking your name on the electoral roll. Know your rights and become a responsible citizen.'}
            </p>
          </header>

          <article className="prose prose-lg prose-slate max-w-4xl mx-auto prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
            
            {/* Form 6 Guide */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <UserPlus className="text-blue-600" size={32} />
                <h2 className="text-3xl m-0">{lang === 'hi' ? '1. नया वोटर आईडी कार्ड कैसे बनाएं (Form 6)?' : '1. How to Apply for a New Voter ID (Form 6)?'}</h2>
              </div>
              <p>
                {lang === 'hi'
                  ? 'अगर आपकी उम्र 18 वर्ष या उससे अधिक हो गई है, तो आपको अपना नाम वोटर लिस्ट में जुड़वाना चाहिए। नया वोटर कार्ड बनवाने के लिए आपको चुनाव आयोग का Form 6 (फॉर्म 6) भरना होता है।'
                  : 'If you have reached the age of 18, you are constitutionally eligible to vote. To get a new Voter ID card, you need to fill out Form 6 of the Election Commission of India.'}
              </p>
              
              <h4 className="font-bold">{lang === 'hi' ? 'ज़रूरी दस्तावेज़ (Required Documents):' : 'Required Documents:'}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg"><CheckCircle size={18} className="text-green-500" /> {lang === 'hi' ? 'पासपोर्ट साइज फोटो' : 'Passport Size Photo'}</li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg"><CheckCircle size={18} className="text-green-500" /> {lang === 'hi' ? 'आयु प्रमाण पत्र (Aadhar/10th Marksheet)' : 'Age Proof (Aadhar/10th Marksheet)'}</li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg"><CheckCircle size={18} className="text-green-500" /> {lang === 'hi' ? 'पते का प्रमाण (बिजली बिल/पासपोर्ट)' : 'Address Proof (Electricity Bill/Passport)'}</li>
                <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg"><CheckCircle size={18} className="text-green-500" /> {lang === 'hi' ? 'परिवार के किसी सदस्य का वोटर नंबर' : 'Family Member\'s Voter ID (Optional)'}</li>
              </ul>
              
              <div className="mt-6">
                <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl no-underline hover:bg-blue-700 transition-colors">
                  {lang === 'hi' ? 'राष्ट्रीय मतदाता पोर्टल पर अप्लाई करें' : 'Apply on National Voters Portal'} <ExternalLink size={18} />
                </a>
              </div>
            </section>

            {/* Other Forms */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="text-saffron-600" size={32} />
                <h2 className="text-3xl m-0">{lang === 'hi' ? '2. वोटर आईडी में बदलाव और अन्य फॉर्म' : '2. Voter ID Corrections & Other Forms'}</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-saffron-500 pl-6 py-2">
                  <h4 className="text-xl font-bold m-0 mb-2">{lang === 'hi' ? 'Form 7 (नाम हटाने के लिए)' : 'Form 7 (For Deletion of Name)'}</h4>
                  <p className="m-0 text-slate-600">
                    {lang === 'hi' 
                      ? 'यदि किसी वोटर की मृत्यु हो गई है, या कोई स्थायी रूप से दूसरी जगह शिफ्ट हो गया है, तो वोटर लिस्ट से नाम कटवाने के लिए फॉर्म 7 भरा जाता है।'
                      : 'Used to object to the inclusion of a name or request the deletion of a name due to death or permanent shifting.'}
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="text-xl font-bold m-0 mb-2">{lang === 'hi' ? 'Form 8 (सुधार या पता बदलने के लिए)' : 'Form 8 (For Corrections or Shifting)'}</h4>
                  <p className="m-0 text-slate-600">
                    {lang === 'hi' 
                      ? 'यदि आपके वोटर आईडी में नाम, फोटो, उम्र या पता गलत है, या आप एक ही विधानसभा में किसी दूसरे घर में शिफ्ट हो गए हैं, तो सुधार के लिए फॉर्म 8 भरें।'
                      : 'Used for correction of entries (name, age, photo, address) or for shifting residence within or outside the constituency.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Check Voter List */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-green-600" size={32} />
                <h2 className="text-3xl m-0">{lang === 'hi' ? '3. वोटर लिस्ट में अपना नाम कैसे चेक करें?' : '3. How to Check Your Name in the Voter List?'}</h2>
              </div>
              <p>
                {lang === 'hi'
                  ? 'चुनाव के दिन पोलिंग बूथ पर जाने से पहले यह सुनिश्चित कर लें कि आपका नाम वोटर लिस्ट (Electoral Roll) में मौजूद है। आप चुनाव आयोग की वेबसाइट या वोटर हेल्पलाइन ऐप (Voter Helpline App) से इसे ऑनलाइन चेक कर सकते हैं।'
                  : 'Before heading to the polling booth on election day, it is critical to ensure your name exists on the Electoral Roll. You can easily check it online.'}
              </p>
              
              <div className="bg-slate-100 p-6 rounded-2xl">
                <p className="font-bold mb-4">{lang === 'hi' ? 'नाम चेक करने के 3 तरीके:' : '3 Ways to check your name:'}</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>EPIC Number (वोटर आईडी नंबर):</strong> {lang === 'hi' ? 'अपने कार्ड पर लिखे EPIC नंबर से सर्च करें।' : 'Search using the EPIC number written on your Voter Card.'}</li>
                  <li><strong>By Details (नाम और पते से):</strong> {lang === 'hi' ? 'अपना नाम, पिता का नाम और राज्य डालकर सर्च करें।' : 'Search by entering your Name, Father\'s name, and State.'}</li>
                  <li><strong>By Mobile Number:</strong> {lang === 'hi' ? 'अपने रजिस्टर्ड मोबाइल नंबर से सर्च करें।' : 'Search using your registered mobile number.'}</li>
                </ol>
              </div>
            </section>

            {/* Constitutional Rights */}
            <section className="mb-16 border-t border-gray-200 pt-16">
              <h2>{lang === 'hi' ? '4. आपका संवैधानिक अधिकार (Your Constitutional Right)' : '4. Your Constitutional Right'}</h2>
              <p>
                {lang === 'hi'
                  ? 'भारतीय संविधान का अनुच्छेद 326 (Article 326) हर वयस्क नागरिक (18+ वर्ष) को सार्वभौमिक वयस्क मताधिकार (Universal Adult Suffrage) का अधिकार देता है। इसका मतलब है कि जाति, धर्म, लिंग या वित्तीय स्थिति के आधार पर किसी भी नागरिक को वोट देने से नहीं रोका जा सकता।'
                  : 'Article 326 of the Indian Constitution grants Universal Adult Suffrage to every citizen above the age of 18. This means no citizen can be denied the right to vote on grounds of religion, race, caste, sex, or financial status.'}
              </p>
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl mt-8">
                <h3 className="text-white mt-0">{lang === 'hi' ? 'एक वोट की ताकत' : 'The Power of One Vote'}</h3>
                <p className="text-blue-100 mb-0">
                  {lang === 'hi'
                    ? 'आपका एक वोट देश की नीतियां, शिक्षा, स्वास्थ्य और भविष्य तय करता है। जब आप जनमत भारत (Janmat Bharat) जैसे ओपिनियन पोल ऐप पर अपनी राय देते हैं, तो यह एक रुझान बताता है, लेकिन असली बदलाव पोलिंग बूथ पर बटन दबाने से ही आता है। इसलिए वोट ज़रूर करें!'
                    : 'Your single vote determines the policies, education, healthcare, and future of the nation. While opinion polls on Janmat Bharat show trends, real change only happens when you press the button at the polling booth. Go out and vote!'}
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
