var number1 = 20;
var number2 = 100;

var addition = number2 + number1;
var multiplication =  number1 * number2;
var division =  number2 / number1;
var substraction = number2 - number1;



document.getElementById("addition").innerHTML = "When I add " + number1 + " to " + number2 + " I get " + addition + ".";
document.getElementById("substraction").innerHTML = "When I substract " + number2 + " from " + number1 + " I get " + substraction + ".";
document.getElementById("multiplication").innerHTML = "When I multiply " + number2 + " and " + number1 + " I get " + multiplication + ".";
document.getElementById("division").innerHTML = "When I divide " + number2 + " by " + number1 + " I get " + division + ".";

