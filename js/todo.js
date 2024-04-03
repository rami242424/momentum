const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    // console.log("i will paint " + newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    // console.log(li);
    toDoList.appendChild(li);
}


function handleToDoSubmint(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // todo input값 저장
    toDoInput.value = ""; // input 비우기
    paintToDo(newTodo); // 저장한 input값을 넣어 paintToDo 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmint);