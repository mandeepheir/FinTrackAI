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
// detect button click
depositButton.addEventListener("click", function() {
   
    // store input value
    let amount = parseFloat(amountInput.value);
    // Validate input 

    if(amount >0) {
        // increase balance
        balance = balance + amount;
    
  // update balance text
    balanceText.innerText = "$" + balance;
    }
});

// select withdraw button
let withdrawButton = document.getElementById("withdraw");

// add event listener to withdraw button
withdrawButton.addEventListener("click", function() {
    // store input value
    let amount = parseFloat(amountInput.value);
    // validate input
    if(amount > 0 ) {
        // decrease balance
        balance = balance - amount;
    }
   // update screen
    balanceText.innerText="$" + balance;
});