// Get DOM elements
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const playPauseBtn = document.getElementById("playPause");
const backwardBtn = document.querySelectorAll(".fa-backward-step");
const forwardBtn = document.querySelectorAll(".fa-forward-step");
const artist = document.getElementById("artist");
const songTitle = document.getElementById("songTitle");
const songImg = document.getElementById("songImg");
const themeChangeButton = document.getElementById("themeChange");

// Sample array of songs
const songs = [
  { title: "Santa Tell Me", artist: "Ariana Grande", src: "./media/Santa Tell Me.mp3", img: "./img/singer.jpg" },
  { title: "Way Down We Go", artist: "Kaleo", src: "media/Way-Down-We-Go(PaglaSongs).mp3", img: "img/KaleoWayDownWeGo.jpg" },
  // Add more songs as needed
];

// Current index to keep track of the song
let currentIndex = 0;

// Set initial song details
function setSongDetails() {
  const currentSong = songs[currentIndex];
  songTitle.textContent = currentSong.title;
  artist.textContent = currentSong.artist;
  song.src = currentSong.src;
  songImg.src = currentSong.img;
}

// Set initial progress and duration when metadata is loaded
song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play/pause function
function togglePlayPause() {
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
    setGradientBackground(); // Set gradient background when changing play state
  }
}

// Update progress when the song is playing
song.addEventListener("timeupdate", function() {
  progress.value = song.currentTime;
});

// Change song position when the user interacts with the progress bar
progress.oninput = function() {
  song.currentTime = progress.value;
};

// Event listener for moving backward
function prevTrack() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  setSongDetails();
  setGradientBackground();
}

// Event listener for moving forward
function nextTrack() {
  currentIndex = (currentIndex + 1) % songs.length;
  setSongDetails();
  setGradientBackground();
}

// Array of gradient colors
const gradientColors = [
  'linear-gradient(135deg, #f5c6ef, #f39192)',
  'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
  'linear-gradient(135deg, #f8ceec, #a8edea)',
  'linear-gradient(135deg, #ff6e7f, #bfe9ff)',
  'linear-gradient(135deg, #ffd3b6, #fd6585)',
  'linear-gradient(135deg, #fbc7d4, #9796f0)',
  'linear-gradient(135deg, #c4a0e0, #8ca6db)',
  'linear-gradient(135deg, #cfd9df, #e2ebf0)',
  'linear-gradient(135deg, #8ca6db, #b8c1ec)',
  'linear-gradient(135deg, #f0f0f0, #d9ebed)',
  // Add more gradient colors as needed
];

// Function to set gradient background
function setGradientBackground() {
  const randomIndex = Math.floor(Math.random() * gradientColors.length);
  const gradientColor = gradientColors[randomIndex];
  document.querySelector('.music-player').style.background = gradientColor;
}

// Function to toggle the theme
function toggleTheme() {
  setGradientBackground(); // Set a new gradient background when changing the theme
}

// Event listener for clicking on the theme change icon
themeChangeButton.addEventListener("click", toggleTheme);

// Event listeners for play, forward, and backward buttons
playPauseBtn.addEventListener("click", togglePlayPause);
// Add event listeners for forward and backward buttons if needed

// Initial setup
setSongDetails();
setGradientBackground(); // Set initial gradient background
