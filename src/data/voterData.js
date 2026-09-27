export const voterData = {
  hi: {
    title: "वोटर जागरूकता (Voter Awareness Guide)",
    subtitle: "वोटर लिस्ट में नाम जुड़वाने से लेकर वोट डालने तक — Form 6, 6A, 6B, 7, 8 और अन्य Forms की पूरी जानकारी",
    introText: "भारत में वोट डालने के लिए सिर्फ Voter ID card होना पर्याप्त नहीं है। सबसे महत्वपूर्ण बात यह है कि आपका नाम संबंधित Electoral Roll (मतदाता सूची) में दर्ज हो।\n\nElection Commission of India (ECI) के अनुसार सामान्य मतदाता बनने के लिए व्यक्ति को भारतीय नागरिक होना चाहिए, qualifying date पर कम-से-कम 18 वर्ष का होना चाहिए, संबंधित क्षेत्र में ordinarily resident होना चाहिए और कानून के तहत disqualified नहीं होना चाहिए।",
    
    sections: [
      {
        title: "1. कौन वोटर बन सकता है? (Eligibility)",
        content: "सामान्य तौर पर आपको इन शर्तों को पूरा करना होगा:\n\n✅ **भारतीय नागरिक होना चाहिए:** विदेशी नागरिक भारत की electoral roll में सामान्य voter के रूप में register नहीं हो सकता।\n\n✅ **उम्र 18 वर्ष या उससे अधिक:** अब सिर्फ 1 January ही qualifying date नहीं है। ECI वर्तमान में चार qualifying dates का उल्लेख करता है: 1 January, 1 April, 1 July, और 1 October।\n\n✅ **संबंधित जगह का ordinary resident होना:** आप जिस constituency में voter के रूप में register होना चाहते हैं, वहाँ आपका ordinary residence होना चाहिए।\n\n❌ **एक व्यक्ति का नाम एक से अधिक जगह नहीं होना चाहिए:** एक ही व्यक्ति को multiple constituencies में voter के रूप में enrolled नहीं होना चाहिए।",
        icon: "UserCheck"
      },
      {
        title: "2. Form 6 — नया Voter बनने का मुख्य Form",
        content: "अगर आपका नाम अभी किसी electoral roll में नहीं है और आप General Elector के रूप में register होना चाहते हैं, तो Form 6 इस्तेमाल किया जाता है।\n\n**कब भरें?**\n• उम्र 18 साल हो गई है और पहली बार नाम जुड़ना है।\n• आपने कभी voter registration नहीं कराया।\n• आप eligible हैं लेकिन electoral roll में नाम नहीं है।\n\n**Age Proof:** Birth Certificate, Aadhaar Card, PAN Card, Driving Licence, Class X/XII certificate, Indian Passport आदि।\n\n**Address Proof:** Aadhaar, Passport, utility bill, bank/post-office passbook, registered rent/lease deed आदि।\n\n**Photo:** 4.5 cm × 3.5 cm recent colour photograph, frontal view, white background.",
        icon: "UserPlus"
      },
      {
        title: "3. Form 6A — NRI / Overseas Indian के लिए",
        content: "अगर आप Indian citizen हैं, विदेश में रहते हैं, और आपने किसी दूसरे देश की citizenship acquire नहीं की है, तो overseas elector के लिए Form 6A होता है।\n\nExample: अमन भारत का citizen है लेकिन नौकरी के कारण Dubai में रहता है और उसने UAE की नागरिकता नहीं ली है ➡️ Form 6A",
        icon: "Globe"
      },
      {
        title: "4. Form 6B — Aadhaar linking के लिए",
        content: "Form 6B नया voter registration form नहीं है। यह उस व्यक्ति के लिए है जिसका नाम पहले से electoral roll में enrolled है और वह authentication के purpose से Aadhaar number देना चाहता है।\n\n• पहली बार voter बन रहे हैं? ❌ Form 6\n• पहले से voter हैं और Aadhaar देना चाहते हैं? ✅ Form 6B",
        icon: "Link"
      },
      {
        title: "5. Form 7 — नाम हटाने या Objection के लिए",
        content: "अगर किसी व्यक्ति का नाम electoral roll में है लेकिन:\n• व्यक्ति की मृत्यु हो गई है।\n• व्यक्ति permanently shift हो गया है।\n• नाम duplicate है या गलत तरीके से शामिल है।\n\nतो उनके नाम को हटाने या objection के लिए Form 7 इस्तेमाल होता है।",
        icon: "Trash2"
      },
      {
        title: "6. Form 8 — Correction / Update / Shifting के लिए",
        content: "ECI का Form 8 इन चार मुख्य कामों के लिए सबसे ज्यादा इस्तेमाल होता है:\n\n1️⃣ **Shifting of Residence:** एक जगह से दूसरी जगह shift होने पर पता बदलने के लिए।\n2️⃣ **Correction of Entries:** नाम की spelling, Date of Birth, relative's name, या Photo में गलती सुधारने के लिए।\n3️⃣ **Replacement of EPIC:** Voter ID Card खो जाने या खराब (mutilated/damaged) हो जाने पर नया कार्ड मंगाने के लिए।\n4️⃣ **Marking as PwD:** Electoral roll में Person with Disability (PwD) के रूप में mark/update करवाने के लिए।",
        icon: "FileEdit"
      },
      {
        title: "7. अन्य Forms (Form 4, 5, 2, 2A, 3)",
        content: "**Form 4:** यह नया voter application नहीं है। यह ERO द्वारा electoral-roll revision के दौरान घर के occupant से मांगी जाने वाली जानकारी का पत्र है।\n**Form 5:** यह Draft Electoral Roll के publication की notice है।\n**Form 2, 2A, 3:** ये Service Voters (Armed Forces, State Armed Police outside state, Govt employees posted abroad) के लिए हैं, सामान्य नागरिकों के लिए नहीं।",
        icon: "Files"
      }
    ],

    formsTable: {
      title: "सारे मुख्य Forms एक नजर में",
      headers: ["Form", "किसके लिए?", "कब इस्तेमाल करें?"],
      rows: [
        ["Form 6", "New General Voter", "पहली बार voter registration"],
        ["Form 6A", "Overseas/NRI elector", "विदेश में रहने वाला eligible Indian citizen"],
        ["Form 6B", "Existing elector", "Aadhaar information for authentication"],
        ["Form 7", "Deletion/Objection", "नाम हटाना या proposed inclusion पर objection"],
        ["Form 8", "Existing elector", "Address shift, correction, replacement EPIC, PwD"],
        ["Form 2, 2A, 3", "Service Voters", "Armed forces, Govt employees abroad"],
        ["Form 4", "Premises Occupant", "ERO द्वारा electoral-roll revision की जानकारी"],
        ["Form 5", "Draft Roll Notice", "ERO process (Notice)"]
      ]
    },

    quickGuide: {
      title: "कौन-सी समस्या में कौन-सा Form?",
      items: [
        { q: "मेरा नाम पहली बार जोड़ना है?", a: "Form 6" },
        { q: "मैं Indian citizen हूँ लेकिन विदेश में रहता हूँ?", a: "Form 6A" },
        { q: "मेरा नाम पहले से है, Aadhaar link करना है?", a: "Form 6B" },
        { q: "किसी मृत व्यक्ति का नाम हटाना है?", a: "Form 7" },
        { q: "किसी गलत नाम पर objection है?", a: "Form 7" },
        { q: "मेरा address बदल गया?", a: "Form 8" },
        { q: "मेरे नाम की spelling / DOB गलत है?", a: "Form 8" },
        { q: "Photo बदलनी है?", a: "Form 8" },
        { q: "Voter ID खो गया या खराब हो गया?", a: "Form 8" },
        { q: "PwD marking चाहिए?", a: "Form 8" }
      ]
    },

    howToCheck: {
      title: "Voter List में नाम कैसे Check करें?",
      content: "सिर्फ Voter ID Card देखकर संतुष्ट मत हों! वोट देने के लिए सबसे जरूरी है कि आपका नाम Electoral Roll (मतदाता सूची) में हो।\n\n**तरीका 1:** ECI के Electoral Search Portal (voters.eci.gov.in) पर अपना नाम खोजें।\n**तरीका 2:** ECI का Voter Helpline App इस्तेमाल करें।\n**तरीका 3:** 1950 Helpline पर कॉल करें।\n**तरीका 4:** 1950 पर SMS Service का उपयोग करें (ECI format के अनुसार)।\n\nचुनाव से पहले हमेशा अपनी Polling Station, Part Number, Serial Number और Constituency verify कर लें।"
    },

    conclusion: {
      title: "Janmat Bharat का सबसे महत्वपूर्ण संदेश",
      text: "Voter ID Card होना पर्याप्त नहीं है। असल में जरूरी है आपका नाम Electoral Roll में होना!\n\n• नया voter ➡️ Form 6\n• NRI voter ➡️ Form 6A\n• Aadhaar info ➡️ Form 6B\n• नाम हटाना/Objection ➡️ Form 7\n• Address/Correction/Replacement ➡️ Form 8"
    }
  },
  en: {
    title: "Voter Awareness Guide",
    subtitle: "From enrolling in the Voter List to casting your vote — Complete details of Form 6, 6A, 6B, 7, 8 and more",
    introText: "Having a Voter ID card is not enough to vote in India. The most crucial requirement is that your name must be registered in the relevant Electoral Roll (Voter List).\n\nAccording to the Election Commission of India (ECI), to become a general voter, an individual must be an Indian citizen, at least 18 years old on the qualifying date, an ordinary resident of the polling area, and not disqualified under the law.",
    
    sections: [
      {
        title: "1. Who can become a voter? (Eligibility)",
        content: "Generally, you must fulfill these conditions:\n\n✅ **Must be an Indian Citizen:** Foreign citizens cannot register as general voters.\n\n✅ **Age 18 years or above:** January 1 is no longer the only qualifying date. ECI now lists four qualifying dates: January 1, April 1, July 1, and October 1.\n\n✅ **Ordinary Resident:** You must be an ordinary resident of the constituency where you wish to register.\n\n❌ **No dual enrollment:** A person's name cannot be enrolled in more than one constituency simultaneously.",
        icon: "UserCheck"
      },
      {
        title: "2. Form 6 — Main Form for New Voters",
        content: "If your name is not in any electoral roll and you want to register as a General Elector, Form 6 is used.\n\n**When to use?**\n• Turned 18 and registering for the first time.\n• Never registered as a voter before.\n• Eligible but name is missing from the electoral roll.\n\n**Age Proof:** Birth Certificate, Aadhaar Card, PAN Card, Driving Licence, Class X/XII certificate, Indian Passport, etc.\n\n**Address Proof:** Aadhaar, Passport, utility bill, bank passbook, registered rent agreement, etc.\n\n**Photo:** 4.5 cm × 3.5 cm recent colour photograph, frontal view, white background.",
        icon: "UserPlus"
      },
      {
        title: "3. Form 6A — For NRI / Overseas Indians",
        content: "If you are an Indian citizen, living abroad, and have not acquired citizenship of any other country, Form 6A is used for overseas elector registration.\n\nExample: Aman is an Indian citizen working in Dubai and has not taken UAE citizenship ➡️ Form 6A",
        icon: "Globe"
      },
      {
        title: "4. Form 6B — For Aadhaar information",
        content: "Form 6B is not a new voter registration form. It is for a person whose name is already enrolled in the electoral roll and wishes to provide their Aadhaar number for authentication purposes.\n\n• First-time voter? ❌ Form 6\n• Existing voter linking Aadhaar? ✅ Form 6B",
        icon: "Link"
      },
      {
        title: "5. Form 7 — For Deletion or Objection",
        content: "If a person's name is in the electoral roll but:\n• The person has passed away.\n• The person has permanently shifted.\n• The name is a duplicate or wrongly included.\n\nForm 7 is used to delete their name or raise an objection.",
        icon: "Trash2"
      },
      {
        title: "6. Form 8 — For Correction / Update / Shifting",
        content: "ECI's Form 8 is primarily used for these four purposes:\n\n1️⃣ **Shifting of Residence:** To change your address when shifting from one place to another.\n2️⃣ **Correction of Entries:** To fix spelling errors in name, Date of Birth, relative's name, or update your Photo.\n3️⃣ **Replacement of EPIC:** To request a new card if your Voter ID is lost or damaged/mutilated.\n4️⃣ **Marking as PwD:** To get marked as a Person with Disability (PwD) in the electoral roll.",
        icon: "FileEdit"
      },
      {
        title: "7. Other Forms (Form 4, 5, 2, 2A, 3)",
        content: "**Form 4:** Not a new voter application. It is a letter of request to the occupant of a premises during electoral roll revision.\n**Form 5:** Notice of publication of the Draft Electoral Roll.\n**Form 2, 2A, 3:** For Service Voters (Armed Forces, State Armed Police outside state, Govt employees posted abroad), not for general citizens.",
        icon: "Files"
      }
    ],

    formsTable: {
      title: "All Major Forms at a Glance",
      headers: ["Form", "For Whom?", "When to Use?"],
      rows: [
        ["Form 6", "New General Voter", "First-time voter registration"],
        ["Form 6A", "Overseas/NRI elector", "Eligible Indian citizen living abroad"],
        ["Form 6B", "Existing elector", "Aadhaar information for authentication"],
        ["Form 7", "Deletion/Objection", "Deleting a name or objecting to an inclusion"],
        ["Form 8", "Existing elector", "Address shift, correction, replacement EPIC, PwD"],
        ["Form 2, 2A, 3", "Service Voters", "Armed forces, Govt employees abroad"],
        ["Form 4", "Premises Occupant", "Information gathering during electoral roll revision"],
        ["Form 5", "Draft Roll Notice", "ERO process (Notice)"]
      ]
    },

    quickGuide: {
      title: "Which Form for Which Problem?",
      items: [
        { q: "Registering for the first time?", a: "Form 6" },
        { q: "Indian citizen living abroad?", a: "Form 6A" },
        { q: "Existing voter, linking Aadhaar?", a: "Form 6B" },
        { q: "Deleting a deceased person's name?", a: "Form 7" },
        { q: "Objecting to a wrong inclusion?", a: "Form 7" },
        { q: "Address has changed?", a: "Form 8" },
        { q: "Spelling / DOB is wrong?", a: "Form 8" },
        { q: "Need to update photo?", a: "Form 8" },
        { q: "Voter ID lost or damaged?", a: "Form 8" },
        { q: "Need PwD marking?", a: "Form 8" }
      ]
    },

    howToCheck: {
      title: "How to Check Your Name in the Voter List?",
      content: "Do not be satisfied just by having a Voter ID Card! To cast your vote, it is mandatory that your name is in the Electoral Roll.\n\n**Method 1:** Search your name on the ECI Electoral Search Portal (voters.eci.gov.in).\n**Method 2:** Use the ECI Voter Helpline App.\n**Method 3:** Call the 1950 Helpline.\n**Method 4:** Use the SMS Service on 1950 (as per ECI format).\n\nAlways verify your Polling Station, Part Number, Serial Number, and Constituency before the election."
    },

    conclusion: {
      title: "Crucial Message from Janmat Bharat",
      text: "Having a Voter ID Card is NOT enough. Your name MUST be in the Electoral Roll!\n\n• New voter ➡️ Form 6\n• NRI voter ➡️ Form 6A\n• Aadhaar info ➡️ Form 6B\n• Deletion/Objection ➡️ Form 7\n• Address/Correction/Replacement ➡️ Form 8"
    }
  }
};
