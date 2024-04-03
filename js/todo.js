// JSON.stringify() : object, array 등 모든 코드 => string 으로 만들어줌

const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos(){
    // localStorage.setItem("todos", toDos); // toDos 들이 배열로 출력됨
    localStorage.setItem("todos", JSON.stringify(toDos)); // 배열=>string으로 변경
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}


function handleToDoSubmint(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // todo input값 저장
    toDoInput.value = ""; // input 비우기
    toDos.push(newTodo);
    paintToDo(newTodo); // 저장한 input값을 넣어 paintToDo 함수 호출
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmint);
