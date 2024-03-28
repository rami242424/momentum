// const loginForm = document.getElementById("login-form");
// const loginInput =loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 코드와 같음
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){
    // console.log(loginInput.value);
    // console.log("click");
    if (loginInput.value !== ""){
       console.log("hello " + loginInput.value);
    } 
}

loginButton.addEventListener("click", onLoginBtnClick);