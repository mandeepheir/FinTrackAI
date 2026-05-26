// ===============================
// CHECK LOGIN SESSION
// ===============================

// Get login status from localStorage
let isLoggedIn = localStorage.getItem("loggedIn");

// Redirect user if not logged in
if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}



// ===============================
// BALANCE STORAGE
// ===============================

// Get saved balance
let savedBalance = localStorage.getItem("balance");

// Use saved balance OR default 5000
let balance = savedBalance ? parseFloat(savedBalance) : 5000;



// ===============================
// SELECT HTML ELEMENTS
// ===============================

// Balance text
let balanceText = document.getElementById("balance");

// Deposit button
let depositButton = document.getElementById("deposit");

// Withdraw button
let withdrawButton = document.getElementById("withdraw");

// Amount input
let amountInput = document.getElementById("amount");

// Transaction list
let transactionList = document.getElementById("transaction-history");

// Analytics text
let totalDepositsText = document.getElementById("total-deposits");

let totalWithdrawalsText = document.getElementById("total-withdrawals");

// Logout button
let logoutButton = document.getElementById("logout");



// ===============================
// LOAD ANALYTICS DATA
// ===============================

// Load saved deposit total
let totalDeposits = parseFloat(localStorage.getItem("totalDeposits")) || 0;

// Load saved withdrawal total
let totalWithdrawals = parseFloat(localStorage.getItem("totalWithdrawals")) || 0;



// ===============================
// DISPLAY SAVED ANALYTICS
// ===============================

totalDepositsText.innerText = "$" + totalDeposits;

totalWithdrawalsText.innerText = "$" + totalWithdrawals;



// ===============================
// LOAD SAVED TRANSACTIONS
// ===============================

let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];



// ===============================
// DISPLAY SAVED BALANCE
// ===============================

balanceText.innerText = "$" + balance;



// ===============================
// DISPLAY TRANSACTIONS FUNCTION
// ===============================

function displayTransactions() {

    // Clear current list
    transactionList.innerHTML = "";

    // Loop through all transactions
    transactions.forEach(function (transaction) {

        // Create list item
        let listItem = document.createElement("li");

        // Add text
     listItem.innerText = transaction;

     // Style deposits and withdrawals differently
     // deposit= green
     if (transaction.includes("Deposit")) {
            listItem.style.color = "green";
        }

        // withdrawal= red
        else if (transaction.includes("Withdraw")) {
            listItem.style.color = "red";
        }

        // Add to page
        transactionList.appendChild(listItem);

    });

}



// Run function on page load
displayTransactions();



// ===============================
// DEPOSIT LOGIC
// ===============================

depositButton.addEventListener("click", function () {

    // Get input amount
    let amount = parseFloat(amountInput.value);

    // Validate amount
    if (amount > 0) {

        // Increase balance
        balance = balance + amount;

        // Update balance on screen
        balanceText.innerText = "$" + balance;

        // Save balance
        localStorage.setItem("balance", balance);



        // ===============================
        // UPDATE TOTAL DEPOSITS
        // ===============================

        totalDeposits = totalDeposits + amount;

        totalDepositsText.innerText = "$" + totalDeposits;

        localStorage.setItem("totalDeposits", totalDeposits);



        // ===============================
        // SAVE TRANSACTION
        // ===============================

        // get current time

        let currentTime = new Date().toLocaleString();

       // transactions.push("Deposit: $" + amount);
       transactions.push(
    "Deposit: $" + amount + " - " + currentTime
);

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );



        // Refresh transaction list
        displayTransactions();



        // Clear input
        amountInput.value = "";

    }

    else {

        alert("Please enter a valid amount.");

    }

});



// ===============================
// WITHDRAW LOGIC
// ===============================

withdrawButton.addEventListener("click", function () {

    // Get input amount
    let amount = parseFloat(amountInput.value);

    // Validate withdrawal
    if (amount > 0 && amount <= balance) {

        // Decrease balance
        balance = balance - amount;

        // Update balance on screen
        balanceText.innerText = "$" + balance;

        // Save balance
        localStorage.setItem("balance", balance);



        // ===============================
        // UPDATE TOTAL WITHDRAWALS
        // ===============================

        totalWithdrawals =
            totalWithdrawals + amount;

        totalWithdrawalsText.innerText =
            "$" + totalWithdrawals;

        localStorage.setItem(
            "totalWithdrawals",
            totalWithdrawals
        );



        // ===============================
        // SAVE TRANSACTION
        // ===============================

        let currentTime = new Date().toLocaleString();

       // transactions.push("Withdraw: $" + amount);
        transactions.push(
    "Withdraw: $" + amount + " - " + currentTime
);

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );



        // Refresh transaction list
        displayTransactions();



        // Clear input
        amountInput.value = "";

    }

    else {

        alert(
            "Invalid amount or insufficient balance."
        );

    }

});



// ===============================
// LOGOUT LOGIC
// ===============================

logoutButton.addEventListener("click", function () {

    // Remove login session
    localStorage.removeItem("loggedIn");

    // Redirect to login page
    window.location.href = "login.html";

});