function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getUserData = function() {
    return this.name + ":" + this.age;
}

let person = new Person("Austin" , 20);

console.log(person.getUserData());