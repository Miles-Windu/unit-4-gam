// Create Variables for each random event on the page. 
var computerGuess = Math.floor(Math.random() * 120) +19;
var rubyGuess = Math.floor(Math.random() * 12) +1;
var sapphireGuess = Math.floor(Math.random() * 12) +1;
var crystalGuess = Math.floor(Math.random() * 12) +1; 
var emeraldGuess = Math.floor(Math.random() * 12) +1; 
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

//  restartGame (function() {
//     computerGuess = Math.floor(Math.random() * 120) +19;
//     rubyGuess = Math.floor(Math.random() * 12) +1;
//     sapphireGuess = Math.floor(Math.random() * 12) +1;
//     crystalGuess = Math.floor(Math.random() * 12) +1;
//     emeraldGuess = Math.floor(Math.random() * 12) +1;        
//     userTotal = 0;
//     wins = 0;
//     losses = 0;

// console.log(rubyGuess);
// console.log(sapphireGuess);
// console.log(crystalGuess);
// console.log(emeraldGuess); 
// console.log(userTotal); 
// console.log("Wins: " + wins);
// console.log("Losses: " + losses);
//     });

// Display that number in their provided box. 
$(".random-number").html(computerGuess); 
console.log(computerGuess);

// Have the wins and losses display in the box. 
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$(".points-so-far").html(userTotal);
 
// Have click functions assigned to each button to add the present value to the total score. 
$("#ruby").on("click", function() {
    userTotal = userTotal + rubyGuess; 
    $(".points-so-far").html(userTotal);
});

$("#sapphire").on("click", function() {
    userTotal = userTotal + sapphireGuess;
    $(".points-so-far").html(userTotal);
});

$("#crystal").on("click", function() {
    userTotal = userTotal + crystalGuess;
    $(".points-so-far").html(userTotal);
});

$("#emerald").on("click", function() {
    userTotal = userTotal + emeraldGuess;
    $(".points-so-far").html(userTotal);
});

// Set conditions for wins and losses. If the total score is over the computerGuess then the round is over and it counts as a loss (losses--;). 
if (userTotal > computerGuess) {
    losses++; 
    userTotal = 0 
    computerGuess = Math.floor(Math.random() * 120) +19;
    rubyGuess = Math.floor(Math.random() * 12) +1;
    sapphireGuess = Math.floor(Math.random() * 12) +1;
    crystalGuess = Math.floor(Math.random() * 12) +1;
    emeraldGuess = Math.floor(Math.random() * 12) +1;
    $("#random-number").html(computerGuess); 
}

if (userTotal === computerGuess) {
    wins++; 
    computerGuess = Math.floor(Math.random() * 120) +19;
    rubyGuess = Math.floor(Math.random() * 12) +1;
    sapphireGuess = Math.floor(Math.random() * 12) +1;
    crystalGuess = Math.floor(Math.random() * 12) +1;
    emeraldGuess = Math.floor(Math.random() * 12) +1;
    $("#random-number").html(computerGuess); 
}
// If the player score is exactly matched to the computerGuess then the player wins (wins++;).

// Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 

});