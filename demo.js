let user1 = {
    name: "abc",
    fno: 25,
};
let user2 = {
    name: "def",
    fno: 30,
}
console.log(user2.name);
console.log(user1.fno);

function addition(a, b) {
    return (a + b);
}
console.log(addition(7, 9));

function printstar() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.writeln("<br>");
    }
    for (let i = 5; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            document.write("*");
        }
        document.writeln("<br>");
    }

    for (let k = 5; k >= 1; k--) {
        for (let l = 5; l >= k; l--) {
            document.write(l + "&nbsp;");
        }
        document.writeln("<br>");
    }
    for (let k = 0; k <= 5; k++) {
        for (let l = 0; l <= k; l++) {
            document.write(k + "&nbsp;");
        }
        document.writeln("<br>");
    }
}