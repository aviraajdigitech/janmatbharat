const fs = require('fs');
let code = fs.readFileSync('src/data/historyData.js', 'utf8');
const injection = `    image: "/assets/pms/nehru.jpg",
    biography_en: {
      born: "November 14, 1889, in Prayagraj (Allahabad).",
      education: "Honors in Natural Science from Trinity College, Cambridge, and Barrister-at-Law from Inner Temple, London.",
      profile: "Jawaharlal Nehru was the first and longest-serving Prime Minister of independent India. A central figure in the Indian independence movement and a close associate of Mahatma Gandhi, he is widely regarded as the architect of the modern Indian nation-state. He laid the scientific and industrial foundations of modern India, though several of his policies (such as Kashmir and socialist economics) remain subjects of intense debate today."
    },
    biography_hi: {
      born: "14 नवंबर 1889 को प्रयागराज (इलाहाबाद) में।",
      education: "ट्रिनिटी कॉलेज, कैम्ब्रिज (इंग्लैंड) से नेचुरल साइंस में ऑनर्स और इनर टेम्पल (लंदन) से बैरिस्टर की पढ़ाई।",
      profile: "जवाहरलाल नेहरू स्वतंत्र भारत के पहले और सबसे लंबे समय तक सेवा करने वाले प्रधानमंत्री थे। वे भारतीय स्वतंत्रता संग्राम के सबसे प्रमुख नेताओं में से एक थे और महात्मा गांधी के करीबी सहयोगी थे। उन्हें आधुनिक भारत की वैज्ञानिक और औद्योगिक नींव रखने का श्रेय दिया जाता है, हालांकि कश्मीर और समाजवादी अर्थनीति जैसी उनकी कई नीतियों पर आज भी तीखी बहस होती है।"
    },`;
// Just replace the very first occurrence of nehru.jpg (which is term 1)
code = code.replace('    image: "/assets/pms/nehru.jpg",', injection);
fs.writeFileSync('src/data/historyData.js', code);
console.log("Done");
