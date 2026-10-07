export const evmData = {
  hi: {
    title: "Understanding EVMs & Election Technology",
    subtitle: "Understanding EVMs & Election Technology",
    introTitle: "सबसे पहले निष्कर्ष नहीं, सवाल को सही तरीके से समझें",
    introText: "“EVM hack हो सकती है?” के दो अलग मतलब हो सकते हैं:\n\n1. Remote hacking: क्या कोई व्यक्ति बाहर बैठकर Wi-Fi, Bluetooth, Internet, mobile network आदि से EVM में वोट बदल सकता है?\n\n2. Physical/insider tampering: क्या किसी व्यक्ति को मशीन तक असामान्य physical access मिल जाए, hardware/microcontroller से छेड़छाड़ हो, manufacturing या custody chain में manipulation हो, तो परिणाम प्रभावित किया सकता है?\n\nइन दोनों को एक ही चीज मानना गलत होगा। भारत की ECI-EVM को लेकर उपलब्ध official architecture में remote/network hacking का रास्ता मौजूद नहीं बताया गया है। लेकिन इससे यह अलग प्रश्न पैदा होता है कि क्या किसी भी electronic system को हर conceivable physical attack के खिलाफ mathematically “100% impossible to tamper” कहा जा सकता है। Supreme Court ने भी इसी वजह से safeguards और empirical verification पर जोर दिया, न कि “हैकिंग के universe में logically impossible” जैसा दावा किया।",
    importantDisclaimer: {
      title: "Educational Content Disclaimer",
      text: "This educational content discusses India's election technology. It is separate from Janmat Bharat's independent digital opinion polls."
    },
    
    sections: [
      {
        title: "1. भारतीय EVM Internet से जुड़ी मशीन नहीं है",
        content: "यह सबसे महत्वपूर्ण technical point है। मौजूदा M3 EVM को ECI standalone/non-networked system बताता है। अर्थात सामान्य voting operation के दौरान इसमें Internet connection नहीं, Wi-Fi connection नहीं, Bluetooth communication नहीं, SIM/mobile network connection नहीं, और external computer network connection नहीं होता।\n\nECI के अनुसार M3 EVM और VVPAT अपने power-packs/batteries पर चलते हैं और network से connected नहीं होते। इसका मतलब क्या हुआ? अगर कोई व्यक्ति कहता है: “मैं अपने laptop/mobile से दूर बैठकर EVM में वोट बदल दूँगा।” तो इस particular remote-network attack scenario के लिए architecture ही अलग है, क्योंकि machine network पर connected नहीं है।",
        icon: "Network"
      },
      {
        title: "2. क्या Bluetooth/Wi-Fi chip छिपी हो सकती है?",
        content: "ECI का कहना है कि EVM के microcontrollers में Bluetooth/Wi-Fi modules नहीं हैं और manufacturers के publicly available technical documentation से controller architecture की जानकारी उपलब्ध है। ECI यह भी कहता है कि electromagnetic testing के जरिए unwanted wireless capability की जांच की जाती है।\n\nइसलिए “किसी hacker ने बाहर से Bluetooth लगाकर vote बदल दिया” जैसा सामान्य social-media scenario मौजूदा ECI architecture से मेल नहीं खाता। लेकिन ध्यान रहे—यह निष्कर्ष remote wireless attack के बारे में है। इससे हर conceivable physical tampering scenario अपने-आप impossible साबित नहीं होता।",
        icon: "Bluetooth"
      },
      {
        title: "3. EVM में सामान्य computer जैसा Operating System नहीं है",
        content: "यह फर्क बहुत महत्वपूर्ण है। आपका laptop Windows/Linux/macOS → applications → files → network → USB → updates जैसे environment पर चलता है।\n\nECI-EVM इस तरह का general-purpose computer नहीं है। इसका design बहुत सीमित काम के लिए है: Button press → vote record → count → VVPAT print। ECI के अनुसार EVM में conventional operating system नहीं है। Supreme Court ने भी judgment में EVM architecture और safeguards को इसी context में देखा।",
        icon: "Monitor"
      },
      {
        title: "4. OTP Microcontroller — लेकिन यहाँ एक जरूरी nuance है",
        content: "ECI के अनुसार EVM के microcontrollers में One-Time Programmable (OTP) memory इस्तेमाल होती है। Programming के बाद subsequent re-programming disable हो जाती है।\n\nSupreme Court ने 2024 में भी ECI के technical explanation को record किया कि microcontroller की one-time programmable memory once burned होने के बाद unalterable है। Court ने साथ ही कहा कि safeguards और protocols को देखते हुए उपलब्ध data किसी manipulation को establish नहीं करता।\n\nलेकिन ध्यान दो: OTP का मतलब “software को सामान्य तरीके से दोबारा reprogram नहीं किया जा सकता।” इसका मतलब यह नहीं कि दुनिया में कोई conceivable hardware attack कभी हो ही नहीं सकता। यही distinction रिपोर्ट को ज्यादा credible बनाता है।",
        icon: "Cpu"
      },
      {
        title: "5. सबसे interesting security — मशीन को candidate का नाम ही नहीं पता",
        content: "मान लो किसी constituency में 10 candidates हैं। EVM के अंदर ऐसा सामान्य database नहीं बैठा होता कि BJP = button 1, Congress = button 2।\n\nEVM button/key positions के साथ काम करती है। Supreme Court ने भी बताया कि Ballot Unit की keys candidate/party agnostic हैं। Candidate names और symbols physically ballot paper के रूप में buttons के सामने लगाए जाते हैं। ECI के अनुसार candidate sequence चुनाव के बाद final होता है और candidate arrangement के कारण अलग-अलग constituencies में button number बदलता रहता है।\n\nइसलिए यह hypothetical attack: “हर तीसरा vote X party को भेज दो।” को nationwide pre-programmed rule के रूप में लागू करना आसान नहीं है, क्योंकि machine को पहले से यह नहीं पता कि election में कौन candidate किस button/serial पर आएगा।",
        icon: "UserX"
      },
      {
        title: "6. VVPAT क्यों आया और इसका सबसे बड़ा फायदा क्या है?",
        content: "2013 में Subramanian Swamy v. Election Commission of India मामले में Supreme Court ने कहा कि voter confidence और transparency के लिए EVM के साथ paper trail जरूरी है। इसके बाद VVPAT व्यवस्था लाई गई।\n\nमान लो तुमने Candidate A को vote दिया। EVM internally Candidate A का vote record करती है। लेकिन साथ में VVPAT slip दिखाई देती है: Candidate A — Serial No. — Symbol। अब voter खुद देख सकता है कि machine ने कम-से-कम उसके सामने printed record किस candidate का बनाया। इससे pure electronic black-box problem कम होती है।",
        icon: "Printer"
      },
      {
        title: "7. क्या Supreme Court ने कहा कि EVM perfect है?",
        content: "नहीं। 26 April 2024 के judgment में Supreme Court ने EVM challenge को reject किया, 100% VVPAT counting की मांग reject की, paper ballot पर वापस जाने की मांग reject की और existing safeguards को पर्याप्त माना।\n\nCourt ने EVM को “simple, secure and user-friendly” कहा और VVPAT को accountability मजबूत करने वाला mechanism माना। लेकिन Court ने यह नहीं कहा: “पूरी दुनिया में किसी भी परिस्थिति में EVM hack होना logically impossible है।” यह फर्क बहुत जरूरी है।",
        icon: "Scale"
      },
      {
        title: "8. Supreme Court ने “hack क्यों साबित नहीं हुआ?” इस पर क्या कहा?",
        content: "2024 judgment में Court ने कहा कि EVM challenges पहले भी कई बार हुए हैं। Court ने कहा कि 2024 में भी petitioners के पास ऐसा credible material/data नहीं था जो actual manipulation साबित करे।\n\nएक खास बात Court ने record की: available evidence में कोई EVM hacking detected नहीं हुई थी। यह बहुत महत्वपूर्ण है क्योंकि “hack नहीं साबित हुई” और “hack होना mathematically impossible है”—दोनों अलग बातें हैं। Court ने यह भी कहा कि यदि कभी वास्तविक evidence मिले, तो Section 80 के तहत election petition का रास्ता मौजूद है।",
        icon: "Search"
      },
      {
        title: "9. EVM की security सिर्फ chip पर निर्भर नहीं है",
        content: "Election security को तीन layers में समझो:\n\nLayer 1 — Technical Security: standalone architecture, OTP microcontroller, no network, mutual authentication.\n\nLayer 2 — Administrative Security: First Level Checking, randomization, mock poll, sealing, strong room, CCTV.\n\nLayer 3 — Audit/Legal Security: VVPAT, random verification, election petition, court scrutiny.\n\nElection security पूरी chain की security है, सिर्फ एक chip की नहीं।",
        icon: "Shield"
      },
      {
        title: "10. 2024 Supreme Court का नया महत्वपूर्ण safeguard",
        content: "26 April 2024 को Supreme Court ने निर्देश दिया कि Symbol Loading Units (SLU) symbol loading के बाद seal करके strong room में रखे जाएँ और कम से कम 45 दिन तक EVMs के साथ सुरक्षित रहें।\n\nसाथ ही, हर Assembly Constituency/Assembly Segment में 5% EVMs के burnt memory/microcontroller को manufacturer engineers से verify करवाने का mechanism दिया गया—कुछ परिस्थितियों में No.2 या No.3 candidate की written request पर। यानी Supreme Court ने सिर्फ “EVM पर भरोसा करो” नहीं कहा; उसने post-election technical verification का अतिरिक्त रास्ता भी बनाया।",
        icon: "FileCheck"
      }
    ],

    paperBallotComparison: {
      title: "EVM vs Paper Ballot — Neutral Comparison",
      intro: "भारत में 97 करोड़ eligible voters और 10 लाख से अधिक polling booths का scale है। Supreme Court ने specifically इस विशाल scale और geographical challenges को ध्यान में रखकर paper ballot वापस लाने की मांग को reject किया।",
      headers: ["मुद्दा", "EVM + VVPAT", "Paper Ballot"],
      rows: [
        ["Remote hacking", "Architecture में network नहीं", "लागू नहीं"],
        ["Physical tampering", "Physical access की आवश्यकता", "Physical ballot/box manipulation का risk"],
        ["Invalid votes", "बहुत कम/प्रणालीगत रूप से avoid", "हो सकते हैं"],
        ["Counting", "तेज", "धीमी"],
        ["Human counting error", "कम", "ज्यादा संभावित"],
        ["Paper requirement", "कम", "बहुत अधिक"],
        ["Booth capturing", "4 votes/minute limit जैसी बाधा", "Historical vulnerability"],
        ["Physical audit trail", "VVPAT", "मूल ballot"],
        ["Technical complexity", "अधिक", "कम"],
        ["Logistics", "EVM/VVPAT logistics", "विशाल paper/box logistics"],
        ["Security challenge", "Electronic + custody", "Physical + custody"]
      ]
    },

    conclusion: {
      title: "भारतीय EVM को दूर से Hack करना क्यों संभव नहीं माना जाता?",
      text: "उपलब्ध evidence के आधार पर भारतीय EVM-VVPAT system में remote hacking का सामान्य रास्ता नहीं है और आज तक चुनाव परिणाम को EVM hacking से बदलने का कोई न्यायिक रूप से स्थापित मामला सामने नहीं आया है। फिर भी लोकतांत्रिक व्यवस्था में किसी भी तकनीक को अंधविश्वास से नहीं, बल्कि लगातार audit, transparency, VVPAT verification और judicial oversight से सुरक्षित रखा जाना चाहिए। अंतिम निष्कर्ष नागरिक स्वयं उपलब्ध तथ्यों के आधार पर निकालें।"
    }
  },
  
  en: {
    title: "Understanding EVMs & Election Technology",
    subtitle: "An Educational Guide to India's Official Voting Machines",
    introTitle: "Understand the Question Before Jumping to Conclusions",
    introText: "The question 'Can an EVM be hacked?' can mean two things: 1. Remote Hacking via Wi-Fi/Bluetooth/Internet. 2. Physical/Insider Tampering. The official ECI-EVM architecture has no provision for remote hacking as it is not network-connected. However, claiming any electronic system is '100% mathematically impossible to tamper with' against all conceivable physical attacks is technically absolute. This is why the Supreme Court emphasizes empirical verification and safeguards.",
    importantDisclaimer: {
      title: "Educational Content Disclaimer",
      text: "This educational content discusses India's election technology. It is separate from Janmat Bharat's independent digital opinion polls."
    },
    
    sections: [
       {
        title: "1. The Indian EVM is Not an Internet-Connected Machine",
        content: "The ECI describes the M3 EVM as a standalone, non-networked system. It has no Internet, Wi-Fi, Bluetooth, or mobile network connection during voting. Therefore, the common hypothetical scenario of 'hacking the machine remotely via a laptop' does not apply to this architecture.",
        icon: "Network"
      },
      {
        title: "2. Is there a hidden Bluetooth/Wi-Fi chip?",
        content: "The ECI states that EVM microcontrollers lack wireless modules, and they undergo electromagnetic testing to ensure no unwanted wireless capabilities exist. This eliminates common remote-wireless attack scenarios, though it doesn't automatically rule out every physical tampering scenario.",
        icon: "Bluetooth"
      },
      {
        title: "3. EVMs do not use standard Operating Systems",
        content: "Unlike your laptop running Windows or macOS, the EVM is not a general-purpose computer. It has a highly restricted functional design: Button press → vote record → count → VVPAT print. The Supreme Court viewed its safeguards within this restricted context.",
        icon: "Monitor"
      },
      {
        title: "4. OTP Microcontrollers and the Nuance",
        content: "EVMs use One-Time Programmable (OTP) memory. Once the code is burned during manufacturing, it cannot be normally reprogrammed. The Supreme Court recorded this technical explanation. However, while 'OTP' prevents software reprogramming, it is scientifically absolute to claim no physical hardware attack could ever exist.",
        icon: "Cpu"
      },
      {
        title: "5. The Machine Does Not Know Candidate Names",
        content: "The EVM does not have a database of political parties (e.g., 'BJP = Button 1'). It only records keystrokes. Candidate names and symbols are physically attached to the Ballot Unit later. This makes it incredibly difficult to pre-program a nationwide software rule like 'Give every 3rd vote to Party X'.",
        icon: "UserX"
      },
      {
        title: "6. Why VVPAT was Introduced",
        content: "Following the 2013 Supreme Court order (Subramanian Swamy v. ECI), the VVPAT was introduced for transparency. When you vote, a printed slip appears for 7 seconds showing your chosen candidate's serial number and symbol. This allows voters to verify the electronic record and mitigates the 'black-box' problem.",
        icon: "Printer"
      },
      {
        title: "7. Did the Supreme Court declare EVMs 'Perfect'?",
        content: "No. The April 26, 2024 judgment rejected demands for returning to paper ballots and 100% VVPAT counting, noting existing safeguards were sufficient. However, the Court did not state that EVM hacking is 'logically impossible in the universe'—it simply noted that no evidence of actual manipulation has been established.",
        icon: "Scale"
      },
      {
        title: "8. Why was hacking not proven in Court?",
        content: "The Court noted that despite repeated challenges, petitioners failed to provide credible material or data proving actual manipulation. Available evidence showed zero detected EVM hacking. The Court also reiterated that if genuine evidence emerges, Election Petitions (under Section 80) remain a legal remedy.",
        icon: "Search"
      },
      {
        title: "9. Security is Not Just About the Chip",
        content: "Election security relies on three layers: 1) Technical (Standalone, OTP). 2) Administrative (First Level Checking, Randomization, Mock Polls, Strong Rooms). 3) Legal/Audit (VVPAT verification, Election Petitions). Security is the strength of the entire chain.",
        icon: "Shield"
      },
      {
        title: "10. The 2024 Supreme Court Safeguards",
        content: "In April 2024, the Supreme Court ordered that Symbol Loading Units (SLU) be sealed and preserved for 45 days after elections. It also introduced a mechanism allowing the verification of burnt memory/microcontrollers in 5% of EVMs by manufacturer engineers upon written request by runner-up candidates.",
        icon: "FileCheck"
      }
    ],

    paperBallotComparison: {
      title: "EVM vs Paper Ballot — Neutral Comparison",
      intro: "With 970 million voters and over 1 million polling booths, India's scale is unparalleled. The Supreme Court explicitly considered these massive logistical challenges when rejecting the return to paper ballots.",
      headers: ["Parameter", "EVM + VVPAT", "Paper Ballot"],
      rows: [
        ["Remote hacking", "No network architecture", "Not applicable"],
        ["Physical tampering", "Requires physical access", "Risk of physical ballot/box manipulation"],
        ["Invalid votes", "Systematically avoided", "High probability"],
        ["Counting speed", "Fast", "Very slow"],
        ["Human counting error", "Minimal", "Highly probable"],
        ["Paper requirement", "Minimal", "Massive"],
        ["Booth capturing", "Hindered (4 votes/min limit)", "Historical vulnerability"],
        ["Physical audit trail", "VVPAT slip", "Original ballot"],
        ["Technical complexity", "High", "Low"],
        ["Logistics", "EVM/VVPAT management", "Massive paper/box management"],
        ["Security challenge", "Electronic + Custody", "Physical + Custody"]
      ]
    },

    conclusion: {
      title: "Why Indian EVMs are considered secure against remote hacking",
      text: "Based on available evidence, the Indian EVM-VVPAT system lacks the architecture for remote hacking, and no legally established case of altering election results via EVM hacking has emerged to date. However, in a democracy, no technology should be trusted blindly; it requires continuous audits, transparency, VVPAT verification, and judicial oversight. Citizens should draw their own conclusions based on these facts."
    }
  }
};
