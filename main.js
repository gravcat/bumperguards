// balances-lg is the element that holds the bal .innerText accesses the object and gets the value inside that, which is the integer
var readBal = document.getElementById("balances-lg").innerText
readBal = readBal.replace(/\s/g, "");

// won-bet is the element that stores what the change to your balance is as a result of the play, the "floating" number that pops on each bet
var betAmount = document.getElementById("won-bet").innerText

// set var to hold whether or not we're trying to stop
var stopping = 0

// customizable 
var thresholdBal = .06
//var thresholdBet = 0.00001200
var thresholdBet = -0.00000160

// Wrapping to interface with the user and get/check parameters
console.log("Have the game STOPPED and on AUTOMATED mode. To stop the output/loop, execute window.clearInterval(intervalCheck) or close the tab")
var beginBal = prompt("Please enter in the entire numeric BTC balance that you are starting with");

// if what was entered doesn't match what's read off the object on the page, stop!
if (beginBal != readBal) {
    console.log("Read in" + readBal + "Provided" + beginBal);
    throw "Uhoh! your starting bal didn't match what we read in. Verify that you supply the exact integer, such as 0.06201530."
}

// potential to lose monies, let's be really explicit and check prompted vs read to make sure on the call to begin as well
if (beginBal = readBal && readBal > thresholdBal) {
    document.getElementById('btn-bet-start-pilot-dice').click();
}

// print out the balance we read
console.log("Starting balance: " + readBal);
    
// outputs current balance
function check(readBal) {
	var readBal = document.getElementById("balances-lg").innerText
    var betAmount = document.getElementById("history-my-bets-dice").rows[0].cells[7].innerText

    if (readBal > thresholdBal) {
        //console.log("Balance: " + readBal, "Threshold: " + thresholdBal);
        var nowBal = readBal
    }

    if (thresholdBet > betAmount && stopping == 0) {
        var stopping = 1
        console.log("Surpassed bet stop threshold with amount " + betAmount)
        document.getElementById('btn-bet-stop-pilot-dice').click();
        setTimeout(function () {
            document.getElementById('btn-bet-start-pilot-dice').click();
            var stopping = 0
        }, 1000);
    }

    if (readBal < thresholdBal && stopping == 0) {
        var stopping = 1
        setTimeout(function () {
            document.getElementById('btn-bet-start-pilot-dice').click();
            var stopping = 0
        }, 1000);
        console.log("Balance dropped below threshold! " + thresholdBal);
    }
}

var intervalCheck = setInterval(check, 1000, readBal);

//