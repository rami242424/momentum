const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    // console.log("지웠다"); // 어떤 버튼이 눌렸는지 모른다.
    // console.log(event.composedPath()); // path 볼수 있는 코드
    // console.log(event.target.parentElement);
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
    paintToDo(newTodo); // 저장한 input값을 넣어 paintToDo 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmint);
