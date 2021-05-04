var span = document.createElement("span");
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

var table = document.createElement("table");
var tbody = document.createElement("tbody");
var trow = document.createElement("tr");
var td = null;
var imageSpan = null;
var counter = 0;

var imageList = [];

var image = new Image();
for (var i = 0; i < 25; i++) {
    image = new Image();
    image.imageName = "Image " + (i + 1);
    image.imageId = (i + 1);
    image.imagePath = "This is a path";

    imageList.push(image);
}

//document.write(imageList);

for (var i = 0; i < 25; i++) {
    image = imageList[i];
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;
    }

    td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.className = "ImageClass";
    imageSpan.innerHTML = image.imageName;

    td.appendChild(imageSpan);
    trow.appendChild(td);
    counter++;
}

tbody.appendChild(trow);
table.appendChild(tbody);
div.appendChild(table);

var imageClassList = document.getElementsByClassName("ImageClass");
for (var x = 0; x < 25; x++) {
    imageClassList[x].onclick = function () {
        alert("You Have Clicked On An Image");
    }
}

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

/*var myNumber = 10;
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
}*/

var divThemeContainer = document.getElementById("ThemeContainer");
var select = document.createElement("select");
var option = document.createElement("option");
option.innerHTML = "Light Theme";
select.appendChild(option);

option = document.createElement("option");
option.innerHTML = "Dark Theme";
select.appendChild(option);
divThemeContainer.appendChild(select);

var span = document.createElement("span");
span.innerHTML = "Change Theme:";
divThemeContainer.appendChild(span);

select.onchange = function () {
    alert("You Have Changed The Theme");
}