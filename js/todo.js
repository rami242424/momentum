const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); // 위코드와 일치
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){ // todo를 그리는 역할 담당
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){ // 자바스크립트가 방금 발생한 event를 handleToDoSubmit의 첫번째 인자로 준다
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value; // 입력한 인풋값 저장하기
    // toDoInput.value 를 입력하고 난뒤에 인풋칸에 적힌 글자들 지우기
    toDoInput.value = "";
    paintToDo(newTodo);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);