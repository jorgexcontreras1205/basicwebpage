alert("JavaScript is working!");  // For testing

// Function to display a simple message
function displayMessage() {
    document.getElementById("message").innerText = "Hello! You've clicked the button!";
}

// Function to greet the user by name
function greetUser() {
    const name = document.getElementById("nameInput").value;
    console.log("Name entered: ", name);  // Debug log
    if (name) {
        const greetingMessage = `Hello, ${name}! Welcome to the interactive webpage!`;
        document.getElementById("greeting").innerText = greetingMessage;
        document.getElementById("greeting").style.display = "block";  // Show greeting
    } else {
        alert("Please enter your name!");
    }
}

// Function to toggle the visibility of the message
function toggleMessage() {
    console.log("Toggle button clicked");  // Debug log
    const messageParagraph = document.getElementById("message");
    if (messageParagraph.style.display === "none" || messageParagraph.innerText === "") {
        messageParagraph.style.display = "block";
    } else {
        messageParagraph.style.display = "none";
    }
}

