const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 
const HIDDEN_CLASSNAME = "hidden"; 

function onLoginSubmit(event){
    event.preventDefault();
    // 1.유저가 이름을 제출 한 뒤에 form없애기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 2. h1추가하기
    // greeting.innerText = "Hello " + username; // 아래와 같음
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // "hidden" > HIDDEN_CLASSNAME 수정시 "" 지우는거 잊지말기!!


}

loginForm.addEventListener("submit", onLoginSubmit);

