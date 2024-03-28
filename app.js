// // prompt 더이상 사용하지 x
// // - css적용할수 x
// // - 팝업을 차단하는 페이지도 있기 때문에 사용x
// // - 브라우저로 할 수 있는 가장 직접적인 방법이고, function으로 prompt라는 것을 사용할 수 있고, 자바스크립트는 대답할때까지 멈춤
// const age = prompt("how old are you?");
// // console.log(age);

// // 사용자가 무엇을 입력하더라고 그걸 num으로 바꿔보기
// // console.log(typeof age); // 변수의 type을 보는 방법

// // type 바꿔보기 "15" => 15 
// // console.log(typeof "15", parseInt("15")); // string, 15
// // 즉 string => number 바꾸기 위해 parseInt(""); 사용

// console.log(age, parseInt(age)); // abc를 입력시 abc, NaN 으로 나옴
// console.log(age, parseInt(age)); // 20(string) 20(number) => 두개 색이 다르게 출력된다(타입이 다르다)
// console.log(typeof age, typeof parseInt(age)); // string number

// ---------

const age = parseInt(prompt("how old are you?"));
console.log(age); 
// 20(입력한 것) => 출력 20
// abc(입력한 것) => 출력 NaN
