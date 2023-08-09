let list = document.querySelector(".lis");

let text = document.createTextNode("Six");
let aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.appendChild(text);
let li = document.createElement("li");
li.appendChild(aTag);

list.prepend(li);
