function show() {
    /*let a = 15678;
    let str = (a.toString(16));
    alert(str);
    let str2 = (a.toLocaleString());
    alert(str2);
    let str3 = (a.toExponential());
    alert(str3);
    alert("\u{1F60D}");
    let b = "Hello \n World";
    let c = `Hello \n World`;
     alert(c == b);
    alert(b.length);
    alert(b[4]);
    alert(b.toUpperCase());
    alert(b.toLowerCase());
    alert(b.slice(3, 10));*/

    //array push pop
    let arr = ["abc", "defhsj", "hijquieu", "lmn"];
    alert(arr[3]);
    alert(arr[2].length);
    alert(arr.pop()); //deletes last value
    alert(arr);
    alert(arr.push("lmn")); //add value to last
    alert(arr);
    alert(arr.shift()); //deletes 1st value in array
    alert(arr);

    //array for loop 
    let array = ["abc", "defhsj", "hijquieu", "lmn"];
    for (let key of arr) {
        alert(key);
    } //both results same
    for (let i = 0; i < array.length; i++) {
        alert(arr[i]);
    }


}