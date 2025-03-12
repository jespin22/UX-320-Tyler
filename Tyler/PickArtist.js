const carousel = document.querySelector(".carousel");
const artistCards = document.querySelectorAll(".artist-card");

let isDragging = false, startX, scrollLeft;

// Function to center an artist and update opacity
function centerArtist(card) {
    if (!card) return;

    // Center the selected artist
    const cardOffset = card.offsetLeft - (carousel.clientWidth / 2 - card.clientWidth / 2);
    carousel.scrollTo({ left: cardOffset, behavior: "smooth" });

    // Remove 'active' class from all and reset opacity
    artistCards.forEach(c => {
        c.classList.remove("active");
        c.style.opacity = "0.3"; // Dim other artists
    });

    // Set active class and full opacity for clicked card
    card.classList.add("active");
    card.style.opacity = "1";
}

// Center the first artist on load
window.onload = function () {
    centerArtist(artistCards[0]);
};

// Dragging functionality
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

// Click-to-center functionality
artistCards.forEach(card => {
    card.addEventListener("click", () => centerArtist(card));
});

// Auto-center functionality on scroll (throttled for performance)
let scrollTimeout;
carousel.addEventListener("scroll", () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        let closest = null;
        let minDistance = Infinity;

        artistCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const distance = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);

            if (distance < minDistance) {
                minDistance = distance;
                closest = card;
            }
        });

        centerArtist(closest);
    }, 100);
});

// Recenter when window resizes
window.addEventListener("resize", () => {
    const activeCard = document.querySelector(".artist-card.active");
    centerArtist(activeCard || artistCards[0]);
});