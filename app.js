const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME); 
    paintGreetings(username);

} 
// 2. 중복되는 문장 함수로
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; // savedUsername은 argument에서 가져올것
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

// loginForm.addEventListener("submit", onLoginSubmit); // 이동 전
    
// 1. localStorage에 username이 있나 보기
const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername); // 아무것도 없으면 null이 출력된다.
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show the username
    loginForm.addEventListener("submit", onLoginSubmit); // 이동 후
} else {
    // greeting.classList.remove(HIDDEN_CLASSNAME);// show the greetings
    // // greeting.classList.add(innerText); // 이게 아니라 아래식.. 왜 이렇게 생각했을까?
    // greeting.innerText = `Hello ${savedUsername}`;
    paintGreetings(savedUsername);
}

// localStorage에 유저정보가 있으면 savedUsername을 받아서 인자로 넣어주고
// 유저정보가 없다면, form의 submit을 기다리고 -> loginForm.addEventListener("submit", onLoginSubmit); -> form이 submit되면 -> 인풋으로 부터 유저정보를 받고 const username = loginInput.value; -> 인풋에서 받은 user를 가진 paintingGreeting을 호출한다. paintGreetings(username);
 