document.addEventListener("DOMContentLoaded", function () {
    const speechIcon = document.getElementById("speech-icon");
    const tylerBio = document.getElementById("tyler-bio").innerText;
    let isSpeaking = false;
    let synth = window.speechSynthesis;

    speechIcon.addEventListener("click", function () {
        if (!isSpeaking) {
            // Start speaking
            let utterance = new SpeechSynthesisUtterance(tylerBio);
            utterance.voice = synth.getVoices().find(voice => voice.lang.includes("en")); // Use an English voice
            synth.speak(utterance);
            
            // Change icon color
            speechIcon.classList.add("active");
            isSpeaking = true;

            // When speech ends, reset icon color
            utterance.onend = function () {
                speechIcon.classList.remove("active");
                isSpeaking = false;
            };
        } else {
            // Stop speaking
            synth.cancel();
            speechIcon.classList.remove("active");
            isSpeaking = false;
        }
    });
});
