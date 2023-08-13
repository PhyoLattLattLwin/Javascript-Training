class Person {
    static name ="Su Su";
    static age = 20;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return `Name is ${this.name}`;
    }
    getAge(){
        return `Age is ${this.age}`;
    }
    static getNameAge() {
        console.log(this.name + ":" + this.age);
    }
}
Person.getNameAge();