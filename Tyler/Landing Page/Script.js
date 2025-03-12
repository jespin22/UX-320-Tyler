// Get all the image elements in the hero section
const artistImages = document.querySelectorAll('.artist-slide');

// Initialize the current image index
let currentImageIndex = 0;

// Function to update the image
function updateArtistImage() {
    // Hide all images
    artistImages.forEach(image => {
        image.classList.remove('active');
    });

    // Show the current image
    artistImages[currentImageIndex].classList.add('active');

    // Update the image index for the next cycle
    currentImageIndex = (currentImageIndex + 1) % artistImages.length;
}

// Set an interval to change the image every 3 seconds (3000 milliseconds)
setInterval(updateArtistImage, 3000);

// Initially show the first image
updateArtistImage();
