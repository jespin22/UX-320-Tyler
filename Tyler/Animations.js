// Wait until the DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Array to store the setlist songs
    let setlist = [];

    /**
     * Function to add a song to the setlist
     */
    function addSong() {
        let songInput = document.getElementById("song-input");
        let song = songInput.value.trim(); // Remove extra spaces

        if (song) {
            setlist.push(song); // Add to setlist array
            displaySetlist(); // Update UI
            songInput.value = ""; // Clear input field
        }
    }

    /**
     * Function to display the setlist on the page
     */
    function displaySetlist() {
        let setlistContainer = document.getElementById("setlist");

        // Clear previous content
        setlistContainer.innerHTML = "";

        // If setlist is empty, show placeholder text
        if (setlist.length === 0) {
            setlistContainer.innerHTML = "<p><em>Your setlist will appear here...</em></p>";
            return;
        }

        // Create list elements for each song
        let list = document.createElement("ul"); // Use <ul> for a cleaner list
        setlist.forEach((song, index) => {
            let songItem = document.createElement("li");
            songItem.textContent = `${index + 1}. ${song}`;
            list.appendChild(songItem);
        });

        // Append the updated list to the container
        setlistContainer.appendChild(list);
    }

    // Attach function to button (removes inline `onclick`)
    document.querySelector(".add-btn").addEventListener("click", addSong);
});
