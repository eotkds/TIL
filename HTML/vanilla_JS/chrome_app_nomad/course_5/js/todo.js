const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document 뿐만 아니라 tag로도 검색 가능.
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    console.log(newTodo);



}

toDoForm.addEventListener("submit", handleToDoSubmit);