//let name = prompt("What is your name?");
//document.querySelector("#head").innerText = name;

let con = confirm("is your age over 18");
let ans = con ? "yes over 18" : "no under 18";
document.querySelector("#head").innerText = ans;

document.querySelector("#head").innerText = window.innerWidth;

let head = document.querySelector("#head");
head.style.background = "black";
head.style.height = "5000px";
head.style.color = "white";
console.log(window.scrollY);

document.querySelector("#btn").addEventListener('click',
function() {
    window.location.href ="extra.html";
}
)