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
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmint(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),  
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

