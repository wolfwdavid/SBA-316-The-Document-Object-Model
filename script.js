const moodSelector = document.getElementById('mood-selector'); // Cache mood selector
const noteInput = document.querySelector('#note-input'); // Cache note input
const moodHistory = document.getElementById('mood-history'); // Cache mood history

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

document.getElementById('mood-form').addEventListener('submit', logMoodEntry); // Event listener for form submission

// Load mood history on page load
loadMoodHistory();
