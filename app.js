// const loginForm = document.getElementById("login-form");
// const loginInput =loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 코드와 같음
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);

    // if (username === ""){
    //     alert("please write your name");
    // } else if (username.length > 15){
    //     alert("your name is too long");
    // } 
    // 대신 html input에서 설정가능
}

loginButton.addEventListener("click", onLoginBtnClick);