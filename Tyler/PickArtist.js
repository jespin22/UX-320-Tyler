const carousel = document.querySelector(".carousel");
const artistCards = document.querySelectorAll(".artist-card");

let isDragging = false, startX, scrollLeft;

// Center the first artist on load
window.onload = function() {
    const firstArtist = artistCards[0]; 
    const firstArtistOffset = firstArtist.offsetLeft - (carousel.clientWidth / 2 - firstArtist.clientWidth / 2);
    carousel.scrollLeft = firstArtistOffset;
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
    card.addEventListener("click", () => {
        const cardOffset = card.offsetLeft - (carousel.clientWidth / 2 - card.clientWidth / 2);
        carousel.scrollLeft = cardOffset;

        artistCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});

// Auto-center functionality on scroll
carousel.addEventListener("scroll", () => {
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
