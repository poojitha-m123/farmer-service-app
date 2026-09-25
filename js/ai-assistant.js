// ==========================================
// FARMER SERVICE - AI ASSISTANT
// ==========================================


// ------------------------------------------
// VOICE RECOGNITION
// ------------------------------------------

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

}


// ------------------------------------------
// START VOICE
// ------------------------------------------

function startAIListening() {

    if (!recognition) {

        alert(
            "Voice recognition is not supported in this browser."
        );

        return;
    }


    const language =
        document.getElementById("languageSelect").value;


    recognition.lang = language;


    recognition.onstart = function () {

        document.getElementById("aiQuestion").innerText =
            "🎤 Listening... Please speak.";

    };


    recognition.onresult = function(event) {

        const question =
            event.results[0][0].transcript;


        document.getElementById("aiQuestion").innerText =
            "You said: " + question;


        generateAIAnswer(question);

    };


    recognition.onerror = function(event) {

        document.getElementById("aiAnswer").innerText =
            "Sorry, I could not understand your voice. Please try again.";

        console.log(event.error);

    };


    recognition.start();

}


// ------------------------------------------
// AI ANSWER
// ------------------------------------------

function generateAIAnswer(question) {

    const language =
        document.getElementById("languageSelect").value;


    const lowerQuestion =
        question.toLowerCase();


    let answer;


    // Telugu

    if (language === "te-IN") {

        if (
            lowerQuestion.includes("పథకం") ||
            lowerQuestion.includes("స్కీమ్")
        ) {

            answer =
                "మీకు అందుబాటులో ఉన్న రైతు ప్రభుత్వ పథకాలను Schemes విభాగంలో చూడవచ్చు.";

        }

        else if (
            lowerQuestion.includes("దరఖాస్తు") ||
            lowerQuestion.includes("అప్లై")
        ) {

            answer =
                "మీకు కావలసిన పథకాన్ని ఎంచుకుని Apply Now బటన్‌పై క్లిక్ చేయండి.";

        }

        else if (
            lowerQuestion.includes("పత్రాలు") ||
            lowerQuestion.includes("డాక్యుమెంట్")
        ) {

            answer =
                "ప్రతి పథకం యొక్క వివరాల పేజీలో అవసరమైన పత్రాల వివరాలు ఇవ్వబడ్డాయి.";

        }

        else {

            answer =
                "మీ ప్రశ్నను అర్థం చేసుకున్నాను. రైతు పథకాలు మరియు సేవల గురించి మరింత సమాచారం కోసం Schemes విభాగాన్ని చూడండి.";

        }

    }


    // Hindi

    else if (language === "hi-IN") {

        if (
            lowerQuestion.includes("योजना") ||
            lowerQuestion.includes("स्कीम")
        ) {

            answer =
                "आप उपलब्ध किसान सरकारी योजनाओं की जानकारी Schemes सेक्शन में देख सकते हैं.";

        }

        else if (
            lowerQuestion.includes("आवेदन") ||
            lowerQuestion.includes("अप्लाई")
        ) {

            answer =
                "अपनी आवश्यक योजना चुनें और Apply Now बटन पर क्लिक करें.";

        }

        else if (
            lowerQuestion.includes("दस्तावेज") ||
            lowerQuestion.includes("डॉक्यूमेंट")
        ) {

            answer =
                "आवश्यक दस्तावेजों की जानकारी प्रत्येक योजना के विवरण पेज पर दी गई है.";

        }

        else {

            answer =
                "मैंने आपका प्रश्न समझ लिया है। किसान योजनाओं और सेवाओं के लिए Schemes सेक्शन देखें.";

        }

    }


    // English

    else {

        if (
            lowerQuestion.includes("scheme") ||
            lowerQuestion.includes("government")
        ) {

            answer =
                "You can view available government farmer schemes in the Schemes section.";

        }

        else if (
            lowerQuestion.includes("apply") ||
            lowerQuestion.includes("application")
        ) {

            answer =
                "Open the required scheme and click the Apply Now button.";

        }

        else if (
            lowerQuestion.includes("document")
        ) {

            answer =
                "The required documents are available on each scheme details page.";

        }

        else {

            answer =
                "I understood your question. Please check the Farmer Service schemes and services.";

        }

    }


    document.getElementById("aiAnswer").innerText =
        answer;


    speakAIAnswer(answer);

}


