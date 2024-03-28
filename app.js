// 4.5 value를 저장하는 방법

const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const loginForm = document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); 
    // console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    // greeting.innerText = "hello " + username;
    // 아래와 같은 코드
    // greeting.innerText = `hello  ${username}`;

    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
    paintGreetings(username);
}

// 중복 없애기
function paintGreetings(username, ){
    greeting.innerText = "hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}




const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) { // localstorage에 유저정보가 없을때,
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // greeting.innerText = "hello " + savedUsername;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}