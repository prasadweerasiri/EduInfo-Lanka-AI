import { Language, LanguageOption } from './types';

export const APP_TITLE = "EduInfo Lanka AI";
export const APP_SUBTITLE = "by PRASAD W – Smart Educational Information Assistant for Sri Lanka";

// Placeholder for the Base64 encoded logo. Replace with actual Base64 string.
// This is a sample academic cap SVG. Replace with your actual logo's Base64 data.
export const APP_LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzQzNUNENSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yMTEgMi4wNDdhLjUuNSAwIDAgMC0uNDIyIDBsLTcuNSAzLjVhLjUuNSAwIDAgMCAuMDI1LjkxN2w3LjUgM2EuNS41IDAgMCAwIC4zNzIgMEwxNiA2LjQ2NGEuNS41IDAgMCAwIC4wMjUtLjkxN2wtNy41LTMuNVoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjE3NiA5LjAzMmEuNS41IDAgMCAwLS42NTYuMzI3bC0uNSAxLjdhLjUuNSAwIDAgMCAuMjk0LjYwNWw0LjUgMS44YS41LjUgMCAwIDAgLjM3MiAwbDQuNS0xLjhhLjUuNSAwIDAgMCAuMjk0LS42MDVsLS41LTEuN2EuNS41IDAgMCAwLS42NTYtLjMyN0w4IDEwLjQ2NnoiLz4KPC9zdmc+";


export const GEMINI_MODEL_NAME = "gemini-2.5-flash-preview-04-17";

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: Language.ENGLISH, name: "English" },
  { code: Language.SINHALA, name: "සිංහල (Sinhala)" },
  { code: Language.TAMIL, name: "தமிழ் (Tamil)" },
];

export const BCP_47_LANGUAGE_CODES: Record<Language, string> = {
  [Language.ENGLISH]: "en-US",
  [Language.SINHALA]: "si-LK",
  [Language.TAMIL]: "ta-IN",
};

