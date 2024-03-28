const loginForm = document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginSubmit(event){
    // const username = loginInput.value;
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막아주는 것
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
 