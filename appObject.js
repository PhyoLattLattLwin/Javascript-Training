let person = {
    fname : "Mg Mg",
    lname : "Aung",
    married : false,
    family : ["U Ba", "Daw Mya", "Su Su"],
    own : {
        car : "Toyota",
        bike : "Mountain Bike"
    },
    doIt : function(){
        console.log(this.fname + " is riding a " + this.own.bike);
    }
}
console.log(person.doIt())
console.log(person.family[2]);
console.log(person.married);

let json = JSON.stringify(person);
let obj = JSON.parse(json);
console.table(person);

let people = {
    name : "Soe Soe"
}
console.log(people.name)
