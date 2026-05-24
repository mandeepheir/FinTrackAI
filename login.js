// Check login status
let isLoggedIn = localStorage.getItem("loggedIn");

// If not logged in, redirect to login page
if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}



// select login button
let loginButton = document.getElementById("login");

// add click event listener to login button
loginButton.addEventListener("click", function () {
    // select username and password input fields
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    // check if username and password are correct
    if (usernameInput === "user" && passwordInput === "pass") {
        alert("Login successful!");

        // save login state in local storage
        localStorage.setItem("loggedIn", "true");
        // if correct, redirect to dashboard
        window.location.href = "index.html";
    } else {
        // if incorrect, show error message
        alert("Invalid username or password. Please try again.");
    }
});