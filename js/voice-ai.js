// Farmer Service - Voice Assistant

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    // Telugu voice input
    recognition.lang = "te-IN";

    recognition.onstart = function () {
        console.log("Listening...");
    };

    recognition.onresult = function (event) {

        const userText =
            event.results[0][0].transcript;

        document.getElementById("voiceText").innerText =
            "You said: " + userText;

        // Temporary AI response
        generateAIResponse(userText);
    };

    recognition.onerror = function (event) {
        console.log("Voice error:", event.error);

        document.getElementById("voiceAnswer").innerText =
            "Sorry, I could not understand. Please try again.";
    };
}

function startVoiceAssistant() {

    if (!recognition) {
        alert("Voice recognition is not supported in this browser.");
        return;
    }

    recognition.start();
}

function generateAIResponse(question) {

    let answer = "";

    question = question.toLowerCase();

    if (question.includes("scheme") ||
        question.includes("స్కీమ్")) {

        answer =
            "You can check available government farmer schemes in the Schemes section.";
    }

    else if (question.includes("apply") ||
             question.includes("అప్లై")) {

        answer =
            "Open the required scheme and click the Apply Now button.";
    }

    else if (question.includes("document") ||
             question.includes("డాక్యుమెంట్")) {

        answer =
            "The required documents are shown on each scheme details page.";
    }

    else {

        answer =
            "I understood your question. AI assistance will provide a detailed answer after the AI backend is connected.";
    }

    document.getElementById("voiceAnswer").innerText =
        answer;

    speakAnswer(answer);
}

function speakAnswer(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";
    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
}
