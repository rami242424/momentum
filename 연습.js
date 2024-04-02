// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
// function sayHello(nico){
//     console.log("hello my name is " + nico);
// }

// alert();
// console.log();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// console.log("hello");
// sayHello();


// -----
// function sayHello(nico){
//     console.log("hello my name is " + nico);
// }
// sayHello(); // hello my name is undefined
// -----
// function sayHello(nico){
//     console.log("hello my name is " + nico);
// }
// sayHello("nico"); // hello my name is nico
// -----
// function sayHello(nico, rami){
//     console.log("hello my name is " + nico);
//     console.log("hello my name is " + rami);
// }
// sayHello("nico"); 
// sayHello("rami");
// hello my name is nico
// hello my name is undefined
// hello my name is rami
// hello my name is undefined
// -----
// function sayHello(nico, rami){
//     console.log("hello my name is " + nico);
//     console.log("hello my name is " + rami);
// }
// sayHello("nico, rami"); // => "nico, rami"를 하나의 argument로 봐서
// hello my name is nico, rami
// hello my name is undefined

// ---------------------
// function sayHello(nameOfPerson){
//     console.log(nameOfPerson);
// }
// sayHello("nico"); // nico
// sayHello("dal");  // dal
// sayHello("lynn"); // lynn
// ---------------------
// function sayHello(nameOfPerson, age){
//     console.log(nameOfPerson);
// }
// sayHello("nico", 20); // nico
// sayHello("dal", 15); // dal
// sayHello("lynn", 35); // lynn
// ---------------------
// function sayHello(nameOfPerson, age){
//     console.log(nameOfPerson, age);
// }
// sayHello("nico", 20); // nico 20
// sayHello("dal", 15); // dal 15
// sayHello("lynn", 35); // lynn 35
// ---------------------
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and i am " + age + "years old");
// }
// sayHello("nico", 20); // Hello my name is nico and i am 20years old
// sayHello("dal", 15); // Hello my name is dal and i am 15years old
// sayHello("lynn", 35); // Hello my name is lynn and i am 35years old


// --------------------------

// function plus(a, b){
//     console.log(a, b);
// }

// plus(); // undefined undefined
// ---------------------
// function plus(a, b){
//     console.log(a + b);
// }

// plus(); // NaN

// ---------------------
// function plus(firstNum, secNum){
//     console.log(firstNum + secNum);
// }
// function divide(firstNum, secNum){
//     console.log(firstNum / secNum);
// }
// plus(8, 60); // 68 -> firstNum = 8, secNum = 60
// divide(40, 4); // 10 -> firstNum = 40, secNum = 4

// ---------------------

// function sayHello(){} -> object 안에서는 sayHello : function(){}로 바뀐다.
// const player = {
//     name : "nico",
//     sayHello : function(){
//         console.log("hello");
//     }
// };
// console.log(player.name); // nico
// player.sayHello(); // hello

// --
const player = {
    name : "nico",
    sayHello : function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    }
};
console.log(player.name); // nico
player.sayHello("lynn"); // hello lynn nice to meet you
player.sayHello("rami"); // hello rami nice to meet you
player.sayHello("nico"); // hello nico nice to meet you
player.sayHello("frank"); // hello frank nice to meet you