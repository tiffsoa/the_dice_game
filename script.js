var randomNum1 = Math.ceil(Math.random() * 6);
var randomNum2 = Math.ceil(Math.random() * 6);


var randomImage1 = "./images/dice" + randomNum1 + ".png";
var randomImage2 = "./images/dice" + randomNum2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}