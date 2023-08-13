class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    getSpeed( ){
        console.log(this.speed);
    }
}

class Toyota extends Car {
    constructor(name, speed, price) {
        super(name, speed);
        this.price = price;
    }
    getSpeed() {
        console.log("This come froom child class " + this.price);
    }
}

let ty = new Toyota("Toyota", 180, 1800);

ty.getSpeed();

console.log(ty);