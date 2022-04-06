// let mp = new Map();
// mp.set(1, "abc");
// mp.set("2", "def");
// mp.set(true, "xyz");
// mp.set(4, false);

// console.log(mp);
// console.log(mp.has("2"));
// console.log(mp.delete("2")); //Deletes row
// //mp.clear(); //Deletes map
// console.log(mp);

let vegies = new Map();
vegies.set('apple', 150);
vegies.set('tomato', 200);
vegies.set('cabbage', 350);

console.log(vegies);

for (let veg of vegies.keys()) {
    console.log(veg);
}
for (let vege of vegies.values()) {
    console.log(vege);
}

for (let veg of vegies.entries()) {
    console.log(veg);
}

let obj = {
    name: "abc",
    age: 25
};

let objmap = new Map();
objmap = obj;
console.log(objmap);