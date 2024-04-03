const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");
// console.log(toDoForm);

function handleToDoSubmint(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    console.log("저장하고" + toDoInput.value);
    toDoInput.value = "";
    console.log("삭제하고" + newTodo, "비우고" + toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmint);