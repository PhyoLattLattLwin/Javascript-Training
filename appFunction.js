function doIt() {
    console.log("Job to be done");
}

doIt();

function doCal(){
    let x = 10;
    let y = 20;
    let z = x+y;
    console.log(z);
}
doCal();

function doTotal() {
    return 24;
}
let total = doTotal() + 3;
console.log(total);

function doName(name, age) {
    console.log("Name is " + name + " age is "+ age);
}

doName("Halley" , 25);