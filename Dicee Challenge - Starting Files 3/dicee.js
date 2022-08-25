var randomNumber1 = Math.floor(Math.random()*6) +1;//range 1-6;
var randomDiceImage1 = "dice"+randomNumber1+".png";//random dice1-dice6
var randomDiceFolder1="images/"+randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceFolder1);


var randomNumber2 = Math.floor(Math.random()*6) +1;//range 1-6;
var randomDiceImage2 = "dice"+randomNumber2+".png";//random dice1-dice6
var randomDiceFolder2="images/"+randomDiceImage2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceFolder2);

if (randomDiceImage1 > randomDiceImage2) {
        document.querySelector("h1").innerHTML="Player 1 wins";
} else if (randomDiceImage1 < randomDiceImage2){
        document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(randomDiceImage1 === randomDiceImage2){
        document.querySelector("h1").innerHTML="Match draws";
}