const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event){ 
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    // console.dir(event);
    // alert("clicked"); // alert이 함수의 기본동작을 일시적으로 막는다-> alert의 ok를 우르면 다시 기본동작이 실행된다.
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);