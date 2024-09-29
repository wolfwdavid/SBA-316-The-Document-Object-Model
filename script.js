// Alert the user
alert("Welcome to the mood board!");


const moodSelector = document.getElementById('mood-selector'); // Cache mood selector
const noteInput = document.querySelector('#note-input'); // Cache note input
const moodHistory = document.getElementById('mood-history'); // Cache mood history

const affirmations = [
    "You are capable of achieving great things.",
    "Believe in yourself and all that you are.",
    "Every day is a fresh start.",
    "You are stronger than you think.",
    "Your potential is limitless.",
    "You are enough just as you are.",
    "Positivity is a choice, and you choose it.",
    "You are worthy of love and happiness.",
    "Keep going, you are doing great!",
    "You have the power to create change."
];

const logMoodEntry = (event) => {
    event.preventDefault(); // Prevent form submission

    const mood = moodSelector.value; // Get selected mood
    const note = noteInput.value; // Get note text

    // Create a new mood entry
    const moodEntry = document.createElement('div');
    moodEntry.innerHTML = `<strong>${mood}</strong>: ${note}`;
    
    moodHistory.appendChild(moodEntry); // Add mood entry to the history
       
    // Clear inputs
    moodSelector.selectedIndex = 0; // Reset mood selector
    noteInput.value = ''; // Clear note input

    // Save to localStorage
    saveMoodToLocalStorage(mood, note);
};

const saveMoodToLocalStorage = (mood, note) => {
    const moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    moodEntries.push({ mood, note });
    localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
};

const loadMoodHistory = () => {
    const moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    moodEntries.forEach(entry => {
        const moodEntry = document.createElement('div');
        moodEntry.innerHTML = `<strong>${entry.mood}</strong>: ${entry.note}`;
        moodHistory.appendChild(moodEntry); // Populate mood history on load
    });
};

const showAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];

    // Create a pop-up element
    const affirmationPopup = document.createElement('div');
    affirmationPopup.className = 'affirmation-popup';
    affirmationPopup.innerText = affirmation;

    // Append to body and set timeout to remove it after 4 seconds
    document.body.appendChild(affirmationPopup);
    setTimeout(() => {
        document.body.removeChild(affirmationPopup);
    }, 4000); // Adjust the duration as needed
};

document.getElementById('mood-form').addEventListener('submit', logMoodEntry); // Event listener for form submission

// Load mood history on page load
loadMoodHistory();

// Show affirmation every 7 seconds
setInterval(showAffirmation, 7000); // Show a new affirmation every 7 seconds
