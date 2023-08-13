function Car(name, speed) {
    this.name = name;
    this.speed = speed;
}

Car.prototype.getPros = function() {
    return `Name : ${this.name} & Speed ${this.speed}.`;
}

Car.prototype.getSpeed = function() {
    return `Speed is ${this.speed}.`;
}

function Toyota(name, speed) {
    Car.call(this, name, speed);
}
Toyota.prototype = Object.create(Car.prototype);

function Suzuki(name, speed) {
    Car.call(this, name, speed);
}
Suzuki.prototype = Object.create(Car.prototype);

function Honda(name, speed) {
    Car.call(this, name, speed);
}
Honda.prototype = Object.create(Car.prototype);

let toyota = new Toyota("toyota", "80");
let suzuki = new Suzuki("suzuki", "81");
let honda = new Honda("honda", "82");

console.log(toyota.getPros());
console.log(suzuki.getPros());
console.log(honda.getPros());



