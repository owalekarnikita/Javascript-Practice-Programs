class user {
    constructor(name, age) {
        name = this.name;
        age = this.age;
    }
    func() {
        console.log(this.name);
        console.log(this.age);
    }
}

let us = new user("abc", 10);
us.func();
console.log(typeof us); //object


//class in js with only methods 
let User = class {
    sayHi() {
        console.log("Hello");
    }
    mul() {
        console.log(5 * 8);
    }
};
let uname = new User();
uname.sayHi();
uname.mul();

//if you use # means private variables then program will not execute it will throw error.
class CoffeeMachine {

    waterAmount = 0;
    get waterAmount() {
        return this.waterAmount;
    }
    set waterAmount(value) {
        if (value < 0) value = 0;
        this.waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.waterAmount);
//instanceof operator check that obj availabl;e or not and returns true or false.
console.log(machine instanceof CoffeeMachine);