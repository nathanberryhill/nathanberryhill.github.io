var playerPositions = ["","","","","","","","",""];
var aWinnerExists = false;
var XOSwitcher = 0;

function clicked(x, y) {
    var Element =  "block" + x + y;
    if (!aWinnerExists){
        if (XOSwitcher == 0 && document.getElementById(Element).innerHTML == "") {
            document.getElementById(Element).innerHTML = "X";
            XOSwitcher = 1;
        }
        else if (XOSwitcher == 1 && document.getElementById(Element).innerHTML == ""){
            document.getElementById(Element).innerHTML = "O";
            XOSwitcher = 0;
        }
        checkForWinner(x, y);
    }
}

function checkForWinner(x, y) {
    var position = Number(x) * 3 + Number(y);
    var count = 1;
    var Element =  "block" + x + y;
    playerPositions[position] = document.getElementById(Element).innerHTML;
    // checking for horizontal winner
    for (i = 0; i < playerPositions.length; i++) {
        if (i % 3 == 0) {
            count = 1;
        }
        if (count == 3) {
            var text = playerPositions[i-1];
            aWinnerExists = true;
            setTimeout(function(){ alert(text + " has won!"); location.reload();}, 50); // 50ms delay
            return;
        }
        if (playerPositions[i] != "" & playerPositions[i] == playerPositions[i+1]) {
            count ++;
        }
        else {
            count = 1;
        }
    }
    // checking for vertical winner
    for (i = 0; i < 3; i ++) {
        if (playerPositions[i] == playerPositions[i + 3] && playerPositions[i + 3] == playerPositions[i + 6] && playerPositions[i] != "") {
            var text = playerPositions[i];
            aWinnerExists = true;
            setTimeout(function(){ alert(text + " has won!"); location.reload();}, 50); // 50ms delay
            return;
        }
    }
    // checking for diagonal left-right winner
    if (playerPositions[0] == playerPositions[4] && playerPositions[4] == playerPositions[8] && playerPositions[0] != "") {
        var text = playerPositions[0];
        aWinnerExists = true;
        setTimeout(function(){ alert(text + " has won!"); location.reload();}, 50); // 50ms delay
    }
    // checking for diagonal right-left winner
    if (playerPositions[2] == playerPositions[4] && playerPositions[4] == playerPositions[6] && playerPositions[2] != "") {
        var text = playerPositions[2];
        aWinnerExists = true;
        setTimeout(function(){ alert(text + " has won!"); location.reload(); }, 50); // 50ms delay
    }
    if (aWinnerExists == false && playerPositions.includes("") == false) {
        setTimeout(function(){ alert("No player has won! Restarting..."); location.reload(); }, 50); // 50ms delay
    }
}