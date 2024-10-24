const images = [
    'assets/coding_1.png',
    'assets/kidlike.png',
    'assets/ninja.png',
    'assets/profile_ash.png',
    'assets/profile.png'
];

let currentIndex = 0;
const profileImg = document.getElementById('profile-img');

// Function to update the image
function updateImage() {
    profileImg.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Set an interval to change the image every 30 seconds (30000ms)
setInterval(updateImage, 30000);