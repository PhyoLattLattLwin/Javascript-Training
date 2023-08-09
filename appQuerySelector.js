let scripts = document.scripts;

let scriptAry = Array.from(scripts);
scriptAry.forEach((script)=>{
    console.log(script.src);
})
console.log(scripts);

let btn = document.querySelector("#btn");

btn.onClick = function() {
    alert(123);
}

let btn1 = document.querySelector("img");
console.log(btn1);