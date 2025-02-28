// List of images to cycle through
const images = [
    "/Landing Images/CTRL THE  (artsist) /Property 1=SZA.png", 
    "/Landing Images/CTRL THE  (artsist) /Property 2=TYLERII.png", 
    "Tyler/Landing Page/Landing Images/CTRL THE  (artsist) /Property 3=DOECH.png"
];

// Start at the first image
let currentImageIndex = 0;

// Get the slideshow element
const slideElement = document.getElementById("slide");


// Function to change the image
function changeSlide() {
    slideElement.classList.remove("slide-animation"); // Reset animation

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideElement.src = images[currentImageIndex];

        slideElement.classList.add("slide-animation");
    }, 200);
}

    // Add animation class
    slideElement.classList.add("slide-animation");

    // Delay changing the image to let the animation run smoothly
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back after last image
        slideElement.src = images[currentImageIndex]; // Update image source
        
        // Remove animation class so it can be added again in the next cycle
        slideElement.classList.remove("slide-animation");
    }, 800); // Match this with the animation duration (0.8s)


// Change image every 3 seconds
setInterval(changeSlide, 3000);