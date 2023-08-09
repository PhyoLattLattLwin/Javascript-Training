let oldH1 = document.querySelector("#head");

let text = document.createTextNode("New Header");

let newH1 = document.createElement("h1");
newH1.className = "biber";
newH1.id = "bibi";
newH1.appendChild(text);

let body = document.querySelector("body");

body.replaceChild(newH1,oldH1);
console.log(newH1);

