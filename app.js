const player ={
    name: "rami",
    age: 24,
}
// console.log(player.name, player.age);

const calculator = {
    add: function(a, b){
        console.log(a, b);
    },
};

calculator.add(5, 1); // 5 1
// console.log(calculator.add); // ƒ (a, b){console.log(a, b);}
// console.log(calculator.add()); // undefined undefined > undefined
// calculator.add(); // undefined undefined