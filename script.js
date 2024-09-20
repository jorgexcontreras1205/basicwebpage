// Function to display a simple message when the button is clicked
function displayMessage() {
    document.getElementById("message").innerText = "Hello! You've clicked the button!";
}

// Function to greet the user by name
function greetUser() {
    const name = document.getElementById("nameInput").value;  // Get the input value
    if (name) {
        const greetingMessage = `Hello, ${name}! Welcome to the interactive webpage!`;
        document.getElementById("greeting").innerText = greetingMessage;  // Display the greeting
        document.getElementById("greeting").style.display = "block";  // Make the greeting visible
    } else {
        alert("Please enter your name!");  // Alert if the name is empty
    }
}

// Function to toggle the visibility of the message
function toggleMessage() {
    const messageParagraph = document.getElementById("message");  // Get the message element
    if (messageParagraph.style.display === "none" || messageParagraph.innerText === "") {
        messageParagraph.style.display = "block";  // Show the message
    } else {
        messageParagraph.style.display = "none";  // Hide the message
    }
}
