// let mp = new Set();
// mp.add('abc');
// mp.add('def');
// mp.add('hij');

// console.log(mp);
// mp.delete('abc');
// console.log(mp);
// mp.add('mno', 104);
// console.log(mp);
// console.log(mp.size);
// mp.clear();
// console.log(mp);

let dte = new Date();
console.log(dte);
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);
let abc = new Date(-24 * 3600 * 1000);
console.log(abc);
let sb = new Date("2022-01-26");
console.log(sb);

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getSeconds());

let datenew = new Date(2011, 2, 25, 1, 2, 3, 4, 345);
// datenew.getMonth(11);
console.log(datenew.getDate());