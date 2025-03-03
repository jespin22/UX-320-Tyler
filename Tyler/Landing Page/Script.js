// List of artist images for the slideshow
const artistImages = [
    "./Landing Images/CTRL-THE-ARTIST/Property1-SZA.png",
    "./Landing Images/CTRL-THE-ARTIST/Property2-TYLER.png",
    "./Landing Images/CTRL-THE-ARTIST/Property3-DOECHII.png"
];

// Keep track of the current image
let currentArtistIndex = 0;

// Get the image element in the hero section
const artistImageElement = document.getElementById("artistSlideshow");

// Debugging: Check if the script is running
console.log("Slideshow script is running");

// Function to update the image every 3 seconds
function updateArtistImage() {
    currentArtistIndex = (currentArtistIndex + 1) % artistImages.length; 
    artistImageElement.src = artistImages[currentArtistIndex]; 

    // Debugging: Check current image
    console.log("Current Image: ", artistImageElement.src);
}

// Automatically change the image every 3 seconds
setInterval(updateArtistImage, 3000);
