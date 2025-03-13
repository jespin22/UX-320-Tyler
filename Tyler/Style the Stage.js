// Array to store images
const backdropImages = ["Images/Stage Page/BACKDROP 1.png", "Images/Stage Page/Backdrop 2.png", "Images/Stage Page/Backdrop 3.png"];
const propsImages = ["Images/Stage Page/PROPS 1.png", "Images/Stage Page/PROPS 2.png", "Images/Stage Page/PROPS 3.png"];
const lightingImages = ["Images/Stage Page/LIGHTING 1.png", "Images/Stage Page/LIGHTING 2.png", "Images/Stage Page/LIGHTING 3.png"];

// Track index of images
let backdropIndex = 0, propsIndex = 0, lightingIndex = 0;

// Change image of element
function changeImage(index, images, elementId) {
    let imgElement = document.getElementById(elementId);
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
    }, 300);
}

// Event listener for buttons
document.querySelectorAll(".arrow-btn").forEach(button => {
    button.addEventListener("click", () => {
        let id = button.id.split('-');
        let category = id[1];
        let images = eval(category + "Images");
        let index = eval(category + "Index");

        // Update index depending on prev or next image
        index = (id[0] === "prev") ? (index - 1 + images.length) % images.length : (index + 1) % images.length;

        changeImage(index, images, category);
        eval(category + "Index = index");
    });
});