const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input"); // 위 코드와 동일
const toDoList = document.getElementById("todo-list");


// ---
// JSON.stringify() : object, array 등 모든 코드 => string 으로 만들어줌
// ----------------------------------

//방법1
function sayHello(item){
    console.log("This is the turn of ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // array지만 string

// JSON.parse로 진짜 array(이용가능한)로 만들기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos); // 이용가능한 array => 각각의 함수도 적용 가능
    parsedToDos.forEach(sayHello); // forEach array의 각 item에 대해 함수를 실행

}

//방법2
