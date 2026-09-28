export const constituencyData = {
  hi: {
    title: "अपनी लोकसभा / विधानसभा जानें",
    subtitle: "पिनकोड डालें और जानें कि आपका वर्तमान सांसद (MP) या विधायक (MLA) कौन है।",
    searchPlaceholder: "6 अंकों का पिनकोड दर्ज करें (उदा. 110001)",
    searchButton: "खोजें",
    errorLength: "कृपया सही 6 अंकों का पिनकोड दर्ज करें।",
    notFound: "क्षमा करें! यह पिनकोड हमारे डेटाबेस में नहीं है।",
    resultsTitle: "आपके क्षेत्र की जानकारी",
    mpLabel: "वर्तमान सांसद (MP)",
    mlaLabel: "वर्तमान विधायक (MLA)",
    partyLabel: "पार्टी",
    constituencyLabel: "निर्वाचन क्षेत्र",
    ctaText: "क्या आप अपने MP/MLA के काम से खुश हैं? आज ही अपना ओपिनियन दर्ज करें!",
    ctaButton: "Janmat Bharat App डाउनलोड करें"
  },
  en: {
    title: "Know Your Constituency",
    subtitle: "Enter your Pincode to find your current MP and MLA.",
    searchPlaceholder: "Enter 6-digit Pincode (e.g. 110001)",
    searchButton: "Search",
    errorLength: "Please enter a valid 6-digit pincode.",
    notFound: "Sorry! We couldn't find data for this pincode.",
    resultsTitle: "Your Local Representatives",
    mpLabel: "Current MP (Lok Sabha)",
    mlaLabel: "Current MLA (Vidhan Sabha)",
    partyLabel: "Party",
    constituencyLabel: "Constituency",
    ctaText: "Are you satisfied with their work? Cast your mock vote today!",
    ctaButton: "Download Janmat Bharat App"
  }
};

// Mock data mapping pincodes to MP/MLA details for demonstration
export const mockPincodeDatabase = {
  "110001": {
    state: "Delhi",
    district: "New Delhi",
    mp: { name: "Bansuri Swaraj", party: "BJP", constituency: "New Delhi" },
    mla: { name: "Arvind Kejriwal", party: "AAP", constituency: "New Delhi" }
  },
  "221001": {
    state: "Uttar Pradesh",
    district: "Varanasi",
    mp: { name: "Narendra Modi", party: "BJP", constituency: "Varanasi" },
    mla: { name: "Saurabh Srivastava", party: "BJP", constituency: "Varanasi Cantt" }
  },
  "400001": {
    state: "Maharashtra",
    district: "Mumbai",
    mp: { name: "Arvind Sawant", party: "Shiv Sena (UBT)", constituency: "Mumbai South" },
    mla: { name: "Amin Patel", party: "INC", constituency: "Mumbadevi" }
  },
  "700001": {
    state: "West Bengal",
    district: "Kolkata",
    mp: { name: "Sudip Bandyopadhyay", party: "AITC", constituency: "Kolkata Uttar" },
    mla: { name: "Nayana Bandyopadhyay", party: "AITC", constituency: "Chowrangee" }
  },
  "800001": {
    state: "Bihar",
    district: "Patna",
    mp: { name: "Ravi Shankar Prasad", party: "BJP", constituency: "Patna Sahib" },
    mla: { name: "Nand Kishore Yadav", party: "BJP", constituency: "Patna Sahib" }
  }
};
