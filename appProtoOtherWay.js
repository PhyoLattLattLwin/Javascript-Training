const carproto = {
    getSpeed : function() {
        return this.Speed;
    },
    getName : function() {
        return this.name;
    }
}

let car = Object.create(carproto);
car.name = "Toyota";
car.speed = 200;
console.log(car.getName());

let bar = Object.create(carproto, {
    name:{value:"Suzuki"},
    speed:{value:220}
});

console.log(bar.name);