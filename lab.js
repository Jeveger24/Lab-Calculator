window.prompt("Enter your name: ");
var userName = window.prompt("Enter your name: ");

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

var num1 = parseInt(window.prompt("Enter the 1st number: "));
var num2 = parseInt(window.prompt("Enter the 2nd number: "));

var first = document.getElementById("1st");
var second = document.getElementById("2nd");

first.innerHTML += num1;
second.innerHTML += num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum +  ".";
document.getElementById("subtraction").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + difference +  ".";
document.getElementById("division").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product +  ".";
document.getElementById("multiplication").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient +  ".";
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + num1 + " and " + num2 + " is " + modResult +  ".";