const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    const HIDDEN_CLASSNAME = "hidden"; // 중요한 정보가 아니라 대문자로 작성
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; // 유저이름 저장
    // greeting.innerText = "Hello " + username;
    localStorage.setItem("userName", username); // 로컬스토리지에 유저이름저장
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);

}


loginForm.addEventListener("submit", onLoginSubmit);
