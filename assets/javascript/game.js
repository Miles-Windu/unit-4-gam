// Create Variables for each random event on the page. 
var computerGuess = Math.floor(Math.random() * 120) +19;
var rubyGuess = Math.floor(Math.random() * 12) +1;
var sapphireGuess = Math.floor(Math.random() * 12) +1;
var crystalGuess = Math.floor(Math.random() * 12) +1; 
var emeraldGuess = Math.floor(Math.random() * 12) +1; 

// Create variables for the user total, wins and losses. Set them to 0 so that they can be added to. 
var userTotal = 0; 
var wins = 0;
var losses = 0; 

// Check yoself before you wreck yoself
console.log(rubyGuess);
console.log(sapphireGuess);
console.log(crystalGuess);
console.log(emeraldGuess); 
console.log(userTotal); 
console.log("Wins: " + wins);
console.log("Losses: " + losses); 

$(document).ready(function(){

// Display the random number in the provided box. 
$(".random-number").html(computerGuess); 
console.log(computerGuess);

// Have the wins and losses display in the box as well as the user total.  
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$(".points-so-far").html(userTotal);

// Have click functions assigned to each button to add the present value to the total score. 
$("#ruby").on("click", function() {

    // the user total adds the current value of each button and displays that. 
    userTotal = userTotal + rubyGuess; 

    // Display new score. 
    $(".points-so-far").html(userTotal);

    // Always check to make sure stuff is working. 
    console.log(userTotal, computerGuess);

    // If the user total is greater that the computer's guess then it counts as a loss. 
    if (userTotal > computerGuess) {

        // New value of Losses increases by one. 
        losses++; 

        // set the user total back to 0 
        userTotal = 0 

        // Choose new random values for the computerChoice and each button. 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;

        // Display new scores, values and totals. 
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);

        // Make sure everything is working. 
        console.log("You lost this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }

    // If player matches the computerGuess then count it as a win and reset everything. 
    if (userTotal === computerGuess) {
        // wins' value goes up by one 
        wins++; 
        
        //Reset user total to 0. 
        userTotal = 0 

        // Reset the random values for the computerGuess and the buttons. 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;

        // Display the new values, scores and totals
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);

        // Check and make sure everything is reset. 
        console.log("You win this time");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
    
    // Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 
if (wins === 5) {
    alert("You have won the game!")
    wins = 0; 
    losses = 0; 
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
}

if (losses === 5) {
    alert("You have lost the game")
    wins = 0;
    losses = 0;
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}


});

$("#sapphire").on("click", function() {
    userTotal = userTotal + sapphireGuess;
    $(".points-so-far").html(userTotal);
    console.log(userTotal, computerGuess);
    if (userTotal > computerGuess) {
        losses++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);
        console.log("You lost this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
    if (userTotal === computerGuess) {
        wins++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        console.log("You win this round");
        $(".points-so-far").html(userTotal);
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }

    // Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 
if (wins === 5) {
    alert("You have won the game!")
    wins = 0; 
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

if (losses === 5) {
    alert("You have lost the game")
    wins = 0;
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

});

$("#crystal").on("click", function() {
    userTotal = userTotal + crystalGuess;
    $(".points-so-far").html(userTotal);
    console.log(userTotal, computerGuess);
    if (userTotal > computerGuess) {
        losses++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);
        console.log("You lost this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
    if (userTotal === computerGuess) {
        wins++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);
        console.log("You win this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }

    // Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 
if (wins === 5) {
    alert("You have won the game!")
    wins = 0; 
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

if (losses === 5) {
    alert("You have lost the game")
    wins = 0;
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

});

$("#emerald").on("click", function() {
    userTotal = userTotal + emeraldGuess;
    $(".points-so-far").html(userTotal);
    console.log(userTotal, computerGuess);
    if (userTotal > computerGuess) {
        losses++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);
        console.log("You lost this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
    if (userTotal === computerGuess) {
        wins++; 
        userTotal = 0 
        computerGuess = Math.floor(Math.random() * 120) +19;
        rubyGuess = Math.floor(Math.random() * 12) +1;
        sapphireGuess = Math.floor(Math.random() * 12) +1;
        crystalGuess = Math.floor(Math.random() * 12) +1;
        emeraldGuess = Math.floor(Math.random() * 12) +1;
        $(".random-number").html(computerGuess); 
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $(".points-so-far").html(userTotal);
        console.log("You win this round");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
    // Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 
if (wins === 5) {
    alert("You have won the game!")
    wins = 0; 
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

if (losses === 5) {
    alert("You have lost the game")
    wins = 0;
    losses = 0; 
    $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
}

});


});