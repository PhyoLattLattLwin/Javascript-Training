let person = {
    "name" : "Mg Mg",
    "age" : 22
}

let person2 = new Object({"name" : "Mg Mg", "age" : 22});

console.log(person == person2 ? "Yes" : "No");


let ary = ["one", "two"];
let ary1 = new Array("one", "two");

console.log(typeof ary);
console.log(typeof ary1);

let name1 = "Ma Ma";
let name2 = new String("Ma Ma");

console.log(name1 === name2 ? "Equal"  : "Not equal");