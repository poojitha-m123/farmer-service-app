// ==========================================
// FARMER SERVICE - LANGUAGE PREFERENCE
// ==========================================

const translations = {

    en: {
        home: "Home",
        schemes: "Schemes",
        login: "Login",
        register: "Register",
        dashboard: "Dashboard",
        aiAssistant: "🤖 AI Assistant",

        title: "Farmer Service App",

        description:
            "A digital platform connecting farmers with government schemes and agricultural services.",

        getStarted: "Get Started",
        viewSchemes: "View Schemes",

        ourServices: "Our Services",

        governmentSchemes: "Government Schemes",
        governmentSchemesText:
            "Find information about farmer-related government schemes.",

        eligibility: "Eligibility",
        eligibilityText:
            "Check eligibility requirements before applying.",

        documents: "Documents",
        documentsText:
            "View the documents required for different schemes.",

        trackApplication: "Track Application",
        trackApplicationText:
            "Track the status of supported applications."
    },

    te: {
        home: "హోమ్",
        schemes: "పథకాలు",
        login: "లాగిన్",
        register: "రిజిస్టర్",
        dashboard: "డాష్‌బోర్డ్",
        aiAssistant: "🤖 AI సహాయకుడు",

        title: "రైతు సేవా యాప్",

        description:
            "రైతులను ప్రభుత్వ పథకాలు మరియు వ్యవసాయ సేవలతో అనుసంధానించే డిజిటల్ వేదిక.",

        getStarted: "ప్రారంభించండి",
        viewSchemes: "పథకాలను చూడండి",

        ourServices: "మా సేవలు",

        governmentSchemes: "ప్రభుత్వ పథకాలు",
        governmentSchemesText:
            "రైతులకు సంబంధించిన ప్రభుత్వ పథకాల సమాచారాన్ని తెలుసుకోండి.",

        eligibility: "అర్హత",
        eligibilityText:
            "దరఖాస్తు చేయడానికి ముందు అర్హత వివరాలను తెలుసుకోండి.",

        documents: "పత్రాలు",
        documentsText:
            "వివిధ పథకాలకు అవసరమైన పత్రాలను చూడండి.",

        trackApplication: "దరఖాస్తు స్థితి",
        trackApplicationText:
            "మీ దరఖాస్తు స్థితిని తెలుసుకోండి."
    },

    hi: {
        home: "होम",
        schemes: "योजनाएं",
        login: "लॉगिन",
        register: "रजिस्टर",
        dashboard: "डैशबोर्ड",
        aiAssistant: "🤖 AI सहायक",

        title: "किसान सेवा ऐप",

        description:
            "किसानों को सरकारी योजनाओं और कृषि सेवाओं से जोड़ने वाला डिजिटल प्लेटफॉर्म।",

        getStarted: "शुरू करें",
        viewSchemes: "योजनाएं देखें",

        ourServices: "हमारी सेवाएं",

        governmentSchemes: "सरकारी योजनाएं",
        governmentSchemesText:
            "किसानों से संबंधित सरकारी योजनाओं की जानकारी प्राप्त करें।",

        eligibility: "पात्रता",
        eligibilityText:
            "आवेदन करने से पहले पात्रता की जानकारी जांचें।",

        documents: "दस्तावेज़",
        documentsText:
            "विभिन्न योजनाओं के लिए आवश्यक दस्तावेज़ देखें।",

        trackApplication: "आवेदन की स्थिति",
        trackApplicationText:
            "अपने आवेदन की स्थिति को ट्रैक करें।"
    }
};


// Change website language
function changeLanguage(language) {

    localStorage.setItem("selectedLanguage", language);

    applyLanguage(language);
}


// Apply selected language
function applyLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) {
        return;
    }

    document.querySelectorAll("[data-lang]").forEach(function(element) {

        const key = element.getAttribute("data-lang");

        if (selectedLanguage[key]) {
            element.innerText = selectedLanguage[key];
        }

    });

    // Keep dropdown selected
    const languageSelect =
        document.getElementById("siteLanguage");

    if (languageSelect) {
        languageSelect.value = language;
    }
}


// Load saved language
document.addEventListener("DOMContentLoaded", function() {

    const savedLanguage =
        localStorage.getItem("selectedLanguage") || "en";

    applyLanguage(savedLanguage);

});
