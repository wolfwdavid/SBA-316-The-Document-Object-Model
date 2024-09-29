
alert("Welcome to the mood board!");


const moodSelector = document.getElementById('mood-selector'); 
const noteInput = document.querySelector('#note-input'); 
const moodHistory = document.getElementById('mood-history'); 

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
    event.preventDefault(); 

    const mood = moodSelector.value; 
    const note = noteInput.value; 

    
    const moodEntry = document.createElement('div');
    moodEntry.innerHTML = `<strong>${mood}</strong>: ${note}`;
    
    moodHistory.appendChild(moodEntry); 
       
    
    moodSelector.selectedIndex = 0; 
    noteInput.value = ''; 
    
    saveMoodToLocalStorage(mood, note);
};

const saveMoodToLocalStorage = (mood, note) => {
    const moodEntries = JSON.parse(localStorage.getItem('moodEntries'));
    moodEntries.push({ mood, note });
    localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
};

const loadMoodHistory = () => {
    const moodEntries = JSON.parse(localStorage.getItem('moodEntries'));
    moodEntries.forEach(entry => {
        const moodEntry = document.createElement('div');
        moodEntry.innerHTML = `<strong>${entry.mood}</strong>: ${entry.note}`;
        moodHistory.appendChild(moodEntry); 
    });
};

const showAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];

    
    const affirmationPopup = document.createElement('div');
    affirmationPopup.className = 'affirmation-popup';
    affirmationPopup.innerText = affirmation;

    
    document.body.appendChild(affirmationPopup);
    setTimeout(() => {
        document.body.removeChild(affirmationPopup);
    }, 4000); 
};

document.getElementById('mood-form').addEventListener('submit', logMoodEntry); 


loadMoodHistory();


setInterval(showAffirmation, 7000); 
