// List of images to cycle through
const images = [
    "Landing Images/CTRL THE  (artsist) /Property 1=SZA.png", 
    "Landing Images/CTRL THE (artist)/Property 2=TYLER.png", 
    "Landing Images/CTRL THE (artist)/Property 3=DOECHII.png"
];

// Start at the first image
let currentImageIndex = 0;

// Get the slideshow element
const slideElement = document.getElementById("slide");

// Function to change the image
function changeSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back after last image
    slideElement.src = images[currentImageIndex]; // Update image source
}

// Change image every 3 seconds
setInterval(changeSlide, 3000);