let outfit = {
    headwear: ["Images/Fits Page/Hats 1.png", "Images/Fits Page/Hats 2.png", "Images/Fits Page/Hats 3.png"],
    tops: ["Images/Fits Page/Tops 1.png", "Images/Fits Page/Tops 2.png", "Images/Fits Page/Tops 3.png"],
    trousers: ["Images/Fits Page/Bottoms 1.png", "Images/Fits Page/Bottoms 2.png", "Images/Fits Page/Bottoms 3.png"],
    shoes: ["Images/Fits Page/Shoes 1.png", "Images/Fits Page/Shoes 2.png", "Images/Fits Page/Shoes 3.png"]
};

let index = { headwear: 0, tops: 0, trousers: 0, shoes: 0 };

function changeItem(type, direction) {
    let imgElement = document.getElementById(type);
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        index[type] += direction;
        if (index[type] < 0) index[type] = outfit[type].length - 1;
        else if (index[type] >= outfit[type].length) index[type] = 0;
        imgElement.src = outfit[type][index[type]];
        imgElement.style.opacity = 1;
    }, 300);
}
