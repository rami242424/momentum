// 4.4 유저가 이름 제출한 뒤, 입력값 hidden하기

const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const loginForm = document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault(); 
    // console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
}




loginForm.addEventListener("submit", onLoginSubmit);

 