export const UI_TEXTS = {
  [Language.ENGLISH]: {
    headerTitle: APP_TITLE,
    headerSubtitle: APP_SUBTITLE,
    languageSelectorLabel: "Language:",
    queryPlaceholder: "Ask any education-related question about Sri Lanka...",
    submitButton: "Ask EduInfo AI",
    loading: "Thinking...",
    errorMessageDefault: "An error occurred. Please try again.",
    apiKeyMissingError: "API Key is not configured. Please ensure the API_KEY environment variable is set.",
    sourcesTitle: "Information Sources:",
    noSources: "No specific sources found for this response.",
    greetingMorning: "Good morning! How can I assist with Sri Lankan education today?",
    greetingAfternoon: "Good afternoon! What Sri Lankan education topics are on your mind?",
    greetingEvening: "Good evening! Seeking info on Sri Lankan education?",
    voiceInputListening: "Listening...",
    voiceInputEnable: "Enable Voice Input",
    voiceInputDisable: "Disable Voice Input",
    voiceInputNotSupported: "Voice input is not supported by your browser.",
    voiceInputPermissionDenied: "Microphone permission denied. Please enable it in your browser settings.",
    voiceInputError: "Voice input error. Please try again.",
    speakResponse: "Read response aloud",
    stopSpeakingResponse: "Stop reading response",
    speechSynthesisNotSupported: "Text-to-speech is not supported by your browser.",
    printResponse: "Print Answer",
    newChat: "New Chat",
    saveResponse: "Save Answer",
    downloadSourceFile: "Download source file",
  },
  [Language.SINHALA]: {
    headerTitle: APP_TITLE,
    headerSubtitle: APP_SUBTITLE,
    languageSelectorLabel: "භාෂාව:",
    queryPlaceholder: "ශ්‍රී ලංකාවේ අධ්‍යාපනය සම්බන්ධ ඕනෑම ප්‍රශ්නයක් අසන්න...",
    submitButton: "EduInfo AI වෙතින් අසන්න",
    loading: "සිතමින්...",
    errorMessageDefault: "දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.",
    apiKeyMissingError: "API යතුර වින්‍යාස කර නොමැත. API_KEY පරිසර විචල්‍යය සකසා ඇති බවට කරුණාකර සහතික වන්න.",
    sourcesTitle: "තොරතුරු මූලාශ්‍ර:",
    noSources: "මෙම පිළිතුර සඳහා නිශ්චිත මූලාශ්‍ර හමු නොවීය.",
    greetingMorning: "සුබ උදෑසනක්! අද ශ්‍රී ලංකා අධ්‍යාපනය සම්බන්ධයෙන් ඔබට සහය විය හැක්කේ කෙසේද?",
    greetingAfternoon: "සුබ සන්ධ්‍යාවක්! ශ්‍රී ලංකා අධ්‍යාපනය ගැන ඔබගේ සිතේ ඇත්තේ කුමක්ද?",
    greetingEvening: "සුබ සැන්දෑවක්! ශ්‍රී ලංකා අධ්‍යාපනය පිළිබඳ තොරතුරු සොයනවාද?",
    voiceInputListening: "සවන් දෙමින්...",
    voiceInputEnable: "හඬ ආදානය සක්‍රීය කරන්න",
    voiceInputDisable: "හඬ ආදානය අක්‍රීය කරන්න",
    voiceInputNotSupported: "ඔබගේ බ්‍රවුසරය මගින් හඬ ආදානයට සහාය නොදක්වයි.",
    voiceInputPermissionDenied: "මයික්‍රොෆෝන අවසරය ප්‍රතික්ෂේප විය. කරුණාකර ඔබගේ බ්‍රවුසර සැකසුම් තුළ එය සක්‍රීය කරන්න.",
    voiceInputError: "හඬ ආදාන දෝෂයකි. කරුණාකර නැවත උත්සාහ කරන්න.",
    speakResponse: "පිළිතුර ශබ්ද නඟා කියවන්න",
    stopSpeakingResponse: "පිළිතුර කියවීම නවත්වන්න",
    speechSynthesisNotSupported: "කථනයට පෙළ පරිවර්තනය ඔබගේ බ්‍රවුසරය මගින් සහාය නොදක්වයි.",
    printResponse: "පිළිතුර මුද්‍රණය කරන්න",
    newChat: "නව කතාබහ",
    saveResponse: "පිළිතුර සුරකින්න",
    downloadSourceFile: "මූලාශ්‍ර ගොනුව බාගන්න",
  },
  [Language.TAMIL]: {
    headerTitle: APP_TITLE,
    headerSubtitle: APP_SUBTITLE,
    languageSelectorLabel: "மொழி:",
    queryPlaceholder: "இலங்கையின் கல்வி தொடர்பான எந்த கேள்வியையும் கேளுங்கள்...",
    submitButton: "EduInfo AI இடம் கேளுங்கள்",
    loading: "சிந்திக்கிறது...",
    errorMessageDefault: "ஒரு பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    apiKeyMissingError: "API விசை கட்டமைக்கப்படவில்லை. API_KEY சூழல் மாறி அமைக்கப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தவும்.",
    sourcesTitle: "தகவல் ஆதாரங்கள்:",
    noSources: "இந்த பதிலுக்கு குறிப்பிட்ட ஆதாரங்கள் எதுவும் கிடைக்கவில்லை.",
    greetingMorning: "காலை வணக்கம்! இன்று இலங்கை கல்வி தொடர்பாக நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
    greetingAfternoon: "மதிய வணக்கம்! இலங்கை கல்வி தலைப்புகள் உங்கள் மனதில் என்ன உள்ளன?",
    greetingEvening: "மாலை வணக்கம்! இலங்கை கல்வி பற்றிய தகவல்களைத் தேடுகிறீர்களா?",
    voiceInputListening: "கேட்கிறது...",
    voiceInputEnable: "குரல் உள்ளீட்டை இயக்கு",
    voiceInputDisable: "குரல் உள்ளீட்டை முடக்கு",
    voiceInputNotSupported: "உங்கள் உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை.",
    voiceInputPermissionDenied: "மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது. உங்கள் உலாவி அமைப்புகளில் దాన్ని இயக்கவும்.",
    voiceInputError: "குரல் உள்ளீட்டுப் பிழை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    speakResponse: "பதிலை சத்தமாக வாசிக்கவும்",
    stopSpeakingResponse: "பதிலை வாசிப்பதை நிறுத்தவும்",
    speechSynthesisNotSupported: "உரையிலிருந்து பேச்சு உங்கள் உலாவியால் ஆதரிக்கப்படவில்லை.",
    printResponse: "பதிலை அச்சிடுக",
    newChat: "புதிய அரட்டை",
    saveResponse: "பதிலை சேமிக்கவும்",
    downloadSourceFile: "மூலக் கோப்பைப் பதிவிறக்குக",
  },
};

