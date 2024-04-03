// JSON.stringify() : object, array 등 모든 코드 => string 으로 만들어줌

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // span.innerText = newTodo; // array의 todo를 받을때
    span.innerText = newTodo.text; // object를 todo로 받을떄
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmint(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    // 텍스트 toDo리스트-> object로 push하기(각 todo에 고유의 id값을 주기위해서)
    // toDos.push(newTodo); // toDo리스트를 저장하는 부분(text로 저장중)
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),   // Date.now() 랜덤한 밀리초 숫자를 제공함
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmint);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}
