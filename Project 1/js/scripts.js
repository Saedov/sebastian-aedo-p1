var greeting1 = "Are you ready to plan your next trip? \n";
var greeting2 = "We can help you! \n";
var greeting3 =
  "There are different ways to look for your next destination. You can select the country, city, climate, budget or type of destination.";
var greeting = greeting1 + greeting2 + greeting3;
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

var visa = "Do you need visa to travel here? : YES";
var infoVY = visa;
var infoVYEl = document.getElementsByClassName("infoVY");
for (let i = 0; i < infoVYEl.length; i++) {
  infoVYEl[i].textContent = visa;
}

var visa = "Do you need visa to travel here? : NO";
var infoVN = visa;
var infoVNEl = document.getElementsByClassName("infoVN");
for (let i = 0; i < infoVNEl.length; i++) {
  infoVNEl[i].textContent = visa;
}
