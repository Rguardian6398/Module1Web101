﻿var span = document.createElement("span");
span.innerHTML = "Mr Gram";

var div = document.getElementById("MyInstagramContainer");
div.appendChild(span);

var logInButton =
    document.createElement("button");
logInButton.innerHTML = "Log In";

div.appendChild(logInButton);

var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";

div.appendChild(signUpButton);

var lineBreak =
    document.createElement("br");

div.appendChild(lineBreak);

var image1Span =
    document.createElement("span");
image1Span.innerHTML = "Image 1 ";

div.appendChild(image1Span);

var image2Span =
    document.createElement("span");
image2Span.innerHTML = "Image 2 ";

div.appendChild(image2Span);

var image3Span =
    document.createElement("span");
image3Span.innerHTML = "Image 3 ";

div.appendChild(image3Span);

var image4Span =
    document.createElement("span");
image4Span.innerHTML = "Image 4 ";

div.appendChild(image4Span);

var image5Span =
    document.createElement("span");
image5Span.innerHTML = "Image 5 ";

div.appendChild(image5Span);

var lineBreak2 =
    document.createElement("br");

div.appendChild(lineBreak2);

var aboutSpan =
    document.createElement("span");
aboutSpan.innerHTML = "About ";

div.appendChild(aboutSpan);

var blogSpan =
    document.createElement("span");
blogSpan.innerHTML = "Blog ";

div.appendChild(blogSpan);

var jobSpan =
    document.createElement("span");
jobSpan.innerHTML = "Jobs ";

div.appendChild(jobSpan);

var helpSpan =
    document.createElement("span");
helpSpan.innerHTML = "Help ";

div.appendChild(helpSpan);

var lineBreak3 =
    document.createElement("br");

div.appendChild(lineBreak3);

var englishSpan =
    document.createElement("span");
englishSpan.innerHTML = "English ";

div.appendChild(englishSpan);

var yearSpan =
    document.createElement("span");
yearSpan.innerHTML = "2021 ";

div.appendChild(yearSpan);

var gramSpan =
    document.createElement("span");
gramSpan.innerHTML = "My Gram ";

div.appendChild(gramSpan);

var myNumber = 10;
var myString = "A String";
var myBoolean = false;

console.log(myNumber);
console.log(myString);
console.log(myBoolean);

function sumOfNumbers(x, y) {
    var result = x + y;
    var result2 = y - x;
    console.log(result);
    console.log(result2);
}

sumOfNumbers(10, 20);

var myString = " Hello, This is my fourth assignment     ";
var result = myString.substring(0, 3);

console.log(myString);
console.log(result.trim());

var d = new Date();

var dateFormat = (d.getMonth() + 1).toString().padStart(2, "0") +
    "/" + d.getDate().toString().padStart(2, "0") + "/"
    + d.getFullYear();

console.log(dateFormat);

var d2 = new Date(2021, 11, 10);
document.write(d2.toLocaleString("en-US"));

document.write("<br>");

var firstDate = new Date(2001, 12, 10);
var secondDate = new Date(2004, 4, 6);

if (firstDate > secondDate) {
    document.write("First Date Is Greater!");
} else if (firstDate == secondDate) {
    document.write("The Two Dates Are Equal");
} else {
    document.write("Second Date Is greater!");
}