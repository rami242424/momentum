// form은 숨기고 h1은 표시되도록 하기(h1에 표시할 텍스트가 있을 떄만 표시되도록 하기)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // 4.id값 greeting을 html에 추가해주고 찾는다.
const HIDDEN_CLASSNAME = "hidden"; // 6.중복되는 아규먼트 "hidden"값을 const로 만들어준다.

function onLoginSubmit(event){
    event.preventDefault(); // 1.기본동작은 실행되지 않도록 막는다.
    loginForm.classList.add("HIDDEN_CLASSNAME"); // 2.hidden이라는 classname을 더해줘서 form을 숨기고
    const username = loginInput.value;  // 3.유저의 이름을 변수로 저장해주고, 그 이름은 h1안에 넣어준다.
    // console.log(username);
    greeting.innerText = "Hello " + username; // 5.h1안에 greeting에 있는 텍스트를 추가하기
    greeting.classList.remove("HIDDEN_CLASSNAME");

}

loginForm.addEventListener("submit", onLoginSubmit);

