// Create Variables for each random event on the page. 
var computerGuess = Math.floor(Math.random() * 120) +19;
var rubyGuess = Math.floor(Math.random() * 12) +1;
var sapphireGuess = Math.floor(Math.random() * 12) +1;
var crystalGuess = Math.floor(Math.random() * 12) +1; 
var emeraldGuess = Math.floor(Math.random() * 12) +1; 
var userTotal = 0; 
var wins = 0;
var losses = 0; 

console.log(rubyGuess);
console.log(sapphireGuess);
console.log(crystalGuess);
console.log(emeraldGuess); 
console.log(userTotal); 
console.log("Wins: " + wins);
console.log("Losses: " + losses); 

$(document).ready(function(){
// Display that number in their provided box. 
$(".random-number").html(computerGuess); 
console.log(computerGuess);

// Have the wins and losses display in the box. 
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$(".points-so-far").html(userTotal);

// Have each button be assigned a random value between 1 and 12 and change between each round. 
$("#ruby").on("click", function() {
    rubyGuess + userTotal;
    $(".points-so-far").html(userTotal);
});



// Have click functions assigned to each button to add the present value to the total score. 

// Set conditions for wins and losses. If the total score is over the computerGuess then the round is over and it counts as a loss (losses--;). 

// If the player score is exactly matched to the computerGuess then the player wins (wins++;).

// Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 

});