// ------------------------------------------
// TEXT TO SPEECH
// ------------------------------------------

function speakAIAnswer(text) {

    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    const language =
        document.getElementById("languageSelect").value;


    speech.lang = language;

    speech.rate = 0.9;

    speech.pitch = 1;


    window.speechSynthesis.speak(speech);

}


// ------------------------------------------
// TEXT QUESTION
// ------------------------------------------

function askAI() {

    const question =
        document.getElementById("questionInput").value;


    if (question.trim() === "") {

        alert("Please enter your question.");

        return;

    }


    document.getElementById("aiQuestion").innerText =
        "You asked: " + question;


    generateAIAnswer(question);

}


// ------------------------------------------
// AI SCHEME FINDER
// ------------------------------------------

function findScheme() {

    const question =
        document.getElementById("schemeQuestion").value.toLowerCase();


    const result =
        document.getElementById("schemeResult");


    if (question.trim() === "") {

        result.innerText =
            "Please enter your requirement.";

        return;

    }


    if (
        question.includes("money") ||
        question.includes("financial") ||
        question.includes("credit") ||
        question.includes("loan") ||
        question.includes("డబ్బు") ||
        question.includes("రుణం")
    ) {

        result.innerHTML =
            `
            <h3>💰 Financial Support</h3>
            <p>
                You may be able to find financial-support or
                agricultural-credit schemes in the Schemes section.
            </p>
            `;

    }


    else if (
        question.includes("crop") ||
        question.includes("insurance") ||
        question.includes("పంట")
    ) {

        result.innerHTML =
            `
            <h3>🌾 Crop Related Schemes</h3>
            <p>
                Check the available crop insurance and
                agriculture-related schemes.
            </p>
            `;

    }


    else {

        result.innerHTML =
            `
            <h3>🔎 Search Schemes</h3>
            <p>
                Please provide more information about your farming
                requirement so the system can find relevant schemes.
            </p>
            `;

    }

}


// ------------------------------------------
// CROP IMAGE PREVIEW
// ------------------------------------------

function previewCropImage() {

    const file =
        document.getElementById("cropImage").files[0];


    const preview =
        document.getElementById("cropPreview");


    if (!file) {

        preview.style.display = "none";

        return;

    }


    const reader =
        new FileReader();


    reader.onload = function(event) {

        preview.src =
            event.target.result;

        preview.style.display =
            "block";

    };


    reader.readAsDataURL(file);

}


// ------------------------------------------
// CROP ANALYSIS
// ------------------------------------------

function analyzeCrop() {

    const file =
        document.getElementById("cropImage").files[0];


    if (!file) {

        alert("Please upload a crop or leaf image.");

        return;

    }


    document.getElementById("cropResult").innerText =
        "🔄 Analyzing image...";


    setTimeout(function() {

        document.getElementById("cropResult").innerText =
            "🌾 Image received successfully. In the full AI version, this image will be analyzed by a trained crop/disease recognition model.";

    }, 1500);

}


// ------------------------------------------
// DOCUMENT ANALYSIS
// ------------------------------------------

function analyzeDocument() {

    const file =
        document.getElementById("documentFile").files[0];


    if (!file) {

        alert("Please upload a document.");

        return;

    }


    document.getElementById("documentResult").innerText =
        "🔄 Processing document...";


    setTimeout(function() {

        document.getElementById("documentResult").innerText =
            "📄 Document received successfully. The production AI version can extract and explain the document in simple language.";

    }, 1500);

}
