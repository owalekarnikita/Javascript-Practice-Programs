let obj = {
    name: "abc",
    age: 30,
    isAdmin: true,
    courses: ['html', 'css', 'js']
};

let json = JSON.stringify(obj);
console.log(json); //json format 
let back = JSON.parse(json);
console.log(back); //back to object format


let obj2 = {
    name: 'anna',
    apperance: [
        { hcolor: 'brown' },
        { ecolor: 'black' }
    ]
};
let json2 = JSON.stringify(obj2, null, 2); //for formatting json properly
console.log(json2);

let a = Math.pow(2, 4);
console.log(a);


//New declaration of function
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3));


//time interval example
function sayHi() {
    console.log('Hello , how are you??');
}

setTimeout(sayHi, 2000);

setTimeout(() => console.log('Hello'), 1000);

let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

clearTimeout(timerId); //dunction will not work because clearing this function

setTimeout(() => console.log("World"));

console.log("Hello");



// function printNumbers() {
//     for (let i = 10; i <= 20; i++) {
//         console.log(i);
//         // setInterval(func, 1000);
//     }
//     console.log("Hii...");
// }

//Function.call Method
let user = { name: "abc" };
let admin = { name: "def" };

function calling() {
    let ab = this.name;
    console.log(ab);
}

calling.call(user);


//function.bind property 
function fno(a, b) {
    return a * b;
}

let uno = fno.bind(null, 2);
let num = fno.bind(null, 5);

console.log(uno(3));
console.log(num(4));