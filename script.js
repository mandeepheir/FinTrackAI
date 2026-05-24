// current balance amunt 
let balance = 5000;

// show balanece in console 

//nsole.log(balance);
// select banace text element
let balanceText = document.getElementById("balance");
// select deposit button 

let depositButton = document.getElementById("deposit");

// Select inpust fiels
let amountInput = document.getElementById("amount");

// show initial balance 
balanceText.innerText = "$" + balance;

// add event listener to deposit button
depositButton.addEventListener("click", function() {
    // Increase Balance 

  //balance = balance +100;

    balance = balance + parseFloat(amountInput.value);

    // update balance text
    balanceText.innerText = "$" + balance;
});

// select withdraw button
let withdrawButton = document.getElementById("withdraw");

// add event listener to withdraw button
withdrawButton.addEventListener("click", function() {
    // decrease balance
  //balance = balance - 100;
    balance = balance - parseFloat(amountInput.value);
    // Update screen
    balanceText.innerText="$" + balance;
});