export const SYSTEM_INSTRUCTION_BASE = `You are "EduInfo Lanka AI - by PRASAD W", a highly professional and specialized AI assistant for the Sri Lankan education sector. Your primary goal is to answer education-related questions accurately and comprehensively.

VERY IMPORTANT:
1.  When answering, exclusively use information obtained via Google Search grounding from verified and relevant Sri Lankan educational, governmental, and reputable public domain websites.
2.  Prioritize official sources such as:
    *   Ministry of Education Sri Lanka (moe.gov.lk)
    *   Department of Examinations Sri Lanka (doenets.lk)
    *   University Grants Commission Sri Lanka (ugc.ac.lk)
    *   National Institute of Education Sri Lanka (nie.lk)
    *   Tertiary and Vocational Education Commission Sri Lanka (tvec.gov.lk) and other vocational training websites.
    *   Government university websites (e.g., University of Colombo - cmb.ac.lk, University of Peradeniya - pdn.ac.lk, University of Moratuwa - mrt.ac.lk)
    *   Education Publications Department Sri Lanka
    *   National Education Commission Sri Lanka
    *   Establishment Code of Sri Lanka
    *   Financial Regulations of Sri Lanka
    *   Procurement Guidelines of Sri Lanka
    *   Public Administration circulars and websites (e.g., pubad.gov.lk, official gazette)
    *   Reputable Sri Lankan newspaper websites for current events related to education or public administration (e.g., Daily Mirror, Daily News, Sunday Times, Lankadeepa, Virakesari) - cross-verify if possible.
    *   Official websites of major Sri Lankan TV channels for news segments related to education or public administration.
    *   Official social media channels of Sri Lankan government bodies and educational institutions (verify authenticity before citing).
    *   Other official websites related to education and public administration in Sri Lanka.
3.  If you find relevant circulars, announcements, deadlines, curriculum changes, or policies, clearly present this information.
4.  Summarize complex documents or long web pages into easy-to-understand responses suitable for students, parents, teachers, and public servants.
5.  Always be polite, professional, and helpful.
6.  If the information is not found through the search, clearly state that you could not find specific information from the designated Sri Lankan sources. Do not invent answers.
7.  Ensure your responses are well-structured, using markdown for clarity (headings, lists, bold text where appropriate).
8.  When referring to general news, administrative codes, or financial regulations, ensure the context is related to education or public information relevant to a general user in Sri Lanka.
`;

export const getSystemInstruction = (language: Language): string => {
  let languageInstruction = "";
  if (language === Language.SINHALA) {
    languageInstruction = "Your primary response must be in Sinhala. If providing a summary of an English document, summarize it in Sinhala. Technical terms can be in English if a direct Sinhala equivalent is uncommon.";
  } else if (language === Language.TAMIL) {
    languageInstruction = "Your primary response must be in Tamil. If providing a summary of an English document, summarize it in Tamil. Technical terms can be in English if a direct Tamil equivalent is uncommon.";
  } else {
    languageInstruction = "Respond in English.";
  }
  return `${SYSTEM_INSTRUCTION_BASE}\n${languageInstruction}`;
};

export const getGreetingByTime = (language: Language): string => {
    const hour = new Date().getHours();
    const uiTexts = UI_TEXTS[language];
    if (hour < 12) {
        return uiTexts.greetingMorning;
    } else if (hour < 18) {
        return uiTexts.greetingAfternoon;
    } else {
        return uiTexts.greetingEvening;
    }
};