// 4.5 value를 저장하는 방법

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

    localStorage.setItem("username", username);

    greeting.innerText = "hello " + username;
    // 아래와 같은 코드
    // greeting.innerText = `hello  ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
}




loginForm.addEventListener("submit", onLoginSubmit);

 