// Current balance amount
//let balance = 5000;

// Get balance from local storage
let savedBalance = localStorage.getItem("balance");
// set balance to local storage if not already set
let balance = savedBalance ? parseFloat(savedBalance) : 5000;

// Select balance text element from HTML
let balanceText = document.getElementById("balance");

// Select deposit button
let depositButton = document.getElementById("deposit");

// Select withdraw button
let withdrawButton = document.getElementById("withdraw");

// Select amount input field
let amountInput = document.getElementById("amount");

// Select transaction history list
let transactionList = document.getElementById("transaction-history");

// Show initial balance on screen
balanceText.innerText = "$" + balance;



// =========================
// Deposit Button Logic
// =========================

depositButton.addEventListener("click", function () {

    // Convert input value into number
    let amount = parseFloat(amountInput.value);

    // Check if amount is valid
    if (amount > 0) {

        // Increase balance
        balance = balance + amount;

        // Update balance on screen
        balanceText.innerText = "$" + balance;
        // save balance to local storage
         localStorage.setItem("balance", balance);

        // Create new list item
        let listItem = document.createElement("li");

        // Add deposit text
        listItem.innerText = "Deposit: $" + amount;

        // Add item into transaction history
        transactionList.appendChild(listItem);

        // Clear input field
        amountInput.value = "";

    }

});



// =========================
// Withdraw Button Logic
// =========================

withdrawButton.addEventListener("click", function () {

    // Convert input value into number
    let amount = parseFloat(amountInput.value);

    // Validate amount
    if (amount > 0 && amount <= balance) {

        // Reduce balance
        balance = balance - amount;
s
        // Update balance on screen
        balanceText.innerText = "$" + balance;
        // save balance to local storage

         localStorage.setItem("balance", balance);

        // Create new transaction item
        let listItem = document.createElement("li");

        // Add withdraw text
        listItem.innerText = "Withdraw: $" + amount;

        // Add transaction to history
        transactionList.appendChild(listItem);

        // Clear input field
        amountInput.value = "";

    }

    else {

        // Show error message
        alert("Invalid amount or insufficient balance.");

    }

});


// Select logout button
let logoutButton = document.getElementById("logout");

// Detect click
logoutButton.addEventListener("click", function () {

    // Remove login session
    localStorage.removeItem("loggedIn");

    // Redirect to login page
    window.location.href = "login.html";

});