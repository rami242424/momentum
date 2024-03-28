const age = parseInt(prompt("how old are you?"));
// console.log(isNaN(age)); // 숫자가 아니면 true, 숫자면 false => 
// 15 입력, false 출력 => 입력된게 숫자다
// aaa 입력, true 출력 => 입력된게 숫자가 아니다

// if (condition) { // condition 은 boolean 이어야한다 즉, true 또는 false 중 1
//     // condition === true 일때 실행할 코드
// } else {
//     // condition === false 일때 실행할 코드
// }
// ---

if (isNaN(age)) {
    // isNaN(age) === true 일때 실행 될 코드, 즉 입력된게 숫자가 아닐때 실행됨
    alert("plz write a number");    
} else {
    // isNaN(age) === false 일때 실행 될 코드, 즉 입력된게 숫자일때 실행됨
    alert("your age is " + age);
}