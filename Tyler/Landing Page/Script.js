// List of artist images for the slideshow
const artistImages = [
    "Landing Page/Landing Images/CTRL THE  (artsist) /Property 1=SZA.png",
    "Landing Page/Landing Images/CTRL THE  (artsist) /Property 2=TYLER.png",
    "Landing Page/Landing Images/CTRL THE  (artsist) /Property 3=DOECHII.png"
];

// Keep track of the current image
let currentArtistIndex = 0;

// Get the image element in the hero section
const artistImageElement = document.getElementById("artistSlideshow");


// Function to update the image every 3 seconds
function updateArtistImage() {
    currentArtistIndex = (currentArtistIndex + 1) % artistImages.length; 
    artistImageElement.src = artistImages[currentArtistIndex]; 

    // Debugging: Check current image
    console.log("Current Image: ", artistImageElement.src);
}

// Automatically change the image every 3 seconds
setInterval(updateArtistImage, 3000);
