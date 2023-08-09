let dd = ["one", "two", "three", "four", "five"];

let obj = {
    name : "Phyo",
    age : 20,
    family : 4,
    car : "toyota"
}

console.log(obj["car"]);
console.table(dd);

for(x in dd) {
    //console.log(x);
    console.log(dd[x]);
}

for(x in obj){
    console.log(obj[x]);
}