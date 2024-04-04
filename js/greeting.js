const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden"; // 중요한 정보가 아니라 대문자로 작성

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; // 유저이름 저장
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 유저이름저장
    // --- 아래 코드를 paintGreeting()함수로 만들어 사용
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
    // ---
    paintGreeting(username);
}




// localStorage.username
const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null){
    // greeting.classList.remove(HIDDEN_CLASSNAME); // 내가작성해본것
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // greeting.innerText = `Hello ${username}`; // 내가작성해본것
    // --- 아래 코드를 paintGreeting()함수로 만들어 사용
    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // ---
    paintGreeting(savedUsername);
}

function paintGreeting(username){
    greeting.innerText = `Hello, ${username}♥`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



// ------------ css하면서 추가된 부분
// function clickedInput(){
//     loginInput.placeholder = "";
// }

// loginInput.addEventListener("click", clickedInput);

