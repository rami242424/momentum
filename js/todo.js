const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){ // toDos []의 내용을 로컬스토리지에 넣기 위해 만든 함수
    // localStorage.setItem("todos", toDos);
    localStorage.setItem("todos", JSON.stringify(toDos)); // string으로 바꿔줌
}

function deleteToDo(event){
    // console.log(event.target.parentElement);
    const li = event.target.parentElement; // 삭제하고 싶은 li
    li.remove();
}

function paintToDo(newTodo){ // todo를 그리는 역할 담당
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){ 
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo); // 이걸 로컬스토리지에 담고싶다 but 배열은 불가하고 텍스트만 저장할 수 있다.
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);