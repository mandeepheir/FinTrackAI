// Check login status
let isLoggedIn = localStorage.getItem("loggedIn");

// If already logged in, go to dashboard
if (isLoggedIn === "true") {
    window.location.href = "index.html";
}

// Select login button
let loginButton = document.getElementById("login");

// Detect button click
loginButton.addEventListener("click", function () {

    // Get username and password
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    // Check credentials
    if (usernameInput === "user" && passwordInput === "pass") {

        alert("Login successful!");

        // Save login session
        localStorage.setItem("loggedIn", "true");

        // Open dashboard
        window.location.href = "index.html";

    }

    else {

        alert("Invalid username or password.");

    }

});