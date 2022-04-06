function arrMethod() {
    /*let str = "abc";
    let arr = ["z", "xy", "uv", "mn"];
    alert(arr.slice(1, 3));
    alert(arr.concat(str, "klo")); //add this values in arr 

    //Foreach 
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
        alert(`${item} is at index ${index} in ${array}`);
    });*/

    //indexOf/lastIndexOf and includes
    // let arr2 = [1, "a", 3, "b"];
    // alert(arr2.indexOf("b")); //3
    // alert(arr2.length); //4
    // alert(arr2.includes(3)); //true
    // alert(arr2.lastIndexOf("b")); //1 from last 1st

    // let arr3 = [{ name: "abc", id: 101 },
    //     { name: "def", id: 102 },
    //     { name: "efg", id: 103 }
    // ];
    // let user = arr3.find(item => item.id == 103);
    // alert(user.name);
    // //filters 
    // let user2 = arr3.filter(item => item.id < 102);
    // alert(user2.length); //1
    // let umap = arr3.map(item => item.length);
    // alert(umap);
    // let urev = arr2.sort();
    // alert(urev); // 1,3,a,b
    // alert(urev.reverse());
    // alert(urev.join("*")); //joins all elements of array with *.

    //thisArg 
    let army = {
        minage: 18,
        maxage: 27,
        canJoin(user) {
            if (this.minage >= user.age && this.maxage <= user.age) {
                return user.age;
            }
        }
    };
    let user = [
        { age: 16 },
        { age: 27 },
        { age: 23 }
    ];

    let soldier = user.filter(army.canJoin, army);
    alert(soldier.length);
    alert(soldier[1]);

}