function Person(name, age) {
    this.name = name;
    this.age = new Date(age);
    this.getAge = () => {
        let diff = Date.now() - this.age.getTime();
        let ageDate = new Date(diff);
        return ageDate.getUTCFullYear() - 1970;
    }
}

let p1 = new Person("Mg Mg", "01/01/1990");
let p2 = new Person("Aung Aung", "01/02/1991");

console.log(p1.getAge());