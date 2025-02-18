// Game state variables
let currentLevel = 1;
let totalIcons = 10; // Initial icon count for level 1
let collectedIcons = 0;

// DOM elements
const streetScene = document.getElementById('street-scene');
const iconImages = document.querySelectorAll('.joy-icon');
const levelDisplay = document.getElementById('level-display');
const scoreDisplay = document.getElementById('score-display');
const nextLevelButton = document.getElementById('next-level');

// Function to hide icons randomly
function hideIcons() {
  iconImages.forEach(icon => {
    const randomX = Math.floor(Math.random() * streetScene.clientWidth);
    const randomY = Math.floor(Math.random() * streetScene.clientHeight);
    icon.style.left = `${randomX}px`;
    icon.style.top = `${randomY}px`;
    icon.style.visibility = 'visible';
  });
}

// Function to check if all icons are collected
function checkWinCondition() {
  if (collectedIcons === totalIcons) {
    currentLevel++;
    updateLevel();
    updateIconCount();
    hideIcons();
    collectedIcons = 0;
  }
}

// Function to update level display
function updateLevel() {
  levelDisplay.textContent = `Level: ${currentLevel}`;
}

// Function to update icon count display
function updateIconCount() {
  scoreDisplay.textContent = `Icons Collected: ${collectedIcons}`;
}

// Event listener for icon clicks
iconImages.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.visibility = 'hidden';
    collectedIcons++;
    updateIconCount();
    checkWinCondition();
  });
});

// Event listener for next level button
nextLevelButton.addEventListener('click', () => {
  // Handle level progression logic here
  // You might want to show a loading screen or transition effect
  // ...
});

// Initial setup
updateLevel();
updateIconCount();
hideIcons();