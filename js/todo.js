const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; // const > let으로 바꿔주기

function saveToDos(){ // toDos []의 내용을 로컬스토리지에 넣기 위해 만든 함수
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // string으로 바꿔줌
}

function deleteToDo(event){
    // console.log(event.target.parentElement);
    const li = event.target.parentElement; // 삭제하고 싶은 li(버튼의 부모요소선택)
    li.remove(); // 선택한 li(버튼의 부모) 지우기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){ // todo를 그리는 역할 담당
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;

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

    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }

    toDos.push(newTodoObj);
    // toDos.push(newTodo); // 이걸 로컬스토리지에 담고싶다 but 배열은 불가하고 텍스트만 저장할 수 있다.(데이터베이스로 매번 사용자가 적어둔 text를 push함)
    // paintToDo(newTodo);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    // console.log("hello");
    // console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // null : 로컬스토리지에 아무것도 없기때문에
// console.log(savedToDos);
if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    // console.log(parsedTodos);
    parsedTodos.forEach(sayHello);

    //function sayHello(item) 함수 대신 아래 코드 한줄만 사용가능(서로같음) : 화살표함수
    // parsedTodos.forEach((item) => console.log("this is the turn of", item));
}
