/* ==================== TEXT-TO-SPEECH ==================== */
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

/* ==================== LEARN MORE LINK ==================== */
const learnMoreLink = document.getElementById('learn-more-link');
const moreText = document.getElementById('more-text');

// Show text when hovering
learnMoreLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    // Show additional text
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline'; // Show more text
        learnMoreLink.textContent = 'Show Less...'; // Change link text to "Show Less..."
    } else {
        moreText.style.display = 'none'; // Hide additional text
        learnMoreLink.textContent = 'Read More...'; // Change link text back to "Learn More..."
    }
});