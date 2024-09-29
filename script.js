const chatWindow = document.getElementById('chatWindow');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

// Health tips and responses
const healthTips = [
    {
        question: "How can I lose weight?",
        answer: "Focus on a balanced diet and regular exercise. Stay hydrated!"
    },
    {
        question: "What shoul
        
        
        d I eat for breakfast?",
        answer: "Try oatmeal with fruits or a smoothie with greens and protein."
    },
    {
        question: "How much water should I drink?",
        answer: "Aim for 8-10 glasses of water a day, depending on your activity level."
    },
    {
        question: "What are some stress relief techniques?",
        answer: "Consider deep breathing, yoga, or taking a walk in nature."
    }
];

// Function to create and append a new message
function appendMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${text}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Event listener for form submission
chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userMessage = userInput.value.toLowerCase();
    appendMessage(userMessage, "User");
    
    // Check for responses
    const response = healthTips.find(tip => userMessage.includes(tip.question.toLowerCase()));
    if (response) {
        appendMessage(response.answer, "Chatbot");
    } else {
        appendMessage("I'm sorry, I don't have information on that. Please ask about healthy living!", "Chatbot");
    }
    
    userInput.value = ''; // Clear input
});

// Initial greeting
appendMessage("Hello! I'm your Healthy Living Chatbot. Ask me about healthy living!", "Chatbot");
