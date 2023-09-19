async function sendMessage() {
    const messageInput = document.getElementById('messageInput').value;
    const messagesDiv = document.getElementById('messages');

    // Add user's message to the chat interface
    messagesDiv.innerHTML += `<div class="user-message">${messageInput}</div>`;

    // Clear the input field
    document.getElementById('messageInput').value = '';

    // Use Selenium or Puppeteer here to automate sending the message on WhatsApp
    // Example: driver.findElement(By.id('input')).sendKeys(messageInput);
    // Wait for 30 seconds
    // Example: await driver.sleep(30000);
    
    // Simulate the response from WhatsApp
    const response = "This is a response from the chatbot.";
    
    // Add the chatbot's response to the chat interface
    messagesDiv.innerHTML += `<div class="bot-message">${response}</div>`;
}
// Add this code to script.js

// Function to start the WhatsApp automation script
async function startAutomation() {
    const { exec } = require('child_process');

    exec('node whatsapp-automation.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing automation script: ${error}`);
            return;
        }
        console.log(`Automation script output: ${stdout}`);
    });
}

// Call startAutomation when a button is clicked, or based on some other user action
function onClickStartAutomation() {
    // You can add any logic here to trigger the automation script
    startAutomation();
}
