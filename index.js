var randomNumber1 = Math.floor(Math.random()*6)+1;  //a random number from 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";  //a random image from dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage;    //a image source from images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];   //selected first image from list of two images
image1.setAttribute("src", randomImageSource1);  //changed the src attribute of selected image with random image source


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳Player 2 wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}