const carousel = document.querySelector(".carousel");
const artistCards = document.querySelectorAll(".artist-card");

let isDragging = false, startX, scrollLeft;

// Start the carousel on the first artist (SZA)
window.onload = function() {
    const firstArtist = artistCards[0]; // Select first artist (SZA)
    carousel.scrollLeft = firstArtist.offsetLeft - (window.innerWidth / 2 - firstArtist.clientWidth / 2);
};

/* Dragging functionality */
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
    const walk = (x - startX) * 2; // Adjust scroll speed
    carousel.scrollLeft = scrollLeft - walk;
});

/* Prevent scrolling too far left or right */
carousel.addEventListener("scroll", () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth; // Max scroll position

    if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = 0; // Prevent scrolling before first artist
    }
    if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = maxScroll; // Prevent scrolling after last artist
    }

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

    artistCards.forEach(card => card.classList.remove("active"));
    if (closest) closest.classList.add("active");
});
