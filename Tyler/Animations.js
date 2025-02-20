// Array to store the setlist songs
let setlist = [];

/**
 * Function to add a song to the setlist
 */
function addSong() {
    let songInput = document.getElementById("song-input"); // Get input field
    let setlistContainer = document.getElementById("setlist"); // Get setlist container

    // Debugging: Check if elements exist
    if (!songInput || !setlistContainer) {
        console.error("Error: Input field or setlist container not found.");
        return;
    }

    let song = songInput.value.trim(); // Trim input to remove unnecessary spaces

    // Debugging: Check if input is empty
    console.log("Adding song:", song);

    if (song) {
        setlist.unshift(song); // Add song to the TOP of the setlist array
        displaySetlist(); // Update the UI
        songInput.value = ""; // Clear input field
    } else {
        console.warn("Warning: No song entered.");
    }
}

/**
 * Function to display the setlist on the page
 */
function displaySetlist() {
    let setlistContainer = document.getElementById("setlist"); // Get the setlist container

    // Clear previous content
    setlistContainer.innerHTML = "";

    // If the setlist is empty, show the placeholder text
    if (setlist.length === 0) {
        setlistContainer.innerHTML = "<p><em>Your setlist will appear here...</em></p>";
        return;
    }

    // Loop through the setlist array and add each song as a list item
    setlist.forEach((song, index) => {
        let songItem = document.createElement("p"); // Create a new <p> element
        songItem.textContent = `${index + 1}. ${song}`; // Add song text with numbering
        setlistContainer.appendChild(songItem); // Append to the setlist container
    });

    // Debugging: Confirm setlist was updated
    console.log("Updated Setlist:", setlist);
}

// Ensure the placeholder text appears on initial page load
document.addEventListener("DOMContentLoaded", function () {
    displaySetlist();
});
