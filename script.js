// Get elements
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPauseBtn = document.getElementById("playPause");
let backwardBtn = document.querySelectorAll(".fa-backward-step");
let forwardBtn = document.querySelectorAll(".fa-forward-step");

let artist = document.getElementById("artist");
let songTitle = document.getElementById("songTitle");
let songImg = document.getElementById("songImg");

// Sample array of songs
let songs = [
  { title: "Santa Tell Me", artist: "Ariana Grande", src: "./media/Santa Tell Me.mp3", img: "./img/singer.jpg" },
  
   { title: "Way Down We Go", artist: "Kaleo", src: "media/Way-Down-We-Go(PaglaSongs).mp3", img: "img/KaleoWayDownWeGo.jpg" },

  
];

// Current index to keep track of the song
let currentIndex = 0;

// Set initial song details
function setSongDetails() {
  songTitle.textContent = songs[currentIndex].title;
  artist.textContent = songs[currentIndex].artist;
  song.src = songs[currentIndex].src;
  songImg.src = songs[currentIndex].img;
}

// Set initial progress and duration when metadata is loaded
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play/pause function
function playPause() {
  if (playPauseBtn.classList.contains("fa-pause")) {
    // Pause the song
    song.pause();
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
  } else {
    // Play the song
    song.play();
    playPauseBtn.classList.add("fa-pause");
    playPauseBtn.classList.remove("fa-play");
  }
}

// Update progress when the song is playing
song.addEventListener("timeupdate", function () {
  progress.value = song.currentTime;
});

// Change song position when the user interacts with the progress bar
progress.oninput = function () {
  song.currentTime = progress.value;
};

// Event listener for moving backward
function prevTrack() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  setSongDetails();
}

// Event listener for moving forward
function nextTrack() {
  currentIndex = (currentIndex + 1) % songs.length;
  setSongDetails();
}

// ... (your existing code)

// Array of gradient colors
const gradientColors = [
  'linear-gradient(135deg, #f5c6ef, #f39192)',
  'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
  // Add more gradient colors as needed
];

// Function to set gradient background
function setGradientBackground() {
  const randomIndex = Math.floor(Math.random() * gradientColors.length);
  const gradientColor = gradientColors[randomIndex];
  document.querySelector('.music-player').style.background = gradientColor;
}

// Event listener for moving forward
function nextTrack() {
  currentIndex = (currentIndex + 1) % songs.length;
  setSongDetails();
  setGradientBackground(); // Set gradient background when changing the song
}

// Event listener for moving backward
function prevTrack() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  setSongDetails();
  setGradientBackground(); // Set gradient background when changing the song
}

// Initial setup
setSongDetails();
setGradientBackground(); // Set initial gradient background

// ... (your existing code)


