let dd = ()=> {
    console.log("I am Mr.M");
}

dd();

(function() {   //IIFE Immediately Invokable Function Expression
    console.log("Hey Now");
})();

let func = () => console.log("Hello");
func();

let abc = () => console.log("Hello Apple");
abc();

let obj = {
    name : "John",
    age :22,
    dd : function() {
        console.log("I am a function inside a object.");
    }
}

obj.dd();

