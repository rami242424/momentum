const link = document.querySelector("a");
const loginForm = document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginSubmit(event){
    // const username = loginInput.value;
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막아주는 것
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    // console.log(event);
    // alert("clicked"); // 기본동작을 포함한 모든 동작들이 막혀있다가, alert에서 ok를 누르면 다시 기본동작이 실행된다.
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
 