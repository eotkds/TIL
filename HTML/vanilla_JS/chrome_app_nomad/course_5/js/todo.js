const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document 뿐만 아니라 tag로도 검색 가능.
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const liTodo = document.createElement("li");
    const spanTodo = document.createElement("span");
    liTodo.appendChild(spanTodo);
    spanTodo.innerText = newTodo;
    toDoList.appendChild(liTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);