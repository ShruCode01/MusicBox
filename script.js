// =========================
// Select HTML Elements
// =========================

const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const title = document.getElementById("title");

const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");


const muteBtn =document.getElementById("mute");


const shuffleBtn = document.getElementById("shuffle");


// =========================
// Songs Data
// =========================

const songs = [

    {
        title: "DILBAR",

        artist: "Neha Kakkar /IKKA /Divni Bhanushali 2018, 3min 4sec",

        image: "images/dilbar.png",

        audio: "Songs/dilbar.mp3"
    },

    {
        title: "Ankhen Uthi Mohabbat Ne Angrai Lee",

        artist: "Nushrat Fate ali Ali Khan , 2014, 4min 37sec",

        image: "images/ankhen-uthi.png",

        audio: "Songs/Ankhen uthi.mp3"
    },

    {
        title: "Believer",

        artist: "Imagine Dragons",

        image: "images/believer.png",

        audio: "Songs/believer.mp3"
    }

];

let currentSong = 0;
let isPlaying = false;

let isShuffle = false;


// =========================
// Load Song
// =========================

function loadSong(index) {

    cover.src = songs[index].image;

    title.textContent = songs[index].title;

    artist.textContent = songs[index].artist;

    audio.src = songs[index].audio;

}





function playSong() {

    audio.play();

    isPlaying = true;

    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

}

function pauseSong() {

    audio.pause();

    isPlaying = false;

    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

}


function nextSong(){

    if (isShuffle) {
      let randomIndex;

do {

    randomIndex = Math.floor(
        Math.random() * songs.length
    );

} while (randomIndex === currentSong);

currentSong = randomIndex;

} else {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

}

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    highlightCurrentSong();

    playSong();

}

function prevSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    playSong();
}

function updateProgress() {

    const current = audio.currentTime;

    const total = audio.duration;

    if (!isNaN(total)) {

        progress.value = (current / total) * 100;

        currentTime.textContent = formatTime(current);

        duration.textContent = formatTime(total);
 }

}


function seekSong() {

    const seekTime =

        (progress.value / 100) * audio.duration;

    audio.currentTime = seekTime;

}




function formatTime(seconds) {

    const mins = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;

}




function changeVolume() {

    audio.volume = volume.value / 100;

}


function toggleMute() {

    audio.muted = !audio.muted;

    if (audio.muted) {

        muteBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        muteBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }

}
function createPlaylist() {

    playlist.innerHTML = "";

    songs.forEach((song, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${song.image}" class="playlist-img">

            <div class="playlist-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;

        li.addEventListener("click", () => {

            currentSong = index;

            loadSong(currentSong);

            playSong();

            highlightCurrentSong();

        });

        playlist.appendChild(li);

    });

}


function highlightCurrentSong() {

    const items = document.querySelectorAll("#playlist li");

    items.forEach((item, index) => {

        item.classList.toggle("active", index === currentSong);

    });

}

playBtn.addEventListener("click", function () {


    if (isPlaying) {


        pauseSong();


    } else {


        playSong();


    }


});


audio.addEventListener("ended", nextSong);

nextBtn.addEventListener("click", nextSong);


prevBtn.addEventListener("click", prevSong);


audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", seekSong);

volume.addEventListener("input", changeVolume);

muteBtn.addEventListener("click", toggleMute);



shuffleBtn.addEventListener("click", () => {

    isShuffle = !isShuffle;

    shuffleBtn.classList.toggle("active");

});