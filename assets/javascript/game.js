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
        console.log("You win this time");
        console.log(rubyGuess);
        console.log(sapphireGuess);
        console.log(crystalGuess);
        console.log(emeraldGuess); 
        console.log(userTotal); 
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
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
});

// Once the player reaches 5 wins or 5 losses then the game is over and everything resets. 
if (wins > 5) {
    alert("You have won the game!")
    wins = 0; 
    losses = 0; 
}

if (losses > 5) {
    alert("You have lost the game")
    wins = 0;
    losses = 0; 
}


});