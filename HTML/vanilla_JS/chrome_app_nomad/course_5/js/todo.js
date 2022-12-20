const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document 뿐만 아니라 tag로도 검색 가능.
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    const JSON_toDos = JSON.stringify(toDos);
    localStorage.setItem("todos", JSON_toDos);

}

function deleteToDo(e){
    /*
    console.log(e);
    console.log(e.target);
    console.log(this.parentNode);
    this.parentNode.remove();
    */
   const li = e.target.parentNode;
   li.remove();

}

function paintToDo(newTodo){
    const liTodo = document.createElement("li");
    const spanTodo = document.createElement("span");
    const button =document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click",deleteToDo)
    liTodo.appendChild(spanTodo);
    liTodo.appendChild(button);
    spanTodo.innerText = newTodo;
    toDoList.appendChild(liTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);