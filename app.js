const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event){ // submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
    event.preventDefault(); // 브라우저의 기본 동작 막아주기
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// 미션1 form을 submit할때 입력값을 받아내는것(submit event 감지)
// 미션2 submit후 새로고침되는것 막기(윈도우 기본동작)