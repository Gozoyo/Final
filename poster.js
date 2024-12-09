const photos = [
    {
        src: "img/20241118_poster.PNG",
        title: "Water in the desert",
        text: "The song is a track from Khalil Fong's first release album, The Dreamer, after an eight-year hiatus from the music scene due to pneumothorax.'I was drawn to the romantic analogy of finding love like an oasis in the desert.'",
    },
    {
        src: "img/20241125_Poster.PNG",
        title: "Flying on your wings",
        text: "Flying on Your Wings is a song that has been five years in the making since JJ Lin's first album. Since his debut, JJ has always wanted to write a song for his fans and friends, but has yet to give them a complete song that belongs to them. This song is the first time that JJ Lin felt that he had written a song completely for his fans and friends in terms of lyrics, story, and emotion.",
    },
    {
        src: "img/20241202_poster.PNG",
        title: "The 1975",
        text: "In interviews they are often asked about the origin of the band's name. When Mathew was 19 years old, he was given an old beat poetry book that had been used as a diary, and in the book there was a scrawl of 1 June The 1975, Mathew thought it was funny to use the word ‘The’. At first he didn't think it was the name of his band, but when they came up with a new name he realised ‘and it was just perfect’. The name ‘The 1975’ has stuck to this day.",
    },
    {
        src: "img/20241209.PNG",
        title: "Into You",
        text: "The Dangerous Woman era was iconic. The song, the aesthetic, the colors, the setting, the chemistry, Ariana's hair, the guy, the motorcycle, the cliche body guard plot (during the height of wattpad omg) ate so hard.",
    },
    {
        src: "img/Music_calendar.PNG",
        title: "For more music",
        text: "Please tell us your favorite pop music by scanning the QR code, and please follow us on Wechat to get more information.",
    },
];

let currentIndex = 0;

// Elements
const mainPhoto = document.getElementById("main-photo");
const photoTitle = document.getElementById("photo-title");
const photoText = document.getElementById("photo-text");
const thumbnails = document.querySelectorAll(".thumbnail");
const homeButton = document.getElementById("home-button");

// Functions
function updatePhoto(index) {
    mainPhoto.src = photos[index].src;
    photoTitle.textContent = photos[index].title;
    photoText.textContent = photos[index].text;

    thumbnails.forEach((thumb, idx) => {
        thumb.style.borderColor = idx === index ? "#ff6a00" : "transparent";
    });
}

// Event Listeners for Navigation
document.getElementById("prev-photo").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhoto(currentIndex);
});

document.getElementById("next-photo").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhoto(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updatePhoto(currentIndex);
    });
});

// Home Button Navigation
homeButton.addEventListener("click", () => {
    window.location.href = "project.html";
});

// Initialize
updatePhoto(currentIndex);


