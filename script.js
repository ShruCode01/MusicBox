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


// =========================
// Songs Data
// =========================

const songs = [

    {
        title: "Blinding Lights",

        artist: "The Weeknd",

        image: "assets/images/cover1.jpg",

        audio: "assets/songs/song1.mp3"
    },

    {
        title: "Perfect",

        artist: "Ed Sheeran",

        image: "assets/images/cover2.jpg",

        audio: "assets/songs/song2.mp3"
    },

    {
        title: "Believer",

        artist: "Imagine Dragons",

        image: "assets/images/cover3.jpg",

        audio: "assets/songs/song3.mp3"
    }

];

let currentSong = 0;
// =========================
// Load Song
// =========================

function loadSong(index) {

    cover.src = songs[index].image;

    title.textContent = songs[index].title;

    artist.textContent = songs[index].artist;

    audio.src = songs[index].audio;

}