let albumIndex = 0;
const albums = [
    {cover: "./Images/Setlist Page/Setlist 1 Album = Chroma.png", songs: "./Images/Setlist Page/Setlist 1 Songs = Chroma.png"},
    { cover: "./Images/Setlist Page/Setlist 2 Album = CMIYG .png", songs: "./Images/Setlist Page/Setlist 2 Songs = CMIYG.png" },
    { cover: "./Images/Setlist Page/Setlist 3 Album = IGOR.png", songs: "./Images/Setlist Page/Setlist 3 Songs = IGOR.png" }
];

function updateAlbumDisplay() {
    document.getElementById("mainAlbum").src = albums[albumIndex].cover;
    document.getElementById("mainSongs").src = albums[albumIndex].songs;

    document.getElementById("leftAlbum").src = albums[(albumIndex - 1 + albums.length) % albums.length].cover;
    document.getElementById("rightAlbum").src = albums[(albumIndex + 1) % albums.length].cover;
}

function prevAlbum() { albumIndex = (albumIndex - 1 + albums.length) % albums.length; updateAlbumDisplay(); }
function nextAlbum() { albumIndex = (albumIndex + 1) % albums.length; updateAlbumDisplay(); }
function flipCard() { document.getElementById("mainAlbumCard").classList.toggle("flipped"); }

function hidePlaceholder() { 
    document.getElementById("setlist-placeholder").style.opacity = "0"; 
}

function addSong() { 
    let input = document.getElementById("songInput");
    let setlistBox = document.getElementById("setlist-box");

    if (input.value.trim() !== "") {
        document.getElementById("setlist-placeholder").style.display = "none";
        let songItem = document.createElement("p");
        songItem.textContent = input.value;
        setlistBox.appendChild(songItem);
        input.value = "";
    }
}

updateAlbumDisplay();