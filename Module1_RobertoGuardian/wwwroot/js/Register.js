var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
var label = document.createElement("label");
label.innerHTML = "First Name: ";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Your First Name Here");
td.appendChild(input);
tr.appendChild(td);

td = document.createElement("td");
var label = document.createElement("label");
label.innerHTML = "Last Name: ";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Your Last Name Here");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

td = document.createElement("td");
td.setAttribute("colespan", "3");
input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Male";
label.setAttribute("for", "Male");
td.appendChild(label);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Female");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Female";
label.setAttribute("for", "Female");
td.appendChild(label);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "NoResponse");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Perfer Not To Respond";
label.setAttribute("for", "NoResponse");
td.appendChild(label);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Email: ";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colespan", "3");
input = document.createElement("input");
input.setAttribute("id", "Email");
input.setAttribute("type", "email");
input.setAttribute("placeholder", "Add Email Here");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(td);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Country Of Residence ";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colespan", "3");
var select = document.createElement("select");
select.setAttribute("id", "Country");
var option = document.createElement("option");
option.innerHTML = "Usa";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML = "Mexico";
select.appendChild(option);
td.appendChild(select);
tr.appendChild(td);
tbody.appendChild(td);

tr = document.createElement("tr");
td = document.createElement("td");
td.setAttribute("colespan", "4");
var button = document.createElement("button");
button.innerHTML = "Update User Information";
td.appendChild(button);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);

var div = document.getElementById("MyRegisterContainer");
div.appendChild(table);