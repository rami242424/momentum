// const  : 이 친구는 variable을 만들 것이니 준비해야겠군
// 1. 변수 없이 작성시
// console.log(5 + 2); // 7
// console.log(5 * 2); // 10
// console.log(5 / 2); // 2.5

// // 2. 변수로 작성시
// const a = 5;
// const b = 2;
// const myName = "rami";

// console.log(a + b); // 7
// console.log(a * b); // 10
// console.log(a / b); // 2.5
// console.log("hello " + myName); // hello rami

// const 와 let 의 차이
// const : 상수(constant) / 값이 바뀔 수 없다.
// let : when i want to create new one / 새롭게 생성할때 사용

const a = 5;
const b = 2;
let myName = "rami";

console.log(a + b); // 7
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log("hello " + myName);

// myName을 바꾸로 싶다면,
myName = "rami Oh";
console.log(myName);