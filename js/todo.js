// JSON.stringify() : object, array 등 모든 코드 => string 으로 만들어줌

const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");
// const toDos = []; 새롭게 저장된 리스트들도 toDos에 저장하기위해 아래코드로변경
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    // localStorage.setItem("todos", toDos); // toDos 들이 배열로 출력됨
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열=>string으로 변경
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


// 아래 shortcut으로 작성도 가능
// function sayHello(item){
//     console.log("This is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // array지만 string

// JSON.parse로 진짜 array(이용가능한)로 만들기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos); // 이용가능한 array => 각각의 함수도 적용 가능
    // parsedToDos.forEach(sayHello); // forEach array의 각 item에 대해 함수를 실행 (아래 코드로 shortcut도 가능)
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item)); (결국 아래코드처럼 paintToDo 함수를 실행하면 됨)

    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo); // 결국  작성한 todo리스트들에 함수를 쓰고싶은거니까.


    // -----------------------------여기까지의 함수로 로컬스토리지에 저장된 item값들이 화면에 출력된 상태를 유지함 but 새로운 todo list를 작성하면 기존에 작성되어 로컬스토리지에 저장되어있던 item들은 사라지고, 새로운 list들만 업데이트 된다. --> const toDos = []; 로 시작되기 때문!!





}
