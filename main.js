// balances-lg is the element that holds the bal .innerText accesses the object and gets the value inside that, which is the integer
var readBal = document.getElementById("balances-lg").innerText // will register int like "0.16201530"
readBal = readBal.replace(/\s/g, ""); // data massaging to remove newlines

// below this, we'll stop the bets
var thresholdBal = .110

// Wrapping to interface with the user and get/check parameters
console.log("Have the game STOPPED and on AUTOMATED mode. To stop the output/loop, execute window.clearInterval(intervalCheck) or close the tab")
var beginBal = prompt("Please enter in the entire numeric BTC balance that you are starting with");

// if what was entered doesn't match what's read off the object on the page, stop!
if (beginBal != readBal) {
    console.log("Read in" + readBal + "Provided" + beginBal);
    throw "Uhoh! your starting bal didn't match what we read in. Verify that you supply the exact integer, such as 0.06201530."
}

// potential to lose monies, let's be really explicit and check prompted vs read to make sure on the call to begin as well
if (readBal > thresholdBal) {
    document.getElementById('btn-bet-start-pilot-dice').click(); // if balance checks out, click the "start"
}

// print out the balance we read, just for the sake of logging iterations
console.log("Starting balance: " + readBal);

// outputs current balance
function check(readBal) {
	var readBal = document.getElementById("balances-lg").innerText
    
    if (readBal > thresholdBal) {
        console.log("Balance: " + readBal, "Threshold: " + thresholdBal);
        var nowBal = readBal
    }
    if (readBal < thresholdBal) {
        document.getElementById('btn-bet-stop-pilot-dice').click();
        console.log("Balance dropped below threshold! " + thresholdBal);
    }
}

var intervalCheck = setInterval(check, 1000);
