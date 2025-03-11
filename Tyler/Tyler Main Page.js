document.addEventListener("DOMContentLoaded", function () {
    const speechIcon = document.getElementById("speech-icon");
    const tylerBio = document.getElementById("tyler-bio").innerText;
    let isSpeaking = false; // speaking if off automatically
    let synth = window.speechSynthesis;

    // When clicked...
    speechIcon.addEventListener("click", function () {
        // If not speaking, start
        if (!isSpeaking) {
            let utterance = new SpeechSynthesisUtterance(tylerBio);
            utterance.voice = synth.getVoices().find(voice => voice.lang.includes("en")); // Use an English voice
            synth.speak(utterance); // say the paragraph
            
            // Change icon color if clicked
            speechIcon.classList.add("active");
            isSpeaking = true; 

            // When speech ends, reset icon color
            utterance.onend = function () {
                speechIcon.classList.remove("active");
                isSpeaking = false;
            };

        // Otherwise, stop speaking
        } else {
            synth.cancel();
            speechIcon.classList.remove("active");
            isSpeaking = false;
        }
    });
});
