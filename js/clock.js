// interval 매번 일어나야하는 무언가

const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000); // argument : 호출하려는 함수, 호출할 시간