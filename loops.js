let a = 10;
let b = 100;
for (let i = a; i <= 100; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }
}

let cards = [1, 5, 7, 8];
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}

let sentence = ["hi", "i", "am", "wild", "cat"];
let greet = document.getElementById("greet");

for (let i = 0; i < sentence.length; i++) {
    greet.textContent += sentence[i] + " ";
}